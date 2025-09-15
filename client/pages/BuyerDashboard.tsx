import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function BuyerDashboard() {
  return (
    <section className="container py-12">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Buyer Dashboard</h1>
          <p className="text-foreground/70">Demo of deal groups available for negotiation.</p>
        </div>
        <Button asChild variant="secondary">
          <Link to="/">Back to Home</Link>
        </Button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <article className="rounded-xl border border-border/50 bg-card p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Group #RICE-Large-20250915</h3>
            <span className="text-xs rounded-full bg-primary/15 text-primary px-2 py-1">Formed</span>
          </div>
          <ul className="text-sm space-y-1 text-foreground/80">
            <li><span className="text-foreground/60">Crop:</span> Rice</li>
            <li><span className="text-foreground/60">Grade:</span> Large</li>
            <li><span className="text-foreground/60">Total Quantity:</span> 80,245 kg</li>
            <li><span className="text-foreground/60">Regions:</span> East Godavari (AP), Bihar</li>
            <li><span className="text-foreground/60">Created:</span> 15 Sep 2025</li>
          </ul>
          <div className="mt-6 flex items-center justify-between">
            <Button>Start Negotiation</Button>
            <span className="text-xs text-foreground/60">AI-backed</span>
          </div>
        </article>

        <article className="rounded-xl border border-border/50 bg-card p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Group #WHEAT-Medium-20250910</h3>
            <span className="text-xs rounded-full bg-secondary text-secondary-foreground px-2 py-1">Formed</span>
          </div>
          <ul className="text-sm space-y-1 text-foreground/80">
            <li><span className="text-foreground/60">Crop:</span> Wheat</li>
            <li><span className="text-foreground/60">Grade:</span> Medium</li>
            <li><span className="text-foreground/60">Total Quantity:</span> 42,500 kg</li>
            <li><span className="text-foreground/60">Regions:</span> Punjab, Haryana</li>
            <li><span className="text-foreground/60">Created:</span> 10 Sep 2025</li>
          </ul>
          <div className="mt-6 flex items-center justify-between">
            <Button variant="outline">View Details</Button>
            <span className="text-xs text-foreground/60">AI-backed</span>
          </div>
        </article>
      </div>
    </section>
  );
}
