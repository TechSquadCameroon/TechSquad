export function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-80 bg-[linear-gradient(180deg,rgba(47,116,168,0.13),transparent)]" />
      <div className="absolute inset-y-0 left-0 w-px bg-brand-sky/20" />
      <div className="absolute inset-y-0 right-0 w-px bg-brand-sky/10" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
    </div>
  );
}
