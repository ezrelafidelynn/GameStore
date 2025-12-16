import React, { createContext, useContext, useState, useEffect } from "react";

const GameContext = createContext();

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGameContext must be used within a GameProvider");
  }
  return context;
};

export const GameProvider = ({ children }) => {
  const [likedGames, setLikedGames] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false); // Set to false initially to prevent loading state

  // Fetch games from API
  const fetchGames = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/products");
      const data = await response.json();
      if (data.success) {
        setGames(data.data);
      }
    } catch (err) {
      console.error("Error fetching games:", err);
      // Fallback with mock data if API fails
      setGames([
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
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Load mock data immediately, then try to fetch from API
    setGames([
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
    ]);

    // Try to fetch from API in background
    setTimeout(() => {
      fetchGames();
    }, 1000);
  }, []);

  // Like/Unlike game
  const toggleLike = (game) => {
    setLikedGames((prev) => {
      const isLiked = prev.some((g) => g.id === game.id);
      if (isLiked) {
        return prev.filter((g) => g.id !== game.id);
      } else {
        return [...prev, { ...game, dateAdded: new Date() }];
      }
    });
  };

  // Add/Remove from cart
  const toggleCart = (game) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === game.id);
      if (existingItem) {
        return prev.filter((item) => item.id !== game.id);
      } else {
        return [...prev, { ...game, quantity: 1, dateAdded: new Date() }];
      }
    });
  };

  // Update cart item quantity
  const updateCartQuantity = (gameId, change) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === gameId) {
          const newQuantity = Math.max(1, item.quantity + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  // Remove item from cart
  const removeFromCart = (gameId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== gameId));
  };

  // Check if game is liked
  const isLiked = (gameId) => {
    return likedGames.some((game) => game.id === gameId);
  };

  // Check if game is in cart
  const isInCart = (gameId) => {
    return cartItems.some((item) => item.id === gameId);
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
    fetchGames,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
