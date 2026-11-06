import type { ReactNode } from 'react';
import type { Palette, Project } from '../data/portfolio';

/**
 * Generated "key art" for thumbnails — layered gradients, light falloff and a motif.
 * No stock imagery: every card is art-directed from its palette.
 */
export function PosterBackdrop({ palette, children, className = '' }: { palette: Palette; children?: ReactNode; className?: string }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(120% 90% at 85% 10%, ${palette.via} 0%, transparent 60%),
          radial-gradient(90% 80% at 0% 100%, ${palette.from} 0%, transparent 70%),
          linear-gradient(160deg, ${palette.from} 0%, ${palette.to} 100%)`,
      }}
    >
      <div
        aria-hidden
        className="absolute -right-1/4 -top-1/3 h-[140%] w-[70%] rotate-[18deg] opacity-40 blur-2xl"
        style={{ background: `linear-gradient(90deg, transparent, ${palette.accent}55, transparent)` }}
      />
      <div aria-hidden className="absolute inset-0 opacity-[0.18] [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.06)_0px,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_4px)]" />
      {children}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
    </div>
  );
}

/** Motif illustrations for each Project, built from the project's own architecture. */
export function ProjectArt({ project, className = '' }: { project: Project; className?: string }) {
  const a = project.palette.accent;
  return (
    <PosterBackdrop palette={project.palette} className={className}>
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <radialGradient id={`g-${project.id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={a} stopOpacity="0.55" />
            <stop offset="100%" stopColor={a} stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="290" cy="120" r="130" fill={`url(#g-${project.id})`} />

        {/* Healthcare Motif (Queue Care) */}
        {project.motif === 'healthcare' && (
          <g transform="translate(210 50)" fill="none" stroke={a}>
            {/* Medical cross / token shield */}
            <rect x="50" y="20" width="60" height="90" rx="8" strokeWidth="2" strokeOpacity="0.85" />
            <path d="M70 50 h20 M80 40 v20" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.9" />
            {/* Token numbers badge */}
            <circle cx="80" cy="85" r="12" fill={a} fillOpacity="0.2" strokeWidth="1.5" />
            <g transform="translate(20 130)" strokeOpacity="0.6">
              <rect x="0" y="0" width="35" height="24" rx="4" strokeWidth="1.5" />
              <path d="M40 12 h15 M60 12 h15" strokeWidth="2" strokeDasharray="3 3" />
              <rect x="80" y="0" width="35" height="24" rx="4" strokeWidth="1.5" />
            </g>
          </g>
        )}

        {/* Learning Motif (LearnLumi AI) */}
        {project.motif === 'learning' && (
          <g transform="translate(210 50)" fill="none" stroke={a}>
            {/* AI brain / book nodes */}
            <path d="M20 90 C20 40 50 30 75 40 C100 30 130 40 130 90 C130 130 75 140 75 140 C75 140 20 130 20 90 Z" strokeWidth="2" strokeOpacity="0.85" />
            <circle cx="75" cy="70" r="16" fill={a} fillOpacity="0.3" strokeWidth="2" />
            {/* Sparkles / AI rays */}
            <path d="M75 35 v-12 M105 55 l10 -10 M45 55 l-10 -10" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.8" />
            {/* Knowledge tree lines */}
            <circle cx="50" cy="100" r="5" fill={a} />
            <circle cx="100" cy="100" r="5" fill={a} />
            <line x1="75" y1="86" x2="50" y2="95" strokeWidth="1.5" strokeOpacity="0.6" />
            <line x1="75" y1="86" x2="100" y2="95" strokeWidth="1.5" strokeOpacity="0.6" />
          </g>
        )}

        {/* Portal Motif (DG Job & Internship Portal) */}
        {project.motif === 'portal' && (
          <g fill="none" stroke={a}>
            <rect x="200" y="56" width="150" height="94" rx="12" strokeWidth="2" strokeOpacity="0.85" />
            {/* Job card outline */}
            <rect x="214" y="72" width="40" height="20" rx="4" strokeOpacity="0.7" />
            <line x1="264" x2="330" y1="78" y2="78" strokeWidth="2" strokeOpacity="0.5" />
            <line x1="264" x2="310" y1="86" y2="86" strokeWidth="2" strokeOpacity="0.3" />
            <line x1="214" x2="330" y1="124" y2="124" strokeWidth="3" strokeOpacity="0.4" strokeDasharray="18 8" />
            {/* Pipeline arrows */}
            <g transform="translate(196 170)" stroke={a} strokeWidth="2">
              <circle cx="16" cy="16" r="12" fill={a} fillOpacity="0.2" />
              <path d="M30 16 h30" />
              <circle cx="72" cy="16" r="12" fill={a} fillOpacity="0.5" />
              <path d="M86 16 h30" />
              <circle cx="128" cy="16" r="12" fill={a} />
            </g>
          </g>
        )}

        {/* Business Motif (Phoenix) */}
        {project.motif === 'business' && (
          <g fill="none" stroke={a}>
            {/* Grid of enterprise services and dashboards */}
            {[0, 1, 2].map((r) =>
              [0, 1, 2, 3].map((c) => (
                <rect
                  key={`${r}-${c}`}
                  x={196 + c * 40}
                  y={50 + r * 38}
                  width="30"
                  height="28"
                  rx="6"
                  strokeWidth="1.6"
                  strokeOpacity={0.25 + ((r + c) % 3) * 0.25}
                  fill={(r + c) % 3 === 0 ? a : 'none'}
                  fillOpacity="0.25"
                />
              )),
            )}
            {/* Growth graph */}
            <path d="M196 195 L236 175 L276 185 L320 150 L350 135" strokeWidth="3" strokeOpacity="0.85" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="350" cy="135" r="4" fill={a} />
          </g>
        )}

        {/* Dashboard Motif (AICTE OneView) */}
        {project.motif === 'dashboard' && (
          <g transform="translate(200 45)" fill="none" stroke={a}>
            {/* Multi-pane monitoring console */}
            <rect x="0" y="0" width="160" height="110" rx="10" strokeWidth="2" strokeOpacity="0.85" />
            <line x1="0" x2="160" y1="30" y2="30" strokeWidth="1.5" strokeOpacity="0.5" />
            {/* Central NLP similarity link */}
            <circle cx="45" cy="65" r="16" fill={a} fillOpacity="0.25" strokeWidth="2" />
            <circle cx="115" cy="65" r="16" fill={a} fillOpacity="0.25" strokeWidth="2" />
            <path d="M62 65 Q 80 50, 98 65" strokeWidth="2.5" strokeDasharray="4 3" strokeOpacity="0.9" />
            <line x1="20" x2="140" y1="130" y2="130" strokeWidth="2" strokeOpacity="0.4" />
          </g>
        )}

        {/* Document Validation Motif (AICTE Application Validation System) */}
        {project.motif === 'validation' && (
          <g transform="translate(210 40)" fill="none" stroke={a}>
            {/* Document sheet */}
            <path d="M20 0 H80 L110 30 V130 H20 Z" strokeWidth="2" strokeOpacity="0.85" />
            <path d="M80 0 V30 H110" strokeWidth="2" strokeOpacity="0.85" />
            {/* OCR text scanning lines */}
            {[0, 1, 2, 3].map((i) => (
              <line key={i} x1="35" x2={i % 2 ? 75 : 95} y1={50 + i * 16} y2={50 + i * 16} strokeWidth="2.5" strokeLinecap="round" strokeOpacity={0.4 + i * 0.15} />
            ))}
            {/* Verification checkmark stamp */}
            <circle cx="95" cy="115" r="18" fill={a} fillOpacity="0.3" strokeWidth="2" />
            <path d="M88 115 l5 5 l10 -10" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.95" />
          </g>
        )}
      </svg>
    </PosterBackdrop>
  );
}

/** Clean, modern personal portfolio mark used in the nav, hero, and footer. */
export function SeriesMark({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-crimson to-crimson-2 text-xs font-black tracking-wider text-white shadow-[0_0_15px_rgba(229,19,43,0.4)]">
        GA
      </span>
      <span className="font-sans text-[0.72em] font-bold tracking-[0.28em] text-bone">
        NISHANTH<span className="text-crimson-2">.DEV</span>
      </span>
    </span>
  );
}
