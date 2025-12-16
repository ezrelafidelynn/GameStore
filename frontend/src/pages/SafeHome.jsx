import { useState, useEffect } from "react";
import {
  FaHeart,
  FaShoppingCart,
  FaPlay,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useGameContext } from "../context/SafeGameContext";

const SafeHome = () => {
  const { games, loading, toggleLike, toggleCart, isLiked, isInCart } =
    useGameContext();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slideshow
  useEffect(() => {
    if (games && games.length > 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % Math.min(games.length, 5));
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [games]);

  if (!games || games.length === 0) {
    return (
      <div
        style={{
          padding: "2rem",
          color: "white",
          backgroundColor: "#374151",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1>🎮 GameStore</h1>
          <p>Loading games...</p>
        </div>
      </div>
    );
  }

  const featuredGames = games.slice(0, 5) || [];
  const otherGames = games.slice(5) || [];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredGames.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + featuredGames.length) % featuredGames.length
    );
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

      {/* Hero Slideshow */}
      {featuredGames.length > 0 && (
        <div
          style={{
            position: "relative",
            height: "400px",
            borderRadius: "1rem",
            overflow: "hidden",
            marginBottom: "3rem",
            backgroundColor: "#4b5563",
          }}
        >
          {featuredGames.map((game, index) => (
            <div
              key={game.id}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), linear-gradient(135deg, #667eea 0%, #764ba2 100%)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "2rem",
                opacity: index === currentSlide ? 1 : 0,
                transition: "opacity 0.5s ease-in-out",
              }}
            >
              <div style={{ flex: 1 }}>
                <h2
                  style={{
                    color: "white",
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    marginBottom: "1rem",
                  }}
                >
                  {game.name}
                </h2>
                <p
                  style={{
                    color: "#d1d5db",
                    fontSize: "1.1rem",
                    marginBottom: "1rem",
                  }}
                >
                  {game.category} • Rating: {game.rating}/5
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center",
                    marginBottom: "2rem",
                  }}
                >
                  <div>
                    {game.discount > 0 ? (
                      <>
                        <span
                          style={{
                            color: "#ef4444",
                            backgroundColor: "#7f1d1d",
                            padding: "0.3rem 0.7rem",
                            borderRadius: "0.5rem",
                            fontSize: "1rem",
                            marginRight: "1rem",
                          }}
                        >
                          -{game.discount}%
                        </span>
                        <span
                          style={{
                            color: "#9ca3af",
                            textDecoration: "line-through",
                            fontSize: "1.2rem",
                          }}
                        >
                          ${game.price}
                        </span>
                        <span
                          style={{
                            color: "#10b981",
                            fontSize: "2rem",
                            fontWeight: "bold",
                            marginLeft: "1rem",
                          }}
                        >
                          ${game.final_price}
                        </span>
                      </>
                    ) : (
                      <span
                        style={{
                          color: "white",
                          fontSize: "2rem",
                          fontWeight: "bold",
                        }}
                      >
                        ${game.price}
                      </span>
                    )}
                  </div>
                </div>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <button
                    onClick={() => toggleLike(game)}
                    style={{
                      backgroundColor: isLiked(game.id)
                        ? "#ef4444"
                        : "rgba(239, 68, 68, 0.2)",
                      color: isLiked(game.id) ? "white" : "#ef4444",
                      padding: "1rem",
                      borderRadius: "0.5rem",
                      border: "2px solid #ef4444",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      fontSize: "1rem",
                      fontWeight: "bold",
                    }}
                  >
                    <FaHeart />
                    {isLiked(game.id) ? "Liked" : "Like"}
                  </button>
                  <button
                    onClick={() => toggleCart(game)}
                    style={{
                      backgroundColor: isInCart(game.id)
                        ? "#10b981"
                        : "#3b82f6",
                      color: "white",
                      padding: "1rem 2rem",
                      borderRadius: "0.5rem",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      fontSize: "1rem",
                      fontWeight: "bold",
                    }}
                  >
                    <FaShoppingCart />
                    {isInCart(game.id) ? "In Cart" : "Add to Cart"}
                  </button>
                  <button
                    style={{
                      backgroundColor: "rgba(16, 185, 129, 0.2)",
                      color: "#10b981",
                      padding: "1rem",
                      borderRadius: "0.5rem",
                      border: "2px solid #10b981",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      fontSize: "1rem",
                      fontWeight: "bold",
                    }}
                  >
                    <FaPlay />
                    Play
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation buttons */}
          {featuredGames.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                style={{
                  position: "absolute",
                  left: "1rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  backgroundColor: "rgba(0,0,0,0.5)",
                  color: "white",
                  border: "none",
                  borderRadius: "50%",
                  width: "3rem",
                  height: "3rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={nextSlide}
                style={{
                  position: "absolute",
                  right: "1rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  backgroundColor: "rgba(0,0,0,0.5)",
                  color: "white",
                  border: "none",
                  borderRadius: "50%",
                  width: "3rem",
                  height: "3rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaChevronRight />
              </button>

              {/* Slide indicators */}
              <div
                style={{
                  position: "absolute",
                  bottom: "1rem",
                  left: "50%",
                  transform: "translateX(-50%)",
                  display: "flex",
                  gap: "0.5rem",
                }}
              >
                {featuredGames.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    style={{
                      width: "0.75rem",
                      height: "0.75rem",
                      borderRadius: "50%",
                      border: "none",
                      backgroundColor:
                        index === currentSlide
                          ? "white"
                          : "rgba(255,255,255,0.5)",
                      cursor: "pointer",
                    }}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* Featured Games Section */}
      <div
        style={{
          padding: "1.5rem",
          backgroundColor: "#4b5563",
          borderRadius: "0.5rem",
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

        {!loading && otherGames.length > 0 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1rem",
              marginTop: "1rem",
            }}
          >
            {otherGames.slice(0, 6).map((game) => (
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
                    marginBottom: "1rem",
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
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <FaShoppingCart />
                    {isInCart(game.id) ? "In Cart" : "Add to Cart"}
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

export default SafeHome;
