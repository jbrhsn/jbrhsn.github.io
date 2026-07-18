import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/portfolio/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jabirhusain KP — Data × AI Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Jabirhusain KP — Data & AI Engineer at IBM (Heineken). Databricks lakehouse, FinOps, LangGraph multi-agent systems.",
      },
    ],
  }),
  component: Portfolio,
});
