import { Link, useLocation } from "react-router-dom";
import { FaGamepad, FaHome, FaTh, FaBook, FaShoppingBag } from "react-icons/fa";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { icon: FaHome, label: "Home", path: "/" },
    { icon: FaTh, label: "Categories", path: "/categories" },
    { icon: FaBook, label: "My Library", path: "/library" },
    { icon: FaShoppingBag, label: "My Bag", path: "/bag" },
  ];

  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        height: "100vh",
        width: "16rem",
        backgroundColor: "#0f172a",
        borderRight: "1px solid #374151",
        zIndex: 40,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "1.5rem",
          borderBottom: "1px solid #374151",
        }}
      >
        <FaGamepad
          style={{
            color: "#3b82f6",
            fontSize: "1.5rem",
            marginRight: "0.5rem",
          }}
        />
        <h1 style={{ color: "white", fontSize: "1.25rem", fontWeight: "bold" }}>
          PLAY
        </h1>
      </div>

      {/* Navigation */}
      <nav style={{ flex: 1, padding: "1rem" }}>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {menuItems.map((item, index) => {
            const IconComponent = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <li key={index} style={{ marginBottom: "0.5rem" }}>
                <Link
                  to={item.path}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    padding: "0.75rem 1rem",
                    borderRadius: "0.5rem",
                    backgroundColor: isActive ? "#3b82f6" : "transparent",
                    color: isActive ? "white" : "#9ca3af",
                    textDecoration: "none",
                    fontSize: "1rem",
                    transition: "all 0.2s",
                  }}
                  onMouseOver={(e) => {
                    if (!isActive) {
                      e.target.style.backgroundColor = "#374151";
                      e.target.style.color = "white";
                    }
                  }}
                  onMouseOut={(e) => {
                    if (!isActive) {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.color = "#9ca3af";
                    }
                  }}
                >
                  <IconComponent style={{ marginRight: "0.75rem" }} size={20} />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
