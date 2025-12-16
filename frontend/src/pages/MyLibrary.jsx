import { useState, useEffect } from "react";
import { FaPlay, FaDownload, FaClock, FaTrophy, FaHeart } from "react-icons/fa";
import { useGameContext } from "../context/SafeGameContext";

const MyLibrary = () => {
  const { likedGames, toggleLike } = useGameContext();
  const [loading, setLoading] = useState(false);

  // Convert liked games to library format with mock data
  const ownedGames = likedGames.map((game) => ({
    ...game,
    playtime: Math.floor(Math.random() * 200) + " hours",
    lastPlayed: ["2 hours ago", "1 day ago", "3 days ago", "1 week ago"][
      Math.floor(Math.random() * 4)
    ],
    status: Math.random() > 0.3 ? "installed" : "not_installed",
    achievements: Math.floor(Math.random() * 40),
    totalAchievements: Math.floor(Math.random() * 20) + 40,
  }));

  const getStatusColor = (status) => {
    switch (status) {
      case "installed":
        return "#10b981";
      case "not_installed":
        return "#f59e0b";
      case "updating":
        return "#3b82f6";
      default:
        return "#6b7280";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "installed":
        return "Installed";
      case "not_installed":
        return "Not Installed";
      case "updating":
        return "Updating...";
      default:
        return "Unknown";
    }
  };

  return (
    <div
      style={{
        padding: "2rem",
        backgroundColor: "#374151",
        minHeight: "100vh",
      }}
    >
      <div style={{ marginBottom: "2rem" }}>
        <h1
          style={{
            color: "white",
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "0.5rem",
          }}
        >
          📚 My Library
        </h1>
        <p style={{ color: "#d1d5db", fontSize: "1.2rem" }}>
          {ownedGames.length} games in your collection
        </p>
      </div>

      {loading ? (
        <div style={{ textAlign: "center", padding: "3rem" }}>
          <p style={{ color: "#9ca3af", fontSize: "1.2rem" }}>
            Loading your library...
          </p>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {ownedGames.map((game) => (
            <div
              key={game.id}
              style={{
                backgroundColor: "#4b5563",
                padding: "1.5rem",
                borderRadius: "0.75rem",
                border: "1px solid #6b7280",
                position: "relative",
              }}
            >
              {/* Status Badge */}
              <div
                style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  backgroundColor: getStatusColor(game.status),
                  color: "white",
                  padding: "0.25rem 0.75rem",
                  borderRadius: "9999px",
                  fontSize: "0.8rem",
                  fontWeight: "bold",
                }}
              >
                {getStatusText(game.status)}
              </div>

              {/* Game Info */}
              <h3
                style={{
                  color: "white",
                  fontSize: "1.3rem",
                  marginBottom: "0.5rem",
                  fontWeight: "bold",
                  marginRight: "6rem",
                }}
              >
                {game.name}
              </h3>

              <p
                style={{
                  color: "#9ca3af",
                  fontSize: "0.9rem",
                  marginBottom: "1rem",
                }}
              >
                {game.category}
              </p>

              {/* Stats */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                  marginBottom: "1.5rem",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <FaClock
                      style={{ color: "#9ca3af", marginRight: "0.5rem" }}
                    />
                    <span style={{ color: "#d1d5db", fontSize: "0.9rem" }}>
                      Playtime
                    </span>
                  </div>
                  <p style={{ color: "white", fontWeight: "bold" }}>
                    {game.playtime}
                  </p>
                  <p style={{ color: "#9ca3af", fontSize: "0.8rem" }}>
                    Last: {game.lastPlayed}
                  </p>
                </div>

                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <FaTrophy
                      style={{ color: "#f59e0b", marginRight: "0.5rem" }}
                    />
                    <span style={{ color: "#d1d5db", fontSize: "0.9rem" }}>
                      Achievements
                    </span>
                  </div>
                  <p style={{ color: "white", fontWeight: "bold" }}>
                    {game.achievements}/{game.totalAchievements}
                  </p>
                  <div
                    style={{
                      backgroundColor: "#374151",
                      height: "4px",
                      borderRadius: "2px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#f59e0b",
                        height: "100%",
                        width: `${
                          (game.achievements / game.totalAchievements) * 100
                        }%`,
                        transition: "width 0.3s",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", gap: "0.75rem" }}>
                {game.status === "installed" ? (
                  <button
                    style={{
                      backgroundColor: "#10b981",
                      color: "white",
                      padding: "0.75rem 1.5rem",
                      borderRadius: "0.5rem",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "0.9rem",
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      flex: 1,
                    }}
                  >
                    <FaPlay style={{ marginRight: "0.5rem" }} />
                    Play Now
                  </button>
                ) : (
                  <button
                    style={{
                      backgroundColor: "#3b82f6",
                      color: "white",
                      padding: "0.75rem 1.5rem",
                      borderRadius: "0.5rem",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "0.9rem",
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      flex: 1,
                    }}
                  >
                    <FaDownload style={{ marginRight: "0.5rem" }} />
                    Install
                  </button>
                )}

                <button
                  style={{
                    backgroundColor: "#6b7280",
                    color: "white",
                    padding: "0.75rem",
                    borderRadius: "0.5rem",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "0.9rem",
                  }}
                >
                  ⋯
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Quick Stats */}
      <div
        style={{
          marginTop: "3rem",
          padding: "1.5rem",
          backgroundColor: "#4b5563",
          borderRadius: "0.75rem",
        }}
      >
        <h3
          style={{ color: "white", fontSize: "1.2rem", marginBottom: "1rem" }}
        >
          Library Stats
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "1rem",
          }}
        >
          <div>
            <p style={{ color: "#9ca3af", fontSize: "0.9rem" }}>Total Games</p>
            <p
              style={{ color: "white", fontSize: "1.5rem", fontWeight: "bold" }}
            >
              {ownedGames.length}
            </p>
          </div>
          <div>
            <p style={{ color: "#9ca3af", fontSize: "0.9rem" }}>Installed</p>
            <p
              style={{ color: "white", fontSize: "1.5rem", fontWeight: "bold" }}
            >
              {ownedGames.filter((g) => g.status === "installed").length}
            </p>
          </div>
          <div>
            <p style={{ color: "#9ca3af", fontSize: "0.9rem" }}>
              Total Playtime
            </p>
            <p
              style={{ color: "white", fontSize: "1.5rem", fontWeight: "bold" }}
            >
              261h
            </p>
          </div>
          <div>
            <p style={{ color: "#9ca3af", fontSize: "0.9rem" }}>Achievements</p>
            <p
              style={{ color: "white", fontSize: "1.5rem", fontWeight: "bold" }}
            >
              69/182
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyLibrary;
