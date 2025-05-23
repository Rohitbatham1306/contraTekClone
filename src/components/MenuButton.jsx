import React from "react";

function MenuButton({ onClick }) {
  return (
    <button 
      className="menu-button"
      onClick={onClick}
      aria-label="Open menu"
    >
      <span className="hamburger-line"></span>
      <span className="hamburger-line"></span>
      <span className="hamburger-line"></span>
    </button>
  );
}

export default MenuButton;