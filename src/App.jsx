import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink, 
  Cpu, 
  Code, 
  Terminal,
  Radio,
  Youtube,
  ChevronRight,
  GraduationCap,
  Moon,
  Sun,
  Award,
  Briefcase,
  Users
} from 'lucide-react';

import { DATA } from './data';



// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const SkillCard = ({ skillGroup }) => {
  const [expanded, setExpanded] = useState(null);

  if (skillGroup.subCategories) {
    return (
      <motion.div variants={fadeInUp} className="glass-card p-5 rounded-xl group relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-100 dark:from-white/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            {skillGroup.icon}
            <h3 className="text-slate-900 dark:text-white font-semibold tracking-wide">{skillGroup.category}</h3>
          </div>
          <div className="grid gap-2">
            {skillGroup.subCategories.map((cat, idx) => (
              <div key={idx} className="border border-slate-200 dark:border-white/5 rounded-lg overflow-hidden">
                <button 
                  onClick={() => setExpanded(expanded === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-3 bg-slate-50 dark:bg-white/[0.02] hover:bg-slate-100 dark:hover:bg-white/[0.05] transition-colors"
                >
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">{cat.name}</span>
                  <ChevronRight className={`w-3 h-3 transition-transform ${expanded === idx ? 'rotate-90' : ''}`} />
                </button>
                {expanded === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="p-3 bg-white dark:bg-[#040211]/30 flex flex-wrap gap-2 border-t border-slate-200 dark:border-white/5"
                  >
                    {cat.items.map((item, j) => (
                      <span key={j} className="text-[10px] font-mono bg-primary/5 text-primary-dark dark:text-primary px-2 py-1 rounded">
                        {item}
                      </span>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div variants={fadeInUp} className="glass-card p-5 rounded-xl group relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-100 dark:from-white/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          {skillGroup.icon}
          <h3 className="text-slate-900 dark:text-white font-semibold tracking-wide">{skillGroup.category}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skillGroup.items.map((item, j) => (
            <span key={j} className="text-xs font-mono bg-slate-100 dark:bg-white/[0.05] text-slate-700 dark:text-slate-300 px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/[0.05] group-hover:border-primary/30 transition-colors shadow-sm dark:shadow-none">{item}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const SectionHeading = ({ children, number }) => (
  <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={fadeInUp}
    className="flex items-center gap-4 mb-16"
  >
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 flex items-center tracking-tight">
      <span className="font-mono text-primary text-xl md:text-2xl mr-3 font-normal">0{number}.</span>
      {children}
    </h2>
    <div className="h-px bg-slate-300 dark:bg-white/[0.1] flex-grow max-w-[200px] md:max-w-md"></div>
  </motion.div>
);

// --- MAIN APP COMPONENT ---
const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');

  // Handle Theme switching
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Track active section for nav
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="relative">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Sleek Professional Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-slate-50 dark:bg-[#040211]"></div>
        {/* Very subtle elegant glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-slate-300/20 dark:bg-white/[0.02] rounded-full blur-[120px] opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-300/20 dark:bg-white/[0.02] rounded-full blur-[120px] opacity-50"></div>
        {/* Minimalist dot grid */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMTQ4LDE2MywxODQsMC4wNSkiLz48L3N2Zz4=')] dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent,white)] z-0 pointer-events-none"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/70 dark:bg-[#040211]/70 backdrop-blur-2xl border-b border-white/20 dark:border-white/10 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.3)]' : 'bg-transparent py-8'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-mono text-xl font-bold tracking-tighter cursor-pointer z-50 group" 
            onClick={() => scrollTo('home')}
          >
            <span className="text-slate-900 dark:text-white group-hover:text-primary transition-colors">MH</span>
            <span className="text-primary group-hover:text-secondary transition-colors">.</span>
          </motion.div>
          
          <div className="hidden md:flex gap-8 items-center font-mono text-sm">
            {['About', 'Experience', 'Projects', 'Contact'].map((item, i) => (
              <motion.button 
                key={item} 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => scrollTo(item.toLowerCase())}
                className={`nav-link flex items-center gap-1 ${activeSection === item.toLowerCase() ? 'active' : ''}`}
              >
                <span className="text-primary">0{i+1}.</span> {item}
              </motion.button>
            ))}
            
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-300" /> : <Moon className="w-5 h-5 text-slate-700" />}
            </motion.button>


          </div>
        </div>
      </nav>

      {/* Fixed Socials Left Sidebar */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="hidden md:flex fixed bottom-0 left-10 flex-col items-center gap-6 z-40 after:content-[''] after:w-[1px] after:h-24 after:bg-slate-300 dark:after:bg-slate-600"
      >
        <a href={DATA.socials.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary hover:-translate-y-1 transition-all p-2"><Github className="w-5 h-5" /></a>
        <a href={DATA.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary hover:-translate-y-1 transition-all p-2"><Linkedin className="w-5 h-5" /></a>
        <a href={DATA.socials.youtube} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary hover:-translate-y-1 transition-all p-2"><Youtube className="w-5 h-5" /></a>
      </motion.div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 sm:px-12 md:px-24 relative z-10">
        
        {/* HERO SECTION */}
        <section id="home" className="min-h-screen flex flex-col md:flex-row justify-center items-center pt-20 gap-12 lg:gap-24">
          <div className="flex-1 max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-black text-slate-900 dark:text-white tracking-tighter mb-4 leading-none"
            >
              {DATA.name}
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-10 flex flex-col gap-2"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-700 dark:text-slate-300 tracking-tight">
                Embedded System Engineer
              </h2>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <span className="text-primary font-bold">@</span> Frontier Semiconductor
              </h3>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <button onClick={() => scrollTo('projects')} className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all shadow-[0_4px_14px_0_rgba(139,92,246,0.39)] hover:shadow-[0_6px_20px_rgba(139,92,246,0.23)] hover:-translate-y-0.5">
                Explore Projects <ChevronRight className="w-4 h-4" />
              </button>
              <a href={`mailto:${DATA.email}`} className="px-8 py-4 rounded-lg font-semibold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-0.5">
                <Mail className="w-4 h-4" /> Let's Talk
              </a>
            </motion.div>

            {/* Mobile Socials */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex md:hidden items-center justify-center w-full gap-6 mt-10 mb-4"
            >
              <a href={DATA.socials.github} target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors p-3 bg-slate-100 dark:bg-white/5 rounded-full shadow-sm"><Github className="w-5 h-5" /></a>
              <a href={DATA.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors p-3 bg-slate-100 dark:bg-white/5 rounded-full shadow-sm"><Linkedin className="w-5 h-5" /></a>
              <a href={DATA.socials.youtube} target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors p-3 bg-slate-100 dark:bg-white/5 rounded-full shadow-sm"><Youtube className="w-5 h-5" /></a>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="flex-shrink-0 relative group mt-8 md:mt-0"
          >
            {/* Subtle vibrant glow */}
            <div className="absolute inset-0 bg-primary/20 dark:bg-primary/30 blur-[60px] rounded-full scale-110 opacity-50 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none z-0"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-[6px] border-white dark:border-[#0f172a] shadow-2xl z-10 bg-slate-100 dark:bg-slate-900 transition-transform duration-500 group-hover:scale-[1.03]">
              <img 
                src="/profile.jpeg" 
                alt={DATA.name}
                className="w-full h-full object-cover mix-blend-normal transition-transform duration-700 group-hover:scale-105"
                onError={(e) => { 
                  e.target.onerror = null; 
                  e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=400&h=400"; // Fallback placeholder
                }}
              />
            </div>
          </motion.div>
        </section>

        <section id="about" className="py-24">
          <SectionHeading number="1">About Me</SectionHeading>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16"
          >
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-4xl">{DATA.about}</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column: Academics & Achievements */}
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-slate-900 dark:text-white font-bold text-xl mb-4">
                  <GraduationCap className="text-primary w-6 h-6" /> Academic Background
                </div>
                {DATA.education.map((edu, i) => (
                  <div key={i} className="glass-card p-6 rounded-xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full blur-[20px] transition-all group-hover:bg-primary/20"></div>
                    <h4 className="text-slate-900 dark:text-white font-bold text-lg">{edu.degree}</h4>
                    <p className="font-mono text-secondary text-sm mb-2 mt-1 underline decoration-primary/30 underline-offset-4 line-clamp-1">{edu.institution} &middot; {edu.date}</p>
                    {edu.details && <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{edu.details}</p>}
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3 text-slate-900 dark:text-white font-bold text-xl mb-4">
                  <Award className="text-secondary w-6 h-6" /> Honors & Awards
                </div>
                <div className="glass-panel p-8 rounded-3xl">
                  <ul className="space-y-4">
                    {DATA.honors.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 group">
                        <ChevronRight className="w-5 h-5 text-secondary shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                        <span className="leading-relaxed font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3 text-slate-900 dark:text-white font-bold text-xl mb-4">
                  <Briefcase className="text-primary w-6 h-6" /> Sourcing & Logistics
                </div>
                <div className="glass-panel p-8 rounded-3xl">
                  <ul className="space-y-4">
                    {DATA.logistics.map((item, i) => (
                      <li key={i} className="flex flex-col text-slate-600 dark:text-slate-400">
                        <span className="font-mono text-[10px] text-primary mb-1 uppercase tracking-widest">Strategy {i+1}</span>
                        <span className="leading-relaxed text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Right Column: Skills */}
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-slate-900 dark:text-white font-bold text-xl mb-4">
                  <Cpu className="text-accent w-6 h-6" /> Technical Arsenal
                </div>
                <div className="grid gap-4">
                  {DATA.skills.map((skillGroup, i) => (
                    <SkillCard key={i} skillGroup={skillGroup} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-32 relative">
          <div className="absolute left-[39px] md:left-[51px] top-40 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/20 to-transparent hidden sm:block"></div>
          <SectionHeading number="2">Experience</SectionHeading>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="space-y-12 max-w-4xl relative"
          >
            {DATA.experience.map((exp, i) => (
              <motion.div key={i} variants={fadeInUp} className="relative pl-0 sm:pl-12 md:pl-16 group">
                <div className="hidden sm:flex absolute left-0 top-8 w-8 h-8 rounded-full bg-slate-100 dark:bg-[#040211] border-4 border-slate-200 dark:border-white/10 items-center justify-center z-10 group-hover:border-primary group-hover:scale-110 transition-all duration-500 shadow-xl group-hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]">
                  <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600 group-hover:bg-primary transition-colors duration-500"></div>
                </div>
                <div className="glass-card p-8 md:p-10 rounded-3xl relative group border-t-4 border-t-transparent hover:border-t-primary transition-all duration-500 hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300">{exp.title}</h3>
                      <h4 className="text-slate-600 dark:text-slate-400 text-lg mt-1 font-medium">
                        {exp.link ? (
                          <a href={exp.link} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors inline-flex items-center gap-2">
                            {exp.company} <ExternalLink className="w-4 h-4" />
                          </a>
                        ) : (
                          exp.company
                        )}
                      </h4>
                    </div>
                    <span className="font-mono text-sm text-primary bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full whitespace-nowrap self-start md:self-auto font-medium shadow-sm">{exp.date}</span>
                  </div>
                  <ul className="space-y-4">
                    {exp.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-4 text-slate-600 dark:text-slate-400 group/item">
                        <ChevronRight className="w-5 h-5 text-primary/50 shrink-0 mt-0.5 group-hover/item:text-primary group-hover/item:translate-x-1 transition-all" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* EXTENSIVE PROJECTS SECTION */}
        <section id="projects" className="py-32">
          <SectionHeading number="3">Technical Portfolio</SectionHeading>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "100px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {DATA.projects.map((project, i) => (
              <motion.div key={i} variants={fadeInUp} className="glass-card p-6 rounded-2xl flex flex-col h-full group relative overflow-hidden pointer-events-auto">
                {/* Glow behind card on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl pointer-events-none"></div>
                
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors mb-3 pr-8 leading-tight">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mb-6 flex-grow leading-relaxed">{project.description}</p>
                
                <ul className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tags.map((tag, j) => (
                    <li key={j} className="font-mono text-[10px] bg-slate-100 dark:bg-white/[0.05] text-slate-700 dark:text-slate-300 px-2 py-1 rounded-sm border border-slate-200 dark:border-white/[0.05]">{tag}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </section>



        {/* CONTACT SECTION */}
        <section id="contact" className="py-40 flex flex-col items-center justify-center text-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent blur-[100px] z-0 pointer-events-none"
          ></motion.div>
          
          <div className="relative z-10 w-full max-w-2xl">
            <p className="font-mono text-primary mb-6 font-medium">04. What's Next?</p>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-8 tracking-tight">Get In Touch</h2>
            <div className="flex flex-col gap-3 items-center mb-10 text-slate-600 dark:text-slate-400 font-mono text-sm">
              <div className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" /> {DATA.email}
              </div>
              <div className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" /> {DATA.phone}
              </div>
              <div className="flex items-center gap-2 hover:text-primary transition-colors">
                <Terminal className="w-4 h-4" /> {DATA.location}
              </div>
            </div>

            <a 
              href={`mailto:${DATA.email}`} 
              className="inline-flex items-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-black font-bold px-10 py-5 rounded-full hover:bg-primary dark:hover:bg-primary hover:text-white dark:hover:text-white transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(139,92,246,0.15)] dark:shadow-[0_0_40px_rgba(139,92,246,0.3)]"
            >
              <Mail className="w-5 h-5" /> Let's Talk
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-8 text-center font-mono text-sm text-slate-500 border-t border-slate-200 dark:border-white/[0.05] relative z-10 w-full transition-colors duration-500">
        <p className="hover:text-primary transition-colors mb-2 cursor-pointer">Copyright Miraz Hossain 2026</p>
      </footer>
    </div>
  );
};

export default App;