import { Link } from "react-router-dom";
import React from "react";
const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Quick Dev Web</h1>
      <div>
        <Link className="mx-2" to="/">Home</Link>
        <Link className="mx-2" to="/about">About</Link>
        <Link className="mx-2" to="/services">Services</Link>
        <Link className="mx-2" to="/portfolio">Portfolio</Link>
        <Link className="mx-2" to="/contact">Contact</Link>
      </div>
    </nav>
  );
};
export default Navbar;