import { useTranslation } from "@/i18n/i18n";

export default function SiteFooter() {
  const { t } = useTranslation();
  return (
    <footer className="border-t border-border/40">
      <div className="container py-8 text-sm text-foreground/70 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} {t("brand")}. {t("footer.copyright")}</p>
        <div className="flex items-center gap-4">
          <a className="hover:text-primary" href="#how-it-works">{t("footer.how")}</a>
          <a className="hover:text-primary" href="#features">{t("footer.features")}</a>
          <a className="hover:text-primary" href="#contact">{t("footer.contact")}</a>
        </div>
      </div>
    </footer>
  );
}
