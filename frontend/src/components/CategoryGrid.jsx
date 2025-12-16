import {
  FaSword,
  FaCar,
  FaFootballBall,
  FaChess,
  FaGun,
  FaMagic,
  FaRocket,
  FaPuzzlePiece,
} from "react-icons/fa";

const CategoryGrid = () => {
  const categories = [
    {
      name: "Action",
      icon: FaSword,
      color: "from-red-500 to-red-600",
      count: 150,
    },
    {
      name: "Racing",
      icon: FaCar,
      color: "from-blue-500 to-blue-600",
      count: 89,
    },
    {
      name: "Sports",
      icon: FaFootballBall,
      color: "from-green-500 to-green-600",
      count: 67,
    },
    {
      name: "Strategy",
      icon: FaChess,
      color: "from-purple-500 to-purple-600",
      count: 95,
    },
    {
      name: "Shooter",
      icon: FaGun,
      color: "from-orange-500 to-orange-600",
      count: 123,
    },
    {
      name: "Fantasy",
      icon: FaMagic,
      color: "from-pink-500 to-pink-600",
      count: 78,
    },
    {
      name: "Sci-Fi",
      icon: FaRocket,
      color: "from-indigo-500 to-indigo-600",
      count: 56,
    },
    {
      name: "Puzzle",
      icon: FaPuzzlePiece,
      color: "from-teal-500 to-teal-600",
      count: 42,
    },
  ];

  return (
    <div className="bg-game-dark py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-8">
          Browse by Category
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="group relative bg-gray-800 hover:bg-gray-750 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <IconComponent className="text-white text-xl" />
                </div>

                <h3 className="text-white font-semibold text-lg mb-1">
                  {category.name}
                </h3>

                <p className="text-gray-400 text-sm">{category.count} games</p>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-game-accent to-blue-600 opacity-0 group-hover:opacity-10 rounded-xl transition-opacity" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryGrid;
