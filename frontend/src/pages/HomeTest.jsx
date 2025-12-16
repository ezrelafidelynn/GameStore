import React from "react";

const HomeTest = () => {
  return (
    <div
      style={{
        padding: "2rem",
        color: "white",
        backgroundColor: "#374151",
        minHeight: "100vh",
      }}
    >
      <h1>🎮 GameStore - Test Home Page</h1>
      <p>If you can see this, React is working!</p>
      <div
        style={{
          backgroundColor: "#4b5563",
          padding: "1rem",
          borderRadius: "0.5rem",
          marginTop: "1rem",
        }}
      >
        <h2>Test Content</h2>
        <p>This is a simple test to verify the page loads correctly.</p>
      </div>
    </div>
  );
};

export default HomeTest;
