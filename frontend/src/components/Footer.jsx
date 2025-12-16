import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaDiscord,
  FaTwitch,
  FaGamepad,
} from "react-icons/fa";

const Footer = () => {
  const aboutLinks = [
    "About Us",
    "Careers",
    "Press",
    "News",
    "Privacy Policy",
    "Terms of Service",
  ];

  const supportLinks = [
    "Help Center",
    "Contact Support",
    "Community",
    "Game Updates",
    "System Requirements",
    "Refund Policy",
  ];

  const gameLinks = [
    "Featured Games",
    "New Releases",
    "Top Rated",
    "Free to Play",
    "Early Access",
    "Coming Soon",
  ];

  const socialLinks = [
    { icon: FaFacebook, name: "Facebook", href: "#" },
    { icon: FaTwitter, name: "Twitter", href: "#" },
    { icon: FaInstagram, name: "Instagram", href: "#" },
    { icon: FaDiscord, name: "Discord", href: "#" },
    { icon: FaTwitch, name: "Twitch", href: "#" },
  ];

  return (
    <footer className="bg-game-darker border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <FaGamepad className="text-game-accent text-2xl" />
              <h3 className="text-white text-xl font-bold">PLAY</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Your ultimate gaming destination. Discover, play, and connect with
              millions of gamers worldwide.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="text-gray-400 hover:text-game-accent transition-colors p-2 hover:bg-gray-800 rounded-lg"
                    aria-label={social.name}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* About Section */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">About</h4>
            <ul className="space-y-3">
              {aboutLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Games Section */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Games</h4>
            <ul className="space-y-3">
              {gameLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © 2024 PLAY Gaming Store. All rights reserved.
              </p>
              <div className="flex space-x-4 text-sm">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Cookies
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-gray-400 text-sm mt-4 md:mt-0">
              <span>Powered by</span>
              <span className="text-game-accent font-semibold">
                React & Laravel
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
