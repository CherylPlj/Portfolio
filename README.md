# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and beautiful UI design
- 📱 Fully responsive layout
- 🌙 Dark mode support
- ⚡ Fast and optimized with Next.js
- 🎯 Smooth scrolling navigation
- 📧 Contact form
- 🚀 Easy to customize

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization

### Update Personal Information

1. **Hero Section** (`components/Hero.tsx`):
   - Change "Your Name" to your actual name
   - Update the job title
   - Modify the description

2. **About Section** (`components/About.tsx`):
   - Update the about text with your own story

3. **Skills Section** (`components/Skills.tsx`):
   - Modify the skill categories and technologies to match your expertise

4. **Projects Section** (`components/Projects.tsx`):
   - Replace the placeholder projects with your actual projects
   - Update project descriptions, technologies, and links

5. **Contact Section** (`components/Contact.tsx`):
   - Update email address
   - Add your social media links (GitHub, LinkedIn, etc.)

6. **Metadata** (`app/layout.tsx`):
   - Update the title and description in the metadata

### Styling

The project uses Tailwind CSS for styling. You can customize colors, fonts, and other design elements in:
- `tailwind.config.ts` - Tailwind configuration
- `app/globals.css` - Global styles and CSS variables

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── Navigation.tsx   # Navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Skills.tsx       # Skills section
│   ├── Projects.tsx     # Projects section
│   └── Contact.tsx      # Contact section
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## Build for Production

```bash
npm run build
npm start
```

## Deploy

You can deploy this portfolio to:
- [Vercel](https://vercel.com) (recommended for Next.js)
- [Netlify](https://netlify.com)
- Any hosting platform that supports Next.js

## License

This project is open source and available under the MIT License.
