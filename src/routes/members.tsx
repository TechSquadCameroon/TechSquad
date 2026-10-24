import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteLayout } from "@/components/site/SiteLayout";
import { AmbientBackground } from "@/components/site/AmbientBackground";
import { Reveal, ScrambleText, Stagger } from "@/components/animations/Reveal";
import { Github, Linkedin } from "lucide-react";
import { usePreferences } from "@/lib/preferences";
import groupPhoto from "../../images/group photo.png";
import celinePhoto from "../../images/Professional pictures_/Celine.png";
import champlainPhoto from "../../images/Professional pictures_/Champlain.jpg";
import darlingtonPhoto from "../../images/Professional pictures_/Darlington.jpg";
import denisPhoto from "../../images/Professional pictures_/Denis.png";
import emmaPhoto from "../../images/Professional pictures_/Emma.jpg";
import jessicaPhoto from "../../images/Professional pictures_/Jessica.jpg";
import luciePhoto from "../../images/Professional pictures_/Lucie.jpeg";
import adrianPhoto from "../../images/Professional pictures_/Adrian.jpeg";
import preciousPhoto from "../../images/Professional pictures_/Precious.jpg";
import ramsonPhoto from "../../images/Professional pictures_/Ramson.jpg";
import meeknessPhoto from "../../images/Professional pictures_/Meekness.jpg";
import williamsPhoto from "../../images/Professional pictures_/Williams.jpg";
import sorellePhoto from "../../images/Professional pictures_/Sorelle.jpg";
import { buildPageHead, DEFAULT_OG_IMAGE } from "@/lib/seo";

export const Route = createFileRoute("/members")({
  head: () =>
    buildPageHead({
      title: "Team - TechSquad Cameroon | builders, designers, and growth leads",
      description:
        "Meet the TechSquad Cameroon team: software developers, designers, and growth leads building practical digital products.",
      path: "/members",
      image: DEFAULT_OG_IMAGE,
    }),
  component: MembersPage,
});

