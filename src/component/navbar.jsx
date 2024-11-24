import React, { useState } from 'react';
import { navLinks } from '../constant';

function Navbar() {
  // State to track the active link
  const [activeLink, setActiveLink] = useState('Home'); // Default to "Home"

  return (
    <div
      className="w-[500px] h-[80px] z-50 flex items-center justify-center fixed
      second_bg shadow-xl mt-[1.5rem] rounded-lg"
    >
      {navLinks.map((item) => (
        <a
          key={item.id}
          href={item.url}
          onClick={() => setActiveLink(item.title)} // Update active link state with the title
          className={`flex items-center justify-center w-[100px] h-[75%] rounded-lg 
            text-[20px] font-bold mx-1 a
            ${
              activeLink === item.title
                ? 'bg-white text-primary' // Apply active styles
                : 'text-white' // Default styles
            }`} // Hover styles
        >
          {item.title}
        </a>
      ))}
    </div>
  );
}

export default Navbar;
