// DefaultHeader.js
import React from "react";
import { Link } from "react-router-dom"; 

export default function DefaultHeader() {
  return (
    <nav className="bg-black flex justify-between items-center p-4">
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
