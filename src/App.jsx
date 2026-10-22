import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Download,
  ArrowRight,
  ArrowUpRight,
  Copy,
  Check,
  Moon,
  Sun,
  Menu,
  X,
  ChevronDown,
} from 'lucide-react';

import { DATA } from './data';

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'research', label: 'Research' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

const SOCIALS = [
  { href: DATA.socials.github, label: 'GitHub', Icon: Github },
  { href: DATA.socials.linkedin, label: 'LinkedIn', Icon: Linkedin },
  { href: DATA.socials.youtube, label: 'YouTube', Icon: Youtube },
];

// --- HOOKS ---
const useTheme = () => {
  const [theme, setTheme] = useState(() =>
    document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {
      // storage can be blocked; the theme still applies for this visit
    }
  }, [theme]);

  return [theme, () => setTheme(theme === 'dark' ? 'light' : 'dark')];
};

const useActiveSection = (ids) => {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
};

const useCopy = () => {
  const [copied, setCopied] = useState(false);
  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      // clipboard unavailable; nothing to do
    }
  };
  return [copied, copy];
};

// --- SMALL COMPONENTS ---
const Reveal = ({ children, className = '', delay = 0 }) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const SectionHeader = ({ eyebrow, title, children }) => (
  <Reveal className="mb-12 md:mb-16 max-w-2xl">
    <p className="eyebrow">{eyebrow}</p>
    <h2 className="section-title">{title}</h2>
    {children && <p className="mt-4 text-muted leading-relaxed">{children}</p>}
  </Reveal>
);

const ExternalLink = ({ href, children, className = '' }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
    {children}
  </a>
);

const SocialLinks = ({ className = '' }) => (
  <div className={`flex items-center gap-1 ${className}`}>
    {SOCIALS.map(({ href, label, Icon }) => (
      <ExternalLink
        key={label}
        href={href}
        className="p-2 rounded-md text-muted hover:text-ink hover:bg-ink/5 transition-colors"
      >
        <Icon className="w-[18px] h-[18px]" aria-hidden="true" />
        <span className="sr-only">{label}</span>
      </ExternalLink>
    ))}
  </div>
);

