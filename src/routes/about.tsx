import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal, ScrambleText, Stagger } from "@/components/animations/Reveal";
import { AmbientBackground } from "@/components/site/AmbientBackground";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { BookOpen, Camera, Compass, MapPin, Rocket, ShieldCheck, Users } from "lucide-react";
import { usePreferences, useT } from "@/lib/preferences";
import codeconnectPhoto from "../../images/Team at codeconnect 2025.png";
import teamMeetingPhoto from "../../images/team meeting.png";
import vishiCampusImage from "../../images/vishi.jpeg";
import { buildPageHead, DEFAULT_OG_IMAGE } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    buildPageHead({
      title: "About TechSquad Cameroon - Student-led software and training",
      description:
        "Discover TechSquad Cameroon's journey from a student initiative to a team building software infrastructure, client services, and LaneForge.",
      path: "/about",
      image: DEFAULT_OG_IMAGE,
    }),
  component: AboutPage,
});

const milestones = [
  {
    year: "October 2025",
    title: "Started at VISHI Higher Institute",
    body: "TECHSQUAD began as a student initiative tech team built around learning, collaboration, and practical software problem solving.",
  },
  {
    year: "November 30, 2025",
    title: "CodeConnect conference",
    body: "The team introduced LaneForge, a career-building platform that guides youths and students toward careers that fit them and helps them build actual skills.",
  },
  {
    year: "April 6-7, 2026",
    title: "CAMIHACK 2026 in Buea",
    body: "TECHSQUAD attended its first hackathon, made important connections, and learned from builders across the ecosystem.",
  },
  {
    year: "2026",
    title: "Client services and user base",
    body: "While preparing LaneForge for launch in about two months, the team began providing services to clients and building a student user base.",
  },
];

const values = [
  { icon: Compass, title: "African impact", body: "We focus on practical problems around students, youths, communities, and digital access." },
  { icon: BookOpen, title: "Learning by building", body: "Members grow through real projects, teamwork, hackathons, and mentorship." },
  { icon: Users, title: "Team spirit", body: "Design, development, growth, and operations work together instead of moving in silos." },
  { icon: Rocket, title: "Software infrastructure", body: "Our long-term goal is to create infrastructure software solutions that empower Africa's digital future." },
];

// imageUrl can be a local project path or a full web image URL.
const activityGallery = [
  {
    title: "CodeConnect showcase",
    caption: "Presenting LaneForge and sharing the team's career-building vision.",
    imageUrl: codeconnectPhoto,
  },
  {
    title: "Team meeting",
    caption: "Planning the next build, aligning ideas, and sharpening the roadmap.",
    imageUrl: teamMeetingPhoto,
  },
  {
    title: "Project studio",
    caption: "Building websites, dashboards, and digital tools as a team.",
    imageUrl: vishiCampusImage,
  },
];

