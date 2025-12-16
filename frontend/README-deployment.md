# GameStore Frontend

A modern React-based game marketplace with interactive navigation and filtering capabilities.

## 🚀 Features

- **Interactive Navigation**: Top navbar and sidebar with real-time counters
- **Auto-Slideshow**: Home page with 4-second rotating game showcase
- **Category Filtering**: Dynamic filter navbar with category icons
- **Like System**: Heart button functionality for My Library
- **Shopping Cart**: Cart functionality for My Bag
- **Responsive Design**: Mobile-friendly with hover effects and transitions

## 🛠️ Tech Stack

- **React 19** - Frontend framework
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **React Icons** - Icon library
- **CSS-in-JS** - Inline styling approach

## 📦 Deployment

### Vercel (Recommended)

1. **Connect Repository:**
   ```bash
   # Repository: https://github.com/ezrelafidelynn/GameStore
   # Framework Preset: Vite
   # Root Directory: frontend
   ```

2. **Build Settings:**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Environment Variables:**
   No environment variables required for basic functionality.

### Local Development

1. **Install Dependencies:**
   ```bash
   cd frontend
   npm install
   ```

2. **Start Development Server:**
   ```bash
   npm run dev
   ```

3. **Build for Production:**
   ```bash
   npm run build
   npm run preview
   ```

## 🎮 Game Data

The application uses a static games array with:
- League of Legends (MOBA)
- Call of Duty (FPS) 
- The Witcher 3 (RPG)
- Cyberpunk 2077 (RPG)
- Valorant (FPS)

## 📱 Navigation

- **Home**: Auto-sliding game showcase
- **Categories**: Filterable game grid (All, MOBA, FPS, RPG)
- **My Library**: Liked games collection
- **My Bag**: Shopping cart with checkout

## 🔧 Configuration Files

- `vercel.json` - Vercel deployment configuration
- `vite.config.js` - Vite build optimization
- `package.json` - Dependencies and scripts

## 🌐 Live Demo

Deploy to Vercel for instant live demo at `https://your-project.vercel.app`