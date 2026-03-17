import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Twitter, 
  Instagram, 
  Mail, 
  Code2, 
  TerminalSquare, 
  Database,
  PieChart,
  BrainCircuit,
  Dumbbell,
  MoonStar,
  ArrowUpRight,
  FolderTree,
  Globe,
  ChevronRight,
  Sparkles,
  Phone
} from 'lucide-react';

const repositoryData = [
  {
    title: "Banking System",
    description: "Robust OOP simulation of a bank offering secure account creation, deposits, withdrawals, and balance tracking.",
    folder: "Mini Project(Banking System)",
    icon: <Database size={24} />,
    color: "#10b981", 
    gradient: "from-emerald-500 to-teal-400",
    link: "https://github.com/ayushkumarjena15/Advance-Python-TNP/tree/main/Mini%20Project(Banking%20System)",
    tags: ["OOP", "Classes", "Simulation"]
  },
  {
    title: "Student Analyser",
    description: "Powerful data-processing engine that analyzes marks, calculates aggregate performances, and generates grade reports.",
    folder: "Mini Project(Student Performance Analyser)",
    icon: <PieChart size={24} />,
    color: "#6366f1", 
    gradient: "from-indigo-500 to-blue-400",
    link: "https://github.com/ayushkumarjena15/Advance-Python-TNP/tree/main/Mini%20Project(Student%20Performance%20Analyser)",
    tags: ["Data Processing", "Algorithms"]
  },
  {
    title: "Logic Assessments",
    description: "15 intensive algorithmic challenges simulating technical interview environments focusing on core data structures.",
    folder: "Python Assessment",
    icon: <BrainCircuit size={24} />,
    color: "#f43f5e", 
    gradient: "from-rose-500 to-pink-400",
    link: "https://github.com/ayushkumarjena15/Advance-Python-TNP/tree/main/Python%20Assessment",
    tags: ["DSA", "Logic", "Interviews"]
  },
  {
    title: "Daily Practice Gym",
    description: "5 dedicated directories for keeping syntax sharp. Focuses on tuple unpacking, comprehensions, and nested loops.",
    folder: "Practice Modules",
    icon: <Dumbbell size={24} />,
    color: "#f59e0b", 
    gradient: "from-amber-500 to-orange-400",
    link: "https://github.com/ayushkumarjena15/Advance-Python-TNP",
    tags: ["Syntax", "Loops", "Comprehensions"]
  },
  {
    title: "Evening Sessions",
    description: "Core logic scripts engineered during strictly scheduled deep-work evening python programming sessions.",
    folder: "Evening session Work",
    icon: <MoonStar size={24} />,
    color: "#a855f7", 
    gradient: "from-purple-500 to-fuchsia-400",
    link: "https://github.com/ayushkumarjena15/Advance-Python-TNP/tree/main/Evening%20session%20Work",
    tags: ["Deep Work", "Core Python"]
  },
  {
    title: "Root Mechanics",
    description: "Standalone architecture scripts emphasizing local scoping, list operations, and lambda functional programming.",
    folder: "Root Level Scripts",
    icon: <Code2 size={24} />,
    color: "#0ea5e9", 
    gradient: "from-sky-500 to-cyan-400",
    link: "https://github.com/ayushkumarjena15/Advance-Python-TNP/blob/main/Global.py",
    tags: ["Functions", "Scoping"]
  }
];

// --- Animation Variants ---
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  show: { 
    y: 0, 
    opacity: 1, 
    transition: { type: "spring", stiffness: 80, damping: 20 } 
  }
};

const scaleIn = {
  hidden: { scale: 0.9, opacity: 0 },
  show: { 
    scale: 1, 
    opacity: 1, 
    transition: { type: "spring", stiffness: 100, damping: 15 } 
  }
};

