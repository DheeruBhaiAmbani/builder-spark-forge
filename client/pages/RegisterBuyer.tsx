import { Button } from "@/components/ui/button";

export default function RegisterBuyer() {
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-extrabold tracking-tight mb-2">Buyer Registration</h1>
      <p className="text-foreground/70 mb-8">Access bulk produce from verified farmer groups.</p>

      <form className="grid gap-4 max-w-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input className="h-11 rounded-md bg-secondary/60 px-4 outline-none ring-2 ring-transparent focus:ring-primary/40 placeholder:text-foreground/50" placeholder="Business Name" />
          <input className="h-11 rounded-md bg-secondary/60 px-4 outline-none ring-2 ring-transparent focus:ring-primary/40 placeholder:text-foreground/50" placeholder="Username" />
          <input type="password" className="h-11 rounded-md bg-secondary/60 px-4 outline-none ring-2 ring-transparent focus:ring-primary/40 placeholder:text-foreground/50" placeholder="Password" />
          <input className="h-11 rounded-md bg-secondary/60 px-4 outline-none ring-2 ring-transparent focus:ring-primary/40 placeholder:text-foreground/50" placeholder="Phone" />
          <input className="h-11 rounded-md bg-secondary/60 px-4 outline-none ring-2 ring-transparent focus:ring-primary/40 placeholder:text-foreground/50" placeholder="Business Type (e.g., Wholesaler)" />
          <input className="h-11 rounded-md bg-secondary/60 px-4 outline-none ring-2 ring-transparent focus:ring-primary/40 placeholder:text-foreground/50" placeholder="GST Number" />
          <div className="sm:col-span-2">
            <input className="h-11 w-full rounded-md bg-secondary/60 px-4 outline-none ring-2 ring-transparent focus:ring-primary/40 placeholder:text-foreground/50" placeholder="Pincode (auto-detects location)" />
            <div className="mt-2 inline-flex items-center gap-2 rounded-md bg-accent/15 text-accent px-2 py-1 text-xs">Mumbai, Maharashtra</div>
          </div>
        </div>
        <div className="flex gap-3 pt-2">
          <Button type="button">Create Buyer Account</Button>
          <Button type="button" variant="ghost">Cancel</Button>
        </div>
      </form>
    </section>
  );
}
