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
import preciousPhoto from "../../images/Professional pictures_/Precious.jpg";
import ramsonPhoto from "../../images/Professional pictures_/Ramson.jpg";
import meeknessPhoto from "../../images/Professional pictures_/Meekness.jpg";
import williamsPhoto from "../../images/Professional pictures_/Williams.jpg";
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
    name: "Edjaugue Moussombo Champlain",
    role: "Founder and Team Leader",
    field: "Software Engineering",
    skills: "Leadership, project management, software architecture, teaching, mentoring, and social media management.",
    message: "Technology creates possibilities, but leadership turns those possibilities into measurable impact. That is where TECHSQUAD comes in: building solutions, empowering people, and transforming communities.",
    linkedin: "https://www.linkedin.com/in/emc-",
    github: "https://github.com/cme-byte",
    image: champlainPhoto,
  },
  {
    name: "Emma Julienne",
    role: "Division Lead",
    field: "Software Engineering",
    skills: "Full-stack development, project management, graphic design, and vibe coding cleanup.",
    message: "Technology can solve real problems with minimal resources. TECHSQUAD proves that impactful systems need smart engineering and team spirit.",
    linkedin: "https://www.linkedin.com/in/gwanmesia-emma-julienne-bidmia-844542330/",
    github: "https://github.com/Emma-Julienne",
    image: emmaPhoto,
  },
  {
    name: "Kimbi Denis Kinjuo",
    role: "Division Lead",
    field: "Software Engineering",
    skills: "Frontend development, prompt engineering, social media management, and import/export specialization.",
    message: "TECHSQUAD empowers Africa's digital future in Cameroon by creating infrastructure software solutions.",
    linkedin: "https://www.linkedin.com/in/kimbidenis?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    github: "https://github.com/kimbi12",
    image: denisPhoto,
  },
  {
    name: "Mogah Celine",
    role: "Division Lead",
    field: "Software Engineering",
    skills: "Web development, leadership, teamwork, and communication.",
    message: "I joined TECHSQUAD to learn, grow, collaborate with like-minded people, and build digital solutions that create impact in Africa.",
    linkedin: "",
    github: "",
    image: celinePhoto,
  },
  {
    name: "Nfor Precious",
    role: "Team Member",
    field: "Growth Team",
    skills: "Graphic design, UI/UX design, branding and visual identity, and frontend web development.",
    message: "I am passionate about using technology to solve real-world problems and excited to help young people create meaningful impact.",
    linkedin: "",
    github: "",
    image: preciousPhoto,
  },
  {
    name: "Saha Keudjeu Sorelle",
    role: "Software Engineer",
    field: "Financial Team",
    skills: "C/C++, HTML, CSS, PHP, MySQL database management, and UI/UX design with Canva.",
    message: "TECHSQUAD is a place to build innovative solutions, collaborate with passionate developers, and solve problems that make positive impact.",
    linkedin: "https://www.linkedin.com/in/sorelle-saha-keudjeu/",
    github: "",
  },
  {
    name: "Kangnuoh Adrian",
    role: "Marketing and Branding",
    field: "Software Engineering",
    skills: "Public speaking and marketing.",
    message: "I am passionate about solving basic African problems with technology and helping Africa know what TECHSQUAD has to offer.",
    linkedin: "https://www.linkedin.com/in/kangnouhadrian?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    github: "https://github.com/kangnuohadrian-max",
  },
  {
    name: "Ngamfon Darlington",
    role: "Software Developer",
    field: "Software Engineering",
    skills: "JavaScript, React, Laravel, Flutter, critical thinking, and problem solving.",
    message: "Technology turns real problems into working solutions people actually use. That is what TECHSQUAD is about.",
    linkedin: "https://www.linkedin.com/in/ngamfon-darlington-1418142b2",
    github: "https://github.com/King-Darlington",
    image: darlingtonPhoto,
  },
  {
    name: "Tarshi Williams Ngarfon",
    role: "Software Developer",
    field: "Software Engineering",
    skills: "HTML, CSS, JavaScript, React, Node.js, PHP, Laravel, Supabase, Git/GitHub, UI/UX, problem solving, and critical thinking.",
    message: "Technology transforms ideas into real-world solutions that improve people's lives.",
    linkedin: "https://www.linkedin.com/in/tarshiwilliams",
    github: "https://github.com/Wallis237",
    image: williamsPhoto,
  },
  {
    name: "Fon Ramsey",
    role: "Frontend Developer and UI/UX Vibe Code Cleanup Specialist",
    field: "Frontend Development and UI/UX",
    skills: "Frontend development, interface cleanup, and user-focused implementation.",
    message: "What draws me to technology is turning a real-world problem into a working solution people rely on.",
    linkedin: "",
    github: "",
    image: ramsonPhoto,
  },
  {
    name: "Wirnka Meekness",
    role: "Team Member",
    field: "Software Engineering",
    skills: "Learning, software problem solving, and collaborative project work.",
    message: "I am excited to keep growing through real team projects and practical digital solutions.",
    linkedin: "",
    github: "",
    image: meeknessPhoto,
  },
  {
    name: "Kimbi Jessica",
    role: "Growth Team Member",
    field: "Content Creation and Brand Growth",
    skills: "Video editing, content strategy, and graphic design.",
    message: "TECHSQUAD Cameroon equips young people with practical tech skills and builds innovative software solutions for real-world challenges.",
    linkedin: "",
    github: "",
    image: jessicaPhoto,
  },
  {
    name: "Forghab Lucie Ange",
    role: "Operation Team Member",
    field: "Software Engineering",
    skills: "Web development, graphics, leadership, communication, and UI/UX design.",
    message: "I am passionate about using technology to solve real-world problems and growing with people who share the same vision.",
    linkedin: "",
    github: "https://github.com/FORGHABANGE?tab=repositories",
  },
];

