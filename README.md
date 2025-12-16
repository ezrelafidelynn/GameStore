# Gaming Marketplace Website

A modern dark-themed gaming marketplace website built with React.js (frontend) and Laravel (backend). This project features a clean, responsive design inspired by modern game store dashboards.

## 🎮 Features

### Frontend (React + Tailwind CSS)

- **Responsive Dark Theme UI**: Modern gaming-focused design
- **Sidebar Navigation**: Collapsible sidebar with Home, Categories, My Library, and My Bag
- **Top Navigation**: Search bar, wishlist, cart, and user profile
- **Hero Section**: Featured game showcase with pricing and call-to-action
- **Category Grid**: Browse games by category with icons
- **Games Promotion**: Product cards with ratings, pricing, and discounts
- **Subscribe Form**: Email subscription with validation
- **Footer**: Comprehensive footer with social links and company info

### Backend (Laravel API)

- **Product CRUD API**: Complete REST API for game products
- **Database Seeding**: Pre-populated with sample game data
- **JSON Responses**: Structured API responses with error handling
- **CORS Support**: Cross-origin requests enabled for frontend

## 🚀 Tech Stack

### Frontend

- React 18
- Vite (Build tool)
- Tailwind CSS (Styling)
- React Icons (Icons)

### Backend

- Laravel 11
- SQLite Database
- Eloquent ORM
- REST API

## 📁 Project Structure

```
GameStore/
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/       # React components
│   │   │   ├── Sidebar.jsx
│   │   │   ├── TopNavbar.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── CategoryGrid.jsx
│   │   │   ├── GamesPromotion.jsx
│   │   │   ├── SubscribeForm.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx          # Main app component
│   │   └── index.css        # Tailwind CSS
│   └── package.json
│
└── backend/                  # Laravel backend
    ├── app/
    │   ├── Models/
    │   │   └── Product.php   # Product model
    │   └── Http/
    │       └── Controllers/
    │           └── ProductController.php
    ├── database/
    │   ├── migrations/       # Database migrations
    │   └── seeders/          # Database seeders
    └── routes/
        └── api.php           # API routes
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- PHP (v8.1 or higher)
- Composer

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will be available at `http://localhost:5173`

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install PHP dependencies:

   ```bash
   composer install
   ```

3. Run database migrations:

   ```bash
   php artisan migrate
   ```

4. Seed the database with sample data:

   ```bash
   php artisan db:seed
   ```

5. Start the Laravel development server:
   ```bash
   php artisan serve
   ```

The backend API will be available at `http://localhost:8000`

## 📊 Database Schema

### Products Table

- `id` - Primary key
- `name` - Game name
- `price` - Original price
- `discount` - Discount percentage (0-100)
- `image_url` - Game image URL
- `category` - Game category
- `description` - Game description
- `rating` - Game rating (1-5)
- `difficulty` - Difficulty level
- `created_at` / `updated_at` - Timestamps

## 🌐 API Endpoints

### Products API

- `GET /api/products` - Get all products
- `GET /api/products/{id}` - Get single product
- `POST /api/products` - Create new product
- `PUT /api/products/{id}` - Update product
- `DELETE /api/products/{id}` - Delete product

### Example API Response

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "League of Legends",
      "price": "59.99",
      "discount": 50,
      "final_price": 29.99,
      "image_url": "/images/league-of-legends.jpg",
      "category": "MOBA",
      "description": "Join the legendary MOBA experience...",
      "rating": 5,
      "difficulty": "Medium",
      "created_at": "2024-01-01T00:00:00.000000Z",
      "updated_at": "2024-01-01T00:00:00.000000Z"
    }
  ]
}
```

## 🎨 Design Features

### Responsive Design

- **Desktop**: Full sidebar with expanded layout
- **Tablet**: Collapsible sidebar with grid adjustments
- **Mobile**: Hidden sidebar with top navigation

### Color Scheme

- Primary Background: `#0f172a` (game-dark)
- Secondary Background: `#020617` (game-darker)
- Accent Color: `#3b82f6` (game-accent)
- Text Colors: White and gray variants

### Interactive Elements

- Hover effects on cards and buttons
- Smooth transitions and animations
- Form validation with error states
- Responsive image handling

## 🔧 Development

### Adding New Components

1. Create component file in `frontend/src/components/`
2. Import and use in `App.jsx`
3. Apply Tailwind classes for styling

### Adding New API Endpoints

1. Add routes in `backend/routes/api.php`
2. Update `ProductController` or create new controller
3. Test with API client (Postman, etc.)

### Customizing Styles

- Edit `frontend/tailwind.config.js` for theme customization
- Modify colors, spacing, or breakpoints as needed
- Custom CSS can be added to `frontend/src/index.css`

## 🚀 Production Deployment

### Frontend Deployment

```bash
npm run build
# Deploy dist/ folder to your hosting service
```

### Backend Deployment

```bash
composer install --optimize-autoloader --no-dev
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

## 📝 Future Enhancements

- User authentication and authorization
- Shopping cart functionality
- Payment integration
- Game reviews and ratings system
- Advanced search and filtering
- User wishlist management
- Admin dashboard for game management
- Real-time notifications
- Social features (friends, achievements)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎯 Project Goals Achieved

✅ Clean, modern dark-themed UI  
✅ Responsive design across all devices  
✅ Component-based React architecture  
✅ Laravel REST API with CRUD operations  
✅ Database with sample game data  
✅ Proper spacing and layout structure  
✅ Beginner-friendly code structure  
✅ Interactive form validation  
✅ Hover effects and smooth transitions

---

**Happy Gaming! 🎮**
