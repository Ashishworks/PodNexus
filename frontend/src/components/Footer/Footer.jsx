import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-gray-300 p-4 text-center">
      <p>© 2025 PodNexus. All Rights Reserved.</p>
      <div className="space-x-4 mt-2">
        <a href="/about" className="hover:underline">About</a> | 
        <a href="/contact" className="hover:underline">Contact</a> | 
        <a href="/privacy" className="hover:underline">Privacy Policy</a>
      </div>
    </footer>
  );
}

export default Footer;