const members = [
  {
    name: "EDJAUGUE MOUSSOMBO CHAMPLAIN",
    position: "FOUNDER",
    standing: "CO-FOUNDER",
    division: "LEADERSHIP",
    field: "Software Engineering",
    education: "BTech · Software Engineering — University of Bamenda",
    skills:
      "Leadership, project management, software architecture, teaching, mentoring, and social media management.",
    message:
      "Technology creates possibilities, but leadership turns those possibilities into measurable impact. That is where TECHSQUAD comes in: building solutions, empowering people, and transforming communities.",
    linkedin: "https://www.linkedin.com/in/emc-",
    github: "https://github.com/cme-byte",
    image: champlainPhoto,
  },
  {
    name: "GWANMESIA EMMA JULIENNE BIDMIA",
    position: "TECHNICAL DIVISION LEAD",
    standing: "CO-FOUNDER",
    division: "TECHNICAL DIVISION",
    field: "Software Engineering",
    education: "BTech · Software Engineering — VISHI Higher Institute",
    skills: "Full-stack development, project management, graphic design, and vibe coding cleanup.",
    message:
      "Technology can solve real problems with minimal resources. TECHSQUAD proves that impactful systems need smart engineering and team spirit.",
    linkedin: "https://www.linkedin.com/in/gwanmesia-emma-julienne-bidmia-844542330/",
    github: "https://github.com/Emma-Julienne",
    image: emmaPhoto,
  },
  {
    name: "KIMBI DENIS KINJUO",
    position: "HEAD OF GROWTH",
    standing: "CO-FOUNDER",
    division: "GROWTH DIVISION",
    field: "Software Engineering",
    education: "HND · Software Engineering — VISHI Higher Institution",
    skills:
      "Frontend development, prompt engineering, social media management, and import/export specialization.",
    message:
      "TECHSQUAD empowers Africa's digital future in Cameroon by creating infrastructure software solutions.",
    linkedin: "https://www.linkedin.com/in/kimbiDenis",
    github: "https://github.com/kimbi12",
    image: denisPhoto,
  },
  {
    name: "MOGAH CELINE",
    position: "DISCIPLINARY LEAD",
    standing: "CO-FOUNDER",
    division: "OPERATION DIVISION",
    field: "Software Engineering",
    education: "HND · Software Engineering — Vishi Higher Institute",
    skills: "Web development, leadership, teamwork, and communication.",
    message:
      "I joined TECHSQUAD to learn, grow, collaborate with like-minded people, and build digital solutions that create impact in Africa.",
    linkedin: "",
    github: "",
    image: celinePhoto,
  },
  {
    name: "NFOR PRECIOUS",
    position: "MEMBER – GROWTH TEAM",
    standing: "CO-FOUNDER",
    division: "GROWTH TEAM",
    field: "Growth Team",
    education: "",
    skills:
      "Graphic design, UI/UX design, branding and visual identity, and frontend web development.",
    message:
      "I am passionate about using technology to solve real-world problems and excited to help young people create meaningful impact.",
    linkedin: "https://www.linkedin.com/in/lamngwa-precious-nfor-54429b33a/",
    github: "",
    image: preciousPhoto,
  },
  {
    name: "SAHA KEUDJEU SORELLE",
    position: "HEAD OF GROWTH",
    standing: "CO-FOUNDER",
    division: "OPERATION DIVISION",
    field: "Software Engineering",
    education: "HND · Software Engineering — VISHI Higher Institute",
    skills: "C/C++, HTML, CSS, PHP, MySQL database management, and UI/UX design with Canva.",
    message:
      "TECHSQUAD is a place to build innovative solutions, collaborate with passionate developers, and solve problems that make positive impact.",
    linkedin: "https://www.linkedin.com/in/sorelle-saha-keudjeu",
    github: "",
    image: sorellePhoto,
  },
  {
    name: "KANGNUOH ADRIAN DEM",
    position: "MEMBER – GROWTH DIVISION",
    standing: "",
    division: "GROWTH DIVISION",
    field: "Software Engineering",
    education: "A-level / High School Diploma · Software Engineering — VISHI Higher Institute",
    skills: "Public speaking and marketing.",
    message:
      "I am passionate about solving basic African problems with technology and helping Africa know what TECHSQUAD has to offer.",
    linkedin: "https://www.linkedin.com/in/kangnouhadrian",
    github: "https://github.com/kangnuohadrian-max",
    image: adrianPhoto,
  },
  {
    name: "NGAMFON DALENTON SEMERNYUY",
    position: "CO-FOUNDER",
    standing: "CO-FOUNDER",
    division: "TECHNICAL DIVISION",
    field: "Software Engineering",
    education: "HND · Software Engineering — Vishi Higher Institute",
    skills: "JavaScript, React, Laravel, Flutter, critical thinking, and problem solving.",
    message:
      "Technology turns real problems into working solutions people actually use. That is what TECHSQUAD is about.",
    linkedin: "https://www.linkedin.com/in/ngamfon-dalenton-semernyuy-1418142b2",
    github: "https://github.com/King-Darlington",
    image: darlingtonPhoto,
  },
  {
    name: "TARSHI WILLIAMS NGARFON",
    position: "CO-FOUNDER",
    standing: "CO-FOUNDER",
    division: "TECHNICAL DIVISION",
    field: "Software Engineering",
    education: "HND · Computer Engineering — VHI",
    skills:
      "HTML, CSS, JavaScript, React, Node.js, PHP, Laravel, Supabase, Git/GitHub, UI/UX, problem solving, and critical thinking.",
    message: "Technology transforms ideas into real-world solutions that improve people's lives.",
    linkedin: "https://www.linkedin.com/in/tarshiwilliams",
    github: "https://github.com/Wallis237",
    image: williamsPhoto,
  },
  {
    name: "FON RAMSEY TICHA",
    position: "CO-FOUNDER",
    standing: "CO-FOUNDER",
    division: "TECHNICAL DIVISION",
    field: "Frontend Development and UI/UX",
    education: "HND · Software Engineering — Vishi Higher Institute",
    skills: "Frontend development, interface cleanup, and user-focused implementation.",
    message:
      "What draws me to technology is turning a real-world problem into a working solution people rely on.",
    linkedin: "https://www.linkedin.com/in/ramsey237",
    github: "https://github.com/ramsey237",
    image: ramsonPhoto,
    imagePosition: "center 15%",
  },
  {
    name: "WIRNKAR MARIMECKNESS",
    position: "CO-FOUNDER",
    standing: "CO-FOUNDER",
    division: "OPERATION DIVISION",
    field: "Software Engineering",
    education: "HND · Software Engineering — VISHI Higher Institute",
    skills: "Learning, software problem solving, and collaborative project work.",
    message:
      "I am excited to keep growing through real team projects and practical digital solutions.",
    linkedin: "https://www.linkedin.com/in/wirnkarmeekness/",
    github: "",
    image: meeknessPhoto,
  },
  {
    name: "KIMBI RINYU JESSICA",
    position: "MEMBER – GROWTH DIVISION",
    standing: "",
    division: "GROWTH DIVISION",
    field: "Content Creation and Brand Growth",
    education: "HND · Computer Graphics and Web Design — INUBIL",
    skills: "Video editing, content strategy, and graphic design.",
    message:
      "TECHSQUAD Cameroon equips young people with practical tech skills and builds innovative software solutions for real-world challenges.",
    linkedin: "https://www.linkedin.com/in/kimbi-jessica-b854543b3/",
    github: "",
    image: jessicaPhoto,
  },
  {
    name: "FORGHAB FOPOPSE LUCIE ANGE",
    position: "CO-FOUNDER",
    standing: "CO-FOUNDER",
    division: "OPERATION DIVISION",
    field: "Software Engineering",
    education: "HND · Software Engineering — Vishi Higher Institute",
    skills: "Web development, graphics, leadership, communication, and UI/UX design.",
    message:
      "I am passionate about using technology to solve real-world problems and growing with people who share the same vision.",
    linkedin: "https://www.linkedin.com/in/forghab-ange",
    github: "https://github.com/FORGHABANGE",
    image: luciePhoto,
  },
];

