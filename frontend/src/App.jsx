import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GameProvider } from "./context/SafeGameContext";
import Sidebar from "./components/Sidebar";
import SafeHome from "./pages/SafeHome";
import Categories from "./pages/Categories";
import MyLibrary from "./pages/MyLibrary";
import MyBag from "./pages/MyBag";

function App() {
  // Add error boundary
  try {
    return (
      <GameProvider>
        <Router>
          <div style={{ minHeight: "100vh", backgroundColor: "#1e293b" }}>
            <div style={{ display: "flex" }}>
              <Sidebar />
              <div style={{ flex: 1, marginLeft: "16rem", minHeight: "100vh" }}>
                <Routes>
                  <Route path="/" element={<SafeHome />} />
                  <Route path="/categories" element={<Categories />} />
                  <Route path="/library" element={<MyLibrary />} />
                  <Route path="/bag" element={<MyBag />} />
                </Routes>
              </div>
            </div>
          </div>
        </Router>
      </GameProvider>
    );
  } catch (error) {
    console.error("App Error:", error);
    return (
      <div
        style={{
          padding: "2rem",
          color: "white",
          backgroundColor: "#1e293b",
          minHeight: "100vh",
        }}
      >
        <h1>🎮 GameStore</h1>
        <p>Loading error occurred. Check console for details.</p>
        <p>Error: {error.message}</p>
      </div>
    );
  }
}

export default App;
