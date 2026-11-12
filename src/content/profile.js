import { Github, Linkedin, Mail } from 'lucide-react';
import headshotImage from '../assets/profile/abid-sharier.jpg';
import { siteMetadata } from './site.js';

export const resumeUrl = `${import.meta.env.BASE_URL}resume/Abid_Sharier.pdf`;

export const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/AbidsTent' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/abidsharier-21301177/' },
  { name: 'Email', icon: Mail, url: 'mailto:abidsharier29@gmail.com' },
];

export const heroData = {
  name: siteMetadata.name,
  headline: ['Building reliable data.', 'Delivering meaningful insights.'],
  role: 'Computer Science Graduate',
  focus: 'Data Analytics, Business Intelligence & Data Engineering',
  intro: 'I use SQL, Python, and Power BI to prepare data, check its quality, and build reports that answer practical business questions.',
};

export const headshot = {
  src: headshotImage,
  alt: 'Portrait of Abid Sharier',
  width: 1120,
  height: 1400,
};

export const about = [
  'I earned my B.Sc. in Computer Science at Toronto Metropolitan University in 2026. I’m interested in how data analytics, business intelligence, and data engineering can help teams understand what’s happening and decide what to do next.',
  'My projects span SQL data warehousing, Power BI reporting, and source data profiling. More than four years in restaurant operations taught me to approach technical work with a practical question in mind and think about how the answer will be used.',
];

export const background = [
  {
    type: 'Education',
    title: 'B.Sc. Computer Science',
    context: 'Toronto Metropolitan University',
    period: '2026',
    description: 'My degree gave me a foundation in software development and problem-solving that I apply to analytics and data engineering projects.',
  },
  {
    type: 'Experience',
    title: 'Restaurant operations',
    period: '4+ years',
    description: 'Worked in day-to-day restaurant operations, including supervisory responsibilities. That experience informs how I frame business questions and communicate findings.',
  },
];