const aboutCopy = {
  en: {
    kicker: "Our story",
    title: "Started as students.",
    focus: "Building for Africa.",
    intro: "TECHSQUAD Cameroon began at VISHI Higher Institute in October 2025 and is growing into a team that builds software, trains young talent, and prepares LaneForge for launch.",
    vishiLabel: "Institutional roots",
    vishiTitle: "VISHI Higher Institute of Cameroon",
    vishiBody: "VISHI Higher Institute of Cameroon is a private, accredited higher education institution founded in 2020 in Douala, Littoral Region, Cameroon. Officially recognized by the Ministry of Higher Education (MINESUP), the polytechnic operates as a classical higher institute with multi-level professional programs.",
    vishiAuthority: "Authorization No. 21-04405/I/MINESUP/SG/DDES/SD.ESUP/SDA/NA",
    vishiLocation: "Bonaberi, behind the Nestle factory in Minkwele",
    vishiCampus: "Private accredited polytechnic",
    vishiPrograms: "Professional multi-level programs",
    arc: "Origin arc",
    arcTitle: "From initiative to movement",
    milestones,
    valuesLabel: "Mission & values",
    valuesTitle: "We exist to create useful software and capable builders.",
    values,
    storyParagraphs: [
      "TechSquad Cameroon began as a student-led initiative at VISHI Higher Institute and is growing into a technology team focused on useful, locally relevant digital work. Our story is rooted in Douala, where students and young professionals came together to learn software engineering, web development, design, branding, and project leadership by building together. That beginning still shapes how we work: we value curiosity, shared responsibility, and solutions that people can actually use.",
      "We believe Cameroon has talented builders with ideas worth supporting. A website or software platform should not feel disconnected from the realities of its users. It should be accessible on common devices, communicate clearly, and solve a real problem for a business, school, community, or individual. Our team therefore combines technical implementation with listening, research, visual communication, testing, and ongoing learning. This makes our web development and software projects more useful from the first conversation through launch.",
      "Our work includes client software services, student-focused initiatives, community events, and training opportunities. LaneForge represents our long-term commitment to helping young people understand career possibilities and develop practical skills. As TechSquad grows from Douala to wider Cameroon and Africa, we remain committed to building trustworthy technology, sharing knowledge, and creating opportunities for the next generation of developers, designers, and digital leaders.",
    ],
    galleryLabel: "Activity history",
    galleryTitle: "A living gallery for TECHSQUAD moments.",
    galleryIntro: "This section is ready for photos, event notes, and updates from conferences, hackathons, trainings, and project work.",
    activityGallery,
    storyIllustration:
      "Illustration of TechSquad's connected learning and building community",
    rootsLabel: "Our roots · Douala",
    rootsDate: "Douala · October 2025",
    illustrationNodes: ["LEARN", "BUILD", "SHARE", "GROW"],
  },
  fr: {
    kicker: "Notre histoire",
    title: "Tout a commencé avec des étudiants.",
    focus: "Construire pour l’Afrique.",
    intro: "TECHSQUAD Cameroon est née à VISHI Higher Institute en octobre 2025. L’équipe crée des logiciels, forme de jeunes talents et prépare le lancement de LaneForge.",
    vishiLabel: "Racines institutionnelles",
    vishiTitle: "VISHI Higher Institute of Cameroon",
    vishiBody: "VISHI Higher Institute of Cameroon est un établissement privé d’enseignement supérieur, agréé et fondé en 2020 à Douala, dans la région du Littoral au Cameroun. Reconnu par le ministère de l’Enseignement supérieur (MINESUP), l’établissement propose des formations professionnelles à plusieurs niveaux.",
    vishiAuthority: "N° d’autorisation : 21-04405/I/MINESUP/SG/DDES/SD.ESUP/SDA/NA",
    vishiLocation: "Bonabéri, derrière l’usine Nestlé à Minkwele",
    vishiCampus: "Établissement polytechnique privé agréé",
    vishiPrograms: "Formations professionnelles à plusieurs niveaux",
    arc: "Notre parcours",
    arcTitle: "D’une initiative à un mouvement",
    milestones: [
      { year: "Octobre 2025", title: "Début à VISHI Higher Institute", body: "TECHSQUAD est née d’une initiative étudiante fondée sur l’apprentissage, la collaboration et la résolution concrète de problèmes logiciels." },
      { year: "30 novembre 2025", title: "Conférence CodeConnect", body: "L’équipe a présenté LaneForge, une plateforme qui aide les jeunes et les étudiants à trouver des parcours professionnels adaptés et à acquérir de vraies compétences." },
      { year: "6–7 avril 2026", title: "CAMIHACK 2026 à Buea", body: "TECHSQUAD a participé à son premier hackathon, noué des contacts importants et appris auprès d’autres acteurs du numérique." },
      { year: "2026", title: "Services aux clients et communauté étudiante", body: "Tout en préparant le lancement de LaneForge, l’équipe a commencé à proposer ses services à des clients et à développer une communauté d’étudiants." },
    ],
    valuesLabel: "Mission et valeurs",
    valuesTitle: "Créer des logiciels utiles et accompagner des talents.",
    values: [
      { icon: Compass, title: "Impact en Afrique", body: "Nous nous attaquons aux défis concrets des étudiants, des jeunes, des communautés et de l’accès au numérique." },
      { icon: BookOpen, title: "Apprendre en construisant", body: "Les membres progressent grâce à de vrais projets, au travail d’équipe, aux hackathons et au mentorat." },
      { icon: Users, title: "Esprit d’équipe", body: "Les équipes de design, de développement, de croissance et d’opérations avancent ensemble." },
      { icon: Rocket, title: "Infrastructure logicielle", body: "Notre objectif à long terme est de créer des solutions logicielles qui contribuent à l’avenir numérique de l’Afrique." },
    ],
    galleryLabel: "Nos activités",
    galleryTitle: "Les moments qui font vivre TECHSQUAD.",
    galleryIntro: "Retrouvez ici des photos, des récits et des actualités de nos conférences, hackathons, formations et projets.",
    activityGallery: [
      {
        title: "Présentation à CodeConnect",
        caption: "Présentation de LaneForge et de la vision de l’équipe pour l’accompagnement professionnel.",
        imageUrl: codeconnectPhoto,
      },
      {
        title: "Réunion d’équipe",
        caption: "Préparer les prochains projets, mettre les idées en commun et affiner la feuille de route.",
        imageUrl: teamMeetingPhoto,
      },
      {
        title: "Atelier de projets",
        caption: "Créer ensemble des sites web, des tableaux de bord et des outils numériques.",
        imageUrl: vishiCampusImage,
      },
    ],
    storyParagraphs: [
      "TechSquad Cameroon est née d’une initiative étudiante à VISHI Higher Institute et devient une équipe technologique tournée vers des solutions numériques utiles et adaptées au contexte local. Notre histoire commence à Douala, où des étudiants et de jeunes professionnels se sont réunis pour apprendre l’ingénierie logicielle, le développement web, le design, la création de marque et la gestion de projet en construisant ensemble. Cette origine guide toujours notre façon de travailler : nous valorisons la curiosité, la responsabilité partagée et les solutions réellement utiles.",
      "Nous sommes convaincus que le Cameroun compte des talents et des idées qui méritent d’être accompagnés. Un site web ou une plateforme logicielle doit tenir compte de la réalité de ses utilisateurs. Elle doit être accessible sur les appareils courants, communiquer clairement et répondre à un vrai besoin d’une entreprise, d’une école, d’une communauté ou d’un particulier. C’est pourquoi notre équipe associe réalisation technique, écoute, recherche, communication visuelle, tests et apprentissage continu. Nos projets web et logiciels gagnent ainsi en utilité, de la première discussion jusqu’à leur lancement.",
      "Nos activités comprennent des services logiciels pour les clients, des initiatives étudiantes, des événements communautaires et des occasions de formation. LaneForge illustre notre engagement à long terme : aider les jeunes à découvrir des possibilités de carrière et à acquérir des compétences pratiques. À mesure que TechSquad se développe de Douala vers le Cameroun et l’Afrique, nous voulons continuer à créer des technologies fiables, à partager les connaissances et à ouvrir des possibilités à la prochaine génération de développeurs, de designers et de responsables du numérique.",
    ],
    storyIllustration:
      "Illustration de la communauté TechSquad, qui apprend et construit ensemble",
    rootsLabel: "Nos racines · Douala",
    rootsDate: "Douala · Octobre 2025",
    illustrationNodes: ["APPRENDRE", "CONSTRUIRE", "PARTAGER", "GRANDIR"],
  },
} as const;

