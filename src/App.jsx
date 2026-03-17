import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Mail, 
  Code2, 
  TerminalSquare, 
  Database,
  PieChart,
  Brain,
  Dumbbell,
  Moon,
  ArrowRight,
  FolderOpen,
  Globe
} from 'lucide-react';

const repositoryData = [
  {
    title: "Banking System",
    description: "A robust OOP simulation of a bank offering account creation, secure deposits, withdrawals, and balance tracking.",
    folder: "Mini Project(Banking System)",
    icon: <Database size={28} />,
    color: "#10b981", 
    link: "https://github.com/ayushkumarjena15/Advance-Python-TNP/tree/main/Mini%20Project(Banking%20System)"
  },
  {
    title: "Student Analyser",
    description: "A Python data-processing system that analyzes student marks, calculates aggregate performances, and generates grade reports.",
    folder: "Mini Project(Student Performance Analyser)",
    icon: <PieChart size={28} />,
    color: "#6366f1", 
    link: "https://github.com/ayushkumarjena15/Advance-Python-TNP/tree/main/Mini%20Project(Student%20Performance%20Analyser)"
  },
  {
    title: "Python Assessments",
    description: "15 intensive logical and algorithm-based challenges simulating interview environments, focusing on Data Structures and Loops.",
    folder: "Python Assessment",
    icon: <Brain size={28} />,
    color: "#f43f5e", 
    link: "https://github.com/ayushkumarjena15/Advance-Python-TNP/tree/main/Python%20Assessment"
  },
  {
    title: "Practice Modules",
    description: "5 dedicated directories acting as a daily brain-gym. Contains logic exercises on Tuple Unpacking, Comprehensions, and Sorting.",
    folder: "Practice-1 to 5",
    icon: <Dumbbell size={28} />,
    color: "#f59e0b", 
    link: "https://github.com/ayushkumarjena15/Advance-Python-TNP"
  },
  {
    title: "Evening Work",
    description: "Core logic scripts engineered during strictly scheduled deep-work evening python programming sessions.",
    folder: "Evening session Work",
    icon: <Moon size={28} />,
    color: "#8b5cf6", 
    link: "https://github.com/ayushkumarjena15/Advance-Python-TNP/tree/main/Evening%20session%20Work"
  },
  {
    title: "Core Mechanics",
    description: "Standalone scripts emphasizing core language behavior such as Global/Local Scoping, List Operations, & Functional Programming.",
    folder: "Root Scripts",
    icon: <Code2 size={28} />,
    color: "#38bdf8", 
    link: "https://github.com/ayushkumarjena15/Advance-Python-TNP/blob/main/Global.py"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

export default function App() {
  return (
    <div className="app-container">
      
      {/* Header */}
      <header className="header">
        <nav className="navbar max-w-container">
          <div className="logo">
            <TerminalSquare size={28} color="#facc15" />
            <span>Py<span className="highlight">Mastery</span></span>
          </div>
          <div className="social-links">
            <a href="https://www.ayushkumarjena.in/v" target="_blank" rel="noreferrer" className="social-icon" aria-label="Portfolio">
              <Globe size={18} />
            </a>
            <a href="https://github.com/ayushkumarjena15" target="_blank" rel="noreferrer" className="social-icon" aria-label="Github">
              <Github size={18} />
            </a>
            <a href="https://x.com/ayushkumarjena15" target="_blank" rel="noreferrer" className="social-icon" aria-label="X">
              <Twitter size={18} />
            </a>
            <a href="https://www.instagram.com/ig_ayush099/?hl=en" target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="mailto:ayushkumarjena15@gmail.com" className="social-icon" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </nav>
      </header>

      <main className="max-w-container">
        {/* Hero Section */}
        <section className="hero">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="hero-badge"
          >
            <Code2 size={16} /> Advanced Python TNP Showcase
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hero-title"
          >
            Mastering Python, <br/> <span className="highlight">One Script At A Time.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hero-subtitle"
          >
            A comprehensive vault of advanced Python scripts, object-oriented systems, 
            and logical assessments tailored for high-performance engineering. Built by <b>Ayush Kumar Jena</b>.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hero-buttons"
          >
            <a href="https://github.com/ayushkumarjena15/Advance-Python-TNP" target="_blank" rel="noreferrer" className="btn btn-primary">
              <Github size={20} /> View on GitHub
            </a>
            <a href="#explore" className="btn btn-secondary">
              Explore Scripts
            </a>
          </motion.div>
        </section>

        {/* Dynamic Interactive Grid */}
        <section id="explore">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <FolderOpen color="#38bdf8" size={36} /> 
            <span>Directory Analysis</span>
          </motion.div>

          <motion.div 
            className="grid-container"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {repositoryData.map((data, idx) => (
              <motion.a 
                href={data.link} 
                target="_blank" 
                rel="noreferrer"
                key={idx} 
                className="folder-card"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div 
                  className="card-icon-wrapper" 
                  style={{ color: data.color, background: `${data.color}15` }}
                >
                  {data.icon}
                </div>
                <h3 className="card-title">{data.title}</h3>
                <p className="card-desc">{data.description}</p>
                
                <div className="card-footer">
                  <span className="card-badge" style={{ color: data.color, background: `${data.color}10` }}>
                    <FolderOpen size={14} /> {data.folder}
                  </span>
                  <ArrowRight size={18} className="card-arrow" />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="max-w-container">
          <div className="footer-text">
            Built with <span style={{color: '#ff3366'}}>❤</span> by <strong>Ayush Kumar Jena</strong>
          </div>
          <div className="footer-subtext">Powered by React.js & Framer Motion</div>
        </div>
      </footer>
      
    </div>
  );
}
