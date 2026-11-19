import { projects as legacyProjects } from '../data/portfolioData.jsx';
import olistOverviewImage from '../assets/projects/ecommerce-power-bi-analytics/olist-executive-overview.png';
import warehouseArchitectureImage from '../assets/projects/sql-server-data-warehouse/warehouse-architecture.svg';
import proposedMobilityArchitectureImage from '../assets/projects/urban-mobility-data-platform/proposed-architecture.svg';
import finmateDashboardImage from '../assets/projects/finmate/new-account-dashboard.webp';
import finmateExpenseImage from '../assets/projects/finmate/expense-entry.webp';
import finmateInvestmentImage from '../assets/projects/finmate/investment-entry.webp';

const finmateDashboard = {
  src: finmateDashboardImage,
  width: 1010,
  height: 598,
  alt: 'Finmate new-account dashboard with zero totals, no category or spending records, and an empty income-versus-expenses chart.',
  caption: 'New-account dashboard at 02:43.500 in the local demonstration. Zero totals and empty chart states are shown as recorded. Cropped to exclude account and browser information.',
  sourceUrl: 'https://github.com/AbidsTent/finmate/blob/88b211dd12b3ca28f20bed3e8f0baebc3065ff39/frontend/src/pages/Home.jsx',
  sourceLabel: 'Dashboard implementation',
};

const finmateExpenseEntry = {
  src: finmateExpenseImage,
  width: 500,
  height: 372,
  alt: 'Blank Finmate Add Expense form with category, title, amount and date fields and an Add Expense button.',
  caption: 'Expense entry form at 01:40.000 in the local demonstration, cropped from the right-hand application window. Fields are blank or show input placeholders.',
  sourceUrl: 'https://github.com/AbidsTent/finmate/blob/88b211dd12b3ca28f20bed3e8f0baebc3065ff39/frontend/src/pages/Expenses.jsx',
  sourceLabel: 'Expense implementation',
};

const finmateInvestmentEntry = {
  src: finmateInvestmentImage,
  width: 612,
  height: 458,
  alt: 'Blank Finmate Add Investment form with ticker, buy price, shares, optional current price and buy date fields.',
  caption: 'Investment entry form at 01:40.000 in the local demonstration, cropped from the left-hand application window. Current price is entered manually; AAPL is an input placeholder.',
  sourceUrl: 'https://github.com/AbidsTent/finmate/blob/88b211dd12b3ca28f20bed3e8f0baebc3065ff39/frontend/src/components/investments/InvestmentForm.jsx',
  sourceLabel: 'Investment form implementation',
};

const olistOverview = {
  src: olistOverviewImage,
  width: 1828,
  height: 1026,
  alt: 'Power BI Executive Overview with delivered revenue and order KPIs, a monthly revenue trend, and rankings by customer state and product category.',
  caption: 'Executive Overview of the historical Olist marketplace report, with Year and Category both set to All.',
  sourceUrl: 'https://github.com/AbidsTent/ecommerce-powerbi-analytics/blob/cb0bbf1e114faed20269d029df4c223fa6202c76/screenshots/executive_overview.png',
  sourceLabel: 'Original Power BI screenshot',
};

const warehouseArchitecture = {
  src: warehouseArchitectureImage,
  width: 1412,
  height: 2040,
  diagram: true,
  alt: 'Warehouse architecture tracing CRM and ERP source files through the Bronze and Silver layers to Gold customer and product dimensions and a sales fact view.',
  caption: 'Architecture diagram from the SQL Server Data Warehouse repository. The implementation follows the Data With Baraa guided warehouse project.',
  sourceUrl: 'https://github.com/AbidsTent/DWH-Project/blob/e47ee27631ea8b90b074e42e1932c58c9213a8d8/docs/Architecture%20diagram.svg',
  sourceLabel: 'Original warehouse diagram',
};

const proposedMobilityArchitecture = {
  src: proposedMobilityArchitectureImage,
  width: 2107,
  height: 369,
  diagram: true,
  alt: 'Proposed NYC taxi data flow from monthly trip files and zone lookups through ingestion, Bronze, validation and quarantine, Silver, Gold marts, and Power BI.',
  caption: 'Proposed architecture from the Urban Mobility project documentation. It describes a planned system.',
  sourceUrl: 'https://github.com/AbidsTent/urban-mobility-data-platform/blob/811af309b917548f25b5b6a59c2bc812beec2327/docs/architecture.md',
  sourceLabel: 'Original Mermaid source',
};

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
          media: warehouseArchitecture,
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
    cover: olistOverview,
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
          media: olistOverview,
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
        {
          title: 'Proposed architecture',
          body: 'The P0 design proposes a monthly flow from NYC taxi source files through ingestion, validation, and reporting.',
          media: proposedMobilityArchitecture,
        },
      ],
    },
  },
  {
    id: 1,
    slug: 'finmate',
    title: 'Finmate',
    category: 'Application development',
    summary: 'A completed academic team project for tracking expenses, budgets, and investment records with a React frontend and a Node.js/Express API.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'Chart.js', 'Socket.IO'],
    status: 'Completed',
    githubUrl: legacyProjects.find(({ id }) => id === 1).github,
    caseStudy: {
      sections: [
        {
          title: 'Overview and objective',
          body: 'Finmate brings categorized expenses, a saved budget, and investment records into one personal-finance dashboard. The academic team project connects data-entry workflows with summaries and charts so users can review their recorded spending and holdings.',
          media: finmateDashboard,
        },
        {
          title: 'Expense tracking and reporting',
          body: 'Users can add, edit, and delete expenses with a title, category, amount, and date. The dashboard calculates spending totals, remaining budget, category breakdowns, and investment cost basis. The recording demonstrates expense changes updating across two open tabs; the source implements these notifications with Socket.IO.',
          media: finmateExpenseEntry,
        },
        {
          title: 'Investment records',
          body: 'The walkthrough demonstrates adding, editing, and deleting holdings. Each record captures a ticker, shares, purchase price, and optional current price and purchase date. Portfolio value and profit/loss use the prices entered by the user.',
          media: finmateInvestmentEntry,
        },
        {
          title: 'Frontend and backend architecture',
          body: 'React Router connects the dashboard, expense, investment, login, and registration pages. The frontend calls an Express REST API. Source code implements JWT authentication, bcrypt password hashing, and user-scoped queries through Mongoose models for MongoDB.',
        },
        {
          title: 'Persistence and demonstrated workflow',
          body: 'The recorded local walkthrough shows login, account creation, expense updates, investment actions, and MongoDB Compass views of stored users and expenses. The source stores expense and investment records in MongoDB and keeps each user’s budget in browser localStorage.',
        },
        {
          title: 'Recorded contributions',
          body: 'Repository commits under my account add the React investment forms, table, summary components and API client, update the investment API, and implement Socket.IO expense notifications. This work was part of the academic team project.',
        },
        {
          title: 'Academic scope and limitations',
          body: 'Completion refers to the academic application demonstrated in the recording. Investment prices are entered manually, and budgets remain browser-local. The repository describes team collaboration; broader individual feature ownership still needs confirmation. Public deployment and production security hardening require separate validation.',
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
  githubUrl: null,
  demoUrl: null,
  ...project,
}));

export const featuredProjects = projects.filter(project => project.listed !== false && project.featured);
export const additionalProjects = projects.filter(project => project.listed !== false && !project.featured);