function AboutPage() {
  const { language, effectiveReduceMotion: shouldReduceMotion } = usePreferences();
  const t = useT();
  const text = aboutCopy[language];

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

      <section className="bg-[#071733] px-4 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-lg border border-white/12 bg-white/5 shadow-[0_22px_70px_rgba(0,0,0,0.26)]">
              <img
                src={vishiCampusImage}
                alt={language === "fr" ? "Campus de VISHI Higher Institute" : "VISHI Higher Institute campus"}
                loading="lazy"
                className="h-[320px] w-full object-cover sm:h-[430px]"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="order-1 lg:order-2">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#35b7ff]">{text.vishiLabel}</p>
            <h2 className="mt-4 text-4xl font-bold tracking-normal text-white sm:text-5xl">
              <ScrambleText text={text.vishiTitle} />
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/72">
              {text.vishiBody}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                { icon: ShieldCheck, label: text.vishiAuthority },
                { icon: MapPin, label: text.vishiLocation },
                { icon: BookOpen, label: text.vishiCampus },
                { icon: Users, label: text.vishiPrograms },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex min-h-20 items-start gap-3 border-t border-white/14 pt-4">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[#35b7ff]" />
                  <span className="text-sm font-semibold leading-6 text-white/86">{label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pt-20 pb-16 sm:pt-24">
        <Reveal className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">{text.arc}</p>
          <h2 className="mt-3 text-4xl font-bold tracking-normal sm:text-5xl"><ScrambleText text={text.arcTitle} /></h2>
        </Reveal>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-pink to-gold md:left-1/2 md:-translate-x-1/2" />
          <ol className="space-y-14">
            {text.milestones.map((m, i) => (
              <motion.li
                key={m.year}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`relative grid md:grid-cols-2 md:gap-12 ${i % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2"}`}
              >
                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="inline-flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-gradient-hero sm:text-4xl">{m.year}</span>
                  </div>
                  <h3 className="mt-2 text-2xl font-bold tracking-normal">{m.title}</h3>
                  <p className="mt-2 text-muted-foreground">{m.body}</p>
                </div>
                <span className="absolute left-4 top-2 grid h-4 w-4 -translate-x-1/2 place-items-center rounded-full bg-background ring-4 ring-pink shadow-pink md:left-1/2">
                  <span className="h-1.5 w-1.5 rounded-full bg-pink" />
                </span>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20">
        <div className="relative isolate overflow-hidden rounded-[2rem] border border-brand-blue/10 bg-gradient-to-br from-brand-blue/[0.06] via-background to-brand-sky/[0.1] px-6 py-8 shadow-[0_28px_90px_rgba(9,35,74,0.08)] sm:px-10 sm:py-12 lg:px-14 lg:py-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 top-1/3 h-64 w-64 rounded-full bg-brand-sky/10 blur-3xl"
          />
          <div className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(300px,0.92fr)] lg:gap-14">
            <div className="space-y-6">
              <motion.p
                initial={false}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55 }}
                className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-brand-blue"
              >
                <span className="h-px w-8 bg-brand-sky" />
                {text.rootsLabel}
              </motion.p>
              <motion.h2
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.06 }}
                className="max-w-xl text-4xl font-bold leading-tight tracking-normal sm:text-5xl"
              >
                A Cameroon technology team built in{" "}
                <span className="text-gradient-hero">Douala</span>
              </motion.h2>
              <div className="space-y-5">
                {text.storyParagraphs.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={false}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.55, delay: shouldReduceMotion ? 0 : index * 0.1 }}
                    className={`text-sm leading-7 sm:text-base sm:leading-8 ${
                      index === 0 ? "text-foreground/90" : "text-muted-foreground"
                    }`}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </div>

            <motion.div
              initial={false}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="relative mx-auto w-full max-w-lg"
              role="img"
              aria-label={text.storyIllustration}
            >
              <div className="absolute inset-8 rounded-full bg-brand-sky/15 blur-3xl" />
              <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/70 bg-[#071733] shadow-[0_24px_80px_rgba(4,20,50,0.28)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(53,183,255,0.18),transparent_56%)]" />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-25 [background-image:radial-gradient(rgba(148,205,255,0.7)_0.7px,transparent_0.7px)] [background-size:22px_22px]"
                />
                <svg
                  aria-hidden="true"
                  viewBox="0 0 420 420"
                  className="absolute inset-0 h-full w-full"
                  fill="none"
                >
                  <motion.path
                    d="M210 210 104 105M210 210 318 110M210 210 326 306M210 210 102 314M104 105 318 110 326 306 102 314Z"
                    stroke="url(#story-line)"
                    strokeWidth="1.5"
                    strokeDasharray="5 8"
                    initial={false}
                    whileInView={shouldReduceMotion ? undefined : { pathLength: 1, opacity: 0.8 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.6, ease: "easeInOut" }}
                    className="animate-pulse motion-reduce:animate-none"
                  />
                  <defs>
                    <linearGradient id="story-line" x1="80" y1="85" x2="340" y2="340">
                      <stop stopColor="#35B7FF" />
                      <stop offset="1" stopColor="#91D7FF" stopOpacity=".4" />
                    </linearGradient>
                  </defs>
                  {[
                    [104, 105],
                    [318, 110],
                    [326, 306],
                    [102, 314],
                  ].map(([cx, cy]) => (
                    <motion.circle
                      key={`${cx}-${cy}`}
                      cx={cx}
                      cy={cy}
                      r="5"
                      fill="#65C7FF"
                      initial={false}
                      className="animate-pulse motion-reduce:animate-none"
                    />
                  ))}
                </svg>
                <div className="absolute left-1/2 top-1/2 grid h-32 w-32 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-brand-sky/45 bg-[#0b2449]/90 text-center shadow-[0_0_55px_rgba(53,183,255,0.2)] sm:h-36 sm:w-36">
                  <div>
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.23em] text-brand-sky">
                      TechSquad
                    </span>
                    <span className="mt-2 block text-xl font-bold text-white">{t("together")}</span>
                  </div>
                </div>
                {[
                  { label: text.illustrationNodes[0], className: "left-[8%] top-[16%]" },
                  { label: text.illustrationNodes[1], className: "right-[7%] top-[17%]" },
                  { label: text.illustrationNodes[2], className: "right-[7%] bottom-[17%]" },
                  { label: text.illustrationNodes[3], className: "left-[8%] bottom-[16%]" },
                ].map((node, index) => (
                  <motion.div
                    key={node.label}
                    initial={false}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: shouldReduceMotion ? 0 : index * 0.1,
                    }}
                    className={`absolute ${node.className} animate-pulse rounded-full border border-white/15 bg-white/[0.08] px-3 py-2 text-[10px] font-bold tracking-[0.18em] text-white/85 shadow-lg backdrop-blur-sm motion-reduce:animate-none`}
                  >
                    {node.label}
                  </motion.div>
                ))}
                <div className="absolute inset-x-5 bottom-5 flex items-center justify-between gap-2 rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/65 backdrop-blur-md sm:inset-x-7 sm:bottom-7">
                  <span>VISHI Higher Institute</span>
                  <span className="h-1 w-1 rounded-full bg-brand-sky" />
                  <span>{text.rootsDate}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-blue">{text.galleryLabel}</p>
          <h2 className="mt-3 text-4xl font-bold tracking-normal sm:text-5xl">
            <ScrambleText text={text.galleryTitle} />
          </h2>
          <p className="mt-5 text-muted-foreground">{text.galleryIntro}</p>
        </Reveal>
        <div className="mt-10">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {text.activityGallery.map((item) => (
                <CarouselItem key={item.title} className="pl-4 basis-full md:basis-1/2 xl:basis-1/3">
                  <motion.figure
                    variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
                    transition={{ duration: 0.6 }}
                    className="overflow-hidden rounded-lg bg-card"
                  >
                    <div className="relative h-[320px] overflow-hidden bg-[#071733] sm:h-[380px]">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(2,6,23,0.18)_55%,rgba(2,6,23,0.82)_100%)]" />
                      <div className="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-md bg-white/90 text-brand-blue shadow-glass">
                        <Camera className="h-5 w-5" />
                      </div>
                      <figcaption className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-5">
                        <h3 className="text-lg font-bold sm:text-xl">{item.title}</h3>
                        <p className="mt-1 max-w-md text-sm text-white/82">{item.caption}</p>
                      </figcaption>
                    </div>
                  </motion.figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-4 flex items-center justify-end gap-2">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-blue">{text.valuesLabel}</p>
          <h2 className="mt-3 text-4xl font-bold tracking-normal sm:text-5xl">
            <ScrambleText text={text.valuesTitle} />
          </h2>
        </Reveal>
        <Stagger className="mt-12 grid gap-6 md:grid-cols-2">
          {text.values.map((v, idx) => (
            <motion.div
              key={v.title}
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6 }}
              className={`relative overflow-hidden rounded-2xl p-8 shadow-glass ${
                idx % 2 === 0
                  ? "border border-primary/30 bg-gradient-to-br from-primary/8 to-primary/2"
                  : "border border-gold/40 bg-gradient-to-br from-gold/12 to-transparent"
              }`}
            >
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl text-primary-foreground shadow-elegant ${idx % 2 === 0 ? "bg-gradient-primary" : "bg-gradient-gold"}`}>
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-2xl font-bold">{v.title}</h3>
              <p className="mt-2 text-muted-foreground">{v.body}</p>
            </motion.div>
          ))}
        </Stagger>
      </section>
    </SiteLayout>
  );
}
