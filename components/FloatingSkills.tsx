// Decorative floating tech-stack cloud for the hero (right column).
// Chips are evenly distributed on an ellipse around a central core so the
// layout reads as intentional (no random overlap). Pure CSS animation.

type Chip = { label: string; accent?: boolean; delay: number; dur: number };

const chips: Chip[] = [
  { label: "Laravel", accent: true, delay: 0, dur: 5 },
  { label: "React.js", delay: 0.8, dur: 6 },
  { label: "MySQL", accent: true, delay: 1.4, dur: 5.5 },
  { label: "MongoDB", delay: 0.4, dur: 6.5 },
  { label: "PHP", delay: 1.1, dur: 5 },
  { label: "Node.js", accent: true, delay: 0.2, dur: 6 },
  { label: "Docker", delay: 0.9, dur: 5.5 },
  { label: "REST API", delay: 1.6, dur: 6 },
];

// Ellipse radii as % of the container (taller than wide to suit the column).
const RX = 32;
const RY = 40;
// Start at the top (-90°) and go clockwise.
const START = -Math.PI / 2;

export default function FloatingSkills() {
  return (
    <div className="relative mx-auto h-112 w-full max-w-xs">
      {/* Central glowing core */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute inset-0 -z-10 rounded-full bg-linear-to-tr from-accent/40 to-accent-2/40 blur-3xl" />
        <div
          className="grid h-24 w-24 place-items-center rounded-full border border-accent/30 bg-surface/70 backdrop-blur-sm"
          style={{ animation: "float 6s ease-in-out infinite" }}
        >
          <span className="font-mono text-xl font-bold text-accent">&lt;/&gt;</span>
        </div>
      </div>

      {/* Floating skill chips on an even orbit */}
      {chips.map((c, i) => {
        const angle = START + (i / chips.length) * Math.PI * 2;
        const left = 50 + RX * Math.cos(angle);
        const top = 50 + RY * Math.sin(angle);
        return (
          <span
            key={c.label}
            className={`absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-medium shadow-sm backdrop-blur-sm ${
              c.accent
                ? "border-accent/40 bg-accent/10 text-accent"
                : "border-border bg-surface/80 text-fg"
            }`}
            style={{
              top: `${top}%`,
              left: `${left}%`,
              animation: `float ${c.dur}s ease-in-out ${c.delay}s infinite`,
            }}
          >
            {c.label}
          </span>
        );
      })}
    </div>
  );
}
