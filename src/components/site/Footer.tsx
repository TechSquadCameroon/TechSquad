import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Facebook, Linkedin, Mail } from "lucide-react";
import footerLogo from "../../../images/logo images/TechSquad Cameroon Logo.png";
import { useT } from "@/lib/preferences";

const socials = [
  { icon: Mail, href: "mailto:techsquadcameroon@gmail.com", label: "Gmail" },
  { icon: Facebook, href: "https://www.facebook.com/techsquadcameroon?mibextid=ZbWKwL", label: "Facebook" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/techsquadcm/", label: "LinkedIn" },
];

export function Footer() {
  const t = useT();
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-border/60 bg-background">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[80%] -translate-x-1/2 rounded-full bg-gradient-hero opacity-10 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="inline-flex max-w-full">
            <img
              src={footerLogo}
              alt={t("logoAlt")}
              className="h-auto w-64 max-w-full object-contain object-left"
            />
          </Link>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            {t("footerDescription")}
          </p>
          <div className="mt-6 flex items-center gap-2">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="group grid h-10 w-10 place-items-center rounded-full border border-border bg-card transition-all hover:-translate-y-0.5 hover:border-pink hover:shadow-pink"
              >
                <Icon className="h-4 w-4 text-foreground/70 transition-colors group-hover:text-pink" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">{t("explore")}</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {[
              [t("about"), "/about"],
              [t("services"), "/services"],
              [t("projects"), "/projects"],
              [t("team"), "/members"],
            ].map(([label, to]) => (
              <li key={to}>
                <Link to={to} className="inline-flex items-center gap-1 transition-colors hover:text-pink">
                  {label} <ArrowUpRight className="h-3 w-3" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">{t("contactHeading")}</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>techsquadcameroon@gmail.com</li>
            <li>{t("whatsappLabel")}: 670344034</li>
            <li>{t("countryName")}</li>
            <li>{t("institutionRoots")}</li>
          </ul>
          <Link
            to="/contact"
            className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-pink"
          >
            {t("startProject")} <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} TECHSQUAD Cameroon. {t("allRightsReserved")}</p>
          <p>{t("footerTagline")}</p>
        </div>
      </div>
    </footer>
  );
}
