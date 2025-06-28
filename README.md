# Portfolio Website

This is a [Next.js](https://nextjs.org) portfolio project built with modern web technologies including React, TypeScript, Tailwind CSS, and Three.js for 3D effects.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Three.js** - 3D graphics
- **React Three Fiber** - React renderer for Three.js

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Render

This project is configured for deployment on Render as a static site.

### Deployment Steps:

1. **Connect your repository** to Render
2. **Create a new Static Site** service
3. **Configure the build settings:**
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `out`
4. **Deploy!**

The project includes a `render.yaml` file for automated deployment configuration.

### Manual Deployment:

If you prefer to deploy manually:

1. Push your code to a Git repository
2. Create a new Static Site on Render
3. Connect your repository
4. Use the build settings above
5. Deploy

Your site will be available at a Render-provided URL (e.g., `https://your-app-name.onrender.com`).
