import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Index() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,196,180,0.20)_0%,rgba(0,0,0,0)_50%)]" />
        <div className="container py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 text-primary px-3 py-1 text-xs font-semibold ring-1 ring-primary/20">AI-powered • Transparent • Fair</span>
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
              Unite. Sell. Thrive.
            </h1>
            <p className="mt-4 text-lg text-foreground/70">
              AgriConnect brings farmers together into AI-formed deal groups, giving collective bargaining power, real-time price analysis, and optimized logistics.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/register/farmer">Register as Farmer</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link to="/register/buyer">Register as Buyer</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/buyer">View Buyer Dashboard Demo</Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-3 text-sm text-foreground/60">
              <div className="inline-flex items-center gap-2 rounded-md bg-[hsl(var(--warning))]/15 text-[hsl(var(--warning))] px-2 py-1">AI Recommendation: REJECT for lowball offers</div>
              <span className="hidden sm:inline">•</span>
              <span>Market-aware price guidance</span>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="container py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">How it works</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <CardStep index={1} title="Register" desc="Farmers and buyers create verified accounts with pincode/location." />
          <CardStep index={2} title="List & Group" desc="Farmers list harvests. AI groups same crop/grade across regions." />
          <CardStep index={3} title="Negotiate" desc="Buyers submit offers. AI analyzes vs market, advises farmers via polls." />
          <CardStep index={4} title="Collect & Close" desc="AI suggests central hub. Confirm location, finalize deal, arrange pickup." />
        </div>
      </section>

      {/* Highlight card */}
      <section id="features" className="container pb-20">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="rounded-2xl border border-border/50 bg-card p-8 shadow-xl">
            <h3 className="text-xl font-bold">Deal Group Snapshot</h3>
            <ul className="mt-4 space-y-2 text-sm text-foreground/80">
              <li><span className="text-foreground/60">Crop:</span> Rice • <span className="text-foreground/60">Grade:</span> Large</li>
              <li><span className="text-foreground/60">Total Quantity:</span> 80,245 kg</li>
              <li><span className="text-foreground/60">Regions:</span> Andhra Pradesh, Bihar</li>
              <li className="mt-2 flex items-center gap-2"><span className="text-foreground/60">AI Analysis:</span><span className="rounded-md bg-[hsl(var(--warning))]/15 text-[hsl(var(--warning))] px-2 py-1 text-xs">Buyer offer ₹10/kg is 78% below market (₹45/kg)</span></li>
            </ul>
            <div className="mt-6 flex gap-3">
              <Button asChild>
                <Link to="/buyer">Start Negotiation</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/agrigenie">Ask AgriGenie</Link>
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border border-border/50 bg-card p-8">
            <h3 className="text-xl font-bold">Why AgriConnect</h3>
            <ul className="mt-4 grid gap-3 text-sm text-foreground/80">
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-primary" /> Collective bargaining for 20–30% better pricing.</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-accent" /> AI transparency: market rate, fair price, and recommendations.</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-[hsl(var(--warning))]" /> Poll-based decisions for offers and logistics.</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-foreground/50" /> Optimized collection hubs to reduce transport costs.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

function CardStep({ index, title, desc }: { index: number; title: string; desc: string }) {
  return (
    <div className="relative rounded-xl border border-border/50 bg-card p-6">
      <div className="absolute -top-3 -left-3 h-10 w-10 rounded-lg bg-primary/20 grid place-items-center text-primary font-bold">{index}</div>
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-foreground/70">{desc}</p>
    </div>
  );
}
