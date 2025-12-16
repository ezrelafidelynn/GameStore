import { useState, useEffect } from "react";
import {
  FaSword,
  FaCar,
  FaFootballBall,
  FaChess,
  FaGun,
  FaMagic,
  FaRocket,
  FaPuzzlePiece,
  FaHeart,
  FaShoppingCart,
} from "react-icons/fa";
import { useGameContext } from "../context/SafeGameContext";

const Categories = () => {
  const { games, loading, toggleLike, toggleCart, isLiked, isInCart } =
    useGameContext();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    { name: "All", icon: null },
    { name: "Action", icon: FaSword, color: "#ef4444" },
    { name: "Racing", icon: FaCar, color: "#3b82f6" },
    { name: "Sports", icon: FaFootballBall, color: "#10b981" },
    { name: "Strategy", icon: FaChess, color: "#8b5cf6" },
    { name: "Shooter", icon: FaGun, color: "#f97316" },
    { name: "Fantasy", icon: FaMagic, color: "#ec4899" },
    { name: "Sci-Fi", icon: FaRocket, color: "#6366f1" },
    { name: "RPG", icon: FaPuzzlePiece, color: "#14b8a6" },
  ];

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/products");
      const data = await response.json();
      if (data.success) {
        setGames(data.data);
      }
    } catch (err) {
      console.error("Error fetching games:", err);
    } finally {
      setLoading(false);
    }
  };

  const filteredGames =
    selectedCategory === "All"
      ? games
      : games.filter((game) =>
          game.category.toLowerCase().includes(selectedCategory.toLowerCase())
        );

  const getGamesByCategory = (category) => {
    if (category === "All") return games.length;
    return games.filter((game) =>
      game.category.toLowerCase().includes(category.toLowerCase())
    ).length;
  };

  return (
    <div
      style={{
        padding: "2rem",
        backgroundColor: "#374151",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          color: "white",
          fontSize: "2.5rem",
          fontWeight: "bold",
          marginBottom: "2rem",
        }}
      >
        🎮 Browse Categories
      </h1>

      {/* Category Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "1rem",
          marginBottom: "3rem",
        }}
      >
        {categories.map((category, index) => {
          const IconComponent = category.icon;
          const gameCount = getGamesByCategory(category.name);

          return (
            <button
              key={index}
              onClick={() => setSelectedCategory(category.name)}
              style={{
                backgroundColor:
                  selectedCategory === category.name ? "#3b82f6" : "#4b5563",
                color: "white",
                padding: "1.5rem",
                borderRadius: "0.75rem",
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s",
                textAlign: "left",
              }}
              onMouseOver={(e) => {
                if (selectedCategory !== category.name) {
                  e.target.style.backgroundColor = "#374151";
                }
              }}
              onMouseOut={(e) => {
                if (selectedCategory !== category.name) {
                  e.target.style.backgroundColor = "#4b5563";
                }
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "0.5rem",
                }}
              >
                {IconComponent && (
                  <IconComponent
                    style={{
                      marginRight: "0.75rem",
                      fontSize: "1.5rem",
                      color: category.color || "white",
                    }}
                  />
                )}
                <h3 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                  {category.name}
                </h3>
              </div>
              <p style={{ color: "#d1d5db", fontSize: "0.9rem" }}>
                {gameCount} games
              </p>
            </button>
          );
        })}
      </div>

      {/* Games Grid */}
      <div style={{ marginBottom: "2rem" }}>
        <h2
          style={{
            color: "white",
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
        >
          {selectedCategory} Games ({filteredGames.length})
        </h2>

        {loading ? (
          <p style={{ color: "#9ca3af" }}>Loading games...</p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1rem",
            }}
          >
            {filteredGames.map((game) => (
              <div
                key={game.id}
                style={{
                  backgroundColor: "#4b5563",
                  padding: "1rem",
                  borderRadius: "0.5rem",
                  border: "1px solid #6b7280",
                }}
              >
                <h3
                  style={{
                    color: "white",
                    fontSize: "1.1rem",
                    marginBottom: "0.5rem",
                    fontWeight: "bold",
                  }}
                >
                  {game.name}
                </h3>
                <p
                  style={{
                    color: "#9ca3af",
                    fontSize: "0.9rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  {game.category} • Rating: {game.rating}/5 • {game.difficulty}
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    {game.discount > 0 ? (
                      <>
                        <span
                          style={{
                            color: "#ef4444",
                            backgroundColor: "#7f1d1d",
                            padding: "0.2rem 0.5rem",
                            borderRadius: "0.25rem",
                            fontSize: "0.8rem",
                            marginRight: "0.5rem",
                          }}
                        >
                          -{game.discount}%
                        </span>
                        <span
                          style={{
                            color: "#9ca3af",
                            textDecoration: "line-through",
                            fontSize: "0.9rem",
                          }}
                        >
                          ${game.price}
                        </span>
                        <span
                          style={{
                            color: "#10b981",
                            fontSize: "1.1rem",
                            fontWeight: "bold",
                            marginLeft: "0.5rem",
                          }}
                        >
                          ${game.final_price}
                        </span>
                      </>
                    ) : (
                      <span
                        style={{
                          color: "white",
                          fontSize: "1.1rem",
                          fontWeight: "bold",
                        }}
                      >
                        ${game.price}
                      </span>
                    )}
                  </div>
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <button
                      onClick={() => toggleLike(game)}
                      style={{
                        backgroundColor: isLiked(game.id)
                          ? "#ef4444"
                          : "rgba(239, 68, 68, 0.2)",
                        color: isLiked(game.id) ? "white" : "#ef4444",
                        padding: "0.5rem",
                        borderRadius: "0.25rem",
                        border: "1px solid #ef4444",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <FaHeart />
                    </button>
                    <button
                      onClick={() => toggleCart(game)}
                      style={{
                        backgroundColor: isInCart(game.id)
                          ? "#10b981"
                          : "#3b82f6",
                        color: "white",
                        padding: "0.5rem 1rem",
                        borderRadius: "0.25rem",
                        border: "none",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        fontSize: "0.9rem",
                      }}
                    >
                      <FaShoppingCart />
                      {isInCart(game.id) ? "In Cart" : "Add to Cart"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
