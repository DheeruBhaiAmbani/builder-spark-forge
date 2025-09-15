import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function SiteHeader() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/70 bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-primary/20 grid place-items-center">
            <span className="text-primary text-lg font-black">A</span>
          </div>
          <span className="font-extrabold tracking-tight text-lg">AgriConnect</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLink
            to="/"
            className={cn(
              "transition-colors hover:text-primary",
              isActive("/") ? "text-primary" : "text-foreground/80",
            )}
          >
            Home
          </NavLink>
          <NavLink
            to="/buyer"
            className={({ isActive }) =>
              cn(
                "transition-colors hover:text-primary",
                isActive ? "text-primary" : "text-foreground/80",
              )
            }
          >
            Buyer
          </NavLink>
          <NavLink
            to="/agrigenie"
            className={({ isActive }) =>
              cn(
                "transition-colors hover:text-primary",
                isActive ? "text-primary" : "text-foreground/80",
              )
            }
          >
            AgriGenie
          </NavLink>
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" className="hidden sm:inline-flex">
            <Link to="/register/farmer">Register Farmer</Link>
          </Button>
          <Button asChild>
            <Link to="/register/buyer">Register Buyer</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
