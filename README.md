# Budul Tech LLC Website

A modern, production-ready website for Budul Tech LLC - an AI-powered development agency. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Modern Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Smooth Animations**: Framer Motion for scroll animations and interactions
- **Responsive Design**: Mobile-first approach, works on all devices
- **Dark Theme**: Beautiful dark mode design with gradient accents
- **SEO Optimized**: Meta tags, Open Graph images, sitemap, robots.txt
- **Performance**: Optimized for 90+ Lighthouse score
- **Accessible**: ARIA labels, semantic HTML, keyboard navigation

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Plus Jakarta Sans, JetBrains Mono

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/budultech/website.git
cd website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
budul-tech-website/
├── public/                 # Static assets
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── layout.tsx     # Root layout
│   │   ├── page.tsx       # Home page
│   │   ├── loading.tsx    # Loading state
│   │   ├── error.tsx      # Error boundary
│   │   ├── not-found.tsx  # 404 page
│   │   ├── icon.tsx       # Favicon generator
│   │   ├── apple-icon.tsx # Apple touch icon
│   │   └── opengraph-image.tsx # OG image
│   ├── components/
│   │   ├── sections/      # Page sections
│   │   │   ├── Navigation.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Process.tsx
│   │   │   ├── Pricing.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── FAQ.tsx
│   │   │   ├── CTA.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/            # Reusable components
│   │       ├── Button.tsx
│   │       ├── SectionHeader.tsx
│   │       └── AnimatedSection.tsx
│   ├── lib/               # Utilities
│   │   └── utils.ts
│   └── styles/            # Global styles
│       └── globals.css
├── tailwind.config.ts     # Tailwind configuration
├── next.config.js         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies
```

## Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com/new)
3. Import your repository
4. Click "Deploy"

That's it! Vercel will automatically detect Next.js and configure the build settings.

### Deploy to Other Platforms

Build the production version:

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

For static hosting, you can export:

```bash
npm run build
```

The output can be deployed to any static hosting service like:
- Netlify
- AWS Amplify
- Cloudflare Pages
- GitHub Pages

### Environment Variables

For production, you may want to set:

```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://budultech.com
```

## Customization

### Colors

Edit the colors in `tailwind.config.ts`:

```typescript
colors: {
  primary: '#0ea5e9',
  secondary: '#06b6d4',
  accent: '#8b5cf6',
  // ...
}
```

### Content

Update the content in individual section components located in `src/components/sections/`.

### Contact Form

The contact form currently simulates submission. To integrate with a real backend:

1. Create an API route in `src/app/api/contact/route.ts`
2. Connect to your email service (Resend, SendGrid, etc.)
3. Update the form submission handler in `Contact.tsx`

## Performance

The website is optimized for performance:

- **Code Splitting**: Automatic with Next.js
- **Image Optimization**: Using Next.js Image component
- **Font Optimization**: Using next/font
- **CSS Optimization**: Tailwind CSS purging unused styles

Run Lighthouse audit to verify performance scores.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Copyright © 2026 Budul Tech LLC. All rights reserved.

## Contact

- Email: hello@budultech.com
- Website: https://budultech.com
