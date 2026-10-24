import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowRight, Bell, ChevronDown, Code2, Lightbulb, ShieldCheck, Users, Zap } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ParticleCanvas } from "@/components/home/ParticleHero";
import { CountdownTimer } from "@/components/home/CountdownTimer";
import { Reveal, Stagger } from "@/components/animations/Reveal";
import { usePreferences, useT } from "@/lib/preferences";
import laneForgeLogo from "../../images/Laneforge-transparent.png";
import { buildPageHead, DEFAULT_OG_IMAGE } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => {
    const pageHead = buildPageHead({
      title: "TechSquad - African software, learning, and LaneForge",
      description:
        "TechSquad Cameroon builds software solutions, digital skills, and the LaneForge career platform for students and young professionals.",
      path: "/",
      image: DEFAULT_OG_IMAGE,
    });

    return {
      ...pageHead,
      meta: [
        ...pageHead.meta,
        { name: "google-site-verification", content: "JAQ8WyXDfk7Vos5g0KZsTlImFXyJ5ePYnIxMlbVU7u4" },
      ],
    };
  },
  component: Index,
});

const stats = [
  { value: 2025, label: "Started at VISHI" },
  { value: 12, label: "Core members" },
  { value: 2, label: "Months to LaneForge" },
  { value: 100, label: "Africa-focused" },
];

const services = [
  {
    title: "Software infrastructure",
    body: "We design and build practical web platforms, internal tools, and digital systems that help people work faster.",
    bullets: ["Product planning", "Frontend and backend development", "Deployment-ready systems"],
  },
  {
    title: "Web and app development",
    body: "From student-facing platforms to client service websites, we turn ideas into usable software with clean interfaces.",
    bullets: ["Responsive websites", "React applications", "Mobile-first experiences"],
  },
  {
    title: "Brand growth and digital content",
    body: "TECHSQUAD helps projects look credible, communicate clearly, and reach the people they were built for.",
    bullets: ["Brand identity", "Graphic design", "Social media growth"],
  },
  {
    title: "Training and collaboration",
    body: "We are building a team culture where young builders learn by shipping real solutions together.",
    bullets: ["Mentorship", "Team projects", "Hackathon readiness"],
  },
];

const method = [
  { step: "01", title: "Listen", body: "We begin with the real problem, the people affected, and the context around them." },
  { step: "02", title: "Prototype", body: "Ideas become quick screens, flows, and technical tests before we overbuild." },
  { step: "03", title: "Build", body: "Designers, developers, and growth leads work together until the solution is usable." },
  { step: "04", title: "Launch and learn", body: "We release, gather feedback, and keep improving toward meaningful impact." },
];

const terminalLines = [
  "npx create-solution --for africa",
  "sync team --design --code --growth",
  "deploy LaneForge --launch soon",
  "status: building digital futures",
];

