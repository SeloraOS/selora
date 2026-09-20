import { Boxes, ShoppingCart, Wallet, UsersRound } from "lucide-react";

const stats = [
  { label: "Inventory", value: "12,904 units", icon: Boxes },
  { label: "Procurement", value: "38 orders", icon: ShoppingCart },
  { label: "Finance", value: "$2.1M tracked", icon: Wallet },
  { label: "HR", value: "142 employees", icon: UsersRound },
];

export default function ERPShowcase() {
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
