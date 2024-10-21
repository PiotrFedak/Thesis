import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);
  const [buttonPosition, setButtonPosition] = useState('bottom-8');

  useEffect(() => {
    const handleScroll = () => {
      const footerOffset = document.querySelector('footer').offsetTop;
      const currentScroll = window.scrollY + window.innerHeight;

      if (window.pageYOffset > 800) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }

      if (currentScroll >= footerOffset - 50) {
        setButtonPosition('bottom-36');
      } else {
        setButtonPosition('bottom-8');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    showButton && (
      <button
        id="#Scroll-to-top"
        className={`fixed ${buttonPosition} right-8 dark:bg-custom-red bg-custom-blue text-white p-4 rounded-full shadow-lg focus:outline-none hover:scale-110 transition-all hidden md:block`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        <FaArrowUp size={24} />
      </button>
    )
  );
};

export default ScrollToTopButton;
