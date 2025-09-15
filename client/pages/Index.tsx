import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/i18n/i18n";

export default function Index() {
  const { t } = useTranslation();
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,196,180,0.20)_0%,rgba(0,0,0,0)_50%)]" />
        <div className="container py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 text-primary px-3 py-1 text-xs font-semibold ring-1 ring-primary/20">
              {t("home.hero.badge")}
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
              {t("home.hero.title")}
            </h1>
            <p className="mt-4 text-lg text-foreground/70">
              {t("home.hero.subtitle")}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/register/farmer">{t("home.hero.ctaFarmer")}</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link to="/register/buyer">{t("home.hero.ctaBuyer")}</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/buyer">{t("home.hero.ctaBuyerDemo")}</Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-3 text-sm text-foreground/60">
              <div className="inline-flex items-center gap-2 rounded-md bg-[hsl(var(--warning))]/15 text-[hsl(var(--warning))] px-2 py-1">
                {t("home.hero.recLowball")}
              </div>
              <span className="hidden sm:inline">•</span>
              <span>{t("home.hero.marketAware")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="container py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          {t("home.how.title")}
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <CardStep
            index={1}
            title={t("home.how.step1Title")}
            desc={t("home.how.step1Desc")}
          />
          <CardStep
            index={2}
            title={t("home.how.step2Title")}
            desc={t("home.how.step2Desc")}
          />
          <CardStep
            index={3}
            title={t("home.how.step3Title")}
            desc={t("home.how.step3Desc")}
          />
          <CardStep
            index={4}
            title={t("home.how.step4Title")}
            desc={t("home.how.step4Desc")}
          />
        </div>
      </section>

      {/* Highlight card */}
      <section id="features" className="container pb-20">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="rounded-2xl border border-border/50 bg-card p-8 shadow-xl">
            <h3 className="text-xl font-bold">{t("home.features.snapshot")}</h3>
            <ul className="mt-4 space-y-2 text-sm text-foreground/80">
              <li>
                <span className="text-foreground/60">
                  {t("home.features.crop")}:
                </span>{" "}
                Rice •{" "}
                <span className="text-foreground/60">
                  {t("home.features.grade")}:
                </span>{" "}
                Large
              </li>
              <li>
                <span className="text-foreground/60">
                  {t("home.features.totalQty")}:
                </span>{" "}
                80,245 kg
              </li>
              <li>
                <span className="text-foreground/60">
                  {t("home.features.regions")}:
                </span>{" "}
                Andhra Pradesh, Bihar
              </li>
              <li className="mt-2 flex items-center gap-2">
                <span className="text-foreground/60">
                  {t("home.features.aiAnalysis")}:
                </span>
                <span className="rounded-md bg-[hsl(var(--warning))]/15 text-[hsl(var(--warning))] px-2 py-1 text-xs">
                  {t("home.features.lowOffer")}
                </span>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              <Button asChild>
                <Link to="/buyer">{t("actions.startNegotiation")}</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/agrigenie">{t("actions.askAgrigenie")}</Link>
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border border-border/50 bg-card p-8">
            <h3 className="text-xl font-bold">{t("home.features.why")}</h3>
            <ul className="mt-4 grid gap-3 text-sm text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary" />{" "}
                {t("home.features.bullet1")}
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />{" "}
                {t("home.features.bullet2")}
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[hsl(var(--warning))]" />{" "}
                {t("home.features.bullet3")}
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-foreground/50" />{" "}
                {t("home.features.bullet4")}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

function CardStep({
  index,
  title,
  desc,
}: {
  index: number;
  title: string;
  desc: string;
}) {
  return (
    <div className="relative rounded-xl border border-border/50 bg-card p-6">
      <div className="absolute -top-3 -left-3 h-10 w-10 rounded-lg bg-primary/20 grid place-items-center text-primary font-bold">
        {index}
      </div>
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-foreground/70">{desc}</p>
    </div>
  );
}
