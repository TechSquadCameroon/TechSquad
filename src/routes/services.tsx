import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteLayout } from "@/components/site/SiteLayout";
import { AmbientBackground } from "@/components/site/AmbientBackground";
import { Reveal, ScrambleText, Stagger } from "@/components/animations/Reveal";
import { ArrowRight, Brain, Code2, Palette, Smartphone, Users, Wand2 } from "lucide-react";
import { usePreferences, useT } from "@/lib/preferences";
import { buildPageHead, DEFAULT_OG_IMAGE } from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () =>
    buildPageHead({
      title: "Services - TechSquad Cameroon | Software, brand growth, youth training",
      description:
        "Explore TechSquad Cameroon's services for software, UI/UX, brand growth, and student career platforms like LaneForge.",
      path: "/services",
      image: DEFAULT_OG_IMAGE,
    }),
  component: ServicesPage,
});

const services = [
  { icon: Code2, title: "Web and software development", body: "Responsive websites, practical web apps, and digital systems for students, teams, and clients.", tags: ["React", "Laravel", "PHP", "JavaScript"] },
  { icon: Smartphone, title: "Mobile-first experiences", body: "Interfaces that fit real screens and real users, with a focus on clarity and usability.", tags: ["Responsive", "PWA", "Flutter"] },
  { icon: Palette, title: "Graphic design and UI/UX", body: "Visual identity, interface design, brand assets, and user-friendly layouts for digital products.", tags: ["Branding", "Canva", "UI/UX"] },
  { icon: Brain, title: "Career and learning platforms", body: "LaneForge is our flagship direction: helping youths discover fitting careers and build actual skills.", tags: ["LaneForge", "Guidance", "Skills"] },
  { icon: Wand2, title: "Brand growth and content", body: "Content strategy, video editing, social media management, and launch communication.", tags: ["Growth", "Content", "Marketing"] },
  { icon: Users, title: "Training and collaboration", body: "We help young builders learn by working together on real projects, hackathons, and client needs.", tags: ["Mentorship", "Teamwork", "Hackathons"] },
];

const process = [
  { step: "01", title: "Discover", body: "We understand the problem, the users, and the real constraints before choosing a solution." },
  { step: "02", title: "Design", body: "We map flows, create visuals, and shape the experience for clarity on every screen." },
  { step: "03", title: "Build", body: "Developers and designers turn the idea into working software with focused iterations." },
  { step: "04", title: "Launch", body: "We deliver, gather feedback, and improve the solution so it keeps serving people." },
];

