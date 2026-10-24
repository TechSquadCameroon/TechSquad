import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteLayout } from "@/components/site/SiteLayout";
import { AmbientBackground } from "@/components/site/AmbientBackground";
import { Reveal, ScrambleText, Stagger } from "@/components/animations/Reveal";
import { ExternalLink, Github } from "lucide-react";
import { usePreferences } from "@/lib/preferences";
import ecommercePhoto from "../../images/Ecommerce Website.jpg";
import hotelPhoto from "../../images/Hotel Management System.jpg";
import pharmacyPhoto from "../../images/Phamarcy management system.jpg";
import portfolioPhoto from "../../images/Portfolio Website.jpg";
import { buildPageHead, DEFAULT_OG_IMAGE } from "@/lib/seo";

export const Route = createFileRoute("/projects")({
  head: () =>
    buildPageHead({
      title: "Projects - TechSquad Cameroon | LaneForge, client work, hackathons",
      description:
        "See TechSquad Cameroon's flagship projects, including LaneForge, e-commerce work, CodeConnect, and CAMIHACK 2026.",
      path: "/projects",
      image: DEFAULT_OG_IMAGE,
    }),
  component: ProjectsPage,
});

const projects = [
  {
    title: "E-commerce Website",
    category: "E-commerce storefront",
    year: "2026",
    summary: "A polished shopping experience with product browsing, cart flow, and responsive storefront sections.",
    stack: ["HTML", "CSS", "UI/UX"],
    span: "",
    image: ecommercePhoto,
    imageClass: "h-40 md:h-52",
    repoUrl: "https://github.com/King-Darlington",
    demoUrl: "/demos/e-commerce-main/index.html",
  },
  {
    title: "Pharmacy Management System",
    category: "Medical dashboard",
    year: "2026",
    summary: "A practical management dashboard designed to support pharmacy records, inventory visibility, and day-to-day workflows.",
    stack: ["Productivity", "Healthcare", "Dashboard"],
    span: "",
    image: pharmacyPhoto,
    imageClass: "h-40 md:h-52",
    repoUrl: "https://github.com/King-Darlington",
    demoUrl: "/contact",
  },
  {
    title: "Hotel Management System",
    category: "Operations dashboard",
    year: "2026",
    summary: "A hotel-focused internal interface built to streamline operations and present booking-ready information clearly.",
    stack: ["Operations", "Dashboard", "UI/UX"],
    span: "",
    image: hotelPhoto,
    imageClass: "h-40 md:h-52",
    repoUrl: "https://github.com/King-Darlington",
    demoUrl: "/contact",
  },
  {
    title: "Portfolio Website",
    category: "Personal showcase",
    year: "2026",
    summary: "A clean portfolio presentation that highlights work, identity, and digital presence in a professional style.",
    stack: ["Portfolio", "Branding", "Web design"],
    span: "",
    image: portfolioPhoto,
    imageClass: "h-40 md:h-52",
    repoUrl: "https://github.com/King-Darlington",
    demoUrl: "/contact",
  },
  {
    title: "LaneForge",
    category: "Career platform",
    year: "Launching soon",
    summary: "A platform that guides youths and students toward careers that fit them and helps them build actual skills.",
    stack: ["Career guidance", "Student skills", "Software platform"],
    span: "md:col-span-2",
    image: "/demos/previews/laneforge-preview.svg",
    imageClass: "h-40 md:h-52",
    repoUrl: "https://github.com/King-Darlington",
    demoUrl: "/contact",
  },
];

const copy = {
  en: {
    kicker: "Projects",
    titlePrefix: "What TECHSQUAD is ",
    titleFocus: "building now.",
    intro: "From LaneForge to client services and community events, these are the initiatives shaping the team.",
    github: "GitHub",
    liveDemo: "Live Demo",
    previewAlt: "project preview",
    launchingSoon: "Launching soon",
  },
  fr: {
    kicker: "Projets",
    titlePrefix: "Ce que TECHSQUAD ",
    titleFocus: "construit maintenant.",
    intro: "De LaneForge aux services clients et aux événements communautaires, voici les initiatives qui font avancer l’équipe.",
    github: "GitHub",
    liveDemo: "Démo en direct",
    previewAlt: "aperçu du projet",
    launchingSoon: "Lancement prochain",
  },
} as const;

