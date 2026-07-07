import { useQuery } from "@tanstack/react-query";
import { profile } from "@/data/profile";

export interface GitHubRepo {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  pushed_at: string;
  fork: boolean;
}

export interface GitHubStats {
  publicRepos: number;
  followers: number;
  languagesCount: number;
  avatarUrl: string;
  topLanguages: { name: string; count: number; percent: number }[];
  recentRepos: GitHubRepo[];
}

async function fetchGitHubStats(): Promise<GitHubStats> {
  const [userRes, reposRes] = await Promise.all([
    fetch(`https://api.github.com/users/${profile.githubUsername}`),
    fetch(`https://api.github.com/users/${profile.githubUsername}/repos?per_page=100&sort=pushed`),
  ]);
  if (!userRes.ok || !reposRes.ok) throw new Error("GitHub API unavailable");

  const user = await userRes.json();
  const repos: GitHubRepo[] = await reposRes.json();

  const own = repos.filter((r) => !r.fork);
  const langCounts = new Map<string, number>();
  for (const repo of own) {
    if (repo.language) langCounts.set(repo.language, (langCounts.get(repo.language) ?? 0) + 1);
  }
  const totalWithLang = [...langCounts.values()].reduce((a, b) => a + b, 0) || 1;
  const topLanguages = [...langCounts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([name, count]) => ({ name, count, percent: Math.round((count / totalWithLang) * 100) }));

  return {
    publicRepos: user.public_repos,
    followers: user.followers,
    languagesCount: langCounts.size,
    avatarUrl: user.avatar_url,
    topLanguages,
    recentRepos: own.slice(0, 6),
  };
}

export function useGitHubStats() {
  return useQuery({
    queryKey: ["github-stats"],
    queryFn: fetchGitHubStats,
    staleTime: 1000 * 60 * 30,
    retry: 1,
  });
}
