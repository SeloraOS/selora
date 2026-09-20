export default function GrainOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[90] opacity-[0.025] mix-blend-multiply"
    >
      <svg width="100%" height="100%">
        <filter id="grain-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-noise)" />
      </svg>
    </div>
  );
}
