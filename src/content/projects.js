import { projects as legacyProjects } from '../data/portfolioData.jsx';

const archivedSlugs = {
  2: 'multi-channel-sales-intelligence-platform',
  3: 'sales-inventory-analysis',
  4: 'restaurant-performance-dashboard',
};

const archivedProjects = legacyProjects
  .filter(({ id }) => archivedSlugs[id])
  .map(({ id, title }) => ({
    id,
    slug: archivedSlugs[id],
    title,
    category: 'Archive',
    summary: 'The project scope and source are still unverified.',
    status: 'Status unconfirmed',
    listed: false,
  }));

// Scope, links, and status are based on docs/CONTENT_VERIFICATION.md.
const records = [
  {
    id: 6,
    slug: 'sql-server-data-warehouse',
    title: 'SQL Server Data Warehouse',
    category: 'Data engineering',
    artwork: 'warehouse',
    summary: 'A guided SQL Server warehouse project that loads CRM and ERP data, cleans it, and models it for analysis.',
    stack: ['SQL Server', 'T-SQL', 'ETL', 'Dimensional modeling'],
    status: 'Completed',
    githubUrl: 'https://github.com/AbidsTent/DWH-Project',
    featured: true,
    caseStudy: {
      sections: [
        {
          title: 'Warehouse design',
          body: 'The project follows the Data With Baraa warehouse guide. The Bronze layer loads CRM and ERP CSVs, the Silver layer cleans fields and deduplicates customer records, and Gold views expose customer and product dimensions and a sales fact view.',
        },
        {
          title: 'Analysis and quality checks',
          body: 'The repository includes SQL for sales comparisons and customer and product rankings. It also includes checks for customer key uniqueness, missing dimensional references, and sales arithmetic. Those checks have yet to be verified against a live SQL Server instance.',
        },
      ],
    },
  },
  {
    id: 7,
    slug: 'ecommerce-power-bi-analytics',
    title: 'E-commerce Power BI Analytics',
    category: 'Business intelligence',
    artwork: 'reporting',
    summary: 'A Power BI report for exploring historical Olist marketplace orders, delivered item revenue, and product categories.',
    stack: ['Power BI', 'Power Query', 'Data modeling'],
    status: 'Completed',
    githubUrl: 'https://github.com/AbidsTent/ecommerce-powerbi-analytics',
    featured: true,
    caseStudy: {
      sections: [
        {
          title: 'Report and model',
          body: 'The model distinguishes orders from order items and includes customers, products, translated categories, and a date table. The report includes a monthly trend, state comparisons, and year and category filters.',
        },
        {
          title: 'Metric scope',
          body: 'Delivered item revenue sums item prices for delivered orders and excludes freight. Refresh behavior and the exact embedded measures still need verification in Power BI Desktop.',
        },
      ],
    },
  },
  {
    id: 8,
    slug: 'urban-mobility-data-platform',
    title: 'Urban Mobility Data Platform',
    category: 'Data engineering',
    artwork: 'mobility',
    cardSummary: 'A Databricks and PySpark notebook for profiling NYC yellow taxi trip data.',
    summary: 'An in-progress Databricks project with a PySpark notebook for profiling January 2025 NYC yellow taxi trip data.',
    stack: ['Python', 'PySpark', 'Databricks', 'Parquet'],
    status: 'In Progress',
    githubUrl: 'https://github.com/AbidsTent/urban-mobility-data-platform',
    featured: true,
    caseStudy: {
      sections: [
        {
          title: 'Source profiling',
          body: 'The notebook defines checks for missing values, trip timestamps, duration, distance, fares, vendors, and payment codes. It reads source Parquet from a Databricks volume.',
        },
        {
          title: 'Current scope',
          body: 'The notebook and pipeline scaffold are in the repository. Recorded profiling results and an end-to-end ingestion run are still pending.',
        },
      ],
    },
  },
  {
    id: 1,
    slug: 'finmate',
    title: 'Finmate',
    category: 'Application development',
    summary: 'A personal finance application with expense and investment tracking, charts, and browser-stored budgets.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Chart.js'],
    status: 'Status unconfirmed',
    githubUrl: legacyProjects.find(({ id }) => id === 1).github,
    caseStudy: {
      sections: [
        {
          title: 'Source overview',
          body: 'The repository contains a React frontend and Express routes for user-scoped expense and investment records. Completion, deployment, and individual contribution remain unconfirmed.',
        },
      ],
    },
  },
  ...archivedProjects,
  {
    id: 5,
    slug: 'portfolio-website',
    title: 'Portfolio Website',
    category: 'Web development',
    summary: 'A personal portfolio built with React and Vite to present projects, skills, and contact information.',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    status: 'In progress',
    githubUrl: 'https://github.com/AbidsTent/Portfolio-Website',
    listed: false,
  },
];

export const projects = records.map(project => ({
  stack: [],
  screenshots: [],
  githubUrl: null,
  demoUrl: null,
  ...project,
}));

export const featuredProjects = projects.filter(project => project.listed !== false && project.featured);
export const additionalProjects = projects.filter(project => project.listed !== false && !project.featured);
