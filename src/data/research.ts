export const research = {
  headline: "Dynamic Load Balancing in Multi-Cloud Environments",
  status: "IEEE-format paper with full reference implementation",
  summary:
    "An adaptive load-balancing algorithm for multi-cloud deployments that weighs live node utilization against provider cost, redistributing workloads to minimize both response time and spend. The work includes a full Python implementation, statistical analysis, and performance benchmarks against static and round-robin baselines.",
  contributions: [
    "Cost-aware scheduling model spanning heterogeneous cloud providers",
    "Adaptive rebalancing driven by live utilization telemetry",
    "Benchmark suite with statistical significance testing",
  ],
  repo: "https://github.com/namrathar-18/research-paper",
  interests: [
    "Distributed systems & consistency models",
    "Real-time communication at scale",
    "Cloud cost optimization",
    "Retrieval-augmented generation systems",
  ],
  futureGoals:
    "Extending the load-balancing model with reinforcement learning for predictive scaling, and formalizing the results for submission to a peer-reviewed systems venue.",
  publications: [
    {
      title: "Dynamic Load Balancing for Cost-Aware Multi-Cloud Systems",
      venue: "Manuscript in preparation",
      year: "2026",
    },
  ],
} as const;