const copy = {
  en: {
    kicker: "The team",
    titlePrefix: "Meet the ",
    titleFocus: "TECHSQUAD builders.",
    intro: "Each card is matched to the member's name and verified social links where they were provided.",
    field: "Field",
    skills: "Skills",
    missingLink: "Link not available yet",
  },
  fr: {
    kicker: "L'equipe",
    titlePrefix: "Rencontrez les ",
    titleFocus: "builders de TECHSQUAD.",
    intro: "Chaque carte correspond au nom du membre et aux liens sociaux verifies lorsqu'ils sont disponibles.",
    field: "Domaine",
    skills: "Competences",
    missingLink: "Lien pas encore disponible",
  },
} as const;

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

      <section className="mx-auto max-w-7xl px-4 pb-5 sm:pb-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] bg-card shadow-[0_25px_90px_rgba(3,13,29,0.45)]">
            <img
              src={groupPhoto}
              alt="TECHSQUAD group photo"
              loading="lazy"
              className="h-[340px] w-full object-cover md:h-[480px]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,12,23,0.1),rgba(4,12,23,0.4)_50%,rgba(4,12,23,0.86))]" />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8">
              <div className="max-w-2xl p-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-sky drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
                  Full-frame team photo
                </p>
                <h2 className="mt-2 text-2xl font-black text-white drop-shadow-[0_3px_20px_rgba(0,0,0,0.8)] sm:text-3xl md:text-4xl">
                  <ScrambleText text="Built together, growing together." />
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-6 text-white/88 drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)] sm:text-base">
                  This showcase puts the team front and center with a larger hero image, so the members page feels like a true team brand moment instead of a simple list.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-8 pb-24 sm:pt-12">
        <Stagger className="grid gap-5 md:grid-cols-2 xl:grid-cols-3" stagger={0.05}>
          {members.map((member, index) => (
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
                    alt={`${member.name} professional portrait`}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
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
                    <h3 className="text-xl font-bold tracking-normal"><ScrambleText text={member.name} /></h3>
                    <p className="mt-1 text-sm font-semibold text-brand-blue">{member.role}</p>
                  </div>
                  <div className="flex shrink-0 gap-2">
                    <a
                      aria-label={`${member.name} LinkedIn`}
                      href={member.linkedin || undefined}
                      title={member.linkedin ? `${member.name} LinkedIn` : text.missingLink}
                      target={member.linkedin ? "_blank" : undefined}
                      rel={member.linkedin ? "noreferrer" : undefined}
                      className={`grid h-9 w-9 place-items-center rounded-full border border-border transition-colors ${
                        member.linkedin ? "hover:border-brand-sky hover:text-brand-blue" : "pointer-events-none opacity-35"
                      }`}
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      aria-label={`${member.name} GitHub`}
                      href={member.github || undefined}
                      title={member.github ? `${member.name} GitHub` : text.missingLink}
                      target={member.github ? "_blank" : undefined}
                      rel={member.github ? "noreferrer" : undefined}
                      className={`grid h-9 w-9 place-items-center rounded-full border border-border transition-colors ${
                        member.github ? "hover:border-brand-sky hover:text-brand-blue" : "pointer-events-none opacity-35"
                      }`}
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <p className="mt-4 text-sm font-semibold text-foreground">{text.field}: {member.field}</p>
                <p className="mt-2 text-sm text-muted-foreground">{text.skills}: {member.skills}</p>
                <p className="mt-4 text-sm text-muted-foreground">{member.message}</p>
              </div>
            </motion.article>
          ))}
        </Stagger>
      </section>
    </SiteLayout>
  );
}
