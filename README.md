# Abid Sharier - Portfolio

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion.

## Features

- Responsive dark interface with reduced-motion support
- Project cards and directly linkable case studies
- Skills, contact information, social links, and a résumé PDF

## Tech Stack

- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js 24, as specified in `.nvmrc`
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/AbidsTent/Portfolio-Website.git
cd Portfolio-Website
```

2. Install dependencies:
```bash
npm ci
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Deployment

### GitHub Pages

The [GitHub Pages workflow](.github/workflows/deploy.yml) builds and uploads
`dist/` on pushes to `main` or `master` and on manual dispatch. Vite's relative
base supports hosting under the repository path.

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist/` folder to [Netlify](https://netlify.com)

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel --prod`

## Project Structure

See [Local Recovery](docs/LOCAL_RECOVERY.md) for the V2 entry points and recovery notes.

```
Portfolio-Website/
├── src/
│   ├── components/     # Layout, homepage, and project components
│   ├── content/        # Profile, project records, and site metadata
│   ├── data/           # Legacy project records used by the current catalog
│   ├── pages/          # Home, project details, and 404
│   ├── utils/          # Hash routing and link validation
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/resume/      # Résumé PDF served with the site
├── dist/              # Build output
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## Customization

Edit `src/content/profile.js` for the bio and social links,
`src/content/skills.js` for skills, and `src/content/projects.js` for project
records. See the [asset guide](src/assets/README.md) for media and résumé handling.

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

- **GitHub**: [@AbidsTent](https://github.com/AbidsTent)
- **LinkedIn**: [Abid Sharier](https://www.linkedin.com/in/abidsharier-21301177/)
- **Email**: abidsharier29@gmail.com