// --- NAVIGATION ---
const Nav = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(NAV_ITEMS.map((n) => n.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const ThemeButton = (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md text-muted hover:text-ink hover:bg-ink/5 transition-colors"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}
    </button>
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen ? 'bg-page/90 backdrop-blur-md border-b border-line' : 'border-b border-transparent'
      }`}
    >
      <nav className="max-w-site mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="font-semibold tracking-tight text-ink" onClick={() => setMenuOpen(false)}>
          Miraz Hossain
        </a>

        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`px-3 py-2 text-sm rounded-md transition-colors ${
                active === item.id ? 'text-ink font-medium' : 'text-muted hover:text-ink'
              }`}
            >
              {item.label}
            </a>
          ))}
          <span className="w-px h-5 bg-line mx-2" />
          {ThemeButton}
          <a href={DATA.cv} download className="btn-secondary ml-2 !px-3.5 !py-2">
            <Download className="w-4 h-4" /> CV
          </a>
        </div>

        <div className="flex md:hidden items-center gap-1">
          {ThemeButton}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-md text-ink hover:bg-ink/5 transition-colors"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden border-t border-line bg-page">
          <div className="max-w-site mx-auto px-5 py-3 flex flex-col">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMenuOpen(false)}
                className={`py-3 border-b border-line last:border-0 ${active === item.id ? 'text-ink font-medium' : 'text-muted'}`}
              >
                {item.label}
              </a>
            ))}
            <a href={DATA.cv} download className="btn-primary mt-4 mb-2">
              <Download className="w-4 h-4" /> Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

// --- HERO ---
const Hero = () => (
  <section id="top" className="pt-32 pb-20 md:pt-40 md:pb-28">
    <div className="grid md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-center">
      <Reveal>
        <p className="inline-flex items-center gap-2 text-sm text-muted">
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-500 opacity-60 motion-safe:animate-ping" />
            <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" />
          </span>
          {DATA.role} at {DATA.company}
        </p>
        <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-ink leading-[1.08]">
          Hi, I'm Miraz.
          <span className="block text-muted">I design embedded systems, from PCB to firmware.</span>
        </h1>
        <p className="mt-6 text-lg text-muted leading-relaxed max-w-xl">{DATA.intro}</p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a href={DATA.cv} download className="btn-primary">
            <Download className="w-4 h-4" /> Download CV
          </a>
          <a href="#contact" className="btn-secondary">
            Get in touch <ArrowRight className="w-4 h-4" />
          </a>
          <SocialLinks className="ml-1" />
        </div>
      </Reveal>

      <Reveal delay={0.1} className="order-first md:order-none">
        <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-72 md:h-80 rounded-xl overflow-hidden border border-line bg-surface">
          <img
            src="/profile.jpeg"
            alt="Portrait of Miraz Hossain"
            className="w-full h-full object-cover"
            width="288"
            height="320"
          />
        </div>
      </Reveal>
    </div>
  </section>
);

// --- ABOUT ---
const About = () => (
  <section id="about" className="section">
    <div className="grid lg:grid-cols-[1fr_20rem] gap-12 lg:gap-20">
      <div>
        <SectionHeader eyebrow="About" title="A bit about me" />
        <Reveal className="space-y-5 text-[17px] leading-[1.75] text-muted max-w-2xl">
          {DATA.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>
      </div>

      <Reveal delay={0.1} className="lg:pt-20">
        <dl className="card divide-y divide-line">
          {DATA.quickFacts.map((fact) => (
            <div key={fact.label} className="px-5 py-4">
              <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-faint">{fact.label}</dt>
              <dd className="mt-1 text-sm text-ink">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </div>

    <div className="mt-20">
      <Reveal className="mb-8">
        <h3 className="text-xl font-semibold text-ink">Education</h3>
      </Reveal>
      <div>
        {DATA.education.map((edu) => (
          <Reveal key={edu.degree} className="border-t border-line first:border-t-0 py-6 first:pt-0">
            <div className="grid md:grid-cols-[11rem_1fr] gap-1 md:gap-10">
              <p className="font-mono text-xs text-faint pt-1">{edu.date}</p>
              <div>
                <p className="font-semibold text-ink">{edu.degree}</p>
                <p className="text-muted mt-0.5">{edu.institution}</p>
                {edu.details && <p className="mt-3 text-[15px] text-muted leading-relaxed max-w-2xl">{edu.details}</p>}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

// --- EXPERIENCE ---
const Role = ({ item }) => (
  <Reveal className="border-t border-line first:border-t-0 py-8 first:pt-0">
    <article className="grid md:grid-cols-[11rem_1fr] gap-2 md:gap-10">
      <p className="font-mono text-xs text-faint pt-1.5 flex md:flex-col gap-2 md:gap-2 items-center md:items-start">
        {item.date}
        {item.current && (
          <span className="font-sans text-[11px] font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 rounded px-1.5 py-0.5">
            Current
          </span>
        )}
      </p>
      <div>
        <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
        <p className="text-muted mt-0.5">
          {item.link ? (
            <ExternalLink href={item.link} className="inline-flex items-center gap-1 hover:text-accent transition-colors">
              {item.company} <ArrowUpRight className="w-3.5 h-3.5" />
            </ExternalLink>
          ) : (
            item.company
          )}
        </p>
        <ul className="mt-4 space-y-2.5 max-w-2xl">
          {item.points.map((point, j) => (
            <li key={j} className="relative pl-5 text-[15px] leading-relaxed text-muted before:content-[''] before:absolute before:left-0 before:top-[0.7em] before:w-2 before:h-px before:bg-faint">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </article>
  </Reveal>
);

const Experience = () => (
  <section id="experience" className="section">
    <SectionHeader eyebrow="Experience" title="Where I've worked" />
    <div>
      {DATA.workExperience.map((item, i) => (
        <Role key={i} item={item} />
      ))}
    </div>

    <Reveal className="mt-16 mb-8">
      <h3 className="text-xl font-semibold text-ink">Leadership & university clubs</h3>
    </Reveal>
    <div>
      {DATA.leadership.map((item, i) => (
        <Role key={i} item={item} />
      ))}
    </div>
  </section>
);

// --- RESEARCH ---
const Authors = ({ authors }) => {
  const parts = authors.split(DATA.name);
  return (
    <>
      {parts.map((part, i) => (
        <React.Fragment key={i}>
          {part}
          {i < parts.length - 1 && <strong className="font-semibold text-ink">{DATA.name}</strong>}
        </React.Fragment>
      ))}
    </>
  );
};

const Research = () => (
  <section id="research" className="section">
    <SectionHeader eyebrow="Research" title="Publications & thesis" />
    <div className="space-y-6 max-w-4xl">
      {DATA.publications.map((pub, i) => (
        <Reveal key={i}>
          <article className="card p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs">
              <span className="font-medium text-accent bg-accent-soft rounded px-2 py-1">Journal article</span>
              <span className="text-faint font-mono">{pub.publisher}</span>
              <span className="text-faint font-mono sm:ml-auto">{pub.date}</span>
            </div>
            <h3 className="mt-4 text-xl md:text-2xl font-semibold text-ink leading-snug">{pub.title}</h3>
            <p className="mt-3 text-sm text-muted leading-relaxed">
              <Authors authors={pub.authors} />
            </p>
            <p className="mt-2 text-sm text-muted italic">
              {pub.journal}, {pub.volume}
            </p>
            <p className="mt-5 text-[15px] text-muted leading-relaxed border-l-2 border-line pl-4">{pub.summary}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ExternalLink href={pub.doi} className="btn-secondary !py-2 !px-4">
                DOI <ArrowUpRight className="w-4 h-4" />
              </ExternalLink>
              <ExternalLink href={pub.scienceDirect} className="btn-secondary !py-2 !px-4">
                Read on ScienceDirect <ArrowUpRight className="w-4 h-4" />
              </ExternalLink>
            </div>
          </article>
        </Reveal>
      ))}

      <Reveal>
        <article className="card p-6 md:p-8">
          <span className="text-xs font-medium text-muted bg-ink/5 rounded px-2 py-1">{DATA.thesis.role}</span>
          <h3 className="mt-4 text-xl font-semibold text-ink">{DATA.thesis.title}</h3>
          <p className="mt-3 text-[15px] text-muted leading-relaxed max-w-2xl">{DATA.thesis.description}</p>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {DATA.thesis.tags.map((tag) => (
              <span key={tag} className="chip">{tag}</span>
            ))}
          </div>
        </article>
      </Reveal>
    </div>
  </section>
);

// --- PROJECTS ---
const ProjectCard = ({ project }) => (
  <article className="card p-6 h-full flex flex-col hover:border-ink/25 transition-colors">
    <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-faint">{project.category}</p>
    <h3 className="mt-2 text-base font-semibold text-ink leading-snug">{project.title}</h3>
    <p className="mt-2 text-sm text-muted leading-relaxed flex-grow">{project.description}</p>
    <div className="mt-5 flex flex-wrap gap-1.5">
      {project.tags.map((tag) => (
        <span key={tag} className="chip">{tag}</span>
      ))}
    </div>
  </article>
);

const ProjectsModal = ({ onClose }) => {
  const [filter, setFilter] = useState('All');
  const filters = ['All', ...DATA.projectCategories];
  const shown = filter === 'All' ? DATA.projects : DATA.projects.filter((p) => p.category === filter);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:p-6" role="dialog" aria-modal="true" aria-labelledby="projects-title">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="relative w-full max-w-5xl max-h-[92vh] sm:max-h-[88vh] bg-page border border-line rounded-t-xl sm:rounded-xl flex flex-col overflow-hidden"
      >
        {/* shrink-0 keeps the header and filters from being squashed when the list is long */}
        <div className="shrink-0 flex items-start justify-between gap-4 px-5 sm:px-8 pt-6 pb-4">
          <div>
            <h3 id="projects-title" className="text-xl font-semibold text-ink">More projects</h3>
            <p className="text-sm text-muted mt-1">A wider selection of things I've built</p>
          </div>
          <button onClick={onClose} className="p-2 -mr-2 rounded-md text-muted hover:text-ink hover:bg-ink/5" aria-label="Close">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="shrink-0 px-5 sm:px-8 py-1 pb-4 border-b border-line overflow-x-auto no-scrollbar">
          <div className="flex gap-2 w-max">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 rounded-md text-sm whitespace-nowrap transition-colors ${
                  filter === f ? 'bg-ink text-page' : 'text-muted border border-line hover:text-ink'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto px-5 sm:px-8 py-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {shown.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  const [open, setOpen] = useState(false);
  const featured = DATA.projects.filter((p) => p.featured);

  return (
    <section id="projects" className="section">
      <SectionHeader eyebrow="Projects" title="Things I've built">
        I've built hundreds of projects over the years. These are a few of my favourites.
      </SectionHeader>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featured.map((project, i) => (
          <Reveal key={project.title} delay={(i % 3) * 0.05} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-10">
        <button onClick={() => setOpen(true)} className="btn-secondary">
          View more projects <ArrowRight className="w-4 h-4" />
        </button>
      </Reveal>
      {open && <ProjectsModal onClose={() => setOpen(false)} />}
    </section>
  );
};

// --- SKILLS ---
const Skills = () => {
  const [showHardware, setShowHardware] = useState(false);

  return (
    <section id="skills" className="section">
      <SectionHeader eyebrow="Skills" title="What I work with">
        Grouped the way I actually use them, from the firmware I write every day to the tools around it.
      </SectionHeader>

      <div className="grid md:grid-cols-2 gap-4">
        {DATA.skills.map((group, i) => (
          <Reveal key={group.category} delay={(i % 2) * 0.05} className={`h-full ${i === 0 ? 'md:col-span-2' : ''}`}>
            <div className="card p-6 h-full">
              <h3 className="font-semibold text-ink">{group.category}</h3>
              <p className="mt-1 text-sm text-muted">{group.note}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span key={item} className={i === 0 ? 'chip !text-ink !border-accent/30 bg-accent-soft' : 'chip'}>{item}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-4">
        <div className="card">
          <button
            onClick={() => setShowHardware(!showHardware)}
            className="w-full flex items-center justify-between gap-4 p-6 text-left group"
            aria-expanded={showHardware}
          >
            <span>
              <span className="block font-semibold text-ink">Hardware I've worked with</span>
              <span className="block mt-1 text-sm text-muted">Sensors, radios, motor drivers, power modules and more.</span>
            </span>
            <ChevronDown className={`w-5 h-5 shrink-0 text-muted group-hover:text-ink transition-transform ${showHardware ? 'rotate-180' : ''}`} />
          </button>
          {showHardware && (
            <div className="px-6 pb-6 pt-5 border-t border-line grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5">
              {DATA.hardware.map((group) => (
                <div key={group.name}>
                  <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-faint">{group.name}</p>
                  <p className="mt-1.5 text-sm text-muted leading-relaxed">{group.items.join(', ')}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </Reveal>
    </section>
  );
};

// --- CONTACT ---
const Contact = () => {
  const [copied, copy] = useCopy();
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${DATA.email}`;

  return (
    <section id="contact" className="section">
      <Reveal className="max-w-2xl">
        <p className="eyebrow">Contact</p>
        <h2 className="section-title">Let's talk</h2>
        <p className="mt-4 text-lg text-muted leading-relaxed">
          If you're working on embedded hardware, robotics or a research project and think I could help, send me an email.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href={`mailto:${DATA.email}`} className="btn-primary">
            <Mail className="w-4 h-4" /> {DATA.email}
          </a>
          <button onClick={() => copy(DATA.email)} className="btn-secondary" aria-live="polite">
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            {copied ? 'Copied' : 'Copy email'}
          </button>
          <ExternalLink href={gmailUrl} className="text-sm link ml-1">
            Open in Gmail
          </ExternalLink>
        </div>

        <ul className="mt-10 grid sm:grid-cols-2 gap-4 text-sm text-muted">
          <li className="flex items-center gap-2.5">
            <Phone className="w-4 h-4 text-faint" />
            <a href={`tel:${DATA.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-ink transition-colors">{DATA.phone}</a>
          </li>
          <li className="flex items-center gap-2.5">
            <MapPin className="w-4 h-4 text-faint" /> {DATA.location}
          </li>
          <li className="flex items-center gap-2.5">
            <Linkedin className="w-4 h-4 text-faint" />
            <ExternalLink href={DATA.socials.linkedin} className="hover:text-ink transition-colors">LinkedIn</ExternalLink>
          </li>
          <li className="flex items-center gap-2.5">
            <Github className="w-4 h-4 text-faint" />
            <ExternalLink href={DATA.socials.github} className="hover:text-ink transition-colors">GitHub</ExternalLink>
          </li>
        </ul>
      </Reveal>
    </section>
  );
};

// --- MAIN APP COMPONENT ---
const App = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <>
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] btn-primary">
        Skip to content
      </a>
      <Nav theme={theme} toggleTheme={toggleTheme} />

      <main className="max-w-site mx-auto px-5 sm:px-8">
        <Hero />
        <About />
        <Experience />
        <Research />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="border-t border-line">
        <div className="max-w-site mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-faint">
          <p>© {new Date().getFullYear()} Miraz Hossain</p>
          <SocialLinks />
        </div>
      </footer>
    </>
  );
};

export default App;
