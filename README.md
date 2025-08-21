# Lasse Melcher - Personal Website

A modern, professional website built with React, Vite, and Tailwind CSS, showcasing data engineering expertise and services.

## Features

- 🎨 Modern, minimalist design
- 📱 Fully responsive layout
- ⚡ Fast loading with Vite
- 🔒 HTTPS ready with Docker
- 🎯 SEO optimized
- 🌐 Production-ready deployment
- 🌍 **German & English language support** - Automatic language detection and manual switching

## Development

### Prerequisites

- Node.js 18+
- npm or yarn
- Docker & Docker Compose (for production deployment)

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173
```

### Production Deployment

#### Using Docker Compose (Recommended)

```bash
# Generate SSL certificates and build
docker-compose up ssl-generator
docker-compose up --build -d web

# Access the website
# HTTP: http://localhost (redirects to HTTPS)
# HTTPS: https://localhost
```

#### Manual Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Docker Configuration

The project includes a complete Docker setup with:

- **Multi-stage Docker build** for optimized production images
- **Nginx reverse proxy** with SSL termination
- **Automatic HTTP to HTTPS redirect**
- **Security headers** and performance optimizations
- **Self-signed SSL certificates** for development

### SSL Certificates

For development, the setup generates self-signed certificates automatically. For production:

1. Replace the self-signed certificates in `./ssl/` with real certificates
2. Update the `server_name` in `nginx.conf` to match your domain
3. Consider using Let's Encrypt for free SSL certificates

## Project Structure

```
├── src/
│   ├── components/ui/     # Reusable UI components
│   ├── lib/              # Utility functions
│   ├── LasseMelcherSite.jsx  # Main website component
│   └── main.jsx          # App entry point
├── public/               # Static assets
├── docker-compose.yml    # Docker orchestration
├── Dockerfile           # Container build instructions
├── nginx.conf           # Nginx configuration
└── vite.config.js       # Vite configuration
```

## Technologies

- **Frontend**: React 18, Vite, Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Docker, Nginx
- **Build**: Multi-stage Docker build

## Internationalization

The website now supports both **English** and **German** languages:

- **Automatic language detection** based on browser preferences
- **Language switcher** in the navigation (globe icon)
- **Persistent language preference** stored in localStorage
- **Complete content translation** including:
  - Navigation and UI elements
  - Hero section and services
  - About section and skills
  - Contact forms and placeholders
  - Footer and all static text

### Language Files
- `src/lib/translations.js` - Contains all translated content
- `src/lib/LanguageContext.jsx` - React context for language management
- `src/components/LanguageSwitcher.jsx` - Language toggle component

## SEO Features

- Meta tags and OpenGraph support
- JSON-LD structured data
- XML sitemap
- Robots.txt
- Optimized images and performance

## Contact

- Email: contact@lasse-melcher.de
- GitHub: [@lassemel](https://github.com/lassemel)
- LinkedIn: [Lasse Melcher](https://www.linkedin.com/in/lasse-melcher-a2768825a/)
- Location: Berlin, Germany
