import { useTranslation } from "@/i18n/i18n";

export default function LanguageSwitcher() {
  const { lang, setLang } = useTranslation();
  return (
    <select
      aria-label="Select language"
      className="h-9 rounded-md bg-secondary/60 px-2 text-sm outline-none ring-2 ring-transparent focus:ring-primary/40"
      value={lang}
      onChange={(e) => setLang(e.target.value as any)}
    >
      <option value="en">English</option>
      <option value="hi">हिन्दी</option>
      <option value="ml">മലയാളം</option>
    </select>
  );
}
