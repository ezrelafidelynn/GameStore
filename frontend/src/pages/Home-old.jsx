import { useState, useEffect } from "react";
import { FaHeart, FaShoppingCart, FaPlay, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useGameContext } from '../context/GameContext';

const Home = () => {
  const { games, loading, toggleLike, toggleCart, isLiked, isInCart } = useGameContext();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [error, setError] = useState(null);

  // Auto-advance slideshow
  useEffect(() => {
    if (games.length > 0) {
      const interval = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % Math.min(games.length, 5));
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [games.length]);

  const featuredGames = games.slice(0, 5);
  const otherGames = games.slice(5);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % featuredGames.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + featuredGames.length) % featuredGames.length);
  };

  return (
    <div style={{ padding: "2rem", backgroundColor: "#374151" }}>
      <h1
        style={{
          color: "white",
          fontSize: "2.5rem",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        🎮 Gaming Marketplace
      </h1>
      <p
        style={{
          color: "#d1d5db",
          fontSize: "1.2rem",
          marginBottom: "2rem",
        }}
      >
        Welcome to your gaming destination!
      </p>

      {/* Featured Games Section */}
      <div
        style={{
          padding: "1.5rem",
          backgroundColor: "#4b5563",
          borderRadius: "0.5rem",
          marginTop: "2rem",
        }}
      >
        <h2
          style={{
            color: "white",
            fontSize: "1.5rem",
            marginBottom: "1rem",
          }}
        >
          Featured Games ({games.length} available)
        </h2>

        {loading && (
          <p style={{ color: "#9ca3af" }}>Loading amazing games...</p>
        )}

        {error && (
          <p style={{ color: "#ef4444", marginBottom: "1rem" }}>❌ {error}</p>
        )}

        {!loading && !error && games.length > 0 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1rem",
              marginTop: "1rem",
            }}
          >
            {games.slice(0, 6).map((game) => (
              <div
                key={game.id}
                style={{
                  backgroundColor: "#374151",
                  padding: "1rem",
                  borderRadius: "0.5rem",
                  border: "1px solid #4b5563",
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
                  {game.category} • Rating: {game.rating}/5
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
                  <button
                    style={{
                      backgroundColor: "#3b82f6",
                      color: "white",
                      padding: "0.5rem 1rem",
                      borderRadius: "0.25rem",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "0.9rem",
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
