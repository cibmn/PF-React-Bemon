import React, { useEffect, useState } from 'react';
import { Instagram, Facebook, LinkedIn, WhatsApp, Link } from "@mui/icons-material";
import "./Footer.css";

export const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

      if (windowHeight + scrollTop >= documentHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className={`footer ${isVisible ? 'visible' : ''}`}>
      <div className="socialIcons">
        <a href="https://www.instagram.com/">
          <Instagram />
        </a>
        <a href="https://www.facebook.com/">
          <Facebook />
        </a>
        <a href="https://www.linkedin.com/">
          <LinkedIn />
        </a>
        <a href="https://api.whatsapp.com/send?phone=123456789">
          <WhatsApp />
        </a>
        <a href="https://linktr.ee/">
          <Link />
        </a>
      </div>
      <div className="copyright">
        <p>&copy; 2024 Yoga Mat Tienda. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};