const copy = {
  en: {
    kicker: "The team",
    titlePrefix: "Meet the ",
    titleFocus: "TECHSQUAD builders.",
    intro:
      "Each card is matched to the member's name and verified social links where they were provided.",
    position: "Position",
    standing: "Membership standing",
    division: "Division",
    field: "Professional field",
    education: "Education",
    skills: "Skills",
    missingLink: "Link not available yet",
    teamPhotoLabel: "Full-frame team photo",
    teamPhotoTitle: "Built together, growing together.",
    teamPhotoDescription:
      "This showcase puts the team front and center with a larger hero image, so the members page feels like a true team brand moment instead of a simple list.",
    portrait: "professional portrait",
    linkedIn: "LinkedIn",
    github: "GitHub",
  },
  fr: {
    kicker: "L’équipe",
    titlePrefix: "Rencontrez les ",
    titleFocus: "bâtisseurs de TECHSQUAD.",
    intro:
      "Chaque fiche présente le membre concerné et ses liens professionnels vérifiés, lorsqu’ils sont disponibles.",
    position: "Fonction",
    standing: "Statut dans l’équipe",
    division: "Division",
    field: "Domaine professionnel",
    education: "Formation",
    skills: "Compétences",
    missingLink: "Lien non disponible pour le moment",
    teamPhotoLabel: "Photo d’équipe en plein format",
    teamPhotoTitle: "Construire et grandir ensemble.",
    teamPhotoDescription:
      "Cette présentation met l’équipe à l’honneur grâce à une grande photo, pour faire de cette page un véritable espace dédié aux membres, plutôt qu’une simple liste.",
    portrait: "portrait professionnel",
    linkedIn: "LinkedIn",
    github: "GitHub",
  },
} as const;

