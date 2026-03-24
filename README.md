# Abid Sharier - Portfolio

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion.

![Portfolio Screenshot](./screenshot.png)

## Features

- Dark mode design with glass morphism effects
- Smooth animations powered by Framer Motion
- Responsive bento grid layout for projects
- Interactive skill badges
- Contact section with social links
- Fully responsive for mobile and desktop

## Tech Stack

- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/AbidsTent/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
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

1. Update `vite.config.js` with your repo name:
```javascript
base: '/portfolio/',
```

2. Build and deploy:
```bash
npm run build
git add dist -f
git commit -m "Deploy to GitHub Pages"
git subtree push --prefix dist origin gh-pages
```

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist/` folder to [Netlify](https://netlify.com)

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel --prod`

## Project Structure

```
portfolio/
├── src/
│   ├── components/     # React components
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   └── BentoCard.jsx
│   ├── data/
│   │   └── portfolioData.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── dist/              # Build output
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## Customization

Edit `src/data/portfolioData.jsx` to update:
- Personal information (name, bio)
- Social links (GitHub, LinkedIn, Email)
- Projects
- Skills

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

- **GitHub**: [@AbidsTent](https://github.com/AbidsTent)
- **LinkedIn**: [Abid Sharier](https://www.linkedin.com/in/abidsharier-21301177/)
- **Email**: abidsharier29@gmail.com
