import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/i18n/i18n";

export default function BuyerDashboard() {
  const { t } = useTranslation();
  return (
    <section className="container py-12">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">
            {t("buyer.title")}
          </h1>
          <p className="text-foreground/70">{t("buyer.subtitle")}</p>
        </div>
        <Button asChild variant="secondary">
          <Link to="/">{t("actions.backHome")}</Link>
        </Button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <article className="rounded-xl border border-border/50 bg-card p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Group #RICE-Large-20250915</h3>
            <span className="text-xs rounded-full bg-primary/15 text-primary px-2 py-1">
              {t("buyer.formed")}
            </span>
          </div>
          <ul className="text-sm space-y-1 text-foreground/80">
            <li>
              <span className="text-foreground/60">
                {t("home.features.crop")}:
              </span>{" "}
              Rice
            </li>
            <li>
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
              East Godavari (AP), Bihar
            </li>
            <li>
              <span className="text-foreground/60">Created:</span> 15 Sep 2025
            </li>
          </ul>
          <div className="mt-6 flex items-center justify-between">
            <Button>{t("actions.startNegotiation")}</Button>
            <span className="text-xs text-foreground/60">
              {t("buyer.aiBacked")}
            </span>
          </div>
        </article>

        <article className="rounded-xl border border-border/50 bg-card p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Group #WHEAT-Medium-20250910</h3>
            <span className="text-xs rounded-full bg-secondary text-secondary-foreground px-2 py-1">
              {t("buyer.formed")}
            </span>
          </div>
          <ul className="text-sm space-y-1 text-foreground/80">
            <li>
              <span className="text-foreground/60">
                {t("home.features.crop")}:
              </span>{" "}
              Wheat
            </li>
            <li>
              <span className="text-foreground/60">
                {t("home.features.grade")}:
              </span>{" "}
              Medium
            </li>
            <li>
              <span className="text-foreground/60">
                {t("home.features.totalQty")}:
              </span>{" "}
              42,500 kg
            </li>
            <li>
              <span className="text-foreground/60">
                {t("home.features.regions")}:
              </span>{" "}
              Punjab, Haryana
            </li>
            <li>
              <span className="text-foreground/60">Created:</span> 10 Sep 2025
            </li>
          </ul>
          <div className="mt-6 flex items-center justify-between">
            <Button variant="outline">{t("actions.viewDetails")}</Button>
            <span className="text-xs text-foreground/60">
              {t("buyer.aiBacked")}
            </span>
          </div>
        </article>
      </div>
    </section>
  );
}
