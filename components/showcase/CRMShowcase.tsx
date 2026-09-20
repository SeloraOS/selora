import { GitBranch, Users2, DollarSign, TrendingUp } from "lucide-react";

const stats = [
  { label: "Pipeline", value: "$412K", icon: GitBranch },
  { label: "Leads", value: "214", icon: Users2 },
  { label: "Customers", value: "1,048", icon: TrendingUp },
  { label: "Revenue", value: "$128.4K", icon: DollarSign },
];

export default function CRMShowcase() {
  return (
    <div className="grid grid-cols-2 gap-4 p-6 sm:grid-cols-4">
      {stats.map(({ label, value, icon: Icon }) => (
        <div key={label} className="rounded-xl border border-border bg-background p-4">
          <Icon className="h-4 w-4 text-accent" />
          <p className="mt-3 text-lg font-bold text-foreground">{value}</p>
          <p className="text-xs text-muted">{label}</p>
        </div>
      ))}
    </div>
  );
}
