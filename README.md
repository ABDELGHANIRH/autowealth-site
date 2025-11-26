# AutoWealthAI Website

A modern, responsive website for AutoWealthAI - AI Automation & Consulting services built with Next.js, TypeScript, TailwindCSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional, and responsive design
- **Dark/Light Mode**: Theme toggle with localStorage persistence
- **Smooth Animations**: Powered by Framer Motion
- **Performance Optimized**: Next.js with image optimization
- **SEO Ready**: Proper meta tags and semantic HTML
- **Easy to Edit**: Simple file structure for non-developers

## 📁 Project Structure

```
autowealthai/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── services/          # Services page
│   ├── about/             # About page
│   └── contact/           # Contact page
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── Hero.tsx           # Hero section
│   ├── ServiceCard.tsx    # Service cards
│   ├── CaseStudy.tsx      # Case study cards
│   ├── ContactForm.tsx    # Contact form
│   └── ThemeToggle.tsx    # Dark/light mode toggle
├── public/                # Static assets
│   ├── logo.svg           # Company logo
│   ├── hero.jpg           # Hero background
│   ├── founder.jpg        # Founder photo
│   ├── case1.jpg          # Case study 1
│   ├── case2.jpg          # Case study 2
│   └── case3.jpg          # Case study 3
└── .env.example          # Environment variables template
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone or download the project
2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Update environment variables in `.env.local`:
   ```
   NEXT_PUBLIC_CALENDLY_LINK=https://calendly.com/free-consulting-session/15min
   NEXT_PUBLIC_WHATSAPP_NUMBER=+212762489130
   NEXT_PUBLIC_COMPANY_EMAIL=your_email
   NEXT_PUBLIC_SITE_URL=your_website_url
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Customization

### Brand Colors
Update colors in `tailwind.config.js`:
```javascript
colors: {
  primary: '#071B2F',      // Navy blue
  accent: '#00C2FF',       // Cyan
  'bg-light': '#F9FBFD',   // Light background
  'bg-dark': '#0B1120',    // Dark background
  'text-light': '#111827', // Light mode text
  'text-dark': '#F3F4F6',  // Dark mode text
}
```

### Content Updates

#### Home Page
- Edit `app/page.tsx` to update hero text, services, Case Studies, and testimonials
- Replace images in `/public` folder with your own

#### Services Page  
- Edit `app/services/page.tsx` to modify service offerings and descriptions

#### About Page
- Edit `app/about/page.tsx` to update company story, team, and values
- Replace `founder.jpg` with actual team photos

#### Contact Page
- Edit `app/contact/page.tsx` to update contact information and FAQs

### Images
Replace placeholder images in `/public` folder:
- `logo.svg` - Company logo
- `hero.jpg` - Hero section background  
- `founder.jpg` - Team/founder photos
- `case1.jpg`, `case2.jpg`, `case3.jpg` - Case study images

### Components
- **Header**: `components/Header.tsx` - Navigation and logo
- **Footer**: `components/Footer.tsx` - Contact info and links
- **Theme Toggle**: `components/ThemeToggle.tsx` - Dark/light mode switch

## 📝 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_CALENDLY_LINK` | Calendly booking link | `https://calendly.com/free-consulting-session/15min` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp business number | `+212762489130` |
| `NEXT_PUBLIC_COMPANY_EMAIL` | Contact email | `support@yourcompany.com` |
| `NEXT_PUBLIC_SITE_URL` | Website URL | `https://autowealthai.com` |

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms
- **Netlify**: Connect GitHub repo and configure build settings
- **Railway**: Use Railway CLI or connect GitHub repo
- **Digital Ocean**: Use App Platform or traditional server

Build command: `npm run build`
Start command: `npm start`

## 📱 Responsive Design

The website is fully responsive with mobile-first approach:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

Tested on all major devices and browsers.

## 🔧 Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **TailwindCSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Next/Image** - Image optimization

## 📊 Performance

- Lighthouse Score: 90+ (Target)
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

## 🎯 SEO Features

- Semantic HTML structure
- Meta tags and Open Graph
- Sitemap generation
- Robots.txt
- Structured data ready
- Fast loading times

## 📞 Support

For questions or support, please contact:
- Email: [your-email]
- WhatsApp: [your-number]

## 📄 License

This project is created for AutoWealthAI. All rights reserved.

---

Built with ❤️ using Next.js and modern web technologies.