const servicesCopy = {
  en: {
    kicker: "Services",
    title: "Practical services for",
    focus: "digital growth.",
    intro: "TECHSQUAD combines software engineering, design, branding, and collaboration to build solutions that can serve real users.",
    services,
    processLabel: "Process",
    processTitle: "How a project moves through TECHSQUAD.",
    process,
    introLabel: "Services · Cameroon",
    introTitle: "Web development and IT services",
    introFocus: "for Cameroon",
    introParagraphs: [
      "TechSquad Cameroon provides focused technology services for businesses, schools, community organizations, and founders in Douala and throughout Cameroon. Our web development work includes responsive company websites, e-commerce experiences, dashboards, landing pages, and custom web applications. We design each solution around the people who will use it, so pages load clearly, work on mobile devices, and guide visitors toward useful actions.",
      "We can also help when the challenge is not a new website. Our team supports software planning, interface improvements, digital content, brand systems, technical documentation, and practical IT decisions. We review the current workflow, identify points of friction, and recommend an implementation that is realistic to maintain. This approach helps Cameroon-based teams avoid unnecessary complexity while still creating a professional digital presence that can grow with the organization.",
      "Training is part of our service model. We help young people and team members develop confidence with modern web tools, collaborative development, design thinking, and project delivery. Our LaneForge direction extends this mission by helping students discover suitable career paths and build skills through practice. From an initial consultation to launch and continued improvement, TechSquad brings software engineering, design, growth, and mentorship together in one collaborative team.",
    ],
  },
  fr: {
    kicker: "Services",
    title: "Des services concrets pour soutenir la",
    focus: "croissance numérique.",
    intro: "TECHSQUAD réunit ingénierie logicielle, design, développement de marque et collaboration pour créer des solutions utiles.",
    services: [
      { icon: Code2, title: "Développement web et logiciel", body: "Sites adaptés aux mobiles, applications web pratiques et systèmes numériques pour les étudiants, les équipes et les clients.", tags: ["React", "Laravel", "PHP", "JavaScript"] },
      { icon: Smartphone, title: "Expériences pensées pour le mobile", body: "Des interfaces conçues pour les écrans et les utilisateurs du quotidien, avec la clarté et la facilité d’utilisation comme priorités.", tags: ["Adaptatif", "PWA", "Flutter"] },
      { icon: Palette, title: "Design graphique et UI/UX", body: "Identité visuelle, conception d’interfaces, éléments de marque et mises en page faciles à utiliser.", tags: ["Image de marque", "Canva", "UI/UX"] },
      { icon: Brain, title: "Plateformes de carrière et d’apprentissage", body: "LaneForge est notre projet phare : aider les jeunes à découvrir des carrières qui leur correspondent et à acquérir de vraies compétences.", tags: ["LaneForge", "Orientation", "Compétences"] },
      { icon: Wand2, title: "Développement de marque et contenu", body: "Stratégie éditoriale, montage vidéo, gestion des réseaux sociaux et communication de lancement.", tags: ["Croissance", "Contenu", "Marketing"] },
      { icon: Users, title: "Formation et collaboration", body: "Nous aidons les jeunes talents à apprendre ensemble grâce à de vrais projets, aux hackathons et aux besoins des clients.", tags: ["Mentorat", "Équipe", "Hackathons"] },
    ],
    processLabel: "Processus",
    processTitle: "Les étapes d’un projet chez TECHSQUAD.",
    process: [
      { step: "01", title: "Découvrir", body: "Nous comprenons le problème, les utilisateurs et les contraintes avant de choisir une solution." },
      { step: "02", title: "Concevoir", body: "Nous définissons les parcours, créons les visuels et clarifions l’expérience sur chaque écran." },
      { step: "03", title: "Construire", body: "Développeurs et designers transforment l’idée en logiciel fonctionnel par étapes successives." },
      { step: "04", title: "Lancer", body: "Nous livrons la solution, recueillons les retours et l’améliorons pour qu’elle continue à répondre aux besoins." },
    ],
    introLabel: "Services · Cameroun",
    introTitle: "Développement web et services informatiques",
    introFocus: "au Cameroun",
    introParagraphs: [
      "TechSquad Cameroon propose des services technologiques adaptés aux entreprises, aux établissements scolaires, aux associations et aux entrepreneurs de Douala et de tout le Cameroun. Notre travail de développement web comprend des sites d’entreprise adaptés aux mobiles, des boutiques en ligne, des tableaux de bord, des pages d’atterrissage et des applications web sur mesure. Nous concevons chaque solution pour ses utilisateurs : une navigation claire, une expérience mobile soignée et des parcours qui facilitent le passage à l’action.",
      "Notre équipe peut aussi intervenir sans créer un nouveau site. Nous accompagnons la planification logicielle, l’amélioration d’interfaces, la création de contenus numériques et de marques, la documentation technique ainsi que les choix informatiques du quotidien. Nous analysons les méthodes de travail, repérons les points de friction et recommandons une solution réaliste à maintenir. Les équipes camerounaises peuvent ainsi éviter une complexité inutile tout en développant une présence numérique professionnelle, capable d’évoluer avec leur organisation.",
      "La formation fait partie de notre approche. Nous aidons les jeunes et les équipes à gagner en assurance avec les outils web modernes, le développement collaboratif, la réflexion design et la conduite de projets. LaneForge prolonge cette mission en aidant les étudiants à explorer des parcours professionnels qui leur correspondent et à acquérir des compétences par la pratique. De la première discussion au lancement et aux améliorations continues, TechSquad réunit ingénierie logicielle, design, développement de marque et mentorat au sein d’une équipe collaborative.",
    ],
  },
} as const;