const homeCopy = {
  en: {
    badge: "LaneForge is launching soon",
    intro: "TECHSQUAD Cameroon is a student-born tech team building software solutions, strengthening young builders, and preparing LaneForge to guide students toward careers that fit them.",
    story: "Our story",
    stats: ["Started at VISHI", "Core members", "Months to LaneForge", "Africa-focused"],
    marquee: ["Software Engineering", "LaneForge", "Digital Skills", "Brand Growth", "Student Innovation", "Cameroon"],
    whatWeDo: "What we do",
    serviceHeading: "We build, train, brand, and launch practical digital solutions.",
    services,
    methodLabel: "Our method",
    methodHeading: "A clear path from idea to working solution.",
    methodIntro: "Our process is progressive and collaborative: understand the problem, prototype quickly, build with discipline, then learn from real users.",
    method,
    comingSoon: "Coming soon",
    meet: "Meet",
    laneForgeIntro: "A career-building platform that guides youths and students toward a career that fits them and helps them build actual skills.",
    notify: "Notify me at launch",
    learnMore: "Learn more",
    earlyAccess: "Get early access",
    userBase: "Building a student user base before launch",
    heroTitle: "TechSquad Cameroon - Your Tech Partner in",
    heroLocation: "Douala",
    purposeLabel: "Who we are",
    purposeTitleStart: "Technology that helps",
    purposeTitlePlace: "Cameroon",
    purposeTitleEnd: "move forward",
    purposeIllustration: "Useful digital systems, built with people in mind.",
    purposeQuote: "Turn everyday challenges into useful digital systems.",
    purposeParagraphs: [
      "TechSquad Cameroon is a practical technology partner for people, organizations, and growing businesses in Douala and across Cameroon. We combine web development, software engineering, IT support, digital design, and technical training to turn everyday challenges into useful digital systems. Our team builds responsive websites, business platforms, internal tools, and mobile-first experiences that are clear for customers and manageable for the teams who use them.",
      "A strong online presence is more than a page with a logo. It should explain what a business offers, help customers take action, and give owners a dependable way to manage information. Our web development process begins with the real needs of a Cameroon-based business, then moves through planning, interface design, implementation, testing, and deployment. We also support teams that need help improving an existing website, organizing their digital workflow, or choosing technology that fits their budget and goals.",
      "TechSquad also invests in people. Through training, mentorship, and collaborative projects, young developers and designers learn by working on real software solutions. From Douala to the wider African technology community, our mission is to make digital skills more accessible and help ambitious teams build with confidence. Whether you need a new website, IT guidance, software development, or a trusted technology team for your next project, TechSquad Cameroon is ready to build something useful with you.",
    ],
    emailPlaceholder: "you@email.com",
  },
  fr: {
    badge: "LaneForge sera bientôt lancé",
    intro: "TECHSQUAD Cameroon est une équipe technologique née d’une initiative étudiante. Elle crée des solutions logicielles, accompagne de jeunes talents et prépare LaneForge, une plateforme qui aide les étudiants à choisir un parcours professionnel adapté.",
    story: "Notre histoire",
    stats: ["Créée à VISHI", "Membres principaux", "Mois avant LaneForge", "Tournée vers l’Afrique"],
    marquee: ["Ingénierie logicielle", "LaneForge", "Compétences numériques", "Développement de marque", "Innovation étudiante", "Cameroun"],
    whatWeDo: "Nos activités",
    serviceHeading: "Nous concevons, formons, développons des marques et lançons des solutions numériques concrètes.",
    services: [
      {
        title: "Infrastructure logicielle",
        body: "Nous concevons des plateformes web, des outils internes et des systèmes numériques qui facilitent le travail au quotidien.",
        bullets: ["Planification produit", "Développement front-end et back-end", "Systèmes prêts à être déployés"],
      },
      {
        title: "Développement web et applications",
        body: "Des plateformes étudiantes aux sites clients, nous transformons les idées en logiciels pratiques dotés d’interfaces claires.",
        bullets: ["Sites adaptés aux mobiles", "Applications React", "Expériences pensées pour le mobile"],
      },
      {
        title: "Développement de marque et contenu",
        body: "TECHSQUAD aide les projets à gagner en crédibilité, à communiquer clairement et à atteindre leur public.",
        bullets: ["Identité de marque", "Design graphique", "Développement sur les réseaux sociaux"],
      },
      {
        title: "Formation et collaboration",
        body: "Nous développons une culture d’équipe où les jeunes apprennent en réalisant ensemble des solutions concrètes.",
        bullets: ["Mentorat", "Projets d’équipe", "Préparation aux hackathons"],
      },
    ],
    methodLabel: "Notre méthode",
    methodHeading: "Un parcours clair, de l’idée à une solution opérationnelle.",
    methodIntro: "Notre démarche est progressive et collaborative : comprendre le problème, créer rapidement un prototype, construire avec rigueur, puis apprendre des retours des utilisateurs.",
    method: [
      { step: "01", title: "Écouter", body: "Nous commençons par comprendre le problème, les personnes concernées et leur contexte." },
      { step: "02", title: "Prototyper", body: "Les idées deviennent rapidement des écrans, des parcours et des essais techniques." },
      { step: "03", title: "Construire", body: "Designers, développeurs et responsables du développement travaillent ensemble pour créer une solution utile." },
      { step: "04", title: "Lancer et apprendre", body: "Nous mettons la solution en ligne, recueillons les retours et continuons à l’améliorer." },
    ],
    comingSoon: "Bientôt disponible",
    meet: "Découvrez",
    laneForgeIntro: "Une plateforme d’orientation professionnelle qui aide les jeunes et les étudiants à trouver un parcours adapté et à acquérir de vraies compétences.",
    notify: "Me prévenir au lancement",
    learnMore: "En savoir plus",
    earlyAccess: "Accès anticipé",
    userBase: "Nous développons une communauté étudiante avant le lancement",
    heroTitle: "TechSquad Cameroon - Votre partenaire technologique à",
    heroLocation: "Douala",
    purposeLabel: "Qui sommes-nous",
    purposeTitleStart: "La technologie qui aide le",
    purposeTitlePlace: "Cameroun",
    purposeTitleEnd: "à avancer",
    purposeIllustration: "Des solutions numériques utiles, pensées pour les personnes.",
    purposeQuote: "Transformer les défis du quotidien en solutions numériques utiles.",
    purposeParagraphs: [
      "TechSquad Cameroon accompagne les particuliers, les organisations et les entreprises en développement à Douala et dans tout le Cameroun. Nous réunissons développement web, ingénierie logicielle, assistance informatique, design numérique et formation technique pour transformer les défis du quotidien en outils numériques utiles. Notre équipe crée des sites adaptatifs, des plateformes professionnelles, des outils internes et des expériences pensées pour le mobile, claires pour les clients et faciles à gérer par les équipes.",
      "Une présence en ligne efficace ne se résume pas à une page avec un logo. Elle doit présenter clairement l’offre d’une entreprise, aider ses clients à agir et permettre à ses responsables de gérer l’information de façon fiable. Notre démarche de développement web part des besoins réels des entreprises camerounaises, puis passe par la planification, la conception d’interfaces, la réalisation, les tests et la mise en ligne. Nous aidons aussi les équipes à améliorer un site existant, à organiser leurs outils numériques ou à choisir des technologies adaptées à leur budget et à leurs objectifs.",
      "TechSquad investit également dans les personnes. Grâce à la formation, au mentorat et aux projets collaboratifs, les jeunes développeurs et designers apprennent en réalisant de vraies solutions logicielles. De Douala à l’ensemble de la communauté technologique africaine, notre mission est de rendre les compétences numériques plus accessibles et d’aider les équipes ambitieuses à avancer avec confiance. Pour un nouveau site, des conseils informatiques, un logiciel ou une équipe de confiance pour votre prochain projet, TechSquad Cameroon est prête à construire avec vous une solution utile.",
    ],
    emailPlaceholder: "vous@exemple.com",
  },
} as const;

