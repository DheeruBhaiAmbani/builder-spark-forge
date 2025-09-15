import { useTranslation } from "@/i18n/i18n";

export default function AgriGenie() {
  const { t } = useTranslation();
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-extrabold tracking-tight mb-2">{t("agrigenie.title")}</h1>
      <p className="text-foreground/70">{t("agrigenie.subtitle")}</p>
      <div className="mt-8 max-w-2xl rounded-xl border border-border/50 bg-card p-6">
        <div className="space-y-4">
          <div className="flex justify-end">
            <div className="max-w-[80%] rounded-lg bg-primary/15 px-4 py-2 text-sm">{t("agrigenie.sampleQ")}</div>
          </div>
          <div className="flex justify-start">
            <div className="max-w-[80%] rounded-lg bg-secondary px-4 py-2 text-sm">{t("agrigenie.sampleA")}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
