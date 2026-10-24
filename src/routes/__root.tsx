import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { MotionConfig } from "framer-motion";
import { PreferencesProvider, usePreferences, useT } from "@/lib/preferences";

import appCss from "../styles.css?url";
import faviconUrl from "../../images/logo images/logo icon.png?url";
import organizationLogoUrl from "../../images/logo images/TechSquad Cameroon Logo.png?url";
import {
  absolute,
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  DEFAULT_TITLE,
  SITE_NAME,
  SITE_URL,
  TWITTER_HANDLE,
} from "@/lib/seo";

function NotFoundComponent() {
  return (
    <PreferencesProvider>
      <NotFoundContent />
    </PreferencesProvider>
  );
}

function NotFoundContent() {
  const t = useT();
  useEffect(() => {
    document.title = t("titleNotFound");
  }, [t]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">{t("pageNotFound")}</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {t("missingPageMessage")}
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t("goHome")}
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <PreferencesProvider>
      <ErrorContent router={router} reset={reset} />
    </PreferencesProvider>
  );
}

function ErrorContent({
  router,
  reset,
}: {
  router: ReturnType<typeof useRouter>;
  reset: () => void;
}) {
  const t = useT();
  useEffect(() => {
    document.title = t("pageLoadError");
  }, [t]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">{t("pageLoadError")}</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {t("pageLoadErrorMessage")}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t("tryAgain")}
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            {t("goHome")}
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "TechSquad Cameroon | IT Services, Web Dev & Tech Training in Douala" },
      {
        name: "description",
        content:
          "TechSquad Cameroon is a tech company in Douala offering web development, IT support, software solutions, and tech training.",
      },
      { name: "author", content: SITE_NAME },
      { name: "keywords", content: "techsquad cameroon, web development douala, it support cameroon" },
      { name: "google-site-verification", content: "JAQ8WyXDfk7Vos5g0KZsTlImFXyJ5ePYnIxMlbVU7u4" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "TechSquad Cameroon | IT Services in Douala" },
      { property: "og:description", content: "Web Development, IT Support, and Tech Training in Cameroon" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:url", content: "https://techsquad-cameroon.netlify.app/" },
      { property: "og:image", content: DEFAULT_OG_IMAGE },
      { property: "og:image:alt", content: "TechSquad brand preview image" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: TWITTER_HANDLE },
      { name: "twitter:title", content: DEFAULT_TITLE },
      { name: "twitter:description", content: DEFAULT_DESCRIPTION },
      { name: "twitter:image", content: DEFAULT_OG_IMAGE },
      { name: "twitter:image:alt", content: "TechSquad brand preview image" },
      { name: "theme-color", content: "#071733" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: faviconUrl, type: "image/png" },
      { rel: "canonical", href: "https://techsquad-cameroon.netlify.app/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: SITE_NAME,
              description: DEFAULT_DESCRIPTION,
              url: SITE_URL,
              logo: absolute(organizationLogoUrl),
              sameAs: ["https://twitter.com/TechSquadCam"],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  email: "237techsquad@gmail.com",
                  contactType: "customer service",
                  areaServed: "CM",
                  availableLanguage: ["English", "French"],
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <PreferencesProvider>
        <LocalizedDocumentTitle />
        <AccessibilityMotion>
          <Outlet />
        </AccessibilityMotion>
      </PreferencesProvider>
    </QueryClientProvider>
  );
}

function LocalizedDocumentTitle() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const t = useT();
  const pageMetadata = {
    "/": ["titleHome", "descriptionHome"],
    "/about": ["titleAbout", "descriptionAbout"],
    "/services": ["titleServices", "descriptionServices"],
    "/projects": ["titleProjects", "descriptionProjects"],
    "/members": ["titleTeam", "descriptionTeam"],
    "/contact": ["titleContact", "descriptionContact"],
  } as const;
  const [titleKey, descriptionKey] =
    pageMetadata[pathname as keyof typeof pageMetadata] ?? ["titleNotFound", "descriptionNotFound"];
  const title = t(titleKey);
  const description = t(descriptionKey);

  useEffect(() => {
    const applyMetadata = () => {
      if (document.title !== title) document.title = title;
      for (const selector of [
        'meta[name="description"]',
        'meta[property="og:description"]',
        'meta[name="twitter:description"]',
      ]) {
        const meta = document.head.querySelector<HTMLMetaElement>(selector);
        if (meta && meta.content !== description) meta.content = description;
      }
      for (const selector of [
        'meta[property="og:title"]',
        'meta[name="twitter:title"]',
      ]) {
        const meta = document.head.querySelector<HTMLMetaElement>(selector);
        if (meta && meta.content !== title) meta.content = title;
      }
      for (const selector of [
        'meta[property="og:image:alt"]',
        'meta[name="twitter:image:alt"]',
      ]) {
        const meta = document.head.querySelector<HTMLMetaElement>(selector);
        const alt = t("brandPreviewAlt");
        if (meta && meta.content !== alt) meta.content = alt;
      }
    };
    applyMetadata();
    const observer = new MutationObserver(applyMetadata);
    observer.observe(document.head, {
      attributes: true,
      attributeFilter: ["content"],
      childList: true,
      characterData: true,
      subtree: true,
    });
    return () => observer.disconnect();
  }, [description, t, title]);

  return null;
}

function AccessibilityMotion({ children }: { children: ReactNode }) {
  const { effectiveReduceMotion } = usePreferences();
  return (
    <MotionConfig reducedMotion={effectiveReduceMotion ? "always" : "never"}>
      {children}
    </MotionConfig>
  );
}
