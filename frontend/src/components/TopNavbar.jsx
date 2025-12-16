import {
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaUser,
  FaFilter,
} from "react-icons/fa";

const TopNavbar = () => {
  return (
    <div className="bg-game-dark border-b border-gray-800 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Filter tags */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-white bg-game-accent px-4 py-2 rounded-lg text-sm">
            ALL
          </button>
          {["RPG", "MOBA", "BATTLE", "RACING", "FIGHTING"].map((tag) => (
            <button
              key={tag}
              className="text-gray-400 hover:text-white px-4 py-2 rounded-lg text-sm transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Mobile filter button */}
        <button className="md:hidden text-gray-400 hover:text-white">
          <FaFilter size={20} />
        </button>

        {/* Right section */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative hidden sm:block">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-800 text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-game-accent w-64"
            />
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-400 hover:text-white transition-colors relative">
              <FaHeart size={20} />
            </button>
            <button className="text-gray-400 hover:text-white transition-colors relative">
              <FaShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <FaUser className="text-white text-sm" />
              </div>
              <div className="hidden sm:block">
                <p className="text-white text-sm font-medium">User Name</p>
                <p className="text-gray-400 text-xs">Pro Profile</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
