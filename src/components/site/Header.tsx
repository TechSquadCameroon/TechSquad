import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { BrandLogo } from "./BrandLogo";
import { usePreferences, useT } from "@/lib/preferences";

const links = [
  { to: "/", label: "home" },
  { to: "/about", label: "about" },
  { to: "/services", label: "services" },
  { to: "/projects", label: "projects" },
  { to: "/members", label: "team" },
  { to: "/contact", label: "contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = usePreferences();
  const t = useT();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={cn(
            "ml-12 flex items-center justify-between rounded-full px-4 py-2 transition-all duration-500 sm:ml-14",
            scrolled ? "glass shadow-elegant" : "bg-transparent",
          )}
        >
          <BrandLogo />

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="group relative rounded-full px-4 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-brand-navy data-[status=active]:text-brand-navy"
                activeOptions={{ exact: l.to === "/" }}
              >
                <span className="relative z-10">{t(l.label)}</span>
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-brand-sky transition-transform duration-300 group-hover:scale-x-100 group-data-[status=active]:scale-x-100" />
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              aria-label={t("language")}
              onClick={() => setLanguage(language === "en" ? "fr" : "en")}
              className="rounded-full border border-brand-blue/20 bg-white/65 px-3 py-2 text-xs font-black text-brand-navy shadow-glass transition-colors hover:border-brand-sky hover:text-brand-blue"
            >
              {language === "en" ? "FR" : "EN"}
            </button>
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-brand-blue px-5 py-2 text-sm font-semibold text-white shadow-elegant transition-transform hover:scale-105 hover:bg-brand-sky"
            >
              <span>{t("startProject")}</span>
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                -&gt;
              </span>
            </Link>
          </div>

          <button
            type="button"
            aria-label={t("toggleMenu")}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full glass md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div id="mobile-navigation" className="glass mt-2 rounded-3xl p-4 shadow-elegant md:hidden">
            <nav className="flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted"
                  activeProps={{ className: "bg-muted text-foreground" }}
                >
                  {t(l.label)}
                </Link>
              ))}
              <button
                type="button"
                onClick={() => setLanguage(language === "en" ? "fr" : "en")}
                className="mt-2 rounded-full border border-brand-blue/20 px-5 py-3 text-center text-sm font-bold text-brand-navy"
              >
                {language === "en" ? t("languageFrench") : t("languageEnglish")}
              </button>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-brand-blue px-5 py-3 text-center text-sm font-semibold text-white shadow-elegant"
              >
                {t("startProject")}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
