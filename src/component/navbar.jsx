import React, { useState, useEffect } from 'react';
import { navLinks } from '../constant';

function Navbar() {
  // State to track the active link
  const [activeLink, setActiveLink] = useState('Home'); // Default to "Home"

  useEffect(() => {
    // Observer callback
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const link = navLinks.find((item) => item.url === `#${sectionId}`);
          if (link) {
            setActiveLink(link.title);
          }
        }
      });
    };

    // Create observer
    const observer = new IntersectionObserver(handleIntersection, {
      root: null, // Use the viewport as the root
      rootMargin: '0px', // No margin
      threshold: 0.5, // Trigger when 50% of the section is visible
    });

    // Observe sections
    const sections = document.querySelectorAll('[data-nav-id]');
    sections.forEach((section) => observer.observe(section));

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="w-[500px] max-sm:w-[280px]  max-sm:h-[60px] h-[80px] z-50 flex items-center justify-center fixed
      second_bg shadow-xl mt-[1.5rem] rounded-lg"
    >
      {navLinks.map((item) => (
        <a
          key={item.id}
          href={item.url}
          onClick={() => setActiveLink(item.title)} // Update active link state with the title
          className={`flex items-center justify-center w-[100px] h-[75%] rounded-lg 
            text-[20px] font-bold mx-1 a max-sm:text-[14px]
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
