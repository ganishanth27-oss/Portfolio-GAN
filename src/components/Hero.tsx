import { useRef } from 'react';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { achievements, certifications, education, profile, projects, type ProfileId } from '../data/portfolio';
import { useFinePointer } from '../hooks/useMedia';
import { useSmoothScroll } from '../hooks/smoothScroll';
import { EASE, Magnetic, Particles } from './fx';
import { SeriesMark } from './Poster';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.25 } } };
const item = {
  hidden: { opacity: 0, y: 28, filter: 'blur(10px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: EASE } },
};

function GithubIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function LinkedInIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function LeetCodeIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 4.815 3.553 5.972 5.972 0 0 0 3.473-.918l3.14-2.56a1.375 1.375 0 0 0 .5-1.077 1.377 1.377 0 0 0-.5-1.076l-2.61-2.14a1.377 1.377 0 0 0-1.076-.5 1.375 1.375 0 0 0-1.077.5l-2.392 2.054a3.218 3.218 0 0 1-2.536.562 3.267 3.267 0 0 1-2.42-2.148 3.195 3.195 0 0 1 .536-3.238l3.784-4.053 4.49-4.22a1.374 1.374 0 0 0-.987-2.484zm3.89 8.01a1.377 1.377 0 0 0-.986.438l-4.14 4.053a1.375 1.375 0 0 0 0 1.956l4.14 4.054a1.375 1.375 0 1 0 1.956-1.956l-3.14-3.076 3.14-3.076a1.377 1.377 0 0 0-.97-2.449zm-3.69 7.643H2.576a1.376 1.376 0 1 0 0 2.753h11.107a1.376 1.376 0 1 0 0-2.753z" />
    </svg>
  );
}

