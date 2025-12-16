import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

// GameStore with Navigation
function SimpleGameStore() {
  const [likedGames, setLikedGames] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentPage, setCurrentPage] = useState('home');
  const [categoryFilter, setCategoryFilter] = useState('All');
  
  const games = [
    { id: 1, name: 'League of Legends', price: '59.99', final_price: '30.00', discount: 50, category: 'MOBA', rating: 4.5 },
    { id: 2, name: 'Call of Duty', price: '79.99', final_price: '79.99', discount: 0, category: 'FPS', rating: 4.2 },
    { id: 3, name: 'The Witcher 3', price: '49.99', final_price: '37.49', discount: 25, category: 'RPG', rating: 4.8 },
    { id: 4, name: 'Cyberpunk 2077', price: '59.99', final_price: '41.99', discount: 30, category: 'RPG', rating: 4.0 },
    { id: 5, name: 'Valorant', price: '0.00', final_price: '0.00', discount: 0, category: 'FPS', rating: 4.3 }
  ];
  
  // Auto slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  
  const toggleLike = (gameId) => {
    setLikedGames(prev => 
      prev.includes(gameId) 
        ? prev.filter(id => id !== gameId)
        : [...prev, gameId]
    );
  };
  
  const toggleCart = (gameId) => {
    setCartItems(prev => 
      prev.includes(gameId) 
        ? prev.filter(id => id !== gameId)
        : [...prev, gameId]
    );
  };
  
  const navigateTo = (page) => {
    setCurrentPage(page);
  };
  
  const getCategoryIcon = (category) => {
    const icons = {
      'MOBA': '⚔️',
      'FPS': '🔫',
      'RPG': '🐉',
      'Strategy': '🏰',
      'Racing': '🏎️',
      'Sports': '⚽',
      'Puzzle': '🧩',
      'Adventure': '🗺️'
    };
    return icons[category] || '🎮';
  };
  
  const renderPage = () => {
    if (currentPage === 'library') {
      const likedGamesList = games.filter(game => likedGames.includes(game.id));
      return (
        <div>
          <h1 style={{ color: "white", fontSize: "2.5rem", marginBottom: "1rem" }}>
            📖 My Library
          </h1>
          <p style={{ color: "#d1d5db", fontSize: "1.2rem", marginBottom: "2rem" }}>
            Your liked games ({likedGamesList.length} games)
          </p>
          
          {likedGamesList.length === 0 ? (
            <div style={{ 
              backgroundColor: "#4b5563", 
              padding: "3rem", 
              borderRadius: "1rem", 
              textAlign: "center",
              color: "#94a3b8"
            }}>
              <h3 style={{ marginBottom: "1rem" }}>No games in your library yet!</h3>
              <p>Like some games to see them here.</p>
              <button 
                onClick={() => navigateTo('home')}
                style={{
                  backgroundColor: "#3b82f6",
                  color: "white",
                  border: "none",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "0.5rem",
                  cursor: "pointer",
                  marginTop: "1rem"
                }}
              >
                Browse Games
              </button>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1rem" }}>
              {likedGamesList.map(game => (
                <div key={game.id} style={{ backgroundColor: "#4b5563", padding: "1.5rem", borderRadius: "0.5rem" }}>
                  <h3 style={{ color: "white", fontSize: "1.2rem", marginBottom: "0.5rem" }}>{game.name}</h3>
                  <p style={{ color: "#94a3b8", marginBottom: "1rem" }}>{game.category} • Rating: {game.rating}/5</p>
                  <p style={{ color: "#10b981", marginBottom: "1rem" }}>Playtime: {Math.floor(Math.random() * 50) + 10} hours</p>
                  <button 
                    onClick={() => toggleLike(game.id)}
                    style={{
                      backgroundColor: "#ef4444",
                      color: "white",
                      border: "none",
                      padding: "0.5rem 1rem",
                      borderRadius: "0.25rem",
                      cursor: "pointer"
                    }}
                  >
                    ❤️ Remove from Library
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }
    
    if (currentPage === 'bag') {
      const cartGamesList = games.filter(game => cartItems.includes(game.id));
      const total = cartGamesList.reduce((sum, game) => sum + parseFloat(game.final_price), 0);
      
      return (
        <div>
          <h1 style={{ color: "white", fontSize: "2.5rem", marginBottom: "1rem" }}>
            🛒 My Bag
          </h1>
          <p style={{ color: "#d1d5db", fontSize: "1.2rem", marginBottom: "2rem" }}>
            Your shopping cart ({cartGamesList.length} items)
          </p>
          
          {cartGamesList.length === 0 ? (
            <div style={{ 
              backgroundColor: "#4b5563", 
              padding: "3rem", 
              borderRadius: "1rem", 
              textAlign: "center",
              color: "#94a3b8"
            }}>
              <h3 style={{ marginBottom: "1rem" }}>Your cart is empty!</h3>
              <p>Add some games to get started.</p>
              <button 
                onClick={() => navigateTo('home')}
                style={{
                  backgroundColor: "#3b82f6",
                  color: "white",
                  border: "none",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "0.5rem",
                  cursor: "pointer",
                  marginTop: "1rem"
                }}
              >
                Shop Games
              </button>
            </div>
          ) : (
            <div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
                {cartGamesList.map(game => (
                  <div key={game.id} style={{ backgroundColor: "#4b5563", padding: "1.5rem", borderRadius: "0.5rem" }}>
                    <h3 style={{ color: "white", fontSize: "1.2rem", marginBottom: "0.5rem" }}>{game.name}</h3>
                    <p style={{ color: "#94a3b8", marginBottom: "1rem" }}>{game.category}</p>
                    <p style={{ color: "#10b981", fontSize: "1.3rem", fontWeight: "bold", marginBottom: "1rem" }}>
                      ${game.final_price}
                    </p>
                    <button 
                      onClick={() => toggleCart(game.id)}
                      style={{
                        backgroundColor: "#ef4444",
                        color: "white",
                        border: "none",
                        padding: "0.5rem 1rem",
                        borderRadius: "0.25rem",
                        cursor: "pointer"
                      }}
                    >
                      Remove from Cart
                    </button>
                  </div>
                ))}
              </div>
              
              <div style={{
                backgroundColor: "#4b5563",
                padding: "2rem",
                borderRadius: "1rem",
                textAlign: "center"
              }}>
                <h3 style={{ color: "white", fontSize: "1.5rem", marginBottom: "1rem" }}>
                  Total: ${total.toFixed(2)}
                </h3>
                <button style={{
                  backgroundColor: "#10b981",
                  color: "white",
                  border: "none",
                  padding: "1rem 2rem",
                  borderRadius: "0.5rem",
                  cursor: "pointer",
                  fontSize: "1.1rem",
                  fontWeight: "bold"
                }}>
                  Proceed to Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      );
    }
    
    if (currentPage === 'categories') {
      const categories = ['All', ...new Set(games.map(game => game.category))];
      const filteredGames = categoryFilter === 'All' ? games : games.filter(game => game.category === categoryFilter);
      
      return (
        <div>
          <h1 style={{ color: "white", fontSize: "2.5rem", marginBottom: "1rem" }}>
            📚 Categories
          </h1>
          <p style={{ color: "#d1d5db", fontSize: "1.2rem", marginBottom: "2rem" }}>
            Browse games by category ({filteredGames.length} games)
          </p>
          
          {/* Filter Navbar */}
          <div style={{
            backgroundColor: "#4b5563",
            padding: "1rem",
            borderRadius: "0.5rem",
            marginBottom: "2rem",
            display: "flex",
            gap: "0.5rem",
            flexWrap: "wrap",
            alignItems: "center"
          }}>
            <span style={{ color: "white", fontWeight: "bold", marginRight: "1rem" }}>
              Filter by:
            </span>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setCategoryFilter(category)}
                style={{
                  backgroundColor: categoryFilter === category ? "#3b82f6" : "transparent",
                  color: categoryFilter === category ? "white" : "#d1d5db",
                  border: categoryFilter === category ? "2px solid #3b82f6" : "1px solid #6b7280",
                  padding: "0.5rem 1rem",
                  borderRadius: "0.5rem",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  fontSize: "0.9rem",
                  fontWeight: categoryFilter === category ? "bold" : "normal"
                }}
                onMouseEnter={(e) => {
                  if (categoryFilter !== category) {
                    e.target.style.backgroundColor = "#374151";
                    e.target.style.borderColor = "#9ca3af";
                  }
                }}
                onMouseLeave={(e) => {
                  if (categoryFilter !== category) {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.borderColor = "#6b7280";
                  }
                }}
              >
                {category === 'All' ? '🎮 All Games' : `${getCategoryIcon(category)} ${category}`}
              </button>
            ))}
          </div>
          
          {filteredGames.length === 0 ? (
            <div style={{
              backgroundColor: "#4b5563",
              padding: "3rem",
              borderRadius: "1rem",
              textAlign: "center",
              color: "#94a3b8"
            }}>
              <h3 style={{ marginBottom: "1rem" }}>No games found in this category!</h3>
              <p>Try selecting a different category.</p>
              <button
                onClick={() => setCategoryFilter('All')}
                style={{
                  backgroundColor: "#3b82f6",
                  color: "white",
                  border: "none",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "0.5rem",
                  cursor: "pointer",
                  marginTop: "1rem"
                }}
              >
                Show All Games
              </button>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1rem" }}>
              {filteredGames.map((game) => (
              <div key={game.id} style={{ backgroundColor: "#4b5563", padding: "1.5rem", borderRadius: "0.5rem" }}>
                <h3 style={{ color: "white", fontSize: "1.2rem", marginBottom: "0.5rem" }}>{game.name}</h3>
                <p style={{ color: "#94a3b8", marginBottom: "1rem" }}>{game.category} • Rating: {game.rating}/5</p>
                <p style={{ color: "#10b981", fontSize: "1.3rem", fontWeight: "bold", marginBottom: "1rem" }}>
                  {game.discount > 0 ? (
                    <>
                      <span style={{ color: '#ef4444', fontSize: '0.9rem', marginRight: '0.5rem' }}>-{game.discount}%</span>
                      <span style={{ color: '#9ca3af', textDecoration: 'line-through', fontSize: '1rem' }}>${game.price}</span>
                      {' '}${game.final_price}
                    </>
                  ) : `$${game.price}`}
                </p>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <button 
                    onClick={() => toggleLike(game.id)}
                    style={{
                      backgroundColor: likedGames.includes(game.id) ? "#ef4444" : "rgba(239, 68, 68, 0.3)",
                      color: "white",
                      border: "1px solid #ef4444",
                      padding: "0.75rem",
                      borderRadius: "0.25rem",
                      cursor: "pointer"
                    }}
                  >
                    ❤️
                  </button>
                  <button 
                    onClick={() => toggleCart(game.id)}
                    style={{
                      backgroundColor: cartItems.includes(game.id) ? "#10b981" : "#3b82f6",
                      color: "white",
                      border: "none",
                      padding: "0.75rem 1rem",
                      borderRadius: "0.25rem",
                      cursor: "pointer",
                      flex: 1
                    }}
                  >
                    🛒 {cartItems.includes(game.id) ? 'In Cart' : 'Add to Cart'}
                  </button>
                </div>
              </div>
              ))}
            </div>
          )}
        </div>
      );
    }
    
    // Home page (default)
    return (
      <div>
        <h1 style={{ color: "white", fontSize: "2.5rem", marginBottom: "1rem" }}>
          🎮 Gaming Marketplace
        </h1>
        <p style={{ color: "#d1d5db", fontSize: "1.2rem", marginBottom: "1rem" }}>
          Welcome to your gaming destination!
        </p>
        
        <div style={{
          backgroundColor: "#4b5563",
          padding: "1rem",
          borderRadius: "0.5rem",
          marginBottom: "2rem",
          color: "white"
        }}>
          <strong>Status:</strong> {likedGames.length} games liked • {cartItems.length} items in cart
        </div>

        {/* Slideshow */}
        <div style={{
          position: 'relative',
          height: '300px',
          borderRadius: '1rem',
          overflow: 'hidden',
          marginBottom: '2rem',
          backgroundColor: '#4b5563'
        }}>
          {games.slice(0, 3).map((game, index) => (
            <div
              key={game.id}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`,
                display: 'flex',
                alignItems: 'center',
                padding: '2rem',
                opacity: index === currentSlide ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out'
              }}
            >
              <div>
                <h2 style={{ color: 'white', fontSize: '2rem', marginBottom: '1rem' }}>{game.name}</h2>
                <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>{game.category} • Rating: {game.rating}/5</p>
                <p style={{
                  color: game.discount > 0 ? '#10b981' : 'white',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginBottom: '1rem'
                }}>
                  {game.discount > 0 ? `$${game.final_price} (was $${game.price})` : `$${game.price}`}
                </p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button
                    onClick={() => toggleLike(game.id)}
                    style={{
                      backgroundColor: likedGames.includes(game.id) ? '#ef4444' : 'rgba(239, 68, 68, 0.3)',
                      color: 'white',
                      border: '2px solid #ef4444',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.5rem',
                      cursor: 'pointer'
                    }}
                  >
                    ❤️ {likedGames.includes(game.id) ? 'Liked' : 'Like'}
                  </button>
                  <button
                    onClick={() => toggleCart(game.id)}
                    style={{
                      backgroundColor: cartItems.includes(game.id) ? '#10b981' : '#3b82f6',
                      color: 'white',
                      border: 'none',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '0.5rem',
                      cursor: 'pointer'
                    }}
                  >
                    🛒 {cartItems.includes(game.id) ? 'In Cart' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Game Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1rem" }}>
          {games.map((game) => (
            <div key={game.id} style={{ backgroundColor: "#4b5563", padding: "1.5rem", borderRadius: "0.5rem" }}>
              <h3 style={{ color: "white", fontSize: "1.2rem", marginBottom: "0.5rem" }}>{game.name}</h3>
              <p style={{ color: "#94a3b8", marginBottom: "1rem" }}>{game.category} • Rating: {game.rating}/5</p>
              <p style={{ color: "#10b981", fontSize: "1.3rem", fontWeight: "bold", marginBottom: "1rem" }}>
                {game.discount > 0 ? (
                  <>
                    <span style={{ color: '#ef4444', fontSize: '0.9rem', marginRight: '0.5rem' }}>-{game.discount}%</span>
                    <span style={{ color: '#9ca3af', textDecoration: 'line-through', fontSize: '1rem' }}>${game.price}</span>
                    {' '}${game.final_price}
                  </>
                ) : `$${game.price}`}
              </p>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <button 
                  onClick={() => toggleLike(game.id)}
                  style={{
                    backgroundColor: likedGames.includes(game.id) ? "#ef4444" : "rgba(239, 68, 68, 0.3)",
                    color: "white",
                    border: "1px solid #ef4444",
                    padding: "0.75rem",
                    borderRadius: "0.25rem",
                    cursor: "pointer"
                  }}
                >
                  ❤️
                </button>
                <button 
                  onClick={() => toggleCart(game.id)}
                  style={{
                    backgroundColor: cartItems.includes(game.id) ? "#10b981" : "#3b82f6",
                    color: "white",
                    border: "none",
                    padding: "0.75rem 1rem",
                    borderRadius: "0.25rem",
                    cursor: "pointer",
                    flex: 1
                  }}
                >
                  🛒 {cartItems.includes(game.id) ? 'In Cart' : 'Add to Cart'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#1e293b" }}>
      <div style={{ display: "flex" }}>
        {/* Interactive Sidebar */}
        <div style={{
          width: "16rem",
          backgroundColor: "#0f172a",
          minHeight: "100vh",
          padding: "2rem 1rem"
        }}>
          <div style={{
            color: "white",
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "2rem",
            textAlign: "center"
          }}>
            🎮 GameStore
          </div>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <button
              onClick={() => navigateTo('home')}
              style={{ 
                padding: "0.75rem", 
                backgroundColor: currentPage === 'home' ? "#3b82f6" : "transparent",
                color: currentPage === 'home' ? "white" : "#94a3b8",
                border: "none",
                borderRadius: "0.5rem",
                cursor: "pointer",
                textAlign: "left",
                transition: "all 0.2s",
                fontSize: "1rem"
              }}
              onMouseEnter={(e) => {
                if (currentPage !== 'home') {
                  e.target.style.backgroundColor = "#1e293b";
                }
              }}
              onMouseLeave={(e) => {
                if (currentPage !== 'home') {
                  e.target.style.backgroundColor = "transparent";
                }
              }}
            >
              🏠 Home
            </button>
            
            <button
              onClick={() => navigateTo('categories')}
              style={{ 
                padding: "0.75rem", 
                backgroundColor: currentPage === 'categories' ? "#3b82f6" : "transparent",
                color: currentPage === 'categories' ? "white" : "#94a3b8",
                border: "none",
                borderRadius: "0.5rem",
                cursor: "pointer",
                textAlign: "left",
                transition: "all 0.2s",
                fontSize: "1rem"
              }}
              onMouseEnter={(e) => {
                if (currentPage !== 'categories') {
                  e.target.style.backgroundColor = "#1e293b";
                }
              }}
              onMouseLeave={(e) => {
                if (currentPage !== 'categories') {
                  e.target.style.backgroundColor = "transparent";
                }
              }}
            >
              📚 Categories
            </button>
            
            <button
              onClick={() => navigateTo('library')}
              style={{ 
                padding: "0.75rem", 
                backgroundColor: currentPage === 'library' ? "#3b82f6" : "transparent",
                color: currentPage === 'library' ? "white" : "#94a3b8",
                border: "none",
                borderRadius: "0.5rem",
                cursor: "pointer",
                textAlign: "left",
                transition: "all 0.2s",
                fontSize: "1rem"
              }}
              onMouseEnter={(e) => {
                if (currentPage !== 'library') {
                  e.target.style.backgroundColor = "#1e293b";
                }
              }}
              onMouseLeave={(e) => {
                if (currentPage !== 'library') {
                  e.target.style.backgroundColor = "transparent";
                }
              }}
            >
              📖 My Library ({likedGames.length})
            </button>
            
            <button
              onClick={() => navigateTo('bag')}
              style={{ 
                padding: "0.75rem", 
                backgroundColor: currentPage === 'bag' ? "#3b82f6" : "transparent",
                color: currentPage === 'bag' ? "white" : "#94a3b8",
                border: "none",
                borderRadius: "0.5rem",
                cursor: "pointer",
                textAlign: "left",
                transition: "all 0.2s",
                fontSize: "1rem"
              }}
              onMouseEnter={(e) => {
                if (currentPage !== 'bag') {
                  e.target.style.backgroundColor = "#1e293b";
                }
              }}
              onMouseLeave={(e) => {
                if (currentPage !== 'bag') {
                  e.target.style.backgroundColor = "transparent";
                }
              }}
            >
              🛒 My Bag ({cartItems.length})
            </button>
          </div>
        </div>
        
        {/* Main Content with Top Navbar */}
        <div style={{ 
          flex: 1,
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#374151",
          minHeight: "100vh"
        }}>
          {/* Top Navbar */}
          <nav style={{
            backgroundColor: "#0f172a",
            padding: "1rem 2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #4b5563"
          }}>
            <div>
              <h3 style={{ color: "white", margin: 0, fontSize: "1.5rem" }}>
                {currentPage === 'home' && '🏠 Home'}
                {currentPage === 'categories' && '📚 Categories'}
                {currentPage === 'library' && '📖 My Library'}
                {currentPage === 'bag' && '🛒 My Bag'}
              </h3>
            </div>
            
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <button 
                onClick={() => navigateTo('library')}
                style={{
                  backgroundColor: currentPage === 'library' ? "#ef4444" : "rgba(239, 68, 68, 0.2)",
                  color: "white",
                  border: currentPage === 'library' ? "2px solid #ef4444" : "1px solid #ef4444",
                  padding: "0.5rem 1rem",
                  borderRadius: "0.5rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontWeight: currentPage === 'library' ? "bold" : "normal",
                  transition: "all 0.2s"
                }}
                onMouseEnter={(e) => {
                  if (currentPage !== 'library') {
                    e.target.style.backgroundColor = "rgba(239, 68, 68, 0.4)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentPage !== 'library') {
                    e.target.style.backgroundColor = "rgba(239, 68, 68, 0.2)";
                  }
                }}
              >
                ❤️ Library ({likedGames.length})
              </button>
              
              <button 
                onClick={() => navigateTo('bag')}
                style={{
                  backgroundColor: currentPage === 'bag' ? "#10b981" : "rgba(16, 185, 129, 0.2)",
                  color: "white",
                  border: currentPage === 'bag' ? "2px solid #10b981" : "1px solid #10b981",
                  padding: "0.5rem 1rem",
                  borderRadius: "0.5rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontWeight: currentPage === 'bag' ? "bold" : "normal",
                  transition: "all 0.2s"
                }}
                onMouseEnter={(e) => {
                  if (currentPage !== 'bag') {
                    e.target.style.backgroundColor = "rgba(16, 185, 129, 0.4)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentPage !== 'bag') {
                    e.target.style.backgroundColor = "rgba(16, 185, 129, 0.2)";
                  }
                }}
              >
                🛒 Cart ({cartItems.length})
              </button>
            </div>
          </nav>
          
          {/* Page Content */}
          <div style={{ 
            flex: 1, 
            padding: "2rem"
          }}>
            {renderPage()}
          </div>
        </div>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SimpleGameStore />
  </StrictMode>
);
