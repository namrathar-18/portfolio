import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <p className="font-display text-8xl font-bold text-accent">404</p>
      <h1 className="text-shine mt-4 text-2xl font-semibold">This page doesn't exist</h1>
      <p className="mt-2 max-w-sm text-sm text-muted-foreground">
        The link may be broken, or the page may have moved.
      </p>
      <a
        href="/"
        className="glow-accent-sm mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-soft"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Back to home
      </a>
    </main>
  );
};

export default NotFound;
