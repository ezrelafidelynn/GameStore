import { useState } from "react";
import { FaEnvelope, FaPaperPlane } from "react-icons/fa";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setError("Email is required");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Simulate successful subscription
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <div className="bg-game-dark py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-gradient-to-r from-game-darker to-gray-800 rounded-2xl p-8 text-center shadow-xl">
          <div className="mb-6">
            <FaEnvelope className="text-4xl text-game-accent mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-2">Stay Updated</h2>
            <p className="text-gray-300 text-lg">
              Subscribe to get the latest game releases, exclusive deals, and
              gaming news directly to your inbox.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-green-500 bg-opacity-20 border border-green-500 rounded-lg p-4 mb-6">
              <p className="text-green-400 font-medium">
                🎉 Thank you for subscribing! Check your email for confirmation.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError("");
                      }}
                      className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-game-accent focus:border-transparent"
                      required
                    />
                  </div>
                  {error && (
                    <p className="text-red-400 text-sm mt-2 text-left">
                      {error}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="bg-game-accent hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 group"
                >
                  <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
                  <span>Subscribe</span>
                </button>
              </div>
            </form>
          )}

          <p className="text-gray-400 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubscribeForm;
