import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menubar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between py-4 px-8 bg-gray-900">
      <div>
        <svg
          className={`h-6 w-6 text-white ${
            isMenuOpen ? "hidden" : "block md:hidden"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={handleMenuToggle}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className={`md:flex ${isMenuOpen ? "block" : "hidden"}`}>
        <Link to="/" className="text-white mx-2" onClick={handleMenuToggle}>
          Home
        </Link>
        <Link
          to="/about"
          className="text-white mx-2"
          onClick={handleMenuToggle}
        >
          About
        </Link>
        <Link
          to="/services"
          className="text-white mx-2"
          onClick={handleMenuToggle}
        >
          Services
        </Link>
        <Link
          to="/contact"
          className="text-white mx-2"
          onClick={handleMenuToggle}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Menubar;