// --- Custom Mouse Tracker Component ---
const MouseGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <motion.div
      className="mouse-glow"
      animate={{
        x: mousePosition.x - 400,
        y: mousePosition.y - 400,
      }}
      transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
    />
  );
};

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      <MouseGlow />
      
      {/* Dynamic Background */}
      <div className="bg-grid"></div>
      <div className="bg-gradient-sphere bg-sphere-1"></div>
      <div className="bg-gradient-sphere bg-sphere-2"></div>
      
      {/* Header */}
      <motion.header 
        className={`header ${scrolled ? 'header-scrolled' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
      >
        <nav className="navbar max-w-container">
          <motion.div 
            className="logo group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="logo-icon-wrapper">
              <TerminalSquare size={24} className="text-yellow-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <span className="logo-text">Py<span className="text-gradient">Mastery</span></span>
          </motion.div>
          
          <div className="social-links">
            {[
              { icon: <Globe size={18} />, href: "https://www.ayushkumarjena.in/", label: "Portfolio" },
              { icon: <Github size={18} />, href: "https://github.com/ayushkumarjena15", label: "Github" },
              { icon: <Twitter size={18} />, href: "https://x.com/ayushkumarjena15", label: "Twitter" },
              { icon: <Instagram size={18} />, href: "https://www.instagram.com/ig_ayush099/?hl=en", label: "Instagram" },
              { icon: <Mail size={18} />, href: "mailto:ahalyajena28@gmail.com", label: "Email" }
            ].map((link, i) => (
              <motion.a 
                key={i}
                href={link.href}
                target="_blank" 
                rel="noreferrer" 
                className="social-icon"
                aria-label={link.label}
                whileHover={{ y: -5, scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (i * 0.1) }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </nav>
      </motion.header>

      <main className="max-w-container main-content">
        {/* Advanced Hero Section */}
        <section className="hero">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="hero-content"
          >
            <motion.div variants={fadeUp} className="badge-wrapper">
              <span className="hero-badge">
                <Sparkles size={16} className="text-yellow-400" /> 
                <span className="tracking-wide">PREMIUM WORKSPACE SHOWCASE</span>
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="hero-title">
              Engineering with <br/> 
              <span className="hero-title-gradient">Advanced Python.</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="hero-subtitle">
              A meticulously curated algorithmic vault of scripts, complex object-oriented systems, 
              and technical data assessments. Crafted for high-performance scale by <strong className="text-white">Ayush Kumar Jena</strong>.
            </motion.p>
            
            <motion.div variants={fadeUp} className="hero-cta">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/ayushkumarjena15/Advance-Python-TNP" 
                target="_blank" 
                rel="noreferrer" 
                className="btn-primary-glow"
              >
                <Github size={20} /> Inspect Repository
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.08)" }}
                whileTap={{ scale: 0.95 }}
                href="#architecture" 
                className="btn-secondary-glass"
              >
                View Architecture <ChevronRight size={18} className="btn-arrow" />
              </motion.a>
            </motion.div>
          </motion.div>
        </section>

        {/* High-Tech Grid Layout */}
        <section id="architecture" className="architecture-section">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="section-header"
          >
            <div className="section-icon-box">
              <FolderTree color="#facc15" size={28} />
            </div>
            <div>
              <h2 className="section-title">Directory Architecture</h2>
              <p className="section-desc">Explore the modular folder structure of the repository.</p>
            </div>
          </motion.div>

          <motion.div 
            className="bento-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            {repositoryData.map((data, idx) => (
              <motion.a 
                href={data.link} 
                target="_blank" 
                rel="noreferrer"
                key={idx} 
                className="bento-card group"
                variants={scaleIn}
                whileHover={{ y: -8 }}
              >
                {/* Glowing Hover Effect */}
                <div className="bento-glow group-hover:opacity-100" style={{ backgroundImage: `radial-gradient(circle at 50% 0%, ${data.color}33, transparent 70%)` }}></div>
                
                <div className="bento-content">
                  <header className="bento-header">
                    <div 
                      className="bento-icon" 
                      style={{ color: data.color, backgroundColor: `${data.color}15`, border: `1px solid ${data.color}30` }}
                    >
                      {data.icon}
                    </div>
                    <ArrowUpRight size={22} className="bento-arrow" style={{ color: data.color }} />
                  </header>
                  
                  <div className="bento-body">
                    <h3 className="bento-title">{data.title}</h3>
                    <p className="bento-desc">{data.description}</p>
                    
                    <div className="bento-tags">
                      {data.tags.map((tag, t) => (
                        <span key={t} className="bento-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                  
                  <footer className="bento-footer">
                    <span className="bento-folder">
                      <TerminalSquare size={14} className="mr-2 opacity-50" /> {data.folder}
                    </span>
                  </footer>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </section>

        {/* Brand New Connect / Collaborate CTA Section */}
        <section id="contact" className="cta-section">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="cta-card"
          >
            <div className="cta-glow"></div>
            <h2 className="cta-title">Interested in Collaborating?</h2>
            <p className="cta-desc">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let's connect!
            </p>
            <div className="cta-buttons">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.ayushkumarjena.in/book" 
                target="_blank" 
                rel="noreferrer" 
                className="btn-primary-glow"
              >
                <Phone size={20} /> Book a Call
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.08)" }}
                whileTap={{ scale: 0.95 }}
                href="mailto:ahalyajena28@gmail.com" 
                className="btn-secondary-glass"
              >
                <Mail size={20} /> Drop an Email
              </motion.a>
            </div>
          </motion.div>
        </section>

      </main>

      {/* Premium Footer */}
      <footer className="footer">
        <div className="max-w-container footer-content">
          <div className="footer-glow"></div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="footer-text"
          >
            Built with <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }} style={{ color: '#f43f5e', margin: '0 6px', display: 'inline-block' }}>❤</motion.span> by <strong className="text-white ml-1">Ayush Kumar Jena</strong>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
