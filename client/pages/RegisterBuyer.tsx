import { Button } from "@/components/ui/button";
import { useTranslation } from "@/i18n/i18n";

export default function RegisterBuyer() {
  const { t } = useTranslation();
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-extrabold tracking-tight mb-2">
        {t("register.buyer.title")}
      </h1>
      <p className="text-foreground/70 mb-8">{t("register.buyer.subtitle")}</p>

      <form className="grid gap-4 max-w-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            className="h-11 rounded-md bg-secondary/60 px-4 outline-none ring-2 ring-transparent focus:ring-primary/40 placeholder:text-foreground/50"
            placeholder={t("register.buyer.businessName")}
          />
          <input
            className="h-11 rounded-md bg-secondary/60 px-4 outline-none ring-2 ring-transparent focus:ring-primary/40 placeholder:text-foreground/50"
            placeholder={t("register.buyer.username")}
          />
          <input
            type="password"
            className="h-11 rounded-md bg-secondary/60 px-4 outline-none ring-2 ring-transparent focus:ring-primary/40 placeholder:text-foreground/50"
            placeholder={t("register.buyer.password")}
          />
          <input
            className="h-11 rounded-md bg-secondary/60 px-4 outline-none ring-2 ring-transparent focus:ring-primary/40 placeholder:text-foreground/50"
            placeholder={t("register.buyer.phone")}
          />
          <input
            className="h-11 rounded-md bg-secondary/60 px-4 outline-none ring-2 ring-transparent focus:ring-primary/40 placeholder:text-foreground/50"
            placeholder={t("register.buyer.businessType")}
          />
          <input
            className="h-11 rounded-md bg-secondary/60 px-4 outline:none ring-2 ring-transparent focus:ring-primary/40 placeholder:text-foreground/50"
            placeholder={t("register.buyer.gst")}
          />
          <div className="sm:col-span-2">
            <input
              className="h-11 w-full rounded-md bg-secondary/60 px-4 outline-none ring-2 ring-transparent focus:ring-primary/40 placeholder:text-foreground/50"
              placeholder={t("register.buyer.pincode")}
            />
            <div className="mt-2 inline-flex items-center gap-2 rounded-md bg-accent/15 text-accent px-2 py-1 text-xs">
              {t("register.buyer.locationHint")}
            </div>
          </div>
        </div>
        <div className="flex gap-3 pt-2">
          <Button type="button">{t("register.buyer.submit")}</Button>
          <Button type="button" variant="ghost">
            {t("actions.cancel")}
          </Button>
        </div>
      </form>
    </section>
  );
}
