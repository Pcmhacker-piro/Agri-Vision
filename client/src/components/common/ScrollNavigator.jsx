import React, { useState, useEffect } from 'react';

const ScrollNavigator = () => {
  const [visible, setVisible] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

      setVisible(scrollY > 100);
      setAtTop(scrollY < 10);
      setAtBottom(Math.abs(scrollY - maxScroll) < 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollDown = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`scroll-navigator ${visible ? 'visible' : 'hidden'}`}>
      <button
        className={`scroll-btn scroll-up ${atTop ? 'disabled' : ''}`}
        onClick={scrollUp}
        disabled={atTop}
        aria-label="Scroll to top"
      >
        ↑
      </button>
      <button
        className={`scroll-btn scroll-down ${atBottom ? 'disabled' : ''}`}
        onClick={scrollDown}
        disabled={atBottom}
        aria-label="Scroll to bottom"
      >
        ↓
      </button>
    </div>
  );
};

export default ScrollNavigator;
