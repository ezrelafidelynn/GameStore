import { useState } from "react";
import { FaTrash, FaMinus, FaPlus, FaCreditCard } from "react-icons/fa";
import { useGameContext } from "../context/SafeGameContext";

const MyBag = () => {
  const { cartItems, updateCartQuantity, removeFromCart } = useGameContext();

  const getSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.final_price * item.quantity,
      0
    );
  };

  const getTax = () => {
    return getSubtotal() * 0.08; // 8% tax
  };

  const getTotal = () => {
    return getSubtotal() + getTax();
  };

  const getTotalSavings = () => {
    return cartItems.reduce((savings, item) => {
      if (item.discount > 0) {
        const originalTotal = item.price * item.quantity;
        const discountedTotal = item.final_price * item.quantity;
        return savings + (originalTotal - discountedTotal);
      }
      return savings;
    }, 0);
  };

  return (
    <div
      style={{
        padding: "2rem",
        backgroundColor: "#374151",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          color: "white",
          fontSize: "2.5rem",
          fontWeight: "bold",
          marginBottom: "2rem",
        }}
      >
        🛒 My Bag
      </h1>

      {cartItems.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "4rem",
            backgroundColor: "#4b5563",
            borderRadius: "0.75rem",
          }}
        >
          <h2
            style={{ color: "white", fontSize: "1.5rem", marginBottom: "1rem" }}
          >
            Your bag is empty
          </h2>
          <p style={{ color: "#9ca3af", marginBottom: "2rem" }}>
            Browse our amazing games and add some to your cart!
          </p>
          <button
            style={{
              backgroundColor: "#3b82f6",
              color: "white",
              padding: "1rem 2rem",
              borderRadius: "0.5rem",
              border: "none",
              cursor: "pointer",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          >
            Browse Games
          </button>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "2rem",
          }}
        >
          {/* Cart Items */}
          <div>
            <h2
              style={{
                color: "white",
                fontSize: "1.5rem",
                marginBottom: "1rem",
              }}
            >
              Cart Items ({cartItems.length})
            </h2>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  style={{
                    backgroundColor: "#4b5563",
                    padding: "1.5rem",
                    borderRadius: "0.75rem",
                    border: "1px solid #6b7280",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    {/* Game Image Placeholder */}
                    <div
                      style={{
                        width: "80px",
                        height: "80px",
                        backgroundColor: "#374151",
                        borderRadius: "0.5rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#9ca3af",
                        fontSize: "0.8rem",
                      }}
                    >
                      IMG
                    </div>

                    {/* Game Info */}
                    <div style={{ flex: 1 }}>
                      <h3
                        style={{
                          color: "white",
                          fontSize: "1.2rem",
                          fontWeight: "bold",
                          marginBottom: "0.25rem",
                        }}
                      >
                        {item.name}
                      </h3>
                      <p
                        style={{
                          color: "#9ca3af",
                          fontSize: "0.9rem",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {item.category}
                      </p>

                      {/* Price Info */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                      >
                        {item.discount > 0 ? (
                          <>
                            <span
                              style={{
                                backgroundColor: "#ef4444",
                                color: "white",
                                padding: "0.2rem 0.5rem",
                                borderRadius: "0.25rem",
                                fontSize: "0.8rem",
                              }}
                            >
                              -{item.discount}%
                            </span>
                            <span
                              style={{
                                color: "#9ca3af",
                                textDecoration: "line-through",
                                fontSize: "0.9rem",
                              }}
                            >
                              ${item.price}
                            </span>
                            <span
                              style={{
                                color: "#10b981",
                                fontSize: "1.1rem",
                                fontWeight: "bold",
                              }}
                            >
                              ${item.final_price}
                            </span>
                          </>
                        ) : (
                          <span
                            style={{
                              color: "white",
                              fontSize: "1.1rem",
                              fontWeight: "bold",
                            }}
                          >
                            ${item.price}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                      >
                        <button
                          onClick={() => updateCartQuantity(item.id, -1)}
                          style={{
                            backgroundColor: "#6b7280",
                            color: "white",
                            border: "none",
                            borderRadius: "0.25rem",
                            width: "32px",
                            height: "32px",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <FaMinus size={12} />
                        </button>

                        <span
                          style={{
                            color: "white",
                            fontWeight: "bold",
                            minWidth: "2rem",
                            textAlign: "center",
                          }}
                        >
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => updateCartQuantity(item.id, 1)}
                          style={{
                            backgroundColor: "#3b82f6",
                            color: "white",
                            border: "none",
                            borderRadius: "0.25rem",
                            width: "32px",
                            height: "32px",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <FaPlus size={12} />
                        </button>
                      </div>

                      {/* Item Total */}
                      <div style={{ textAlign: "right", minWidth: "80px" }}>
                        <p
                          style={{
                            color: "white",
                            fontWeight: "bold",
                            fontSize: "1.1rem",
                          }}
                        >
                          ${(item.final_price * item.quantity).toFixed(2)}
                        </p>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        style={{
                          backgroundColor: "#ef4444",
                          color: "white",
                          border: "none",
                          borderRadius: "0.25rem",
                          padding: "0.5rem",
                          cursor: "pointer",
                        }}
                      >
                        <FaTrash size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div
              style={{
                backgroundColor: "#4b5563",
                padding: "1.5rem",
                borderRadius: "0.75rem",
                border: "1px solid #6b7280",
                position: "sticky",
                top: "2rem",
              }}
            >
              <h2
                style={{
                  color: "white",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  marginBottom: "1rem",
                }}
              >
                Order Summary
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  marginBottom: "1rem",
                }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span style={{ color: "#d1d5db" }}>Subtotal</span>
                  <span style={{ color: "white", fontWeight: "bold" }}>
                    ${getSubtotal().toFixed(2)}
                  </span>
                </div>

                {getTotalSavings() > 0 && (
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span style={{ color: "#10b981" }}>You Save</span>
                    <span style={{ color: "#10b981", fontWeight: "bold" }}>
                      -${getTotalSavings().toFixed(2)}
                    </span>
                  </div>
                )}

                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span style={{ color: "#d1d5db" }}>Tax (8%)</span>
                  <span style={{ color: "white" }}>${getTax().toFixed(2)}</span>
                </div>

                <div
                  style={{
                    height: "1px",
                    backgroundColor: "#6b7280",
                    margin: "0.5rem 0",
                  }}
                />

                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span
                    style={{
                      color: "white",
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                    }}
                  >
                    Total
                  </span>
                  <span
                    style={{
                      color: "white",
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                    }}
                  >
                    ${getTotal().toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                style={{
                  backgroundColor: "#10b981",
                  color: "white",
                  width: "100%",
                  padding: "1rem",
                  borderRadius: "0.5rem",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                }}
              >
                <FaCreditCard style={{ marginRight: "0.5rem" }} />
                Proceed to Checkout
              </button>

              <p
                style={{
                  color: "#9ca3af",
                  fontSize: "0.8rem",
                  textAlign: "center",
                }}
              >
                Secure checkout powered by Stripe
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyBag;
