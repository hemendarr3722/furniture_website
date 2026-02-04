# Comfort Living - Furniture Store Website

A modern, responsive furniture store catalog website built with Next.js 14, Tailwind CSS, and TypeScript.

## Features

- Modern and responsive design
- Product catalog with category filtering
- Product detail pages with inquiry options
- WhatsApp and phone call integration
- Contact form with API route
- Google Maps integration
- SEO optimized
- Fast loading with optimized images
- Static generation for better performance

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Lucide React
- **Data Storage**: Local JSON file
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd project
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
project/
├── app/                      # Next.js app directory
│   ├── about/               # About page
│   ├── api/contact/         # Contact form API route
│   ├── contact/             # Contact page
│   ├── products/            # Products listing and detail pages
│   │   └── [id]/           # Dynamic product detail page
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/              # Reusable components
│   ├── CategoryCard.tsx    # Category card component
│   ├── Footer.tsx          # Footer component
│   ├── Header.tsx          # Header/navigation component
│   ├── ProductCard.tsx     # Product card component
│   └── WhatsAppButton.tsx  # Floating WhatsApp button
├── data/                   # Data files
│   └── products.json       # Product catalog data
└── public/                 # Static assets
```

## Customization

### Update Contact Information

Edit the following files to update contact details:
- `components/Footer.tsx`
- `components/Header.tsx`
- `components/WhatsAppButton.tsx`
- `app/contact/page.tsx`

Update the phone number and other contact details throughout the codebase.

### Modify Products

Edit `data/products.json` to add, remove, or modify products. Each product should have:
- `id`: Unique identifier
- `name`: Product name
- `category`: Category (Sofas, Beds, Dining, Office, Wardrobes, TV Units)
- `price`: Price in INR
- `image`: Image URL (Pexels or Unsplash)
- `description`: Product description

### Change Store Name and Branding

Update the store name "Comfort Living" in:
- `components/Header.tsx`
- `components/Footer.tsx`
- `app/layout.tsx`
- All page titles and descriptions

### Customize Colors

The website uses an amber color scheme. To change colors, update Tailwind classes throughout the components. Main color classes:
- `amber-600` - Primary color
- `amber-700` - Primary hover color
- `amber-100` - Light accent color

## Contact Form Setup

The contact form currently logs submissions to the console. To integrate with an email service:

### Option 1: EmailJS

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Get your service ID, template ID, and public key
3. Update `app/api/contact/route.ts` with EmailJS integration

### Option 2: Formspree

1. Sign up at [Formspree](https://formspree.io/)
2. Create a form and get the endpoint
3. Update the form submission URL in `app/contact/page.tsx`

## Deployment on Vercel

### Quick Deploy

1. Push your code to GitHub

2. Go to [Vercel](https://vercel.com)

3. Click "Import Project"

4. Select your GitHub repository

5. Configure project:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`

6. Click "Deploy"

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## Build for Production

```bash
npm run build
npm run start
```

## Performance Optimization

- All images are optimized using Next.js Image component
- Static generation for product pages
- Lazy loading for images
- Minimal JavaScript bundle size
- CSS optimized with Tailwind CSS

## SEO

- Meta titles and descriptions for all pages
- Open Graph tags for social sharing
- Semantic HTML structure
- Sitemap generation (can be added)
- Schema markup (can be added)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contributing

Feel free to fork this project and customize it for your needs.

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please open an issue in the repository.

---

Built with ❤️ using Next.js and Tailwind CSS
