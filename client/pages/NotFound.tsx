import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "@/i18n/i18n";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold mb-3">404</h1>
        <p className="text-foreground/70 mb-6">{t("notFound.oops")}</p>
        <a href="/" className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-4 py-2">
          {t("notFound.home")}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
