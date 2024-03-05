import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" bg-slate-200">
      <div className="flex justify-between items-center max-w-5xl mx-auto p-3">
        <Link to="/">
          <h1>Auth App</h1>
        </Link>
        <ul className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/sign-in">Sign in</Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
