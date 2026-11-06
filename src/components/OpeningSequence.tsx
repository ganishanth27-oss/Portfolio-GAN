import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { profile } from '../data/portfolio';
import { useReducedMotionPref } from '../hooks/useMedia';
import { EASE, Magnetic } from './fx';

/**
 * The signature opening moment:
 * black → studio card → NISHANTH G A → PORTFOLIO → portrait reveal → role → ▶ PLAY
 */
const TIMELINE = [
  { at: 300, beat: 1 }, // studio card
  { at: 1900, beat: 2 }, // name
  { at: 2700, beat: 3 }, // PORTFOLIO
  { at: 3400, beat: 4 }, // portrait
  { at: 4300, beat: 5 }, // role
  { at: 5000, beat: 6 }, // play button
];

export default function OpeningSequence({ onDone }: { onDone: () => void }) {
  const reduced = useReducedMotionPref();
  const [beat, setBeat] = useState(reduced ? 6 : 0);

  useEffect(() => {
    if (reduced) return;
    const timers = TIMELINE.map(({ at, beat }) => window.setTimeout(() => setBeat(beat), at));
    return () => timers.forEach(clearTimeout);
  }, [reduced]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter') onDone();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[120] overflow-hidden bg-black"
      exit={{ opacity: 0, scale: 1.04, filter: 'blur(12px)' }}
      transition={{ duration: 0.9, ease: EASE }}
      role="dialog"
      aria-label="Opening titles"
    >
      {/* letterbox bars */}
      <motion.div className="absolute inset-x-0 top-0 z-30 h-[7vh] bg-black" initial={{ y: 0 }} animate={{ y: beat >= 6 ? '-100%' : 0 }} transition={{ duration: 1.2, ease: EASE }} />
      <motion.div className="absolute inset-x-0 bottom-0 z-30 h-[7vh] bg-black" initial={{ y: 0 }} animate={{ y: beat >= 6 ? '100%' : 0 }} transition={{ duration: 1.2, ease: EASE }} />

      {/* projector flicker light */}
      <motion.div
        aria-hidden
        className="absolute inset-0"
        style={{ background: 'radial-gradient(60% 50% at 50% 55%, rgba(229,19,43,0.22), transparent 70%)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: beat >= 2 ? [0, 0.9, 0.5, 1] : 0 }}
        transition={{ duration: 1.4 }}
      />

      {/* studio card */}
      <AnimatePresence>
        {beat === 1 && (
          <motion.div
            key="studio"
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, filter: 'blur(6px)' }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              className="font-sans text-xs font-semibold text-mist sm:text-sm"
              initial={{ letterSpacing: '0.2em', opacity: 0 }}
              animate={{ letterSpacing: '0.6em', opacity: 1 }}
              transition={{ duration: 1.6, ease: EASE }}
            >
              {profile.originalLabel}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* portrait */}
      <motion.div
        className="absolute inset-x-0 bottom-[10vh] z-0 mx-auto flex h-[62vh] max-w-[500px] items-center justify-center px-4"
        initial={{ opacity: 0, scale: 1.08, filter: 'blur(18px) brightness(0.3)' }}
        animate={beat >= 4 ? { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1)' } : {}}
        transition={{ duration: 1.6, ease: EASE }}
      >
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/20 bg-gradient-to-b from-white/10 via-black/40 to-black/80 p-2 shadow-[0_30px_80px_rgba(0,0,0,0.9),0_0_60px_rgba(229,19,43,0.3)] backdrop-blur-md">
          <img
            src={profile.portrait.src}
            srcSet={profile.portrait.srcSet}
            sizes="(max-width: 768px) 90vw, 500px"
            alt={profile.portrait.alt}
            className="h-[48vh] max-h-[520px] w-auto rounded-[2rem] object-cover object-top"
          />
          <div aria-hidden className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>
      </motion.div>

      {/* typography stack */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center">
        {beat >= 2 && (
          <motion.div
            initial={{ scale: 0.88, filter: 'blur(14px)', opacity: 0 }}
            animate={{ scale: 1, filter: 'blur(0px)', opacity: 1 }}
            transition={{ duration: 1.4, ease: EASE }}
          >
            <h1
              className="font-display leading-[0.82] tracking-[0.04em] text-bone drop-shadow-[0_10px_40px_rgba(0,0,0,0.9)]"
              style={{ fontSize: 'clamp(3.8rem, 11vw, 9rem)' }}
            >
              {profile.firstName}
            </h1>
          </motion.div>
        )}

        {beat >= 3 && (
          <motion.p
            className="mt-2 font-sans text-xs font-bold tracking-[0.62em] text-crimson-2 sm:text-base sm:tracking-[0.8em]"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            {profile.seriesTag}
          </motion.p>
        )}

        {beat >= 5 && (
          <motion.p
            className="mt-6 max-w-xl text-xs font-semibold uppercase tracking-[0.28em] text-mist sm:text-sm"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            {profile.role}
          </motion.p>
        )}

        {beat >= 6 && (
          <motion.div
            className="mt-10 flex flex-col items-center gap-3"
            initial={{ opacity: 0, y: 24, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <Magnetic>
              <button
                type="button"
                data-cursor="play"
                onClick={onDone}
                className="group flex min-h-12 items-center gap-3 rounded-full bg-crimson px-8 py-3.5 text-sm font-bold tracking-[0.14em] text-white shadow-[0_0_50px_rgba(229,19,43,0.55)] transition hover:bg-crimson-2 hover:shadow-[0_0_70px_rgba(229,19,43,0.8)]"
              >
                <span>▶</span> ENTER PORTFOLIO
              </button>
            </Magnetic>
            <p className="text-[11px] uppercase tracking-[0.28em] text-smoke">Press Enter or Space</p>
          </motion.div>
        )}
      </div>

      {beat < 6 && (
        <button
          type="button"
          onClick={onDone}
          className="absolute bottom-6 right-6 z-40 text-xs font-semibold tracking-[0.24em] text-smoke transition hover:text-bone"
        >
          SKIP ›
        </button>
      )}
    </motion.div>
  );
}
