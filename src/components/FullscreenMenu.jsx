import React from "react";

const menuItems = [
  "Home",
  "About Us", 
  "Our Services",
  "Our Gallery",
  "Our Clients",
  "Our Projects",
  "Quick Quote",
  "Contact Us",
];

function FullscreenMenu({ onClose }) {
  const handleMenuItemClick = (item) => {
    console.log(`Clicked on: ${item}`);
    // Add navigation logic here when needed
    onClose();
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fullscreen-menu" onClick={handleBackdropClick}>
      <button 
        className="close-button" 
        onClick={onClose}
        aria-label="Close menu"
      >
        ✖
      </button>
      <div className="menu-content">
        <img src="/logo.webp" alt="ContraTek Logo" className="menu-logo" />
        <h2>ContraTek Establishment</h2>
        <p>CR: 4030253976</p>
        <ul className="menu-items">
          {menuItems.map((item, index) => (
            <li 
              key={index} 
              onClick={() => handleMenuItemClick(item)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleMenuItemClick(item);
                }
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FullscreenMenu;