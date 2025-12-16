import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TestHome from "./pages/TestHome";

function TestApp() {
  return (
    <Router>
      <div style={{ minHeight: "100vh", backgroundColor: "#1e293b" }}>
        <Routes>
          <Route path="/" element={<TestHome />} />
        </Routes>
      </div>
    </Router>
  );
}

export default TestApp;
