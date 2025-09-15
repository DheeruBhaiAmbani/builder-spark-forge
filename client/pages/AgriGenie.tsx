export default function AgriGenie() {
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-extrabold tracking-tight mb-2">AgriGenie Advisor</h1>
      <p className="text-foreground/70">Ask about crops, prices, or government schemes. RAG-backed, coming soon.</p>
      <div className="mt-8 max-w-2xl rounded-xl border border-border/50 bg-card p-6">
        <div className="space-y-4">
          <div className="flex justify-end">
            <div className="max-w-[80%] rounded-lg bg-primary/15 px-4 py-2 text-sm">What is the price of onions in Bihar?</div>
          </div>
          <div className="flex justify-start">
            <div className="max-w-[80%] rounded-lg bg-secondary px-4 py-2 text-sm">Based on current data, onion prices in Bihar range from ₹30-35/kg. For precise rates, check local mandi updates.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
