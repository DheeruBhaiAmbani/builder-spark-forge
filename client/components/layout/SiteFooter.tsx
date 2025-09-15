export default function SiteFooter() {
  return (
    <footer className="border-t border-border/40">
      <div className="container py-8 text-sm text-foreground/70 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} AgriConnect. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a className="hover:text-primary" href="#how-it-works">How it works</a>
          <a className="hover:text-primary" href="#features">Features</a>
          <a className="hover:text-primary" href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
