import { motion } from 'framer-motion';
import { education, experience, profile } from '../data/portfolio';
import { EASE, SectionHeading, Tilt } from './fx';

export default function About() {
  const facts = [
    { k: 'Education', v: education[0].degree, s: `${education[0].school} · ${education[0].score}` },
    { k: 'Internship', v: `${experience[0].role}`, s: `${experience[0].company} · ${experience[0].period}` },
    { k: 'Primary Focus', v: 'Full Stack & APIs', s: 'React.js, FastAPI, Python, Node.js' },
    { k: 'Location', v: profile.location, s: 'Available for Developer Roles' },
  ];

  return (
    <>
      <SectionHeading kicker="Who I Am" title="About Me" />
      <div className="gutter grid items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16">
        <motion.div
          className="mx-auto w-full max-w-md lg:max-w-none"
          initial={{ opacity: 0, scale: 0.88, filter: 'blur(12px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 1.2, ease: EASE }}
        >
          <Tilt max={5} className="rounded-3xl">
            <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-white/10 via-black/40 to-black/80 p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_40px_rgba(229,19,43,0.2)] ring-1 ring-white/10 transition duration-500 hover:border-crimson-2/40 hover:shadow-[0_25px_60px_rgba(229,19,43,0.3)]">
              <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_30%,#5a0b1b,#14060a_60%,#07070a)]" />
              <div className="absolute inset-0 opacity-40 [background-image:repeating-linear-gradient(90deg,rgba(255,255,255,0.03)_0px,rgba(255,255,255,0.03)_1px,transparent_1px,transparent_28px)]" />
              <img
                src={profile.portrait.src}
                srcSet={profile.portrait.srcSet}
                sizes="(max-width: 1024px) 90vw, 40vw"
                alt={profile.portrait.alt}
                loading="lazy"
                className="relative h-full w-full rounded-2xl object-cover object-top transition duration-700 ease-out group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <p className="text-[10px] font-bold tracking-[0.3em] text-crimson-2">FULL STACK DEVELOPER</p>
                  <p className="font-display text-3xl leading-none text-bone">{profile.displayName}</p>
                </div>
                <span className="rounded border border-white/30 px-2 py-0.5 text-[10px] font-bold tracking-wider text-bone">B.E. CSE</span>
              </div>
            </div>
          </Tilt>
        </motion.div>

        <div>
          <motion.p
            className="font-serif text-[clamp(1.5rem,3vw,2.3rem)] italic leading-[1.25] text-bone"
            initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASE }}
          >
            &ldquo;{profile.intro}&rdquo;
          </motion.p>
          <p className="mt-4 text-sm font-semibold tracking-wide text-crimson-2">— {profile.fullName}</p>

          <motion.dl
            className="mt-8 grid gap-px overflow-hidden rounded-xl bg-white/10 sm:grid-cols-2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.08 }}
          >
            {facts.map((f) => (
              <motion.div
                key={f.k}
                className="bg-ink-2 p-5"
                variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } }}
              >
                <dt className="text-[10px] font-bold uppercase tracking-[0.28em] text-smoke">{f.k}</dt>
                <dd className="mt-2 text-base font-semibold text-bone">{f.v}</dd>
                <dd className="mt-0.5 text-xs text-mist">{f.s}</dd>
              </motion.div>
            ))}
          </motion.dl>

          {/* Education Breakdown Details */}
          <div className="mt-8 rounded-xl bg-white/[0.03] p-5 ring-1 ring-white/10">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-crimson-2">Academic Credentials</p>
            <div className="space-y-2.5">
              {education.map((e) => (
                <div key={e.degree} className="flex flex-wrap items-baseline justify-between gap-2 border-b border-white/5 pb-2 last:border-none last:pb-0">
                  <div>
                    <span className="text-sm font-semibold text-bone">{e.degree}</span>
                    <span className="block text-xs text-mist">{e.school}, {e.place}</span>
                  </div>
                  <span className="rounded bg-white/10 px-2 py-0.5 text-xs font-bold text-bone">{e.score}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills & Spoken Languages */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-smoke">Soft Skills</p>
              <div className="flex flex-wrap gap-2">
                {profile.softSkills.map((s) => (
                  <span key={s} className="glass rounded-full px-3 py-1 text-xs font-medium text-bone">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-smoke">Languages Known</p>
              <div className="flex flex-wrap gap-2">
                {profile.spokenLanguages.map((l) => (
                  <span key={l} className="glass rounded-full px-3 py-1 text-xs font-medium text-bone">
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
