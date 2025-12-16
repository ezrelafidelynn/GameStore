function SimpleApp() {
  return (
    <div
      style={{
        padding: "2rem",
        color: "white",
        backgroundColor: "#1e293b",
        minHeight: "100vh",
        fontSize: "1.2rem",
      }}
    >
      <h1 style={{ color: "#10b981", fontSize: "3rem" }}>🎮 GameStore</h1>
      <p>Simple test - if you see this, React is working!</p>
      <div
        style={{
          backgroundColor: "#374151",
          padding: "2rem",
          borderRadius: "1rem",
          marginTop: "2rem",
        }}
      >
        <h2>Debug Info:</h2>
        <ul>
          <li>✅ React is rendering</li>
          <li>✅ Styles are working</li>
          <li>✅ Frontend server is running</li>
        </ul>
      </div>
      <div style={{ marginTop: "2rem" }}>
        <a
          href="/"
          style={{
            color: "#3b82f6",
            textDecoration: "underline",
            fontSize: "1.1rem",
          }}
        >
          Try going back to home page
        </a>
      </div>
    </div>
  );
}

export default SimpleApp;
