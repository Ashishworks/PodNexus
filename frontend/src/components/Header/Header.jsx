import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-20 flex justify-between items-center p-4 
        transition-colors duration-300 
        ${scrolled ? "bg-black" : "bg-transparent"}`}
    >
      <div className="text-2xl font-bold text-white">PodNexus</div>
      <div className="space-x-6">
        <Link to="/" className="text-white hover:text-gray-300">Home</Link>
        <Link to="/explore" className="text-white hover:text-gray-300">Explore</Link>
        <Link to="/about" className="text-white hover:text-gray-300">About</Link>
        <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
      </div>
    </nav>
  );
}
