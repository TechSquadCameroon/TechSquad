import { ArrowUp } from "lucide-react";
import { useT } from "@/lib/preferences";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="h-6 w-6 fill-current">
      <path d="M16.02 3.2A12.7 12.7 0 0 0 5.28 22.7L3.6 28.8l6.28-1.64A12.68 12.68 0 1 0 16.02 3.2Zm0 2.3a10.38 10.38 0 0 1 8.82 15.86 10.34 10.34 0 0 1-13.76 3.66l-.45-.26-3.72.98.99-3.62-.29-.47A10.39 10.39 0 0 1 16.02 5.5Zm-4.7 5.53c-.23 0-.6.09-.92.44-.32.35-1.2 1.17-1.2 2.86 0 1.68 1.23 3.31 1.4 3.54.17.23 2.37 3.79 5.86 5.16 2.9 1.14 3.5.91 4.13.85.63-.06 2.03-.83 2.32-1.63.29-.8.29-1.49.2-1.63-.09-.15-.32-.23-.66-.4-.34-.17-2.03-1-2.35-1.11-.31-.12-.54-.17-.77.17-.23.34-.88 1.11-1.08 1.34-.2.23-.4.25-.74.08-.34-.17-1.44-.53-2.74-1.69-1.01-.9-1.7-2.02-1.9-2.36-.2-.34-.02-.52.15-.69.16-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.08-.17-.77-1.86-1.06-2.55-.28-.67-.56-.58-.77-.59h-.69Z" />
    </svg>
  );
}

export function FloatingActions() {
  const t = useT();
  return (
    <>
      <a
        href="https://wa.me/237670344034"
        target="_blank"
        rel="noreferrer"
        aria-label={t("chatWithTechSquad")}
        className="group fixed bottom-6 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_16px_34px_rgba(7,23,51,0.24)] ring-4 ring-white/80 transition-all hover:w-56 hover:justify-start hover:gap-3 hover:px-5 hover:shadow-[0_20px_42px_rgba(7,23,51,0.3)]"
      >
        <WhatsAppIcon />
        <span className="hidden whitespace-nowrap text-sm font-bold group-hover:inline">
          {t("chatWithUs")}
        </span>
      </a>
      <button
        type="button"
        aria-label={t("scrollToTop")}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 left-6 z-[60] grid h-12 w-12 place-items-center rounded-full border border-border bg-card/90 text-primary shadow-glass backdrop-blur transition-transform hover:-translate-y-1 hover:text-pink"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </>
  );
}
