# Portfolio - Mfon Francis

A modern, high-performance portfolio website built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4. Showcasing web and mobile development projects with a focus on best practices, accessibility, and user experience.

## Features

- 🎨 **Modern Design**: Beautiful UI with dark mode support
- ⚡ **Performance**: Optimized with Next.js 16 and React 19
- ♿ **Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation
- 🔍 **SEO Optimized**: Complete metadata, Open Graph, Twitter Cards, and structured data
- 📱 **Responsive**: Mobile-first design that works on all devices
- 🎭 **Animations**: Smooth transitions with Framer Motion
- 📝 **Form Validation**: Contact form with react-hook-form and Zod
- 🎯 **Type Safe**: Full TypeScript coverage
- 🌙 **Dark Mode**: System preference detection with manual toggle

## Tech Stack

- **Framework**: Next.js 16
- **React**: 19.2.0
- **TypeScript**: 5.x
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Notifications**: Sonner

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Install additional required packages:
```bash
npm install react-hook-form zod @hookform/resolvers sonner
```

4. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration.

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Project Structure

```
src/
├── app/              # Next.js app router pages
├── components/       # React components
│   ├── ui/          # Reusable UI components
│   ├── forms/        # Form components
│   └── animations/   # Animation components
├── lib/              # Utilities and helpers
├── data/             # Static data (projects, etc.)
└── public/           # Static assets
```

## Key Features Implementation

### Color System & Dark Mode
- CSS variables for consistent theming
- Functional dark mode with system preference detection
- Theme toggle component in navbar

### Reusable Components
- Button, Input, Textarea, Card, Badge
- Container, Section for layout
- Loading states and skeletons
- Error boundaries

### SEO & Metadata
- Dynamic metadata generation
- Open Graph and Twitter Cards
- JSON-LD structured data
- Sitemap and robots.txt

### Accessibility
- Skip to content link
- ARIA labels and roles
- Keyboard navigation
- Focus indicators
- Semantic HTML

### Form Handling
- Contact form with validation
- Error states and messages
- Loading states
- Toast notifications

## Configuration

See `INSTALLATION.md` for detailed setup instructions including:
- Required dependencies
- Environment variables
- CV file setup
- Contact form API configuration
- Social links configuration

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Configure environment variables
4. Deploy!

For other platforms, see [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying).

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## License

All rights reserved. © 2025 Mfon Francis