function ServicesPage() {
  const { language, effectiveReduceMotion: shouldReduceMotion } = usePreferences();
  const t = useT();
  const text = servicesCopy[language];

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
              {text.title} <span className="text-gradient-hero"><ScrambleText text={text.focus} /></span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              {text.intro}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20">
        <div className="relative isolate overflow-hidden rounded-[2rem] border border-white/10 bg-[#071733] px-6 py-8 text-white shadow-[0_28px_90px_rgba(3,15,38,0.2)] sm:px-10 sm:py-12 lg:px-14 lg:py-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-brand-blue/25 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-brand-sky/10 blur-3xl"
          />
          <div className="relative">
            <div className="mb-9 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-brand-sky">
              <span className="relative flex h-2.5 w-2.5">
                <span
                  aria-hidden="true"
                  className="absolute inline-flex h-full w-full animate-pulse rounded-full bg-brand-sky motion-reduce:animate-none"
                />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-sky" />
              </span>
              {text.introLabel}
            </div>

            <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_auto]">
              <motion.h2
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl text-4xl font-bold leading-tight tracking-normal sm:text-5xl"
              >
                {text.introTitle}{" "}
                <span className="text-[#6fcaff]">{text.introFocus}</span>
              </motion.h2>
              <motion.div
                aria-hidden="true"
                initial={false}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.12 }}
                animate={shouldReduceMotion ? undefined : { y: [0, -4, 0] }}
                className="hidden h-20 w-36 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] font-mono text-sm text-brand-sky/90 lg:flex"
              >
                <span className="text-white/40">&lt;</span>
                <span className="mx-2">build()</span>
                <span className="text-white/40">/&gt;</span>
              </motion.div>
            </div>

            <div className="mt-9 grid gap-x-12 gap-y-8 border-t border-white/15 pt-8 md:grid-cols-2">
              {text.introParagraphs.map((paragraph, index) => (
                <motion.div
                  key={index}
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: shouldReduceMotion ? 0 : index * 0.1 }}
                  className={`relative ${
                    index === 2
                      ? "border-t border-white/15 pt-6 md:col-span-2 md:max-w-5xl"
                      : "border-t border-white/15 pt-6"
                  }`}
                >
                  <motion.span
                    aria-hidden="true"
                    initial={false}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: shouldReduceMotion ? 0 : index * 0.12 }}
                    className="absolute left-0 top-[-1px] h-px w-16 origin-left bg-brand-sky"
                  />
                  <p
                    className={`text-sm leading-7 sm:text-base sm:leading-8 ${
                      index === 0 ? "text-white/90" : "text-white/70"
                    }`}
                  >
                    {paragraph}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-20 pb-24 sm:pt-24">
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {text.services.map((s) => (
            <motion.article
              key={s.title}
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 text-left shadow-glass transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-elegant"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-primary opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30" />
              <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-elegant transition-transform group-hover:rotate-6">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="relative mt-6 text-2xl font-bold tracking-normal">{s.title}</h3>
              <p className="relative mt-2 text-sm text-muted-foreground">{s.body}</p>
              <div className="relative mt-5 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t} className="rounded-full border border-pink/40 bg-pink/10 px-3 py-1 text-xs font-semibold text-pink">
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </Stagger>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">{text.processLabel}</p>
          <h2 className="mt-3 text-4xl font-bold tracking-normal sm:text-5xl"><ScrambleText text={text.processTitle} /></h2>
        </Reveal>

        <div className="relative mt-14">
          <div className="absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-primary via-pink to-gold lg:left-1/2 lg:hidden" />
          <div className="hidden lg:block">
            <div className="absolute left-0 right-0 top-10 h-px bg-gradient-to-r from-primary via-pink to-gold" />
          </div>
          <Stagger className="grid gap-8 lg:grid-cols-4" stagger={0.12}>
            {text.process.map((p) => (
              <motion.div key={p.step} variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.6 }} className="relative pl-16 lg:pl-0">
                <div className="relative z-10 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-hero text-lg font-bold text-primary-foreground shadow-elegant">
                  {p.step}
                </div>
                <h3 className="mt-5 text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>

        <Reveal className="mt-16 flex justify-center">
          <a href="/contact" className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-105">
            {t("startProject")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
