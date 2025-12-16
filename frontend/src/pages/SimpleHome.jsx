import React from "react";

const SimpleHome = () => {
  return (
    <div
      style={{
        padding: "2rem",
        color: "white",
        backgroundColor: "#374151",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎮 GameStore</h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
        Welcome to your gaming destination!
      </p>

      <div
        style={{
          backgroundColor: "#4b5563",
          padding: "2rem",
          borderRadius: "1rem",
          marginBottom: "2rem",
        }}
      >
        <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
          Featured Games
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1rem",
          }}
        >
          {[
            { name: "League of Legends", price: "$30", category: "MOBA" },
            { name: "Call of Duty", price: "$80", category: "FPS" },
            { name: "The Witcher 3", price: "$37", category: "RPG" },
          ].map((game, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#374151",
                padding: "1rem",
                borderRadius: "0.5rem",
                border: "1px solid #6b7280",
              }}
            >
              <h3 style={{ color: "white", marginBottom: "0.5rem" }}>
                {game.name}
              </h3>
              <p
                style={{
                  color: "#9ca3af",
                  fontSize: "0.9rem",
                  marginBottom: "0.5rem",
                }}
              >
                {game.category}
              </p>
              <p
                style={{
                  color: "#10b981",
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                }}
              >
                {game.price}
              </p>
              <div
                style={{ display: "flex", gap: "0.5rem", marginTop: "1rem" }}
              >
                <button
                  style={{
                    backgroundColor: "#ef4444",
                    color: "white",
                    padding: "0.5rem 1rem",
                    border: "none",
                    borderRadius: "0.25rem",
                    cursor: "pointer",
                  }}
                >
                  ❤️ Like
                </button>
                <button
                  style={{
                    backgroundColor: "#3b82f6",
                    color: "white",
                    padding: "0.5rem 1rem",
                    border: "none",
                    borderRadius: "0.25rem",
                    cursor: "pointer",
                  }}
                >
                  🛒 Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimpleHome;
