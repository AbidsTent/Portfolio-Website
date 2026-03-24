// Icon imports from lucide-react
import {
  Github,
  Linkedin,
  Mail,
  Database,
  Globe,
  Layers,
  BarChart3,
  Terminal,
  TrendingUp,
  Table2,
  Server,
  Wallet,
} from 'lucide-react';

// Social media links
export const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/AbidsTent',
    color: 'hover:text-gray-300'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/abidsharier-21301177/',
    color: 'hover:text-blue-400'
  },
  {
    name: 'Email',
    icon: Mail,
    url: 'mailto:abidsharier29@gmail.com',
    color: 'hover:text-red-400'
  },
];

// Hero section info
export const heroData = {
  greeting: "Hello, I'm",
  name: "Abid Sharier",
  title: "Computer Science Student",
  subtitle: "Data Analyst & Developer",
  bio: "Undergraduate Computer Science student at Toronto Metropolitan University with experience in data analysis, Python programming, and business operations. Passionate about transforming raw data into actionable insights.",
};

// Projects for bento grid
export const projects = [
  {
    id: 1,
    title: 'Finmate',
    description: 'Personal finance management application with expense tracking, budgeting, and financial insights. Features issue tracking, pull request workflows, and collaborative tools.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    size: 'large',
    icon: Wallet,
    link: 'https://github.com/AbidsTent/finmate',
    github: 'https://github.com/AbidsTent/finmate',
  },
  {
    id: 2,
    title: 'Multi-Channel Sales Intelligence Platform',
    description: 'Database schema to unify POS, online delivery, and catering sales. ETL pipelines for data ingestion. Forecasting models and anomaly detection.',
    tags: ['Python', 'SQLite', 'SQL', 'Flask'],
    size: 'medium',
    icon: TrendingUp,
    link: '#',
    github: 'https://github.com/AbidsTent',
  },
  {
    id: 3,
    title: 'Sales & Inventory Analysis',
    description: 'Analyzed retail sales data to identify trends in revenue, top-selling items, and inventory turnover.',
    tags: ['Python', 'Pandas', 'Excel'],
    size: 'small',
    icon: BarChart3,
    link: '#',
    github: 'https://github.com/AbidsTent',
  },
  {
    id: 4,
    title: 'Restaurant Performance Dashboard',
    description: 'Sales data analysis with Excel Pivot Tables for order volume and menu performance.',
    tags: ['Excel', 'Python', 'Pandas'],
    size: 'small',
    icon: Table2,
    link: '#',
    github: 'https://github.com/AbidsTent',
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'Modern portfolio built with React, Tailwind CSS, and Framer Motion.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    size: 'medium',
    icon: Globe,
    link: '#',
    github: 'https://github.com/AbidsTent',
  },
];

// Skills organized by category
export const skills = [
  // Languages
  { name: 'JavaScript', icon: Terminal, category: 'Languages' },
  { name: 'Python', icon: Terminal, category: 'Languages' },
  { name: 'SQL', icon: Database, category: 'Languages' },

  // Databases
  { name: 'SQLite', icon: Database, category: 'Database' },
  { name: 'MongoDB', icon: Database, category: 'Database' },

  // Frameworks
  { name: 'Flask', icon: Server, category: 'Framework' },
  { name: 'React', icon: Globe, category: 'Framework' },

  // Data Analysis
  { name: 'Pandas', icon: BarChart3, category: 'Data Analysis' },
  { name: 'Excel', icon: Table2, category: 'Data Analysis' },
  { name: 'Data Visualization', icon: TrendingUp, category: 'Data Analysis' },

  // Other
  { name: 'ETL Pipelines', icon: Server, category: 'Data Engineering' },
  { name: 'Tailwind', icon: Layers, category: 'Styling' },
  { name: 'Git', icon: Terminal, category: 'Tools' },
];

// Color schemes for skill categories
export const categoryColors = {
  Languages: 'from-blue-500/20 to-cyan-500/20',
  Database: 'from-amber-500/20 to-orange-500/20',
  Framework: 'from-indigo-500/20 to-blue-500/20',
  'Data Analysis': 'from-sky-500/20 to-blue-500/20',
  'Data Engineering': 'from-emerald-500/20 to-teal-500/20',
  Styling: 'from-purple-500/20 to-violet-500/20',
  Tools: 'from-slate-500/20 to-gray-500/20',
};

export const badgeColors = {
  Languages: 'text-blue-400 border-blue-500/30 bg-blue-500/10',
  Database: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
  Framework: 'text-indigo-400 border-indigo-500/30 bg-indigo-500/10',
  'Data Analysis': 'text-sky-400 border-sky-500/30 bg-sky-500/10',
  'Data Engineering': 'text-teal-400 border-teal-500/30 bg-teal-500/10',
  Styling: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
  Tools: 'text-slate-400 border-slate-500/30 bg-slate-500/10',
};
