import { FaStar, FaShoppingCart } from "react-icons/fa";

const HeroSection = () => {
  const featuredGame = {
    title: "LEAGUE OF LEGENDS",
    description:
      "Join the legendary MOBA experience with over 140 champions to master. Team up with friends and compete in the world's most popular PC game.",
    image: "/api/placeholder/600/300",
    rating: 5,
    originalPrice: 59.99,
    discount: 50,
    finalPrice: 39.5,
    difficulty: "Medium",
  };

  return (
    <div className="bg-gradient-to-r from-game-dark to-game-darker p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
        {/* Game Image */}
        <div className="relative">
          <div className="bg-gray-800 rounded-lg overflow-hidden aspect-video">
            <img
              src={featuredGame.image}
              alt={featuredGame.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src =
                  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDYwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMzc0MTUxIi8+CjxjaXJjbGUgY3g9IjMwMCIgY3k9IjE1MCIgcj0iNDAiIGZpbGw9IiM2Mzc0OGIiLz4KPHRLEHN0cm9rZT0iIzk0YTNiOCIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIj4KICA8cGF0aCBkPSJNMjcwIDE0MEwzMzAgMTQwTTI3MTE2MEwzMzAgMTYwIi8+CjwvZz4KPHR4dCB4PSIzMDAiIHk9IjIwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzk0YTNiOCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0Ij5HQUFNRSBJTUFLR0U8L3RleHQ+Cjwvc3ZnPgo=";
              }}
            />
            <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
              -{featuredGame.discount}%
            </div>
            <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
              {featuredGame.difficulty}
            </div>
          </div>
        </div>

        {/* Game Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              {featuredGame.title}
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              {featuredGame.description}
            </p>
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`${
                    i < featuredGame.rating
                      ? "text-yellow-400"
                      : "text-gray-600"
                  }`}
                />
              ))}
            </div>
            <span className="text-gray-400">({featuredGame.rating}.0)</span>
          </div>

          {/* Pricing */}
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <span className="text-gray-500 line-through text-lg">
                ${featuredGame.originalPrice}
              </span>
              <span className="text-white text-3xl font-bold">
                ${featuredGame.finalPrice}
              </span>
            </div>
          </div>

          {/* Action Button */}
          <button className="bg-game-accent hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center space-x-2 group">
            <FaShoppingCart className="group-hover:scale-110 transition-transform" />
            <span>Order Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