function Index() {
  const [openService, setOpenService] = useState(0);
  const { language, effectiveReduceMotion } = usePreferences();
  const t = useT();
  const text = homeCopy[language];

  return (
    <SiteLayout>
      <section className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <ParticleCanvas />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/55 to-background" />
        </div>
        <div className="mx-auto grid max-w-7xl gap-12 px-4 pt-16 pb-44 sm:pt-24 sm:pb-52 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5 text-xs font-semibold text-foreground/70 backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-pink" />
              </span>
              {text.badge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-4xl text-5xl font-bold leading-[1.02] tracking-normal sm:text-7xl md:text-[84px]"
            >
              <span className="text-[#071733]">{text.heroTitle} </span>
              <span className="text-gradient-hero">{text.heroLocation}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
            >
              {text.intro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.03]"
              >
                <span>{t("startProject")}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                <span className="pointer-events-none absolute inset-0 animate-shimmer" />
              </Link>
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-6 py-4 text-sm font-semibold text-foreground backdrop-blur transition-all hover:border-pink hover:text-pink"
              >
                {text.story}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          <TerminalPanel />
        </div>

        <div className="pointer-events-none absolute bottom-16 left-1/2 hidden h-14 w-px -translate-x-1/2 overflow-hidden rounded-full bg-border sm:block">
          <span className="block h-6 w-px animate-scroll-cue bg-pink" />
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-40 max-w-7xl px-4 pb-24 sm:-mt-52">
        <Stagger className="grid grid-cols-2 sm:grid-cols-4" stagger={0.08}>
          {stats.map((stat, index) => (
            <motion.div
              key={text.stats[index]}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className="border-border px-4 py-4 text-center sm:border-l sm:first:border-l-0"
            >
              <div className="text-4xl font-black text-gradient-hero sm:text-5xl">
                <AnimatedCounter value={stat.value} suffix={index === 3 ? "%" : ""} />
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {text.stats[index]}
              </div>
            </motion.div>
          ))}
        </Stagger>
      </section>

      <section className="overflow-hidden border-y border-border bg-[#071733] py-4 text-white">
        <div className="marquee-track flex gap-8 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.25em] text-cyan-100">
          {Array.from({ length: 2 }).map((_, group) => (
            <span key={group} className="flex gap-8">
              {text.marquee.map((item) => <span key={item}>{item}</span>)}
            </span>
          ))}
        </div>
      </section>

      <section className="relative bg-[#071733] py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#35b7ff]">{text.whatWeDo}</p>
            <h2 className="mt-3 text-4xl font-bold tracking-normal text-cyan-100 sm:text-5xl">
              <ScrambleText text={text.serviceHeading} />
            </h2>
          </Reveal>

          <div className="space-y-3">
            {text.services.map((service, index) => {
              const isOpen = openService === index;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="border-b border-white/15"
                >
                  <button
                    type="button"
                    onClick={() => setOpenService(isOpen ? -1 : index)}
                    className="group flex w-full items-center gap-5 py-6 text-left transition-transform hover:-translate-x-1"
                  >
                    <span className="text-sm font-bold text-white/35">0{index + 1}</span>
                    <span className={`flex-1 text-2xl font-bold transition-colors ${isOpen ? "text-[#35b7ff]" : "text-white group-hover:text-cyan-100"}`}>
                      {service.title}
                    </span>
                    <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180 text-[#35b7ff]" : "group-hover:rotate-45"}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 pl-12 text-sm text-white/70">
                          <p>{service.body}</p>
                          <ul className="mt-4 grid gap-2 sm:grid-cols-3">
                            {service.bullets.map((bullet) => (
                              <li key={bullet} className="text-white/80">
                                <span className="mr-2 text-[#35b7ff]">-</span>{bullet}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-24 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">{text.methodLabel}</p>
          <h2 className="mt-3 text-4xl font-bold tracking-normal sm:text-5xl">
            <span className="text-gradient-hero">
              <ScrambleText text={text.methodHeading} />
            </span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            {text.methodIntro}
          </p>
        </Reveal>

        <div className="relative space-y-8">
          <div className="absolute left-5 top-5 bottom-5 w-px bg-gradient-to-b from-primary via-pink to-gold" />
          {text.method.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="relative pl-16"
            >
              <span className="absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-full bg-gradient-hero text-sm font-bold text-primary-foreground shadow-elegant">
                {item.step}
              </span>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20">
        <div className="relative isolate overflow-hidden rounded-[2rem] border border-slate-200/80 bg-gradient-to-br from-white via-[#f8fbff] to-[#edf5fb] p-6 shadow-sm sm:p-10 lg:p-14">
          <div className="pointer-events-none absolute -right-16 -top-24 -z-10 h-72 w-72 rounded-full bg-[#35b7ff]/10 blur-3xl" />
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
            <Reveal className="flex flex-col">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">
                {text.purposeLabel}
              </p>
              <h2 className="mt-4 max-w-xl text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
                {text.purposeTitleStart}{" "}
                <span className="text-primary">{text.purposeTitlePlace}</span>{" "}
                <span className="text-[#c5a64f]">{text.purposeTitleEnd}</span>
              </h2>
              <div className="mt-8 flex items-center gap-4">
                <svg
                  viewBox="0 0 220 110"
                  className="h-24 w-48 shrink-0 text-primary/70"
                  fill="none"
                  aria-hidden="true"
                >
                  <motion.path
                    d="M22 78 74 32l55 42 67-48M74 32l14 68m41-26 34 22"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="4 5"
                    initial={effectiveReduceMotion ? false : { pathLength: 0 }}
                    whileInView={effectiveReduceMotion ? undefined : { pathLength: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 1.1, ease: "easeOut" }}
                  />
                  {[
                    [22, 78],
                    [74, 32],
                    [88, 100],
                    [129, 74],
                    [163, 96],
                    [196, 26],
                  ].map(([cx, cy], index) => (
                    <motion.circle
                      key={`${cx}-${cy}`}
                      cx={cx}
                      cy={cy}
                      r={index === 1 || index === 3 ? 5 : 3.5}
                      fill={index === 4 ? "#c5a64f" : "currentColor"}
                      initial={effectiveReduceMotion ? false : { scale: 0.65, opacity: 0.5 }}
                      whileInView={effectiveReduceMotion ? undefined : { scale: 1, opacity: 1 }}
                      viewport={{ once: true, amount: 0.8 }}
                      transition={{ duration: 0.45, delay: index * 0.08 }}
                    />
                  ))}
                </svg>
                <p className="max-w-[13rem] text-sm font-semibold leading-6 text-slate-600">
                  {text.purposeIllustration}
                </p>
              </div>
              <blockquote className="mt-auto pt-8">
                <div className="rounded-2xl border border-primary/10 bg-white/75 p-5 shadow-sm">
                  <span className="text-3xl font-bold leading-none text-primary/70" aria-hidden="true">
                    “
                  </span>
                  <p className="mt-1 text-lg font-semibold leading-7 text-slate-700">
                    {text.purposeQuote}
                  </p>
                </div>
              </blockquote>
            </Reveal>

            <div className="space-y-4">
              {text.purposeParagraphs.map((paragraph, index) => (
                <Reveal key={index} delay={0.05 + index * 0.1}>
                  <article
                    className={`relative ${
                      index === 0
                        ? "rounded-2xl border border-white bg-white/85 p-5 shadow-sm sm:p-6"
                        : "border-l border-slate-200 py-2 pl-5 sm:pl-7"
                    }`}
                  >
                    <span
                      className={`absolute ${
                        index === 0
                          ? "bottom-5 left-0 top-5 w-1 rounded-r-full bg-primary"
                          : `-left-[1px] top-3 h-8 w-px bg-gradient-to-b ${
                              index === 1 ? "from-primary to-[#c5a64f]" : "from-[#c5a64f] to-primary"
                            }`
                      }`}
                    />
                    <p
                      className={`text-base leading-8 sm:text-[1.05rem] ${
                        index === 0 ? "pl-4 text-slate-700" : "text-slate-600"
                      }`}
                    >
                      {paragraph}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-24">
        <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-1 shadow-glass">
          <div className="relative overflow-hidden rounded-[calc(1.75rem-4px)] bg-[#08172b] p-8 sm:p-14">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-32 -right-24 h-72 w-72 rounded-full bg-[#1d4f7a]/20 blur-3xl" />
              <div className="absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-[#c5a64f]/12 blur-3xl" />
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                  backgroundSize: "64px 64px",
                  maskImage: "radial-gradient(ellipse at center, black 18%, transparent 72%)",
                }}
              />
            </div>

            <div className="relative grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
                  <Zap className="h-3.5 w-3.5" /> {text.comingSoon}
                </div>
                <div className="mt-5 flex items-start gap-2 sm:gap-4">
                  <h2 className="min-w-0 flex-1 text-2xl font-bold leading-[1.05] tracking-normal text-white sm:text-3xl md:text-4xl lg:text-6xl">
                    {text.meet}{" "}
                    <span className="text-[#d7bd66]">
                      <ScrambleText text="LaneForge" />
                    </span>
                  </h2>
                  <img
                    src={laneForgeLogo}
                    alt={t("laneforgeLogoAlt")}
                    loading="lazy"
                    className="block h-auto w-[42%] min-w-[78px] max-w-[128px] shrink-0 lg:hidden"
                  />
                </div>
                <p className="mt-5 max-w-lg text-lg text-white/70">
                  {text.laneForgeIntro}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#waitlist"
                    className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#d7bd66] px-6 py-3 text-sm font-bold text-[#071733] shadow-gold transition-colors hover:bg-[#e0c878]"
                  >
                    <Bell className="h-4 w-4" />
                    {text.notify}
                  </a>
                  <a
                    href="#waitlist"
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:border-white/60"
                  >
                    {text.learnMore} <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div id="waitlist">
                <img
                  src={laneForgeLogo}
                  alt={t("laneforgeLogoAlt")}
                  loading="lazy"
                  className="mx-auto mb-3 hidden h-auto w-full max-w-[220px] lg:block"
                />
                <div className="mt-3 lg:mt-0">
                  <CountdownTimer />
                </div>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="mt-6 flex flex-col gap-2 rounded-2xl border border-white/20 bg-white/10 p-2 backdrop-blur sm:flex-row"
                >
                  <input
                    type="email"
                    required
                    aria-label={text.notify}
                    placeholder={text.emailPlaceholder}
                    className="min-w-0 flex-1 rounded-xl bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none"
                  />
                  <button type="submit" className="rounded-xl bg-[#2f74a8] px-5 py-3 text-sm font-bold text-white shadow-pink transition-colors hover:bg-[#3986bd]">
                    {text.earlyAccess}
                  </button>
                </form>
                <div className="mt-4 flex items-center gap-2 text-xs text-white/60">
                  <Users className="h-3.5 w-3.5" />
                  {text.userBase}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const { effectiveReduceMotion } = usePreferences();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (effectiveReduceMotion) {
      setCount(value);
      return;
    }
    let frame = 0;
    const frames = 42;
    const timer = window.setInterval(() => {
      frame += 1;
      setCount(Math.round((value * frame) / frames));
      if (frame >= frames) window.clearInterval(timer);
    }, 24);
    return () => window.clearInterval(timer);
  }, [effectiveReduceMotion, inView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function ScrambleText({ text }: { text: string }) {
  const { effectiveReduceMotion } = usePreferences();
  const chars = "TECHSQUAD01";
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (effectiveReduceMotion) {
      setDisplay(text);
      return;
    }
    let frame = 0;
    const timer = window.setInterval(() => {
      frame += 1;
      setDisplay(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < frame / 2) return char;
            return chars[(index + frame) % chars.length];
          })
          .join(""),
      );
      if (frame > text.length * 2) window.clearInterval(timer);
    }, 35);
    return () => window.clearInterval(timer);
  }, [effectiveReduceMotion, text]);

  return <span>{display}</span>;
}

function TerminalPanel() {
  const t = useT();
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ rotateX: 4, rotateY: -5, scale: 1.02 }}
      className="mx-auto w-full max-w-md animate-terminal-float rounded-2xl border border-white/15 bg-[#071733] p-4 text-white shadow-elegant [transform-style:preserve-3d]"
    >
      <div className="flex items-center gap-2 border-b border-white/10 pb-4">
        <span className="h-3 w-3 rounded-full bg-pink" />
        <span className="h-3 w-3 rounded-full bg-gold" />
        <span className="h-3 w-3 rounded-full bg-[#35b7ff]" />
        <span className="ml-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/45">{t("terminalLabel")}</span>
      </div>
      <div className="space-y-3 pt-5 font-mono text-xs sm:text-sm">
        {terminalLines.map((line, index) => (
          <motion.div
            key={line}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + index * 0.35, duration: 0.45 }}
            className="flex min-w-0 items-center gap-3"
          >
            <span className="text-[#35b7ff]">$</span>
            <span className="terminal-type overflow-hidden whitespace-nowrap" style={{ animationDelay: `${0.7 + index * 0.35}s` }}>
              {line}
            </span>
            {index === terminalLines.length - 1 && <span className="h-5 w-2 animate-cursor bg-[#35b7ff]" />}
          </motion.div>
        ))}
      </div>
      <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3">
        {[
          { icon: Code2, label: "Software" },
          { icon: Lightbulb, label: "Ideas" },
          { icon: Users, label: "Youth" },
          { icon: ShieldCheck, label: "Impact" },
        ].map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2 text-sm font-semibold text-white/70">
            <Icon className="h-4 w-4 text-[#35b7ff]" />
            {label}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