const frenchProjects = [
  {
    title: "Site de commerce en ligne",
    category: "Boutique en ligne",
    summary: "Une expérience d’achat soignée avec navigation parmi les produits, panier et pages adaptées aux mobiles.",
    stack: ["HTML", "CSS", "UI/UX"],
  },
  {
    title: "Système de gestion de pharmacie",
    category: "Tableau de bord médical",
    summary: "Un tableau de bord pratique pour suivre les dossiers, les stocks et les activités quotidiennes d’une pharmacie.",
    stack: ["Productivité", "Santé", "Tableau de bord"],
  },
  {
    title: "Système de gestion hôtelière",
    category: "Tableau de bord des opérations",
    summary: "Une interface de gestion hôtelière qui facilite les opérations et présente clairement les informations de réservation.",
    stack: ["Opérations", "Tableau de bord", "UI/UX"],
  },
  {
    title: "Site portfolio",
    category: "Vitrine personnelle",
    summary: "Un portfolio clair qui met en valeur le travail, l’identité et la présence numérique.",
    stack: ["Portfolio", "Image de marque", "Conception web"],
  },
  {
    title: "LaneForge",
    category: "Plateforme d’orientation professionnelle",
    summary: "Une plateforme qui aide les jeunes et les étudiants à trouver des parcours professionnels adaptés et à acquérir de vraies compétences.",
    stack: ["Orientation", "Compétences", "Plateforme"],
  },
] as const;

function ProjectsPage() {
  const { language } = usePreferences();
  const text = copy[language];
  const visibleProjects = language === "fr"
    ? projects.map((project, index) => ({ ...project, ...frenchProjects[index] }))
    : projects;

  return (
    <SiteLayout>
      <section className="relative isolate">
        <AmbientBackground />
        <div className="mx-auto max-w-5xl px-4 pt-24 pb-36 text-center sm:pb-44">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-blue">{text.kicker}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 text-5xl font-bold leading-[1.05] tracking-normal sm:text-7xl">
              {text.titlePrefix}<span className="text-gradient-hero"><ScrambleText text={text.titleFocus} /></span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              {text.intro}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-20 pb-24 sm:pt-24">
        <Stagger className="grid auto-rows-[440px] grid-cols-1 gap-5 sm:grid-cols-2 md:auto-rows-[460px] md:grid-cols-3" stagger={0.08}>
          {visibleProjects.map((p) => (
            <motion.article
              key={p.title}
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7 }}
              className={`group flex h-full overflow-hidden rounded-lg border border-slate-800 bg-[#0b1018] text-left shadow-[0_18px_46px_rgba(8,23,43,0.22)] transition-all hover:-translate-y-1 hover:border-brand-sky/60 ${p.span}`}
            >
              <div className="flex h-full min-h-0 w-full flex-col">
                <div className={`relative shrink-0 overflow-hidden bg-[#070b12] ${p.imageClass}`}>
                  <img
                    src={p.image}
                    alt={`${p.title} ${text.previewAlt}`}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-100 transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0b1018] to-transparent" />
                </div>
                <div className="flex h-full min-h-0 flex-1 flex-col border-t border-white/8 bg-[#0b1018] p-4 md:p-5">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-sky">{p.category}</span>
                    <span className="text-xs font-semibold text-white/55">
                      {p.year === "Launching soon" ? text.launchingSoon : p.year}
                    </span>
                  </div>
                  <h3 className="mt-2 text-lg font-bold text-white sm:text-xl">{p.title}</h3>
                  <p className="mt-2 min-h-[4.5rem] text-sm leading-5 text-white/68">{p.summary}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.stack.map((t) => (
                      <span key={t} className="rounded-md bg-black px-2.5 py-1 text-[10px] font-bold text-white/80">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex gap-3 pt-4">
                    <a
                      href={p.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-white/12 bg-white/[0.03] px-3 py-2 text-xs font-bold text-white/85 transition-colors hover:border-brand-sky hover:text-brand-sky"
                    >
                      <Github className="h-3.5 w-3.5" />
                      {text.github}
                    </a>
                    <a
                      href={p.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-brand-blue px-3 py-2 text-xs font-bold text-white transition-colors hover:bg-brand-sky"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      {text.liveDemo}
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </Stagger>
      </section>
    </SiteLayout>
  );
}
