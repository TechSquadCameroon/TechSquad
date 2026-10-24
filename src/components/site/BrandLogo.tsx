import { Link } from "@tanstack/react-router";
import logoIcon from "../../../images/logo images/logo icon.png";
import { useT } from "@/lib/preferences";

export function BrandLogo({ compact = false }: { compact?: boolean }) {
  const t = useT();
  return (
    <Link to="/" className="group flex min-w-0 items-center gap-2">
      <img
        src={logoIcon}
        alt={t("logoAlt")}
        className="h-10 w-10 shrink-0 rounded-xl object-contain shadow-glass transition-transform group-hover:scale-105"
      />
      {!compact && (
        <span className="truncate text-xl font-black leading-none tracking-[0.03em] sm:text-2xl">
          <span className="text-brand-blue">TECH</span>
          <span className="text-brand-navy">SQUAD</span>
        </span>
      )}
    </Link>
  );
}
