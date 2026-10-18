import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="logo">Anonime</h1>
        <ul className="nav-menu">
          <li className="nav-item active">Home</li>
          <li className="nav-item">List anime</li>
        </ul>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search anime or movie"
          className="search-input"
        />
      </div>
    </nav>
  );
};

export default Navbar;