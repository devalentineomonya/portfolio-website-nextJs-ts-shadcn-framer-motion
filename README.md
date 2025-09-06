# Next.js + TypeScript + Sanity Minimalistic Portfolio Website 🚀

![Available for Work Banner](https://img.shields.io/badge/Available-For%20Work-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-15.2.x-000000?logo=next.js)
![Sanity](https://img.shields.io/badge/Sanity-CMS-blue)
![Framer Motion](https://img.shields.io/badge/Animations-Framer%20Motion-purple)

A modern, minimalistic portfolio website built with Next.js, TypeScript, and Sanity CMS, featuring smooth animations powered by Framer Motion. Perfect for developers and designers looking to showcase their work with style.

![Project Screenshot](./public/screenshots/home.png)

## Features ✨

- ⚡ **Blazing Fast Performance** with Next.js static generation
- 🎨 **CMS-Powered Content** using Sanity Studio
- 🌀 **Silky Smooth Animations** with Framer Motion
- 📱 **Fully Responsive Design**
- 🌈 **Modern Minimalist UI** with Tailwind CSS
- 🔒 **Type-Safe Codebase** using TypeScript
- 📝 **Easy Content Updates** through Sanity
- 🎯 **SEO Optimized** pages

## Technologies Used 🛠️

### Core Stack

- **Next.js** - React framework for server-side rendering and static site generation
- **TypeScript** - Type-safe JavaScript implementation
- **Sanity CMS** - Headless content management system
- **Tailwind CSS** - Utility-first CSS framework

### Animation & UI

- [**Framer Motion**](https://www.framer.com/motion/) - Production-ready animation library
- **React Icons** - Popular icons for React applications
- **Heroicons** - Beautiful hand-crafted SVG icons

### Utilities

- **Groq** - Sanity's query language
- **Date-fns** - Modern date utility library
- **React Intersection Observer** - Detect element visibility
- **React Hot Toast** - Elegant notifications

## Screenshots 🖼️

| Light Mode                                    | Dark Mode                                   | Project Studio                             |
| --------------------------------------------- | ------------------------------------------- | ------------------------------------------ |
| ![Light Mode](./public/screenshots/light.png) | ![Dark Mode](./public/screenshots/dark.png) | ![Studio](./public/screenshots/studio.png) |

## Getting Started 🏁

### Prerequisites

- Node.js ≥18.x
- npm/yarn/pnpm
- Sanity account (free tier available)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/devalentineomonya/Minimalistic-Portfolio-Website-NextJs-Ts-Sanity.git
   cd Minimalistic-Portfolio-Website-NextJs-Ts-Sanity
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Environment Setup**
   Create `.env.local` in root directory:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

4. **Run Development Server**
   ```bash
   pnpm dev
   ```

5. **Access Sanity Studio**
   Navigate to [http://localhost:3000/studio](http://localhost:3000/studio) in your browser
   - Log in with your Sanity credentials
   - Start managing content immediately

## Key Features 🔥

### Integrated Sanity Studio
- Direct CMS access through `/studio` route
- Real-time content previews
- Custom content schemas
- Collaborative editing environment

### Animation System
- Page transition presets
- Scroll-triggered animations
- Interactive hover states
- Staggered element reveals

## Configuration ⚙️

### Sanity Content Models
Modify schemas in `app/(admin)/studio/schemas`:
```javascript
// Example Project Schema
{
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    // Customize fields here
  ]
}
```

### Theme Customization
Edit `tailwind.config.ts` for design changes:
```typescript
export default {
  theme: {
    extend: {
      colors: {
        primary: '#your-hex-code',
      }
    }
  }
}
```

## Roadmap 🗺️
- [ ] Dark mode toggle
- [ ] Blog functionality
- [ ] Project filtering
- [ ] Enhanced mobile animations
- [ ] Contact form integration

## License 📄
Distributed under the MIT License. See `LICENSE` for details.

## Contact 📧
**Valentine Omonya** - [valomosh254@gmail.com](mailto:valomosh254@gmail.com)  
Live Demo: [https://v3.devalentine.me](https://v3.devalentine.me)  
Issue Tracker: [https://github.com/devalentineomonya/Minimalistic-Portfolio-Website-NextJs-Ts-Sanity/issues](https://github.com/devalentineomonya/Minimalistic-Portfolio-Website-NextJs-Ts-Sanity/issues)

---

✨ **Crafted with care by Valentine Omonya**  
[![GitHub](https://img.shields.io/badge/GitHub-Profile-blue?logo=github)](https://github.com/devalentineomonya)
[![X(Twitter)](https://img.shields.io/badge/Twitter-Follow-blue?logo=twitter)](https://x.com/devalentine_)
