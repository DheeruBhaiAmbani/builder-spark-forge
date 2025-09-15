import { Button } from "@/components/ui/button";

export default function RegisterFarmer() {
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-extrabold tracking-tight mb-2">Farmer Registration</h1>
      <p className="text-foreground/70 mb-8">Create your account to list harvests and join AI-formed deal groups.</p>

      <form className="grid gap-4 max-w-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input className="h-11 rounded-md bg-secondary/60 px-4 outline-none ring-2 ring-transparent focus:ring-primary/40 placeholder:text-foreground/50" placeholder="Full Name" />
          <input className="h-11 rounded-md bg-secondary/60 px-4 outline-none ring-2 ring-transparent focus:ring-primary/40 placeholder:text-foreground/50" placeholder="Username" />
          <input type="password" className="h-11 rounded-md bg-secondary/60 px-4 outline-none ring-2 ring-transparent focus:ring-primary/40 placeholder:text-foreground/50" placeholder="Password" />
          <input className="h-11 rounded-md bg-secondary/60 px-4 outline-none ring-2 ring-transparent focus:ring-primary/40 placeholder:text-foreground/50" placeholder="Phone" />
          <div className="sm:col-span-2">
            <input className="h-11 w-full rounded-md bg-secondary/60 px-4 outline-none ring-2 ring-transparent focus:ring-primary/40 placeholder:text-foreground/50" placeholder="Pincode (auto-detects location)" />
            <div className="mt-2 inline-flex items-center gap-2 rounded-md bg-accent/15 text-accent px-2 py-1 text-xs">East Godavari, Andhra Pradesh</div>
          </div>
        </div>
        <div className="flex gap-3 pt-2">
          <Button type="button">Create Farmer Account</Button>
          <Button type="button" variant="ghost">Cancel</Button>
        </div>
      </form>
    </section>
  );
}
