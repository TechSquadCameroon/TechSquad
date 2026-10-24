import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { z } from "zod";
import { SiteLayout } from "@/components/site/SiteLayout";
import { AmbientBackground } from "@/components/site/AmbientBackground";
import { Reveal, ScrambleText, Stagger } from "@/components/animations/Reveal";
import { Plus, Check, Mail, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePreferences, useT } from "@/lib/preferences";
import { buildPageHead, DEFAULT_OG_IMAGE } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    buildPageHead({
      title: "Contact TechSquad Cameroon | start your project or partnership",
      description:
        "Reach TechSquad Cameroon for software projects, brand growth, collaboration, and LaneForge partnerships.",
      path: "/contact",
      image: DEFAULT_OG_IMAGE,
    }),
  component: ContactPage,
});

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mdarqjge";

const faqs = [
  { q: "What does TECHSQUAD build?", a: "We build practical software solutions, web platforms, brand systems, and student-focused digital products like LaneForge." },
  { q: "Can I contact TECHSQUAD for a client project?", a: "Yes. The team is already providing services to clients while preparing LaneForge for launch." },
  { q: "What is LaneForge?", a: "LaneForge is a career-building platform that guides youths and students toward careers that fit them and helps them build real skills." },
  { q: "Where is TECHSQUAD based?", a: "TECHSQUAD Cameroon started as a student initiative at VISHI Higher Institute and is focused on Africa's digital future." },
];

const contactCopy = {
  en: {
    kicker: "Contact",
    title: "Let us build something",
    focus: "useful together.",
    intro: "Send a project, partnership, or LaneForge message. The form is connected to Formspree.",
    faqLabel: "FAQ",
    faqTitle: "Before you write",
    faqs,
    location: "Location",
    messageReceived: "Message received",
    thanks: "Thanks",
    reply: "TECHSQUAD will reply as soon as possible.",
    another: "Send another message",
    name: "Your name",
    email: "Email",
    subject: "Subject",
    details: "Project details",
    sending: "Sending...",
    send: "Send message",
    helper: "Submissions go through Formspree endpoint mdarqjge.",
    serverError: "Message could not be sent. Please try again in a moment.",
  },
  fr: {
    kicker: "Contact",
    title: "Construisons quelque chose",
    focus: "d'utile ensemble.",
    intro: "Écrivez-nous au sujet d’un projet, d’un partenariat ou de LaneForge. Le formulaire est relié à Formspree.",
    faqLabel: "FAQ",
    faqTitle: "Avant de nous écrire",
    faqs: [
      { q: "Que crée TECHSQUAD ?", a: "Nous réalisons des solutions logicielles pratiques, des plateformes web, des identités de marque et des produits numériques pour les étudiants, comme LaneForge." },
      { q: "Puis-je contacter TECHSQUAD pour un projet client ?", a: "Oui. L’équipe propose déjà ses services à des clients tout en préparant le lancement de LaneForge." },
      { q: "Qu’est-ce que LaneForge ?", a: "LaneForge est une plateforme d’orientation professionnelle qui aide les jeunes et les étudiants à trouver un parcours adapté et à acquérir de vraies compétences." },
      { q: "Où se trouve TECHSQUAD ?", a: "TECHSQUAD Cameroon est née d’une initiative étudiante à VISHI Higher Institute et contribue à l’avenir numérique de l’Afrique." },
    ],
    location: "Localisation",
    messageReceived: "Message reçu",
    thanks: "Merci",
    reply: "TECHSQUAD répondra dès que possible.",
    another: "Envoyer un autre message",
    name: "Votre nom",
    email: "Adresse e-mail",
    subject: "Objet",
    details: "Détails du projet",
    sending: "Envoi en cours…",
    send: "Envoyer le message",
    helper: "Les messages sont transmis via le formulaire Formspree (mdarqjge).",
    serverError: "Votre message n’a pas pu être envoyé. Veuillez réessayer dans quelques instants.",
  },
} as const;

