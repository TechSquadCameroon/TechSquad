import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

type Language = "en" | "fr";
type ColorMode = "default" | "contrast" | "deuteranopia" | "protanopia" | "tritanopia";
type AccessibilitySettings = {
  textScale: number;
  zoom: number;
  colorMode: ColorMode;
  highContrast: boolean;
  underlineLinks: boolean;
  dyslexiaFriendly: boolean;
  reduceMotion: boolean;
  highlightFocus: boolean;
  speechRate: number;
  speechVoice: string;
};

const DEFAULT_ACCESSIBILITY_SETTINGS: AccessibilitySettings = {
  textScale: 1,
  zoom: 1,
  colorMode: "default",
  highContrast: false,
  underlineLinks: false,
  dyslexiaFriendly: false,
  reduceMotion: false,
  highlightFocus: false,
  speechRate: 1,
  speechVoice: "",
};

type PreferencesContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  accessibility: AccessibilitySettings;
  updateAccessibility: (settings: Partial<AccessibilitySettings>) => void;
  resetAccessibility: () => void;
  effectiveReduceMotion: boolean;
};

const PreferencesContext = createContext<PreferencesContextValue | null>(null);

function getStoredAccessibility(): AccessibilitySettings {
  try {
    const stored = window.localStorage.getItem("techsquad-accessibility");
    if (!stored) return DEFAULT_ACCESSIBILITY_SETTINGS;
    const parsed: unknown = JSON.parse(stored);
    if (!parsed || typeof parsed !== "object") return DEFAULT_ACCESSIBILITY_SETTINGS;

    const value = parsed as Partial<AccessibilitySettings>;
    return {
      ...DEFAULT_ACCESSIBILITY_SETTINGS,
      ...value,
      textScale: [1, 1.1, 1.2, 1.3, 1.4].includes(Number(value.textScale))
        ? Number(value.textScale)
        : 1,
      zoom: [0.9, 1, 1.1, 1.25, 1.5, 1.75].includes(Number(value.zoom))
        ? Number(value.zoom)
        : 1,
      colorMode: ["default", "contrast", "deuteranopia", "protanopia", "tritanopia"].includes(
        String(value.colorMode),
      )
        ? (value.colorMode as ColorMode)
        : "default",
      highContrast: value.highContrast === true,
      underlineLinks: value.underlineLinks === true,
      dyslexiaFriendly: value.dyslexiaFriendly === true,
      reduceMotion: value.reduceMotion === true,
      highlightFocus: value.highlightFocus === true,
      speechRate: [0.75, 0.9, 1, 1.1, 1.25].includes(Number(value.speechRate))
        ? Number(value.speechRate)
        : 1,
      speechVoice: typeof value.speechVoice === "string" ? value.speechVoice : "",
    };
  } catch (error) {
    console.warn("Accessibility settings could not be loaded from local storage.", error);
    return DEFAULT_ACCESSIBILITY_SETTINGS;
  }
}

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [accessibility, setAccessibility] = useState<AccessibilitySettings>(DEFAULT_ACCESSIBILITY_SETTINGS);
  const [systemReduceMotion, setSystemReduceMotion] = useState(false);
  const effectiveReduceMotion = accessibility.reduceMotion || systemReduceMotion;

  useEffect(() => {
    try {
      const storedLanguage = window.localStorage.getItem("techsquad-language");
      if (storedLanguage === "en" || storedLanguage === "fr") setLanguageState(storedLanguage);
      setAccessibility(getStoredAccessibility());
    } catch (error) {
      console.warn("Saved preferences could not be loaded from local storage.", error);
      setAccessibility(DEFAULT_ACCESSIBILITY_SETTINGS);
    }
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setSystemReduceMotion(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  const setLanguage = useCallback((value: Language) => {
    setLanguageState(value);
    try {
      window.localStorage.setItem("techsquad-language", value);
    } catch (error) {
      console.warn("The language preference could not be saved.", error);
    }
  }, []);

  const updateAccessibility = useCallback((updates: Partial<AccessibilitySettings>) => {
    setAccessibility((current) => {
      const next = { ...current, ...updates };
      try {
        window.localStorage.setItem("techsquad-accessibility", JSON.stringify(next));
      } catch (error) {
        console.warn("Accessibility settings could not be saved.", error);
      }
      return next;
    });
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dataset.colorMode = accessibility.colorMode;
    document.documentElement.classList.toggle("a11y-high-contrast", accessibility.highContrast);
    document.documentElement.classList.toggle("a11y-underline-links", accessibility.underlineLinks);
    document.documentElement.classList.toggle("a11y-dyslexia", accessibility.dyslexiaFriendly);
    document.documentElement.classList.toggle("a11y-highlight-focus", accessibility.highlightFocus);
    document.documentElement.classList.toggle("reduce-motion", effectiveReduceMotion);
    document.documentElement.style.fontSize = `${16 * accessibility.textScale}px`;
  }, [accessibility, effectiveReduceMotion, language]);

  const resetAccessibility = useCallback(() => {
    setAccessibility(DEFAULT_ACCESSIBILITY_SETTINGS);
    try {
      window.localStorage.setItem(
        "techsquad-accessibility",
        JSON.stringify(DEFAULT_ACCESSIBILITY_SETTINGS),
      );
    } catch (error) {
      console.warn("Default accessibility settings could not be saved.", error);
    }
  }, []);
  const value = useMemo(
    () => ({
      language,
      setLanguage,
      accessibility,
      updateAccessibility,
      resetAccessibility,
      effectiveReduceMotion,
    }),
    [accessibility, effectiveReduceMotion, language, resetAccessibility, setLanguage, updateAccessibility],
  );

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
}

export function usePreferences() {
  const value = useContext(PreferencesContext);
  if (!value) throw new Error("usePreferences must be used inside PreferencesProvider");
  return value;
}

const dictionary = {
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    projects: "Projects",
    team: "Team",
    contact: "Contact",
    startProject: "Start a project",
    language: "Language",
    accessibility: "Accessibility",
    skipToContent: "Skip to main content",
    closeAccessibilityPanel: "Close accessibility panel",
    toggleMenu: "Toggle menu",
    defaultVoice: "Default voice",
    readPage: "Read page",
    pauseReading: "Pause reading",
    resumeReading: "Resume reading",
    stopReading: "Stop reading",
    largerText: "Larger text",
    increaseText: "Increase text",
    decreaseText: "Decrease text",
    resetText: "Reset text size",
    zoom: "Page zoom",
    zoomIn: "Zoom in",
    zoomOut: "Zoom out",
    resetZoom: "Reset zoom",
    reduceMotion: "Reduce motion",
    colorVision: "Color vision",
    defaultVision: "Default",
    highContrast: "High contrast",
    enhancedContrast: "Enhanced contrast",
    deuteranopia: "Deuteranopia",
    protanopia: "Protanopia",
    tritanopia: "Tritanopia",
    underlineLinks: "Underline links",
    dyslexiaFriendly: "Dyslexia-friendly font",
    highlightFocus: "Highlight keyboard focus",
    resetSettings: "Reset all settings",
    readingAssistance: "Reading assistance",
    textAndZoom: "Text and zoom",
    visualAccessibility: "Visual accessibility",
    motion: "Motion",
    keyboardAccessibility: "Keyboard accessibility",
    settings: "Settings",
    readingSpeed: "Reading speed",
    readingVoice: "Voice",
    speechUnavailable: "Text-to-speech is not supported in this browser.",
    readingIdle: "Ready to read page content",
    readingSpeaking: "Reading page content",
    readingPaused: "Reading paused",
    confirmReset: "Reset all accessibility settings?",
    percent: "%",
    footerDescription: "TECHSQUAD Cameroon empowers Africa's digital future by building software infrastructure, training young talent, and launching practical solutions like LaneForge.",
    explore: "Explore",
    contactHeading: "Contact",
    whatsappLabel: "WhatsApp",
    institutionRoots: "VISHI Higher Institute roots",
    allRightsReserved: "All rights reserved.",
    footerTagline: "Empowering Africa's digital future.",
    chatWithUs: "Chat with us on WhatsApp",
    chatWithTechSquad: "Chat with TECHSQUAD on WhatsApp",
    scrollToTop: "Scroll to top",
    pageNotFound: "Page not found",
    missingPageMessage: "The page you are looking for does not exist or has been moved.",
    pageLoadError: "This page did not load",
    pageLoadErrorMessage: "Something went wrong on our end. You can try refreshing or head back home.",
    tryAgain: "Try again",
    goHome: "Go home",
    languageEnglish: "English",
    languageFrench: "Français",
    whatsapp: "WhatsApp",
    countdownDays: "Days",
    countdownHours: "Hours",
    countdownMinutes: "Minutes",
    countdownSeconds: "Seconds",
    invalidName: "Please enter a name with at least 2 characters.",
    nameTooLong: "Name must be 80 characters or fewer.",
    invalidEmail: "Enter a valid email address.",
    emailTooLong: "Email must be 160 characters or fewer.",
    invalidSubject: "Enter a subject with at least 3 characters.",
    subjectTooLong: "Subject must be 120 characters or fewer.",
    invalidDetails: "Please provide at least 20 characters of project details.",
    detailsTooLong: "Project details must be 2000 characters or fewer.",
    carouselPrevious: "Previous slide",
    carouselNext: "Next slide",
    close: "Close",
    emailAddress: "Email",
    countryName: "Cameroon",
    logoAlt: "TECHSQUAD Cameroon logo",
    groupPhotoAlt: "TECHSQUAD team photo",
    laneforgeLogoAlt: "LaneForge logo featuring an Africa-inspired map and wordmark",
    terminalLabel: "TECHSQUAD terminal",
    together: "Together",
    titleHome: "TechSquad - African software, learning, and LaneForge",
    titleAbout: "About TechSquad Cameroon - Student-led software and training",
    titleServices: "Services - TechSquad Cameroon | Software, brand growth, youth training",
    titleProjects: "Projects - TechSquad Cameroon | LaneForge, client work, hackathons",
    titleTeam: "Team - TechSquad Cameroon | builders, designers, and growth leads",
    titleContact: "Contact TechSquad Cameroon | start your project or partnership",
    titleNotFound: "Page not found | TechSquad Cameroon",
    descriptionHome: "TechSquad Cameroon builds software solutions, digital skills, and the LaneForge career platform for students and young professionals.",
    descriptionAbout: "Discover TechSquad Cameroon's journey from a student initiative to a team building software infrastructure, client services, and LaneForge.",
    descriptionServices: "Explore TechSquad Cameroon's services for software, UI/UX, brand growth, and student career platforms like LaneForge.",
    descriptionProjects: "See TechSquad Cameroon's flagship projects, including LaneForge, e-commerce work, CodeConnect, and CAMIHACK 2026.",
    descriptionTeam: "Meet the TechSquad Cameroon team: software developers, designers, and growth leads building practical digital products.",
    descriptionContact: "Contact TechSquad Cameroon to discuss a project, partnership, or LaneForge.",
    descriptionNotFound: "The requested page is unavailable on the TechSquad Cameroon website.",
    brandPreviewAlt: "TechSquad brand preview image",
  },
  fr: {
    home: "Accueil",
    about: "À propos",
    services: "Services",
    projects: "Projets",
    team: "Équipe",
    contact: "Contact",
    startProject: "Démarrer un projet",
    language: "Langue",
    accessibility: "Accessibilité",
    skipToContent: "Passer au contenu principal",
    closeAccessibilityPanel: "Fermer le panneau d’accessibilité",
    toggleMenu: "Ouvrir ou fermer le menu",
    defaultVoice: "Voix par défaut",
    readPage: "Lire la page",
    pauseReading: "Mettre la lecture en pause",
    resumeReading: "Reprendre la lecture",
    stopReading: "Arrêter la lecture",
    largerText: "Texte plus grand",
    increaseText: "Agrandir le texte",
    decreaseText: "Réduire le texte",
    resetText: "Réinitialiser la taille",
    zoom: "Zoom de la page",
    zoomIn: "Zoom avant",
    zoomOut: "Zoom arrière",
    resetZoom: "Réinitialiser le zoom",
    reduceMotion: "Réduire les animations",
    colorVision: "Vision des couleurs",
    defaultVision: "Par défaut",
    highContrast: "Contraste élevé",
    enhancedContrast: "Contraste renforcé",
    deuteranopia: "Deutéranopie",
    protanopia: "Protanopie",
    tritanopia: "Tritanopie",
    underlineLinks: "Souligner les liens",
    dyslexiaFriendly: "Police adaptée à la dyslexie",
    highlightFocus: "Mettre en évidence le focus clavier",
    resetSettings: "Réinitialiser tous les réglages",
    readingAssistance: "Aide à la lecture",
    textAndZoom: "Texte et zoom",
    visualAccessibility: "Accessibilité visuelle",
    motion: "Animations",
    keyboardAccessibility: "Accessibilité clavier",
    settings: "Réglages",
    readingSpeed: "Vitesse de lecture",
    readingVoice: "Voix",
    speechUnavailable: "La synthèse vocale n’est pas prise en charge par ce navigateur.",
    readingIdle: "Prêt à lire le contenu de la page",
    readingSpeaking: "Lecture du contenu de la page",
    readingPaused: "Lecture en pause",
    confirmReset: "Réinitialiser tous les réglages d’accessibilité ?",
    percent: "%",
    footerDescription: "TECHSQUAD Cameroon contribue à l’avenir numérique de l’Afrique en développant des infrastructures logicielles, en formant de jeunes talents et en lançant des solutions concrètes comme LaneForge.",
    explore: "Découvrir",
    contactHeading: "Contact",
    whatsappLabel: "WhatsApp",
    institutionRoots: "À l’origine à VISHI Higher Institute",
    allRightsReserved: "Tous droits réservés.",
    footerTagline: "Contribuer à l’avenir numérique de l’Afrique.",
    chatWithUs: "Nous contacter sur WhatsApp",
    chatWithTechSquad: "Contacter TECHSQUAD sur WhatsApp",
    scrollToTop: "Remonter en haut de page",
    pageNotFound: "Page introuvable",
    missingPageMessage: "La page recherchée n’existe pas ou a été déplacée.",
    pageLoadError: "Cette page n’a pas pu s’afficher",
    pageLoadErrorMessage: "Une erreur s’est produite. Vous pouvez actualiser la page ou revenir à l’accueil.",
    tryAgain: "Réessayer",
    goHome: "Retour à l’accueil",
    languageEnglish: "Anglais",
    languageFrench: "Français",
    whatsapp: "WhatsApp",
    countdownDays: "Jours",
    countdownHours: "Heures",
    countdownMinutes: "Minutes",
    countdownSeconds: "Secondes",
    invalidName: "Veuillez saisir un nom d’au moins 2 caractères.",
    nameTooLong: "Le nom ne doit pas dépasser 80 caractères.",
    invalidEmail: "Veuillez saisir une adresse e-mail valide.",
    emailTooLong: "L’adresse e-mail ne doit pas dépasser 160 caractères.",
    invalidSubject: "Veuillez saisir un objet d’au moins 3 caractères.",
    subjectTooLong: "L’objet ne doit pas dépasser 120 caractères.",
    invalidDetails: "Veuillez décrire votre projet en au moins 20 caractères.",
    detailsTooLong: "La description du projet ne doit pas dépasser 2 000 caractères.",
    carouselPrevious: "Diapositive précédente",
    carouselNext: "Diapositive suivante",
    close: "Fermer",
    emailAddress: "E-mail",
    countryName: "Cameroun",
    logoAlt: "Logo de TECHSQUAD Cameroon",
    groupPhotoAlt: "Photo de l’équipe TECHSQUAD",
    laneforgeLogoAlt: "Logo LaneForge avec une carte inspirée de l’Afrique et le nom de la marque",
    terminalLabel: "Terminal TECHSQUAD",
    together: "Ensemble",
    titleHome: "TechSquad - logiciels, formation et LaneForge en Afrique",
    titleAbout: "À propos de TechSquad Cameroon - Logiciels et formation",
    titleServices: "Services - TechSquad Cameroon | Logiciels, marque et formation",
    titleProjects: "Projets - TechSquad Cameroon | LaneForge, clients et hackathons",
    titleTeam: "Équipe - TechSquad Cameroon | développeurs, designers et responsables",
    titleContact: "Contact - TechSquad Cameroon | projet ou partenariat",
    titleNotFound: "Page introuvable | TechSquad Cameroon",
    descriptionHome: "TechSquad Cameroon crée des solutions logicielles et développe les compétences numériques des étudiants et jeunes professionnels, notamment avec LaneForge.",
    descriptionAbout: "Découvrez le parcours de TechSquad Cameroon, d’une initiative étudiante à une équipe qui crée des logiciels, propose ses services et prépare LaneForge.",
    descriptionServices: "Découvrez les services de TechSquad Cameroon en logiciels, UI/UX, développement de marque et orientation professionnelle avec LaneForge.",
    descriptionProjects: "Découvrez les projets de TechSquad Cameroon, dont LaneForge, des boutiques en ligne, CodeConnect et CAMIHACK 2026.",
    descriptionTeam: "Rencontrez l’équipe de TechSquad Cameroon : développeurs, designers et responsables du développement de produits numériques.",
    descriptionContact: "Contactez TechSquad Cameroon pour parler d’un projet, d’un partenariat ou de LaneForge.",
    descriptionNotFound: "La page demandée n’est pas disponible sur le site de TechSquad Cameroon.",
    brandPreviewAlt: "Aperçu de l’identité visuelle de TechSquad",
  },
} as const;

export function useT() {
  const { language } = usePreferences();
  return useCallback((key: keyof typeof dictionary.en) => dictionary[language][key], [language]);
}