const frenchRoles: Record<string, string> = {
  FOUNDER: "FONDATEUR",
  "TECHNICAL DIVISION LEAD": "RESPONSABLE DE LA DIVISION TECHNIQUE",
  "HEAD OF GROWTH": "RESPONSABLE DU DÉVELOPPEMENT",
  "DISCIPLINARY LEAD": "RESPONSABLE DE LA DISCIPLINE",
  "MEMBER – GROWTH TEAM": "MEMBRE – ÉQUIPE CROISSANCE",
  "MEMBER – GROWTH DIVISION": "MEMBRE – DIVISION CROISSANCE",
  "CO-FOUNDER": "COFONDATEUR",
};

const frenchDivisions: Record<string, string> = {
  LEADERSHIP: "DIRECTION",
  "TECHNICAL DIVISION": "DIVISION TECHNIQUE",
  "GROWTH DIVISION": "DIVISION CROISSANCE",
  "OPERATION DIVISION": "DIVISION DES OPÉRATIONS",
  "GROWTH TEAM": "ÉQUIPE CROISSANCE",
};

const frenchFields: Record<string, string> = {
  "Software Engineering": "Ingénierie logicielle",
  "Growth Team": "Équipe croissance",
  "Frontend Development and UI/UX": "Développement front-end et UI/UX",
  "Content Creation and Brand Growth": "Création de contenu et développement de marque",
};

const frenchEducation: Record<string, string> = {
  "BTech · Software Engineering — University of Bamenda":
    "BTech · Ingénierie logicielle — University of Bamenda",
  "BTech · Software Engineering — VISHI Higher Institute":
    "BTech · Ingénierie logicielle — VISHI Higher Institute",
  "HND · Software Engineering — VISHI Higher Institution":
    "HND · Ingénierie logicielle — VISHI Higher Institution",
  "HND · Software Engineering — Vishi Higher Institute":
    "HND · Ingénierie logicielle — Vishi Higher Institute",
  "HND · Software Engineering — VISHI Higher Institute":
    "HND · Ingénierie logicielle — VISHI Higher Institute",
  "A-level / High School Diploma · Software Engineering — VISHI Higher Institute":
    "A-level / Diplôme de fin d’études secondaires · Ingénierie logicielle — VISHI Higher Institute",
  "HND · Computer Engineering — VHI":
    "HND · Génie informatique — VHI",
  "HND · Computer Graphics and Web Design — INUBIL":
    "HND · Infographie et conception web — INUBIL",
};

