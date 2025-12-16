import { FaStar, FaShoppingCart, FaHeart } from "react-icons/fa";

const GamesPromotion = () => {
  const promotionalGames = [
    {
      id: 1,
      title: "MARIO KART 8 DELUXE",
      image: "/api/placeholder/300/200",
      originalPrice: 59.99,
      discount: 30,
      finalPrice: 35.79,
      rating: 5,
      difficulty: "Easy",
      category: "Racing",
    },
    {
      id: 2,
      title: "DOTA II",
      image: "/api/placeholder/300/200",
      originalPrice: 89.99,
      discount: 30,
      finalPrice: 59.5,
      rating: 4,
      difficulty: "Medium",
      category: "MOBA",
    },
    {
      id: 3,
      title: "KING OF FIGHTERS XV",
      image: "/api/placeholder/300/200",
      originalPrice: 69.99,
      discount: 20,
      finalPrice: 52.48,
      rating: 4,
      difficulty: "Hard",
      category: "Fighting",
    },
    {
      id: 4,
      title: "FORZA HORIZON 5",
      image: "/api/placeholder/300/200",
      originalPrice: 129.0,
      discount: 0,
      finalPrice: 129.0,
      rating: 5,
      difficulty: "High",
      category: "Racing",
    },
    {
      id: 5,
      title: "HALO INFINITE",
      image: "/api/placeholder/300/200",
      originalPrice: 99.99,
      discount: 0,
      finalPrice: 85.5,
      rating: 4,
      difficulty: "Medium",
      category: "Shooter",
    },
    {
      id: 6,
      title: "FORTNITE SPIDER-MAN",
      image: "/api/placeholder/300/200",
      originalPrice: 69.99,
      discount: 60,
      finalPrice: 27.6,
      rating: 4,
      difficulty: "Easy",
      category: "Battle Royale",
    },
  ];

  const generatePlaceholderImage = () => {
    return "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMzc0MTUxIi8+CjxjaXJjbGUgY3g9IjE1MCIgY3k9IjEwMCIgcj0iMzAiIGZpbGw9IiM2Mzc0OGIiLz4KPGC+PC5yZD0iIzk0YTNiOCIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIj4KICA8cGF0aCBkPSJNMTMwIDkwTDE3MCA5ME0xMzAgMTEwTDE3MCAxMTAiLz4KPC9nPgo8dGV4dCB4PSIxNTAiIHk9IjE1MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzk0YTNiOCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIj5HQU1FPC90ZXh0Pgo8L3N2Zz4K";
  };

  return (
    <div className="bg-game-darker py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-8">
          Games on Promotion
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {promotionalGames.map((game) => (
            <div
              key={game.id}
              className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group"
            >
              {/* Game Image */}
              <div className="relative">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.target.src = generatePlaceholderImage();
                  }}
                />

                {/* Discount Badge */}
                {game.discount > 0 && (
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                    -{game.discount}%
                  </div>
                )}

                {/* Difficulty Badge */}
                <div className="absolute top-3 right-3 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                  {game.difficulty}
                </div>

                {/* Wishlist Button */}
                <button className="absolute top-3 right-12 bg-black bg-opacity-50 text-white p-2 rounded hover:bg-red-500 transition-colors">
                  <FaHeart size={14} />
                </button>
              </div>

              {/* Game Details */}
              <div className="p-4">
                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-game-accent transition-colors">
                  {game.title}
                </h3>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-sm ${
                        i < game.rating ? "text-yellow-400" : "text-gray-600"
                      }`}
                    />
                  ))}
                  <span className="text-gray-400 text-sm ml-2">
                    ({game.rating}.0)
                  </span>
                </div>

                {/* Pricing */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    {game.discount > 0 && (
                      <span className="text-gray-500 line-through text-sm">
                        ${game.originalPrice}
                      </span>
                    )}
                    <span className="text-white text-xl font-bold">
                      ${game.finalPrice}
                    </span>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button className="w-full bg-game-accent hover:bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors group">
                  <FaShoppingCart />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamesPromotion;
