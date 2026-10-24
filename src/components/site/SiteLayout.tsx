import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingActions } from "./FloatingActions";
import { CustomCursor } from "./CustomCursor";
import { AccessibilityPanel } from "./AccessibilityPanel";
import { usePreferences, useT } from "@/lib/preferences";

export function SiteLayout({ children }: { children: ReactNode }) {
  const { accessibility } = usePreferences();
  const t = useT();

  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <a className="skip-to-content" href="#main-content">{t("skipToContent")}</a>
      <AccessibilityPanel />
      <div className="relative min-h-screen bg-background text-foreground" style={{ zoom: accessibility.zoom }}>
        <Header />
        <main id="main-content" className="pt-24" tabIndex={-1}>{children}</main>
        <Footer />
        <FloatingActions />
        <CustomCursor />
      </div>
    </div>
  );
}