const frenchProfiles: Record<string, { skills: string; message: string }> = {
  "EDJAUGUE MOUSSOMBO CHAMPLAIN": {
    skills: "Leadership, gestion de projet, architecture logicielle, enseignement, mentorat et gestion des réseaux sociaux.",
    message:
      "La technologie ouvre des possibilités, mais le leadership les transforme en résultats concrets. C’est là que TECHSQUAD intervient : créer des solutions, accompagner les personnes et faire évoluer les communautés.",
  },
  "GWANMESIA EMMA JULIENNE BIDMIA": {
    skills: "Développement full-stack, gestion de projet, design graphique et amélioration de code généré par IA.",
    message:
      "La technologie peut résoudre de vrais problèmes avec peu de moyens. TECHSQUAD montre que des systèmes efficaces reposent sur une ingénierie réfléchie et un véritable esprit d’équipe.",
  },
  "KIMBI DENIS KINJUO": {
    skills: "Développement front-end, ingénierie de prompts, gestion des réseaux sociaux et spécialisation en import-export.",
    message:
      "TECHSQUAD contribue à l’avenir numérique de l’Afrique au Cameroun en créant des solutions logicielles d’infrastructure.",
  },
  "MOGAH CELINE": {
    skills: "Développement web, leadership, travail d’équipe et communication.",
    message:
      "J’ai rejoint TECHSQUAD pour apprendre, progresser, collaborer avec des personnes qui partagent mes idées et créer des solutions numériques utiles à l’Afrique.",
  },
  "NFOR PRECIOUS": {
    skills: "Design graphique, conception UI/UX, image de marque et identité visuelle, développement web front-end.",
    message:
      "J’aime utiliser la technologie pour résoudre des problèmes concrets et je suis heureuse d’aider les jeunes à avoir un impact positif.",
  },
  "SAHA KEUDJEU SORELLE": {
    skills: "C/C++, HTML, CSS, PHP, gestion de bases de données MySQL et conception UI/UX avec Canva.",
    message:
      "TECHSQUAD permet de créer des solutions innovantes, de collaborer avec des développeurs passionnés et de résoudre des problèmes avec un impact positif.",
  },
  "KANGNUOH ADRIAN DEM": {
    skills: "Prise de parole en public et marketing.",
    message:
      "J’aime résoudre les problèmes du quotidien en Afrique grâce à la technologie et faire connaître les solutions proposées par TECHSQUAD.",
  },
  "NGAMFON DALENTON SEMERNYUY": {
    skills: "JavaScript, React, Laravel, Flutter, esprit critique et résolution de problèmes.",
    message:
      "La technologie transforme de vrais problèmes en solutions concrètes que les gens utilisent vraiment. C’est l’essence même de TECHSQUAD.",
  },
  "TARSHI WILLIAMS NGARFON": {
    skills: "HTML, CSS, JavaScript, React, Node.js, PHP, Laravel, Supabase, Git/GitHub, UI/UX, résolution de problèmes et esprit critique.",
    message:
      "La technologie transforme les idées en solutions concrètes qui améliorent la vie des gens.",
  },
  "FON RAMSEY TICHA": {
    skills: "Développement front-end, amélioration d’interfaces et réalisation centrée sur les utilisateurs.",
    message:
      "Ce qui m’attire dans la technologie, c’est la possibilité de transformer un problème concret en une solution fiable.",
  },
  "WIRNKAR MARIMECKNESS": {
    skills: "Apprentissage, résolution de problèmes logiciels et travail collaboratif sur des projets.",
    message:
      "Je suis enthousiaste à l’idée de continuer à progresser grâce à de vrais projets d’équipe et à des solutions numériques concrètes.",
  },
  "KIMBI RINYU JESSICA": {
    skills: "Montage vidéo, stratégie de contenu et design graphique.",
    message:
      "TECHSQUAD Cameroon donne aux jeunes des compétences technologiques pratiques et crée des solutions logicielles innovantes face aux défis du quotidien.",
  },
  "FORGHAB FOPOPSE LUCIE ANGE": {
    skills: "Développement web, graphisme, leadership, communication et conception UI/UX.",
    message:
      "J’aime utiliser la technologie pour résoudre des problèmes concrets et progresser aux côtés de personnes qui partagent la même vision.",
  },
};

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function MembersPage() {
  const { language } = usePreferences();
  const text = copy[language];

  return (
    <SiteLayout>
      <section className="relative isolate">
        <AmbientBackground />
        <div className="mx-auto max-w-5xl px-4 pt-24 pb-36 text-center sm:pb-44">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-blue">
              {text.kicker}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 text-5xl font-bold leading-[1.05] tracking-normal sm:text-7xl">
              {text.titlePrefix}
              <span className="text-gradient-hero">
                <ScrambleText text={text.titleFocus} />
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">{text.intro}</p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-5 sm:pb-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] bg-card shadow-[0_25px_90px_rgba(3,13,29,0.45)]">
            <img
              src={groupPhoto}
              alt={text.teamPhotoLabel}
              loading="lazy"
              className="h-[340px] w-full object-cover md:h-[480px]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,12,23,0.1),rgba(4,12,23,0.4)_50%,rgba(4,12,23,0.86))]" />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8">
              <div className="max-w-2xl p-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-sky drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
                  {text.teamPhotoLabel}
                </p>
                <h2 className="mt-2 text-2xl font-black text-white drop-shadow-[0_3px_20px_rgba(0,0,0,0.8)] sm:text-3xl md:text-4xl">
                  <ScrambleText text={text.teamPhotoTitle} />
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-6 text-white/88 drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)] sm:text-base">
                  {text.teamPhotoDescription}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-8 pb-24 sm:pt-12">
        <Stagger className="grid gap-5 md:grid-cols-2 xl:grid-cols-3" stagger={0.05}>
          {members.map((member, index) => {
            const profile = frenchProfiles[member.name];
            const position =
              language === "fr" ? frenchRoles[member.position] ?? member.position : member.position;
            const division =
              language === "fr" ? frenchDivisions[member.division] ?? member.division : member.division;
            const field =
              language === "fr" ? frenchFields[member.field] ?? member.field : member.field;
            const education =
              language === "fr"
                ? frenchEducation[member.education] ?? member.education
                : member.education;
            return (
            <motion.article
              key={member.name}
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.55 }}
              className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card shadow-glass transition-all hover:-translate-y-1 hover:border-brand-sky/60 hover:shadow-elegant"
            >
              <div
                className="relative grid aspect-[4/5] place-items-center overflow-hidden p-0"
                style={{ backgroundColor: index % 2 === 0 ? "#0b2f52" : "#0b1730" }}
              >
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.13),transparent_45%)]" />
                {member.image ? (
                  <img
                    src={member.image}
                    alt={`${member.name} ${text.portrait}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    style={{ objectPosition: member.imagePosition ?? "center" }}
                  />
                ) : (
                  <span className="grid h-full w-full place-items-center bg-white/5 text-4xl font-black tracking-normal text-white shadow-glass backdrop-blur">
                    {initials(member.name)}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold tracking-normal">{member.name}</h3>
                    <p className="mt-2 inline-flex rounded-full border border-brand-blue/30 bg-brand-blue/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-blue">
                      {position}
                    </p>
                    {member.standing && (
                      <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        {text.standing}: {language === "fr" ? "COFONDATEUR" : member.standing}
                      </p>
                    )}
                  </div>
                  <div className="flex shrink-0 gap-2">
                    <a
                      aria-label={`${member.name} ${text.linkedIn}`}
                      href={member.linkedin || undefined}
                      title={member.linkedin ? `${member.name} ${text.linkedIn}` : text.missingLink}
                      target={member.linkedin ? "_blank" : undefined}
                      rel={member.linkedin ? "noreferrer" : undefined}
                      className={`grid h-9 w-9 place-items-center rounded-full border border-border transition-colors ${
                        member.linkedin
                          ? "hover:border-brand-sky hover:text-brand-blue"
                          : "pointer-events-none opacity-35"
                      }`}
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      aria-label={`${member.name} ${text.github}`}
                      href={member.github || undefined}
                      title={member.github ? `${member.name} ${text.github}` : text.missingLink}
                      target={member.github ? "_blank" : undefined}
                      rel={member.github ? "noreferrer" : undefined}
                      className={`grid h-9 w-9 place-items-center rounded-full border border-border transition-colors ${
                        member.github
                          ? "hover:border-brand-sky hover:text-brand-blue"
                          : "pointer-events-none opacity-35"
                      }`}
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <p className="mt-4 text-sm font-semibold text-foreground">
                  {text.division}: {division}
                </p>
                {member.field && (
                  <p className="mt-2 text-sm text-muted-foreground">
                    {text.field}: {field}
                  </p>
                )}
                {member.education && (
                  <p className="mt-2 text-sm text-muted-foreground">
                    {text.education}: {education}
                  </p>
                )}
                <p className="mt-2 text-sm text-muted-foreground">
                  {text.skills}: {language === "fr" ? profile?.skills ?? member.skills : member.skills}
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  {language === "fr" ? profile?.message ?? member.message : member.message}
                </p>
              </div>
            </motion.article>
            );
          })}
        </Stagger>
      </section>
    </SiteLayout>
  );
}