export default function Hero({ onPlay, onResume, profileId: _profileId }: { onPlay: () => void; onResume: () => void; profileId: ProfileId }) {
  const ref = useRef<HTMLElement>(null);
  const fine = useFinePointer();
  const { scrollTo } = useSmoothScroll();

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const blackout = useTransform(scrollYProgress, [0.35, 1], [0, 1]);

  // pointer parallax (desktop)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 60, damping: 18 });
  const py = useSpring(my, { stiffness: 60, damping: 18 });
  const imgRotY = useTransform(px, [-1, 1], [-4, 4]);
  const imgRotX = useTransform(py, [-1, 1], [3, -3]);
  const imgShiftX = useTransform(px, [-1, 1], [-10, 10]);
  const chipX = useTransform(px, [-1, 1], [18, -18]);
  const chipY = useTransform(py, [-1, 1], [12, -12]);
  const glowX = useTransform(px, [-1, 1], ['-6%', '6%']);

  const meta = [
    'B.E. Computer Science',
    'CGPA: 9.29 / 10',
    `${projects.length} Projects`,
    `${certifications.length} NPTEL Cert`,
  ];

  const floating = [
    { text: education[0].score, sub: 'B.E. Computer Science', pos: 'left-[2%] top-[28%]', depth: 1 },
    { text: `${achievements[0].title}`, sub: 'Hackathon Project', pos: 'right-[0%] top-[18%]', depth: -1 },
    { text: 'React.js · FastAPI · Python', sub: 'Core Stack', pos: 'right-[4%] bottom-[24%]', depth: 0.6 },
  ];

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden"
      onPointerMove={(e) => {
        if (!fine) return;
        mx.set((e.clientX / window.innerWidth) * 2 - 1);
        my.set((e.clientY / window.innerHeight) * 2 - 1);
      }}
    >
      {/* atmosphere */}
      <motion.div aria-hidden className="absolute inset-0" style={{ x: glowX }}>
        <div className="absolute right-[-10%] top-[-10%] h-[90vh] w-[80vw] rounded-full bg-[radial-gradient(closest-side,rgba(229,19,43,0.38),rgba(229,19,43,0.08)_55%,transparent)] blur-2xl lg:right-[-4%] lg:w-[60vw]" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[70vh] w-[60vw] rounded-full bg-[radial-gradient(closest-side,rgba(90,20,120,0.25),transparent)] blur-2xl" />
      </motion.div>
      <Particles className="z-[1]" />
      <div aria-hidden className="absolute inset-0 z-[1] overflow-hidden">
        <span className="light-streak left-[40%] top-[22%] w-[50vw]" style={{ animationDelay: '1.2s' }} />
        <span className="light-streak left-[30%] top-[64%] w-[40vw]" style={{ animationDelay: '3.6s' }} />
        <span className="light-streak left-[55%] top-[44%] w-[30vw]" style={{ animationDelay: '5.2s' }} />
      </div>

      {/* portrait */}
      <motion.div
        className="absolute inset-x-0 top-12 z-[2] flex h-[64svh] items-end justify-center sm:h-[70svh] lg:bottom-0 lg:left-auto lg:right-[3vw] lg:top-20 lg:h-auto lg:w-[54vw] xl:right-[6vw] xl:w-[48vw]"
        style={{ y: imgY, scale: imgScale, opacity: fade }}
      >
        <motion.div
          className="relative flex h-full w-full items-end justify-center lg:h-[86vh]"
          style={{ rotateY: imgRotY, rotateX: imgRotX, x: imgShiftX, transformPerspective: 1200 }}
          initial={{ clipPath: 'inset(100% -30% -10% -30%)', opacity: 0 }}
          animate={{ clipPath: 'inset(-30% -30% -10% -30%)', opacity: 1 }}
          transition={{ duration: 1.6, ease: EASE, delay: 0.1 }}
        >
          {/* rim light ring */}
          <div aria-hidden className="absolute bottom-[6%] left-1/2 h-[78%] w-[78%] -translate-x-1/2 rounded-full border border-crimson-2/20 shadow-[0_0_120px_rgba(229,19,43,0.35),inset_0_0_80px_rgba(229,19,43,0.18)]" />

          {/* Prominent professional framed portrait */}
          <div className="group relative z-10 mx-auto flex h-[90%] max-h-[680px] w-auto max-w-[92%] items-end justify-center">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/15 bg-gradient-to-b from-white/10 via-black/40 to-black/80 p-2 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_50px_rgba(229,19,43,0.25)] backdrop-blur-sm transition-all duration-700 ease-out hover:scale-[1.02] hover:border-crimson-2/40 hover:shadow-[0_30px_70px_rgba(229,19,43,0.35)]">
              <img
                src={profile.portrait.src}
                srcSet={profile.portrait.srcSet}
                sizes="(max-width: 1024px) 100vw, 54vw"
                alt={profile.portrait.alt}
                className="h-[52svh] max-h-[640px] w-auto rounded-[2rem] object-cover object-top drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] transition-transform duration-700 ease-out group-hover:scale-105 sm:h-[60svh] lg:h-[72vh]"
              />
              <div aria-hidden className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-t from-ink via-transparent to-transparent opacity-60" />
              <div aria-hidden className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_50%_0%,rgba(255,61,90,0.18),transparent_60%)] mix-blend-screen" />
            </div>
          </div>

          {/* floating UI chips */}
          {floating.map((f, i) => (
            <FloatChip key={f.text} {...f} index={i} mx={chipX} my={chipY} />
          ))}
        </motion.div>
      </motion.div>

      {/* readability gradients */}
      <div aria-hidden className="absolute inset-x-0 top-[40svh] z-[3] h-[36svh] bg-gradient-to-b from-transparent via-ink/70 to-ink lg:hidden" />
      <div aria-hidden className="absolute inset-0 z-[3] hidden bg-[linear-gradient(90deg,var(--color-ink)_0%,rgba(7,7,10,0.7)_32%,transparent_58%)] lg:block" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 z-[3] h-48 bg-gradient-to-t from-ink to-transparent" />

      {/* copy */}
      <motion.div
        className="gutter relative z-[4] flex min-h-[100svh] flex-col justify-end pb-16 pt-[54svh] sm:pb-20 lg:max-w-[54vw] lg:justify-center lg:pb-0 lg:pt-24"
        style={{ y: textY, opacity: fade }}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item} className="mb-3 text-lg">
          <SeriesMark />
        </motion.div>
        <motion.h1 variants={item} className="font-display leading-[0.82] tracking-[0.02em] text-bone" style={{ fontSize: 'clamp(3.8rem, 10vw, 9.5rem)' }}>
          <span className="shimmer-text">{profile.fullName}</span>
        </motion.h1>
        <motion.p variants={item} className="mt-2 font-sans text-sm font-bold tracking-[0.45em] text-crimson-2 sm:text-base">
          {profile.role.toUpperCase()}
        </motion.p>

        <motion.div variants={item} className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] font-medium text-mist">
          <span className="rounded border border-white/25 px-1.5 py-px text-[10px] font-bold tracking-wider text-bone">CSE</span>
          {meta.map((m, i) => (
            <span key={m} className="flex items-center gap-3">
              {i > 0 && <span className="h-1 w-1 rounded-full bg-smoke" />}
              {m}
            </span>
          ))}
        </motion.div>

        {/* Headline Quote */}
        <motion.p variants={item} className="mt-5 max-w-xl font-serif text-lg italic leading-relaxed text-bone sm:text-xl">
          &ldquo;{profile.headlineQuote}&rdquo;
        </motion.p>

        {/* Professional Summary */}
        <motion.p variants={item} className="mt-3 max-w-xl text-[14px] leading-relaxed text-bone/75 sm:text-[15px]">
          {profile.intro}
        </motion.p>

        {/* Social Icons row */}
        <motion.div variants={item} className="mt-6 flex items-center gap-3">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-bone transition hover:border-crimson-2 hover:bg-crimson/20 hover:text-white"
          >
            <GithubIcon />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-bone transition hover:border-crimson-2 hover:bg-crimson/20 hover:text-white"
          >
            <LinkedInIcon />
          </a>
          <a
            href={profile.links.leetcode}
            target="_blank"
            rel="noreferrer"
            aria-label="LeetCode Profile"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-bone transition hover:border-crimson-2 hover:bg-crimson/20 hover:text-white"
          >
            <LeetCodeIcon />
          </a>
          <span className="ml-2 text-xs text-smoke font-mono">@ganishanth27</span>
        </motion.div>

        {/* Actions: View My Projects, Download Resume, Contact Me, Play Intro */}
        <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
          <Magnetic>
            <button
              type="button"
              onClick={() => scrollTo('#originals')}
              className="flex min-h-12 items-center gap-2.5 rounded-md bg-bone px-6 py-3 text-[14px] font-bold text-ink transition hover:bg-white sm:px-7"
            >
              <span className="text-lg">✦</span> View My Projects
            </button>
          </Magnetic>
          <Magnetic>
            <button
              type="button"
              onClick={onResume}
              data-cursor="view"
              className="glass flex min-h-12 items-center gap-2.5 rounded-md px-6 py-3 text-[14px] font-semibold text-bone transition hover:bg-white/15 sm:px-7"
            >
              <span className="text-lg">👁</span> View Resume
            </button>
          </Magnetic>
          <Magnetic>
            <a
              href={profile.resumePdf}
              download="Nishanth_GA_Resume.pdf"
              data-cursor="link"
              className="glass flex min-h-12 items-center gap-2.5 rounded-md px-6 py-3 text-[14px] font-semibold text-bone transition hover:bg-white/15 sm:px-7"
            >
              <span className="text-lg">⤓</span> Download Resume
            </a>
          </Magnetic>
          <Magnetic>
            <button
              type="button"
              onClick={() => scrollTo('#contact')}
              className="glass flex min-h-12 items-center gap-2.5 rounded-md px-6 py-3 text-[14px] font-semibold text-bone transition hover:border-crimson-2 hover:text-crimson-2 sm:px-7"
            >
              ✉ Contact Me
            </button>
          </Magnetic>
          <Magnetic>
            <button
              type="button"
              data-cursor="play"
              onClick={onPlay}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-base text-bone transition hover:border-bone hover:bg-white/10"
              aria-label="Play Cinematic Intro"
              title="Play Intro"
            >
              ▶
            </button>
          </Magnetic>
        </motion.div>
      </motion.div>

      <motion.div aria-hidden className="pointer-events-none absolute inset-0 z-[5] bg-ink" style={{ opacity: blackout }} />
    </section>
  );
}

type MV = ReturnType<typeof useTransform<number, number>>;

function FloatChip({ text, sub, pos, depth, index, mx, my }: { text: string; sub: string; pos: string; depth: number; index: number; mx: MV; my: MV }) {
  const x = useTransform(mx, (n: number) => n * depth);
  const y = useTransform(my, (n: number) => n * depth);
  return (
    <motion.div
      className={`glass absolute hidden rounded-xl px-4 py-2.5 md:block ${pos}`}
      style={{ x, y }}
      initial={{ opacity: 0, filter: 'blur(6px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.9, delay: 1.2 + index * 0.18, ease: EASE }}
    >
      <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 5 + index, repeat: Infinity, ease: 'easeInOut' }}>
        <p className="text-sm font-semibold text-bone">{text}</p>
        <p className="text-[10px] uppercase tracking-[0.2em] text-mist">{sub}</p>
      </motion.div>
    </motion.div>
  );
}
