import React, { createContext, useContext, useState, useEffect } from "react";

const GameContext = createContext();

// Safe fallback data
const FALLBACK_GAMES = [
  {
    id: 1,
    name: "League of Legends",
    price: "59.99",
    discount: 50,
    final_price: "30.00",
    category: "MOBA",
    rating: 4.5,
    description: "A strategic team-based game",
  },
  {
    id: 2,
    name: "Call of Duty",
    price: "79.99",
    discount: 0,
    final_price: "79.99",
    category: "FPS",
    rating: 4.2,
    description: "First-person shooter game",
  },
  {
    id: 3,
    name: "The Witcher 3",
    price: "49.99",
    discount: 25,
    final_price: "37.49",
    category: "RPG",
    rating: 4.8,
    description: "Epic fantasy adventure",
  },
  {
    id: 4,
    name: "Cyberpunk 2077",
    price: "59.99",
    discount: 30,
    final_price: "41.99",
    category: "RPG",
    rating: 4.0,
    description: "Futuristic open-world RPG",
  },
  {
    id: 5,
    name: "Valorant",
    price: "0.00",
    discount: 0,
    final_price: "0.00",
    category: "FPS",
    rating: 4.3,
    description: "Tactical team-based shooter",
  },
];

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context) {
    console.warn("useGameContext used outside GameProvider, using fallback");
    return {
      games: FALLBACK_GAMES,
      loading: false,
      likedGames: [],
      cartItems: [],
      toggleLike: () => console.log("toggleLike (fallback)"),
      toggleCart: () => console.log("toggleCart (fallback)"),
      isLiked: () => false,
      isInCart: () => false,
      updateCartQuantity: () => console.log("updateCartQuantity (fallback)"),
      removeFromCart: () => console.log("removeFromCart (fallback)"),
    };
  }
  return context;
};

export const GameProvider = ({ children }) => {
  const [likedGames, setLikedGames] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [games, setGames] = useState(FALLBACK_GAMES); // Start with fallback data
  const [loading, setLoading] = useState(false);

  // Safely fetch games from API
  const fetchGames = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/products");
      if (response.ok) {
        const data = await response.json();
        if (data.success && Array.isArray(data.data)) {
          setGames(data.data);
          console.log("Games loaded from API");
        }
      }
    } catch (err) {
      console.log("API not available, using fallback data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Try to fetch from API after component mounts
    fetchGames();
  }, []);

  const toggleLike = (game) => {
    try {
      setLikedGames((prev) => {
        const isAlreadyLiked = prev.find((g) => g.id === game.id);
        if (isAlreadyLiked) {
          return prev.filter((g) => g.id !== game.id);
        } else {
          return [...prev, game];
        }
      });
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  };

  const toggleCart = (game) => {
    try {
      setCartItems((prev) => {
        const existingItem = prev.find((item) => item.id === game.id);
        if (existingItem) {
          return prev.filter((item) => item.id !== game.id);
        } else {
          return [...prev, { ...game, quantity: 1 }];
        }
      });
    } catch (error) {
      console.error("Error toggling cart:", error);
    }
  };

  const updateCartQuantity = (gameId, newQuantity) => {
    try {
      if (newQuantity <= 0) {
        removeFromCart(gameId);
        return;
      }

      setCartItems((prev) =>
        prev.map((item) =>
          item.id === gameId ? { ...item, quantity: newQuantity } : item
        )
      );
    } catch (error) {
      console.error("Error updating cart quantity:", error);
    }
  };

  const removeFromCart = (gameId) => {
    try {
      setCartItems((prev) => prev.filter((item) => item.id !== gameId));
    } catch (error) {
      console.error("Error removing from cart:", error);
    }
  };

  const isLiked = (gameId) => {
    try {
      return likedGames.some((game) => game.id === gameId);
    } catch (error) {
      console.error("Error checking if liked:", error);
      return false;
    }
  };

  const isInCart = (gameId) => {
    try {
      return cartItems.some((item) => item.id === gameId);
    } catch (error) {
      console.error("Error checking if in cart:", error);
      return false;
    }
  };

  const value = {
    games,
    loading,
    likedGames,
    cartItems,
    toggleLike,
    toggleCart,
    updateCartQuantity,
    removeFromCart,
    isLiked,
    isInCart,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
