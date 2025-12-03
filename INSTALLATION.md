# Installation Guide

## Required Dependencies

To complete the implementation, you need to install the following packages:

```bash
npm install react-hook-form zod @hookform/resolvers sonner
```

Or with yarn:

```bash
yarn add react-hook-form zod @hookform/resolvers sonner
```

Or with pnpm:

```bash
pnpm add react-hook-form zod @hookform/resolvers sonner
```

## Package Descriptions

- **react-hook-form**: Form state management and validation
- **zod**: TypeScript-first schema validation
- **@hookform/resolvers**: Resolvers for react-hook-form (zod resolver)
- **sonner**: Toast notification library

## Post-Installation Steps

1. **CV File**: Place your CV file at `/public/cv/mfon-francis-cv.pdf` or update the path in `src/lib/downloads.ts`

2. **Environment Variables**: Copy `.env.example` to `.env.local` and fill in the values:
   - `NEXT_PUBLIC_SITE_URL`: Your production URL
   - `NEXT_PUBLIC_GOOGLE_VERIFICATION`: Google Search Console verification code (optional)
   - `NEXT_PUBLIC_GA_ID`: Google Analytics ID (optional)

3. **Contact Form**: Update `src/app/api/contact/route.ts` to implement actual email sending:
   - Option 1: Use Resend (recommended)
   - Option 2: Use SendGrid
   - Option 3: Use Nodemailer with SMTP
   - Option 4: Use Formspree or similar service

4. **Social Links**: Update social media links in `src/lib/constants.ts`

5. **OG Image**: Create an Open Graph image at `/public/og-image.jpg` (1200x630px)

## Testing

After installation, test the following:

- [ ] Dark mode toggle works
- [ ] Contact form validation works
- [ ] CV download works (if CV file is present)
- [ ] Toast notifications appear
- [ ] All pages load without errors
- [ ] SEO metadata is present in page source





