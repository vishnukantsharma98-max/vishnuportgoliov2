/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Code,
  Terminal,
  Cpu,
  Database,
  Brain,
  Layers,
  BookOpen,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Send,
  Moon,
  Sun,
  Menu,
  X,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  GraduationCap,
  FolderGit2
} from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState(false); // Clean white default
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  // Project Modal state
  const [selectedProject, setSelectedProject] = useState<any>(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormError('Please fill in all fields before sending.');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setFormError('Please enter a valid email address.');
      return;
    }

    setFormSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  const skillsData = [
    { name: 'Python', icon: Terminal, level: 'Active Practice', desc: 'Core language for scripting, data analysis, and machine learning models.' },
    { name: 'HTML & CSS', icon: Code, level: 'Learning & Building', desc: 'Structuring modern responsive layouts and clean styling.' },
    { name: 'JavaScript', icon: Code, level: 'Learning & Building', desc: 'Adding interactivity and dynamic functionality to web apps.' },
    { name: 'Pandas', icon: Database, level: 'Data Exploration', desc: 'Data cleaning, manipulation, and tabular dataset analysis.' },
    { name: 'NumPy', icon: Layers, level: 'Data Exploration', desc: 'Numerical computing and array operations for ML pipelines.' },
    { name: 'Scikit-learn', icon: Cpu, level: 'Model Building', desc: 'Training foundational machine learning algorithms like Logistic Regression.' },
    { name: 'Machine Learning', icon: Brain, level: 'Core Interest', desc: 'Understanding algorithms, supervised learning, and feature engineering.' },
    { name: 'ChromaDB', icon: Database, level: 'Vector Storage', desc: 'Vector database used for embedding storage in RAG experiments.' },
    { name: 'RAG', icon: Sparkles, level: 'Exploring AI', desc: 'Retrieval-Augmented Generation connecting documents to LLM reasoning.' },
  ];

  const learningTopics = [
    { title: 'Machine Learning Fundamentals', desc: 'Studying core algorithms, evaluation metrics, and supervised learning principles.' },
    { title: 'Scikit-learn Mastery', desc: 'Practicing pipeline creation, data scaling, and classification models.' },
    { title: 'Web Development', desc: 'Building responsive interfaces with React, Tailwind CSS, and modern JavaScript.' },
    { title: 'Artificial Intelligence', desc: 'Exploring NLP concepts, embeddings, and intelligent information retrieval.' },
    { title: 'Python Development', desc: 'Writing clean, modular code and working with data science libraries.' },
  ];

  const projectsData = [
    {
      id: 'student-performance',
      title: 'Student Performance Prediction AI',
      category: 'Machine Learning / Python',
      shortDesc: 'A predictive model built with Python and Scikit-learn using Logistic Regression to predict student pass/fail results.',
      description: 'An introductory machine learning project developed to analyze student study habits and lifestyle factors to predict academic outcomes. Trained on a student performance dataset of 1,000 records using Scikit-learn Logistic Regression.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
      features: [
        'Predicts student pass/fail results accurately',
        'Uses Logistic Regression classification algorithm',
        'Analyzed 1,000 records student performance dataset',
        'Inputs include study hours, attendance, sleep hours, assignment completion, and Instagram usage'
      ],
      githubUrl: 'https://github.com/vishnukantsharma/student-performance-prediction'
    },
    {
      id: 'rag-chatbot',
      title: 'College Information RAG Chatbot',
      category: 'AI / RAG / ChromaDB',
      shortDesc: 'A beginner Retrieval-Augmented Generation project built with Python and ChromaDB in Google Colab.',
      description: 'A practical RAG exploration project designed to answer questions using stored college information. Implements document chunking and vector storage to retrieve relevant knowledge before generating answers.',
      tech: ['Python', 'ChromaDB', 'Google Colab', 'Embeddings'],
      features: [
        'Developed as a beginner RAG learning project',
        'Document chunking and local vector storage with ChromaDB',
        'Accurately answers queries based on stored college documents',
        'Interactive notebook workflow developed in Google Colab'
      ],
      githubUrl: 'https://github.com/vishnukantsharma/college-rag-chatbot'
    }
  ];

  return (
    <div className="min-h-screen font-sans antialiased text-slate-900 dark:text-slate-100 bg-slate-50 dark:bg-black transition-colors">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 dark:bg-black/90 border-b border-slate-200 dark:border-neutral-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-blue-600 dark:bg-white dark:text-black flex items-center justify-center text-white font-bold text-lg shadow-sm group-hover:scale-105 transition-transform">
              VK
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-neutral-300 transition-colors">Vishnu Kant Sharma</span>
              <span className="text-xs text-slate-500 dark:text-neutral-400 font-medium">CS Student & AI/ML Enthusiast</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-neutral-300">
            <a href="#home" onClick={() => setActiveSection('home')} className={`hover:text-blue-600 dark:hover:text-white transition-colors ${activeSection === 'home' ? 'text-blue-600 dark:text-white font-semibold' : ''}`}>Home</a>
            <a href="#about" onClick={() => setActiveSection('about')} className={`hover:text-blue-600 dark:hover:text-white transition-colors ${activeSection === 'about' ? 'text-blue-600 dark:text-white font-semibold' : ''}`}>About</a>
            <a href="#skills" onClick={() => setActiveSection('skills')} className={`hover:text-blue-600 dark:hover:text-white transition-colors ${activeSection === 'skills' ? 'text-blue-600 dark:text-white font-semibold' : ''}`}>Skills</a>
            <a href="#projects" onClick={() => setActiveSection('projects')} className={`hover:text-blue-600 dark:hover:text-white transition-colors ${activeSection === 'projects' ? 'text-blue-600 dark:text-white font-semibold' : ''}`}>Projects</a>
            <a href="#learning" onClick={() => setActiveSection('learning')} className={`hover:text-blue-600 dark:hover:text-white transition-colors ${activeSection === 'learning' ? 'text-blue-600 dark:text-white font-semibold' : ''}`}>Learning</a>
            <a href="#contact" onClick={() => setActiveSection('contact')} className={`hover:text-blue-600 dark:hover:text-white transition-colors ${activeSection === 'contact' ? 'text-blue-600 dark:text-white font-semibold' : ''}`}>Contact</a>
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 text-slate-700 dark:text-neutral-200 hover:text-blue-600 dark:hover:text-white transition-all"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-slate-100 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 text-slate-700 dark:text-neutral-200 hover:text-blue-600 dark:hover:text-white transition-all"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-black border-b border-slate-200 dark:border-neutral-800 px-6 py-6 shadow-xl animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col gap-4 text-base font-medium">
              <a href="#home" onClick={() => { setMobileMenuOpen(false); setActiveSection('home'); }} className="text-slate-700 dark:text-neutral-300 hover:text-blue-600 py-2 border-b border-slate-100 dark:border-neutral-900">Home</a>
              <a href="#about" onClick={() => { setMobileMenuOpen(false); setActiveSection('about'); }} className="text-slate-700 dark:text-neutral-300 hover:text-blue-600 py-2 border-b border-slate-100 dark:border-neutral-900">About</a>
              <a href="#skills" onClick={() => { setMobileMenuOpen(false); setActiveSection('skills'); }} className="text-slate-700 dark:text-neutral-300 hover:text-blue-600 py-2 border-b border-slate-100 dark:border-neutral-900">Skills</a>
              <a href="#projects" onClick={() => { setMobileMenuOpen(false); setActiveSection('projects'); }} className="text-slate-700 dark:text-neutral-300 hover:text-blue-600 py-2 border-b border-slate-100 dark:border-neutral-900">Projects</a>
              <a href="#learning" onClick={() => { setMobileMenuOpen(false); setActiveSection('learning'); }} className="text-slate-700 dark:text-neutral-300 hover:text-blue-600 py-2 border-b border-slate-100 dark:border-neutral-900">Learning</a>
              <a href="#contact" onClick={() => { setMobileMenuOpen(false); setActiveSection('contact'); }} className="text-slate-700 dark:text-neutral-300 hover:text-blue-600 py-2">Contact</a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="home" className="relative pt-20 pb-28 overflow-hidden bg-white dark:bg-black transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col gap-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-neutral-900 border border-blue-200 dark:border-neutral-800 text-blue-700 dark:text-neutral-300 text-xs font-semibold w-fit tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-white" />
                <span>Computer Science Student & Aspiring Developer</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                Hi, I'm <span className="text-blue-600 dark:text-neutral-100 underline decoration-blue-500/30">Vishnu Kant Sharma</span>
              </h1>
              
              <p className="text-lg sm:text-xl font-medium text-slate-700 dark:text-neutral-300 tracking-wide">
                Computer Science Student | Python Developer | AI/ML Enthusiast
              </p>
              
              <p className="text-base sm:text-lg text-slate-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
                I am curious about technology and artificial intelligence, learning programming from fundamentals, and building practical projects. Passionate about problem-solving, machine learning, and modern web technologies to continuously grow my technical knowledge through hands-on learning.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#projects"
                  className="px-6.5 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 dark:bg-white dark:text-black dark:hover:bg-neutral-200 text-white font-semibold shadow-md transition-all flex items-center gap-2 group"
                >
                  <span>Explore My Work</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a
                  href="#contact"
                  className="px-6.5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 text-slate-700 dark:text-neutral-200 font-semibold transition-all flex items-center gap-2"
                >
                  <span>Contact Me</span>
                </a>
              </div>

              <div className="flex items-center gap-6 pt-6 text-slate-500 dark:text-neutral-400">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-white transition-colors p-2.5 bg-slate-100 dark:bg-neutral-900 rounded-xl border border-slate-200 dark:border-neutral-800" aria-label="GitHub">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-white transition-colors p-2.5 bg-slate-100 dark:bg-neutral-900 rounded-xl border border-slate-200 dark:border-neutral-800" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:vishnukantsharma98@gmail.com" className="hover:text-blue-600 dark:hover:text-white transition-colors p-2.5 bg-slate-100 dark:bg-neutral-900 rounded-xl border border-slate-200 dark:border-neutral-800" aria-label="Email">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Hero Visual on Right */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="portfolio-card rounded-3xl p-6 sm:p-8 shadow-xl">
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 dark:border-neutral-900">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <span className="text-xs font-mono text-blue-600 dark:text-neutral-400">vishnu_workspace.py</span>
                  </div>

                  <div className="space-y-4 font-mono text-xs sm:text-sm text-slate-700 dark:text-neutral-300">
                    <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-neutral-900/60 border border-slate-200 dark:border-neutral-800">
                      <span className="text-purple-600 dark:text-purple-400">class</span> <span className="text-amber-600 dark:text-yellow-400">StudentDeveloper</span>:
                      <div className="pl-4 pt-2 text-slate-600 dark:text-neutral-300">
                        name = <span className="text-emerald-600 dark:text-emerald-400">"Vishnu Kant Sharma"</span><br/>
                        role = <span className="text-emerald-600 dark:text-emerald-400">"CS Student & AI/ML Enthusiast"</span><br/>
                        focus = [<span className="text-blue-600 dark:text-neutral-300">"Python"</span>, <span className="text-blue-600 dark:text-neutral-300">"Scikit-learn"</span>, <span className="text-blue-600 dark:text-neutral-300">"RAG"</span>]
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-neutral-900/60 border border-slate-200 dark:border-neutral-800">
                      <span className="text-blue-600 dark:text-blue-400">def</span> <span className="text-amber-600 dark:text-yellow-300">build_projects</span>(self):
                      <div className="pl-4 pt-2 text-slate-500 dark:text-neutral-400">
                        # Student Performance AI & RAG Chatbot<br/>
                        <span className="text-purple-600 dark:text-purple-400">return</span> <span className="text-emerald-600 dark:text-emerald-400">"Hands-on learning in progress!"</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 text-xs text-slate-500 dark:text-neutral-400">
                      <span className="flex items-center gap-1.5">
                        <Terminal className="w-3.5 h-3.5 text-blue-600 dark:text-white" /> Python 3.10
                      </span>
                      <span className="text-blue-600 dark:text-white font-semibold">Active Learning</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT ME SECTION */}
      <section id="about" className="py-24 bg-slate-100/70 dark:bg-neutral-950 border-t border-slate-200 dark:border-neutral-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-neutral-400 mb-3">About Me</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Curiosity, Code & Artificial Intelligence</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="portfolio-card rounded-2xl p-8 flex flex-col gap-4 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-neutral-900 border border-blue-200 dark:border-neutral-800 flex items-center justify-center text-blue-600 dark:text-white">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">Computer Science Student</h4>
              <p className="text-slate-600 dark:text-neutral-400 text-sm leading-relaxed">
                Actively pursuing computer science education, building my foundation from fundamentals in programming, algorithms, and system logic.
              </p>
            </div>

            <div className="portfolio-card rounded-2xl p-8 flex flex-col gap-4 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-neutral-900 border border-blue-200 dark:border-neutral-800 flex items-center justify-center text-blue-600 dark:text-white">
                <Brain className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">AI/ML & Python Enthusiast</h4>
              <p className="text-slate-600 dark:text-neutral-400 text-sm leading-relaxed">
                Fascinated by artificial intelligence and machine learning. Enjoy exploring Python libraries like Pandas, NumPy, and Scikit-learn for practical tasks.
              </p>
            </div>

            <div className="portfolio-card rounded-2xl p-8 flex flex-col gap-4 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-neutral-900 border border-indigo-200 dark:border-neutral-800 flex items-center justify-center text-indigo-600 dark:text-white">
                <FolderGit2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">Hands-On Builder</h4>
              <p className="text-slate-600 dark:text-neutral-400 text-sm leading-relaxed">
                Believe in learning by doing. Building real projects like student performance predictors and RAG chatbots to solidify theoretical knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL SKILLS SECTION */}
      <section id="skills" className="py-24 bg-white dark:bg-black border-t border-slate-200 dark:border-neutral-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-neutral-400 mb-3">Technical Skills</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Tools & Technologies I'm Learning</h3>
            <p className="text-slate-500 dark:text-neutral-400 text-sm mt-3">
              Represented honestly as developing and learning skills. No inflated experience or proficiency claims.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={index}
                  className="portfolio-card rounded-2xl p-6 transition-all duration-300 group hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-neutral-900 border border-blue-200 dark:border-neutral-800 flex items-center justify-center text-blue-600 dark:text-white group-hover:bg-blue-600 dark:group-hover:bg-white dark:group-hover:text-black group-hover:text-white transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-medium text-blue-600 dark:text-neutral-300 px-2.5 py-1 rounded-full bg-blue-50 dark:bg-neutral-900 border border-blue-200 dark:border-neutral-800">
                      {skill.level}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{skill.name}</h4>
                  <p className="text-slate-600 dark:text-neutral-400 text-sm leading-relaxed">{skill.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24 bg-slate-100/70 dark:bg-neutral-950 border-t border-slate-200 dark:border-neutral-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-neutral-400 mb-3">Projects</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Featured Practical Projects</h3>
            <p className="text-slate-500 dark:text-neutral-400 text-sm mt-3">
              Hands-on applications built to explore machine learning classification and retrieval-augmented generation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projectsData.map((project) => (
              <div
                key={project.id}
                className="portfolio-card rounded-3xl p-8 flex flex-col justify-between group hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-neutral-300 px-3 py-1 rounded-full bg-blue-50 dark:bg-neutral-900 border border-blue-200 dark:border-neutral-800">
                      {project.category}
                    </span>
                  </div>

                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-neutral-300 transition-colors">
                    {project.title}
                  </h4>

                  <p className="text-slate-600 dark:text-neutral-400 text-sm leading-relaxed mb-6">
                    {project.shortDesc}
                  </p>

                  <div className="mb-6 space-y-2">
                    <h5 className="text-xs font-semibold uppercase text-slate-500 dark:text-neutral-400 tracking-wider">Key Features:</h5>
                    <ul className="space-y-1.5">
                      {project.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-700 dark:text-neutral-300">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-white shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 text-slate-700 dark:text-neutral-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-neutral-900">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 py-3 px-4 rounded-xl bg-slate-100 dark:bg-neutral-900 hover:bg-slate-200 dark:hover:bg-neutral-800 text-slate-800 dark:text-neutral-200 text-sm font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <span>View Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-xl bg-blue-50 dark:bg-neutral-900 hover:bg-blue-100 dark:hover:bg-neutral-800 border border-blue-200 dark:border-neutral-800 text-blue-600 dark:text-white text-sm font-semibold transition-colors flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT I'M LEARNING SECTION */}
      <section id="learning" className="py-24 bg-white dark:bg-black border-t border-slate-200 dark:border-neutral-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-neutral-400 mb-3">Continuous Growth</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">What I'm Learning</h3>
            <p className="text-slate-500 dark:text-neutral-400 text-sm mt-3">
              Areas of active study and exploration as I expand my technical skillset.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningTopics.map((topic, index) => (
              <div key={index} className="portfolio-card rounded-2xl p-6 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-neutral-900 flex items-center justify-center text-blue-600 dark:text-white">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">{topic.title}</h4>
                </div>
                <p className="text-slate-600 dark:text-neutral-400 text-sm leading-relaxed">{topic.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 bg-slate-100/70 dark:bg-neutral-950 border-t border-slate-200 dark:border-neutral-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-neutral-400 mb-3">Contact</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Get In Touch</h3>
            <p className="text-slate-500 dark:text-neutral-400 text-sm mt-3">
              Have a question, feedback, or want to connect? Feel free to drop a message!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="portfolio-card rounded-2xl p-8 flex flex-col gap-6">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">Let's Connect</h4>
                <p className="text-slate-600 dark:text-neutral-400 text-sm leading-relaxed">
                  I am always open to learning new concepts, discussing programming projects, or connecting with fellow students and developers.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-center gap-3 text-slate-700 dark:text-neutral-300 text-sm">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-neutral-900 border border-blue-200 dark:border-neutral-800 flex items-center justify-center text-blue-600 dark:text-white shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs text-slate-500 dark:text-neutral-400 font-medium">Email</span>
                      <a href="mailto:vishnukantsharma98@gmail.com" className="text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-neutral-300 transition-colors">
                        vishnukantsharma98@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-slate-700 dark:text-neutral-300 text-sm">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-neutral-900 border border-blue-200 dark:border-neutral-800 flex items-center justify-center text-blue-600 dark:text-white shrink-0">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs text-slate-500 dark:text-neutral-400 font-medium">GitHub</span>
                      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-neutral-300 transition-colors">
                        github.com/vishnukantsharma
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-slate-700 dark:text-neutral-300 text-sm">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-neutral-900 border border-blue-200 dark:border-neutral-800 flex items-center justify-center text-blue-600 dark:text-white shrink-0">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs text-slate-500 dark:text-neutral-400 font-medium">LinkedIn</span>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-neutral-300 transition-colors">
                        linkedin.com/in/vishnukantsharma
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="portfolio-card rounded-2xl p-8">
                {formSubmitted ? (
                  <div className="py-12 text-center flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-neutral-900 border border-emerald-200 dark:border-neutral-800 flex items-center justify-center text-emerald-600 dark:text-white">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">Message Sent Successfully!</h4>
                    <p className="text-slate-600 dark:text-neutral-400 text-sm max-w-sm">
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    {formError && (
                      <div className="p-4 rounded-xl bg-red-50 dark:bg-neutral-900 border border-red-200 dark:border-neutral-800 text-red-600 dark:text-red-400 text-sm">
                        {formError}
                      </div>
                    )}

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-neutral-300 uppercase tracking-wider mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-black border border-slate-200 dark:border-neutral-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-neutral-600 focus:outline-none focus:border-blue-600 dark:focus:border-white transition-colors text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-neutral-300 uppercase tracking-wider mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-black border border-slate-200 dark:border-neutral-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-neutral-600 focus:outline-none focus:border-blue-600 dark:focus:border-white transition-colors text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-neutral-300 uppercase tracking-wider mb-2">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Type your message here..."
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-black border border-slate-200 dark:border-neutral-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-neutral-600 focus:outline-none focus:border-blue-600 dark:focus:border-white transition-colors text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 dark:bg-white dark:text-black dark:hover:bg-neutral-200 text-white font-semibold shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-slate-200 dark:border-neutral-900 bg-white dark:bg-black text-slate-600 dark:text-neutral-400 text-sm transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center sm:items-start gap-1">
            <span className="font-bold text-slate-900 dark:text-white tracking-tight">Vishnu Kant Sharma</span>
            <span className="text-xs text-slate-500 dark:text-neutral-500">Built with passion and curiosity.</span>
          </div>

          <div className="flex items-center gap-6 text-xs text-slate-600 dark:text-neutral-400">
            <a href="#home" className="hover:text-blue-600 dark:hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-blue-600 dark:hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-600 dark:hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-600 dark:hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-blue-600 dark:hover:text-white transition-colors">Contact</a>
          </div>

          <div className="text-xs text-slate-500 dark:text-neutral-500">
            &copy; {new Date().getFullYear()} Vishnu Kant Sharma. All rights reserved.
          </div>
        </div>
      </footer>

      {/* PROJECT MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="portfolio-card rounded-3xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative shadow-2xl">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-neutral-900 hover:bg-slate-200 dark:hover:bg-neutral-800 text-slate-700 dark:text-neutral-300 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-neutral-300 px-3 py-1 rounded-full bg-blue-50 dark:bg-neutral-900 border border-blue-200 dark:border-neutral-800 inline-block mb-4">
              {selectedProject.category}
            </span>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{selectedProject.title}</h3>
            
            <p className="text-slate-600 dark:text-neutral-400 text-sm leading-relaxed mb-6">
              {selectedProject.description}
            </p>

            <div className="mb-6 space-y-2">
              <h4 className="text-xs font-semibold uppercase text-slate-500 dark:text-neutral-400 tracking-wider">Key Features:</h4>
              <ul className="space-y-2">
                {selectedProject.features.map((feat: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-700 dark:text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-white shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h4 className="text-xs font-semibold uppercase text-slate-500 dark:text-neutral-400 tracking-wider mb-2">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((t: string, idx: number) => (
                  <span key={idx} className="text-xs font-medium px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 text-slate-700 dark:text-neutral-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-4 pt-4 border-t border-slate-100 dark:border-neutral-900">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 dark:bg-white dark:text-black dark:hover:bg-neutral-200 text-white font-semibold transition-colors flex items-center gap-2 text-sm shadow-sm"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
