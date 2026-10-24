import { useCallback, useEffect, useRef, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { Eye, Pause, Play, RotateCcw, Volume2, VolumeX, ZoomIn, ZoomOut } from "lucide-react";
import { usePreferences, useT } from "@/lib/preferences";

const TEXT_SCALES = [1, 1.1, 1.2, 1.3, 1.4];
const ZOOM_LEVELS = [0.9, 1, 1.1, 1.25, 1.5, 1.75];
const SPEECH_RATES = [0.75, 0.9, 1, 1.1, 1.25];
type SpeechStatus = "idle" | "speaking" | "paused" | "unavailable";

function collectPageText() {
  const main = document.querySelector("main");
  if (!main) return "";
  const content = main.cloneNode(true) as HTMLElement;
  content
    .querySelectorAll(
      'nav,button,input,select,textarea,svg,canvas,script,style,[aria-hidden="true"],[hidden],[role="dialog"],.sr-only',
    )
    .forEach((element) => element.remove());
  return (content.innerText || content.textContent || "").replace(/\s+/g, " ").trim();
}

function splitSpeechText(text: string) {
  const sentences = text.match(/[^.!?]+[.!?]+|[^.!?]+$/g) ?? [text];
  const chunks: string[] = [];
  let chunk = "";
  for (const sentence of sentences) {
    const words = sentence.trim().split(/\s+/);
    for (const word of words) {
      if (chunk && `${chunk} ${word}`.length > 1800) {
        chunks.push(chunk);
        chunk = word;
      } else {
        chunk = chunk ? `${chunk} ${word}` : word;
      }
    }
  }
  if (chunk) chunks.push(chunk);
  return chunks;
}

export function AccessibilityPanel() {
  const t = useT();
  const { accessibility, updateAccessibility, resetAccessibility } = usePreferences();
  const [open, setOpen] = useState(false);
  const [speechStatus, setSpeechStatus] = useState<SpeechStatus>("idle");
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const speechSession = useRef(0);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  const stopReading = useCallback(() => {
    speechSession.current += 1;
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    setSpeechStatus("idle");
  }, []);

  useEffect(() => {
    if (!("speechSynthesis" in window)) {
      setSpeechStatus("unavailable");
      return;
    }
    const updateVoices = () => setVoices(window.speechSynthesis.getVoices());
    updateVoices();
    window.speechSynthesis.addEventListener("voiceschanged", updateVoices);
    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", updateVoices);
      window.speechSynthesis.cancel();
    };
  }, []);

  useEffect(() => {
    stopReading();
  }, [pathname, stopReading]);

  useEffect(() => {
    if (!open) return;
    const firstControl = panelRef.current?.querySelector<HTMLElement>(
      'button:not([aria-label="Close accessibility panel"]), select, input',
    );
    firstControl?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  const startReading = () => {
    if (!("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") {
      setSpeechStatus("unavailable");
      return;
    }
    const chunks = splitSpeechText(collectPageText());
    if (!chunks.length) return;
    speechSession.current += 1;
    const session = speechSession.current;
    window.speechSynthesis.cancel();
    setSpeechStatus("speaking");

    const speakChunk = (index: number) => {
      if (speechSession.current !== session) return;
      if (index >= chunks.length) {
        setSpeechStatus("idle");
        return;
      }
      const utterance = new SpeechSynthesisUtterance(chunks[index]);
      utterance.rate = accessibility.speechRate;
      const voice = voices.find((item) => item.name === accessibility.speechVoice);
      if (voice) utterance.voice = voice;
      utterance.onend = () => speakChunk(index + 1);
      utterance.onerror = () => {
        if (speechSession.current === session) setSpeechStatus("idle");
      };
      window.speechSynthesis.speak(utterance);
    };

    speakChunk(0);
  };

  const toggleReading = () => {
    if (!("speechSynthesis" in window)) {
      setSpeechStatus("unavailable");
      return;
    }
    if (speechStatus === "speaking") {
      window.speechSynthesis.pause();
      setSpeechStatus("paused");
    } else if (speechStatus === "paused") {
      window.speechSynthesis.resume();
      setSpeechStatus("speaking");
    } else {
      startReading();
    }
  };

  const moveTextScale = (step: number) => {
    const current = TEXT_SCALES.indexOf(accessibility.textScale);
    updateAccessibility({
      textScale: TEXT_SCALES[Math.max(0, Math.min(TEXT_SCALES.length - 1, current + step))],
    });
  };
  const moveZoom = (step: number) => {
    const current = ZOOM_LEVELS.indexOf(accessibility.zoom);
    updateAccessibility({
      zoom: ZOOM_LEVELS[Math.max(0, Math.min(ZOOM_LEVELS.length - 1, current + step))],
    });
  };

  const toggle = (label: string, checked: boolean, onChange: (value: boolean) => void) => {
    const id = `a11y-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
    return (
      <div className="flex min-h-9 items-center justify-between gap-3 text-sm">
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(event) => onChange(event.target.checked)}
          className="h-4 w-4 accent-brand-blue"
        />
      </div>
    );
  };

  return (
    <div className="fixed left-4 top-4 z-[70]">
      <button
        ref={toggleRef}
        type="button"
        aria-label={t("accessibility")}
        aria-expanded={open}
        aria-controls="accessibility-panel"
        onClick={() => setOpen((value) => !value)}
        className="grid h-11 w-11 place-items-center rounded-full border border-brand-sky/30 bg-white/90 text-brand-navy shadow-glass backdrop-blur transition-colors hover:bg-brand-sky hover:text-white"
      >
        <Eye className="h-5 w-5" aria-hidden="true" />
      </button>

      {open && (
        <div
          id="accessibility-panel"
          ref={panelRef}
          role="region"
          aria-labelledby="accessibility-title"
          className="mt-3 max-h-[calc(100dvh-5rem)] w-[min(22rem,calc(100vw-2rem))] overflow-y-auto overscroll-contain rounded-2xl border border-border bg-card p-4 text-card-foreground shadow-elegant"
        >
          <div className="flex items-center justify-between gap-3 border-b border-border pb-3">
            <h2 id="accessibility-title" className="text-sm font-bold">
              {t("accessibility")}
            </h2>
            <button
              type="button"
              aria-label={t("closeAccessibilityPanel")}
              onClick={() => {
                setOpen(false);
                toggleRef.current?.focus();
              }}
              className="rounded-lg px-2 py-1 text-sm font-semibold hover:bg-muted"
            >
              ×
            </button>
          </div>

          <section aria-labelledby="reading-group" className="mt-3 border-b border-border pb-3">
            <h3
              id="reading-group"
              className="mb-2 text-xs font-bold uppercase tracking-wide text-muted-foreground"
            >
              {t("readingAssistance")}
            </h3>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={toggleReading}
                disabled={speechStatus === "unavailable"}
                aria-label={t(speechStatus === "paused" ? "resumeReading" : "readPage")}
                className="inline-flex min-h-9 items-center gap-2 rounded-full bg-brand-navy px-3 py-2 text-xs font-bold text-white transition-colors hover:bg-brand-blue disabled:cursor-not-allowed disabled:opacity-50"
              >
                {speechStatus === "paused" ? (
                  <Play className="h-4 w-4" />
                ) : (
                  <Volume2 className="h-4 w-4" />
                )}
                {speechStatus === "paused" ? t("resumeReading") : t("readPage")}
              </button>
              {speechStatus === "speaking" && (
                <button
                  type="button"
                  onClick={toggleReading}
                  className="inline-flex min-h-9 items-center gap-2 rounded-full border border-border px-3 py-2 text-xs font-bold"
                >
                  <Pause className="h-4 w-4" />
                  {t("pauseReading")}
                </button>
              )}
              {(speechStatus === "speaking" || speechStatus === "paused") && (
                <button
                  type="button"
                  onClick={stopReading}
                  className="inline-flex min-h-9 items-center gap-2 rounded-full border border-border px-3 py-2 text-xs font-bold"
                >
                  <VolumeX className="h-4 w-4" />
                  {t("stopReading")}
                </button>
              )}
            </div>
            <p role="status" aria-live="polite" className="mt-2 text-xs text-muted-foreground">
              {t(
                speechStatus === "unavailable"
                  ? "speechUnavailable"
                  : speechStatus === "paused"
                    ? "readingPaused"
                    : speechStatus === "speaking"
                      ? "readingSpeaking"
                      : "readingIdle",
              )}
            </p>
            {voices.length > 0 && (
              <label className="mt-2 block text-xs">
                <span className="mb-1 block">{t("readingVoice")}</span>
                <select
                  value={accessibility.speechVoice}
                  onChange={(event) => updateAccessibility({ speechVoice: event.target.value })}
                  className="w-full rounded-lg border border-border bg-background px-2 py-1.5 text-sm"
                >
                  <option value="">{t("defaultVoice")}</option>
                  {voices.map((voice) => (
                    <option key={`${voice.name}-${voice.lang}`} value={voice.name}>
                      {voice.name} ({voice.lang})
                    </option>
                  ))}
                </select>
              </label>
            )}
            <label className="mt-2 block text-xs">
              <span className="mb-1 block">
                {t("readingSpeed")}: {accessibility.speechRate}×
              </span>
              <select
                value={accessibility.speechRate}
                onChange={(event) =>
                  updateAccessibility({ speechRate: Number(event.target.value) })
                }
                className="w-full rounded-lg border border-border bg-background px-2 py-1.5 text-sm"
              >
                {SPEECH_RATES.map((rate) => (
                  <option key={rate} value={rate}>
                    {rate}×
                  </option>
                ))}
              </select>
            </label>
          </section>

          <section aria-labelledby="text-group" className="border-b border-border py-3">
            <h3
              id="text-group"
              className="mb-2 text-xs font-bold uppercase tracking-wide text-muted-foreground"
            >
              {t("textAndZoom")}
            </h3>
            <p className="mb-1 text-xs font-semibold">
              {t("largerText")}: {Math.round(accessibility.textScale * 100)}
              {t("percent")}
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                aria-label={t("decreaseText")}
                onClick={() => moveTextScale(-1)}
                disabled={accessibility.textScale === TEXT_SCALES[0]}
                className="a11y-control"
              >
                <span aria-hidden="true">−</span> {t("decreaseText")}
              </button>
              <button
                type="button"
                aria-label={t("increaseText")}
                onClick={() => moveTextScale(1)}
                disabled={accessibility.textScale === TEXT_SCALES[TEXT_SCALES.length - 1]}
                className="a11y-control"
              >
                <span aria-hidden="true">+</span> {t("increaseText")}
              </button>
              <button
                type="button"
                onClick={() => updateAccessibility({ textScale: 1 })}
                className="a11y-control"
              >
                {t("resetText")}
              </button>
            </div>
            <p className="mb-1 mt-3 text-xs font-semibold">
              {t("zoom")}: {Math.round(accessibility.zoom * 100)}
              {t("percent")}
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                aria-label={t("zoomOut")}
                onClick={() => moveZoom(-1)}
                disabled={accessibility.zoom === ZOOM_LEVELS[0]}
                className="a11y-control"
              >
                <ZoomOut className="h-3.5 w-3.5" />
                {t("zoomOut")}
              </button>
              <button
                type="button"
                aria-label={t("zoomIn")}
                onClick={() => moveZoom(1)}
                disabled={accessibility.zoom === ZOOM_LEVELS[ZOOM_LEVELS.length - 1]}
                className="a11y-control"
              >
                <ZoomIn className="h-3.5 w-3.5" />
                {t("zoomIn")}
              </button>
              <button
                type="button"
                onClick={() => updateAccessibility({ zoom: 1 })}
                className="a11y-control"
              >
                {t("resetZoom")}
              </button>
            </div>
          </section>

          <section aria-labelledby="visual-group" className="border-b border-border py-3">
            <h3
              id="visual-group"
              className="mb-2 text-xs font-bold uppercase tracking-wide text-muted-foreground"
            >
              {t("visualAccessibility")}
            </h3>
            <label className="block text-sm">
              <span className="mb-1.5 block">{t("colorVision")}</span>
              <select
                value={accessibility.colorMode}
                onChange={(event) =>
                  updateAccessibility({
                    colorMode: event.target.value as typeof accessibility.colorMode,
                  })
                }
                className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm"
              >
                <option value="default">{t("defaultVision")}</option>
                <option value="contrast">{t("highContrast")}</option>
                <option value="deuteranopia">{t("deuteranopia")}</option>
                <option value="protanopia">{t("protanopia")}</option>
                <option value="tritanopia">{t("tritanopia")}</option>
              </select>
            </label>
            <div className="mt-2 space-y-1">
              {toggle(t("enhancedContrast"), accessibility.highContrast, (value) =>
                updateAccessibility({ highContrast: value }),
              )}
              {toggle(t("underlineLinks"), accessibility.underlineLinks, (value) =>
                updateAccessibility({ underlineLinks: value }),
              )}
              {toggle(t("dyslexiaFriendly"), accessibility.dyslexiaFriendly, (value) =>
                updateAccessibility({ dyslexiaFriendly: value }),
              )}
            </div>
          </section>

          <section aria-labelledby="motion-group" className="border-b border-border py-3">
            <h3
              id="motion-group"
              className="mb-2 text-xs font-bold uppercase tracking-wide text-muted-foreground"
            >
              {t("motion")}
            </h3>
            {toggle(t("reduceMotion"), accessibility.reduceMotion, (value) =>
              updateAccessibility({ reduceMotion: value }),
            )}
          </section>

          <section aria-labelledby="keyboard-group" className="border-b border-border py-3">
            <h3
              id="keyboard-group"
              className="mb-2 text-xs font-bold uppercase tracking-wide text-muted-foreground"
            >
              {t("keyboardAccessibility")}
            </h3>
            {toggle(t("highlightFocus"), accessibility.highlightFocus, (value) =>
              updateAccessibility({ highlightFocus: value }),
            )}
          </section>

          <section aria-labelledby="settings-group" className="pt-3">
            <h3
              id="settings-group"
              className="mb-2 text-xs font-bold uppercase tracking-wide text-muted-foreground"
            >
              {t("settings")}
            </h3>
            <button
              type="button"
              onClick={() => {
                if (window.confirm(t("confirmReset"))) {
                  resetAccessibility();
                  stopReading();
                }
              }}
              className="inline-flex min-h-9 items-center gap-2 rounded-xl border border-border px-3 py-2 text-sm font-semibold hover:bg-muted"
            >
              <RotateCcw className="h-4 w-4" />
              {t("resetSettings")}
            </button>
          </section>
        </div>
      )}
    </div>
  );
}
