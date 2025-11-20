# Ddigital - Digital Media Hub Website

<div align="center">
  <h3>Ultimate Digital Media Hub based in Sri Lanka</h3>
  <p>A modern, responsive website built with Next.js 15 and React 19</p>
  
  [![Next.js](https://img.shields.io/badge/Next.js-15.0.3-black?logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19.0.0-blue?logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-blue?logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.15-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
</div>

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Key Components](#key-components)
- [API Routes](#api-routes)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 About

Ddigital is a dynamic design agency and digital media services provider based in Colombo, Sri Lanka. This website showcases our portfolio, services, and provides a contact interface for potential clients. The platform is built with modern web technologies to deliver a seamless, performant user experience.

**Vision:** To be the catalyst for transformation in the digital landscape of Sri Lanka, empowering small businesses and startups with affordable, industry-grade design and digital media services.

---

## ✨ Features

- **🎨 Modern UI/UX** - Clean, professional design with smooth animations
- **📱 Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **⚡ Performance Optimized** - Server-side rendering, image optimization, and React 19 compiler
- **🎬 Interactive Sections** - Hero, About, Services, Work Portfolio, Testimonials, Contact
- **📧 Contact Form** - Email integration with Nodemailer
- **🖼️ Image Optimization** - Next.js Image component with blur placeholders
- **🎠 Carousel/Slider** - Interactive work showcase using Swiper
- **🎥 Video Embeds** - YouTube integration with react-lite-youtube-embed
- **🔔 Toast Notifications** - User feedback with react-hot-toast
- **♿ Accessibility** - ARIA labels and semantic HTML
- **🎯 SEO Optimized** - Metadata, Open Graph tags, and structured data

---

## 🛠️ Tech Stack

### Core Framework

- **[Next.js 15.0.3](https://nextjs.org/)** - React framework with App Router
- **[React 19.0.0](https://reactjs.org/)** - UI library with experimental compiler
- **[TypeScript 5.6.3](https://www.typescriptlang.org/)** - Type-safe JavaScript

### Styling

- **[Tailwind CSS 3.4.15](https://tailwindcss.com/)** - Utility-first CSS framework
- **[PostCSS 8.4.49](https://postcss.org/)** - CSS transformation tool
- **[Autoprefixer 10.4.20](https://github.com/postcss/autoprefixer)** - Vendor prefix automation

### UI Components & Libraries

- **[FontAwesome 6.7.1](https://fontawesome.com/)** - Icon library
- **[Swiper 11.1.15](https://swiperjs.com/)** - Touch slider
- **[React Hot Toast 2.4.1](https://react-hot-toast.com/)** - Toast notifications
- **[React Lite YouTube Embed 2.4.0](https://www.npmjs.com/package/react-lite-youtube-embed)** - Lightweight YouTube embeds

### Backend

- **[Nodemailer 7.0.10](https://nodemailer.com/)** - Email sending
- **Next.js API Routes** - Serverless API endpoints

### Development Tools

- **[ESLint 9.14.0](https://eslint.org/)** - Code linting
- **[Prettier 3.3.3](https://prettier.io/)** - Code formatting
- **[Babel React Compiler](https://react.dev/learn/react-compiler)** - Experimental React optimization

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** >= 18.x (LTS recommended)
- **npm** >= 9.x or **yarn** >= 1.22.x or **pnpm** >= 8.x
- **Git** for version control

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/codezelat/ddigital-site.git
   cd ddigital-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Email Configuration (Nodemailer)
NODEMAILER_EMAIL=your-email@gmail.com
NODEMAILER_PASSWORD=your-app-password

# Optional: Custom configurations
NEXT_PUBLIC_SITE_URL=https://ddigital.lk
```

**⚠️ Important Notes:**

- For Gmail, use [App Passwords](https://support.google.com/accounts/answer/185833) instead of your regular password
- Never commit `.env.local` to version control
- Add `.env.local` to your `.gitignore` file

### Running the Application

#### Development Mode

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

#### Production Build

```bash
# Build the application
npm run build

# Start production server
npm run start
```

#### Linting

```bash
npm run lint
```

---

## 📁 Project Structure

```
ddigital-site/
├── public/                          # Static assets
│   ├── img/                        # Images
│   │   ├── brand/                  # Brand assets
│   │   ├── clients/                # Client logos
│   │   ├── services/               # Service images
│   │   ├── services-hover/         # Service hover states
│   │   ├── work/                   # Portfolio thumbnails
│   │   └── work-hover/             # Portfolio hover states
│   └── work/                       # Portfolio PDFs
│
├── src/
│   └── app/                        # Next.js App Router
│       ├── api/                    # API routes
│       │   └── email/
│       │       └── route.ts        # Email sending endpoint
│       │
│       ├── components/             # React components
│       │   ├── about-section/
│       │   ├── contact-section/
│       │   ├── hero-section/
│       │   ├── maintenance-section/
│       │   ├── services-section/
│       │   ├── testimonials-section/
│       │   └── work-section/
│       │
│       ├── footer.tsx              # Footer component
│       ├── header.tsx              # Header/Navigation
│       ├── layout.tsx              # Root layout
│       ├── page.tsx                # Home page
│       └── globals.css             # Global styles
│
├── .env.local                      # Environment variables (not in git)
├── next.config.ts                  # Next.js configuration
├── tailwind.config.ts              # Tailwind CSS config
├── tsconfig.json                   # TypeScript config
├── postcss.config.js               # PostCSS config
├── package.json                    # Dependencies
└── README.md                       # This file
```

---

## 📜 Available Scripts

| Script          | Description                                       |
| --------------- | ------------------------------------------------- |
| `npm run dev`   | Start development server on http://localhost:3000 |
| `npm run build` | Create optimized production build                 |
| `npm run start` | Start production server                           |
| `npm run lint`  | Run ESLint to check code quality                  |

---

## 🧩 Key Components

### Header (`header.tsx`)

- Sticky navigation with blur effect
- Smooth scroll to sections
- Mobile-responsive menu
- CTA button

### Hero Section (`hero-section.tsx`)

- Animated text rotation
- Eye-catching design
- Scroll trigger button

### About Section (`about-section.tsx`)

- Company introduction
- Embedded YouTube video
- Responsive layout

### Services Section (`services-section.tsx`)

- Interactive service cards
- Hover effects with image transitions
- External links to service details

### Work Section (`work-section.tsx`)

- Swiper carousel for portfolio
- Category labels
- PDF case studies
- Navigation arrows and pagination

### Testimonials Section (`testimonials-section.tsx`)

- Client testimonials slider
- Social proof

### Contact Section (`contact-section.tsx`)

- Contact form with validation
- Email integration
- Toast notifications
- Responsive design

### Footer (`footer.tsx`)

- Site navigation
- Contact information
- Social media links
- Copyright information

---

## 🔌 API Routes

### POST `/api/email`

Sends contact form emails using Nodemailer.

**Request Body:**

```typescript
{
  name: string;
  email: string;
  subject: string;
  messageBody: string;
}
```

**Response:**

```typescript
// Success
{
  message: "Email sent";
}

// Error
{
  error: string;
}
```

**Status Codes:**

- `200` - Email sent successfully
- `400` - Validation error
- `500` - Server error

---

## 🚢 Deployment

### Vercel (Recommended)

1. **Connect Repository**
   - Import your Git repository to [Vercel](https://vercel.com)
   - Vercel will auto-detect Next.js

2. **Configure Environment Variables**
   - Add `NODEMAILER_EMAIL` and `NODEMAILER_PASSWORD` in Vercel dashboard

3. **Deploy**
   - Push to your main branch
   - Vercel automatically deploys

### Manual Deployment

```bash
# Build the application
npm run build

# The output is in .next/ folder
# Deploy .next/ folder to your hosting provider
```

### Environment Variables in Production

Ensure all environment variables are set in your hosting platform:

- `NODEMAILER_EMAIL`
- `NODEMAILER_PASSWORD`

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Code Standards

- Follow existing code style
- Use TypeScript for type safety
- Write meaningful commit messages
- Test your changes before submitting

---

## 📝 License

This project is proprietary software developed for **Ddigital** by [Codezela Technologies](https://codezela.com).

---

## 📞 Contact

**Ddigital - Digital Media Hub**

- 🌐 Website: [https://ddigital.lk](https://ddigital.lk)
- 📧 Email: ddigital.lk@gmail.com
- 📱 Phone: +94 72 733 3577
- 📍 Location: 345/35, RIT Alles Mw, Colombo 08, Sri Lanka

**Social Media:**

- [Instagram](https://www.instagram.com/ddigital.lk/)
- [Facebook](https://www.facebook.com/ddigital.lk/)
- [TikTok](https://www.tiktok.com/@ddigital.lk/)
- [YouTube](https://www.youtube.com/@ddigital_lk/)
- [Twitter/X](https://twitter.com/ddigital_lk/)

---

## 🙏 Acknowledgments

- **Codezela Technologies** - Parent company
- **Next.js Team** - Framework
- **Vercel** - Hosting platform
- All open-source contributors

---

<div align="center">
  <p>Built with ❤️ by <a href="https://codezela.com">Codezela Technologies</a></p>
  <p>© 2024 Ddigital. All rights reserved.</p>
</div>