function ContactPage() {
  const { language } = usePreferences();
  const t = useT();
  const text = contactCopy[language];
  const [open, setOpen] = useState<number | null>(0);
  const [form, setForm] = useState({ name: "", email: "", subject: "", details: "", company: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const result = createContactSchema({
      invalidName: t("invalidName"),
      nameTooLong: t("nameTooLong"),
      invalidEmail: t("invalidEmail"),
      emailTooLong: t("emailTooLong"),
      invalidSubject: t("invalidSubject"),
      subjectTooLong: t("subjectTooLong"),
      invalidDetails: t("invalidDetails"),
      detailsTooLong: t("detailsTooLong"),
    }).safeParse(form);
    if (!result.success) {
      const flat: Record<string, string> = {};
      for (const issue of result.error.issues) flat[issue.path[0] as string] = issue.message;
      setErrors(flat);
      return;
    }

    setErrors({});
    setServerError("");
    setSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.details,
        }),
      });

      if (!response.ok) throw new Error("Formspree rejected the message");
      setSent(true);
    } catch {
      setServerError(text.serverError);
    } finally {
      setSubmitting(false);
    }
  };

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

      <section className="mx-auto grid max-w-7xl gap-10 px-4 pt-20 pb-24 sm:pt-24 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="order-2 relative overflow-hidden rounded-[2rem] bg-[#071733] p-6 text-white shadow-elegant sm:p-8 lg:order-1">
          <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-pink/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-20 h-56 w-56 rounded-full bg-[#35b7ff]/25 blur-3xl" />
          <Reveal className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#35b7ff]">{text.faqLabel}</p>
            <h2 className="mt-3 text-3xl font-bold tracking-normal sm:text-4xl"><ScrambleText text={text.faqTitle} /></h2>
          </Reveal>
          <Stagger className="relative mt-8 space-y-2" stagger={0.06}>
            {text.faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <motion.div
                  key={f.q}
                  variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
                  className="overflow-hidden"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className={cn("text-sm font-semibold transition-colors sm:text-base", isOpen ? "text-[#35b7ff]" : "text-white")}>{f.q}</span>
                    <span className={cn("grid h-8 w-8 shrink-0 place-items-center rounded-full text-white transition-all", isOpen ? "rotate-45 bg-pink" : "bg-white/10")}>
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        role="region"
                        aria-label={f.q}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 pr-12 text-sm leading-6 text-white/68">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </Stagger>

          <div className="relative mt-10 grid gap-5 border-t border-white/12 pt-6 sm:grid-cols-2">
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 text-[#35b7ff]" />
              <div>
                <div className="text-xs text-white/50">{t("emailAddress")}</div>
                <div className="text-sm font-semibold">techsquadcameroon@gmail.com</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-[#35b7ff]" />
              <div>
                <div className="text-xs text-white/50">{text.location}</div>
                <div className="text-sm font-semibold">{t("countryName")}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 relative lg:order-2">
          <div className="pointer-events-none absolute -inset-1 -z-10 rounded-[2rem] bg-gradient-hero opacity-30 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-6 shadow-elegant sm:p-10">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="relative flex flex-col items-center py-16 text-center"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 12 }}
                    className="grid h-20 w-20 place-items-center rounded-full bg-gradient-primary text-primary-foreground shadow-elegant"
                  >
                    <Check className="h-9 w-9" />
                  </motion.span>
                  <h3 className="mt-8 text-2xl font-bold">{text.messageReceived}</h3>
                  <p className="mt-2 max-w-sm text-muted-foreground">
                    {text.thanks} {form.name.split(" ")[0]}. {text.reply}
                  </p>
                  <button
                    onClick={() => {
                      setSent(false);
                      setForm({ name: "", email: "", subject: "", details: "", company: "" });
                    }}
                    className="mt-8 text-sm font-semibold text-pink hover:underline"
                  >
                    {text.another}
                  </button>
                </motion.div>
              ) : (
                <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={onSubmit} noValidate className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <FloatField label={text.name} name="name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} error={errors.name} />
                    <FloatField label={text.email} name="email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} error={errors.email} />
                  </div>
                  <FloatField label={text.subject} name="subject" value={form.subject} onChange={(v) => setForm({ ...form, subject: v })} error={errors.subject} />
                  <FloatField label={text.details} name="details" textarea value={form.details} onChange={(v) => setForm({ ...form, details: v })} error={errors.details} />
                  <input
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    name="company"
                    className="absolute -left-[9999px] h-0 w-0 opacity-0"
                  />
                  {serverError && <p role="alert" className="text-sm text-destructive">{serverError}</p>}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="group relative w-full overflow-hidden rounded-full bg-gradient-primary py-4 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {submitting ? text.sending : text.send}
                    <span className="pointer-events-none absolute inset-0 animate-shimmer" />
                  </button>
                  <p className="text-center text-xs text-muted-foreground">
                    {text.helper}
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function createContactSchema(messages: {
  invalidName: string;
  nameTooLong: string;
  invalidEmail: string;
  emailTooLong: string;
  invalidSubject: string;
  subjectTooLong: string;
  invalidDetails: string;
  detailsTooLong: string;
}) {
  return z.object({
    name: z.string().trim().min(2, messages.invalidName).max(80, messages.nameTooLong),
    email: z.string().trim().email(messages.invalidEmail).max(160, messages.emailTooLong),
    subject: z.string().trim().min(3, messages.invalidSubject).max(120, messages.subjectTooLong),
    details: z.string().trim().min(20, messages.invalidDetails).max(2000, messages.detailsTooLong),
    company: z.string().max(0).optional(),
  });
}

function FloatField({
  label,
  name,
  value,
  onChange,
  type = "text",
  textarea,
  error,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  textarea?: boolean;
  error?: string;
}) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;
  const commonClasses = cn(
    "peer w-full rounded-2xl border bg-background px-4 pt-6 pb-2 text-sm text-foreground outline-none transition-all",
    error ? "border-destructive focus:border-destructive" : "border-border focus:border-pink",
  );
  return (
    <label className="relative block">
      {textarea ? (
        <textarea id={name} name={name} aria-label={label} aria-invalid={Boolean(error)} aria-describedby={error ? `${name}-error` : undefined} rows={5} value={value} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} onChange={(e) => onChange(e.target.value)} className={commonClasses} />
      ) : (
        <input id={name} name={name} type={type} aria-label={label} aria-invalid={Boolean(error)} aria-describedby={error ? `${name}-error` : undefined} value={value} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} onChange={(e) => onChange(e.target.value)} className={commonClasses} />
      )}
      <span className={cn("pointer-events-none absolute left-4 origin-left transition-all duration-200", active ? "top-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-pink" : "top-4 text-sm text-muted-foreground")}>
        {label}
      </span>
      {error && <span id={`${name}-error`} className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
