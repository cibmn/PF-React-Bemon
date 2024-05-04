import React, { useEffect, useState } from "react";
import {
  Instagram,
  Facebook,
  LinkedIn,
  WhatsApp,
  Link,
} from "@mui/icons-material";
import "./Footer.css";

export const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop;

      if (windowHeight + scrollTop >= documentHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <footer
      className={`footer ${isVisible ? "visible" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="mainInfo">
        <img
          className="logo"
          src="https://res.cloudinary.com/dg1pxjbvm/image/upload/v1711085242/WhatsApp_Image_2023-10-07_at_3.56.48_PM-removebg-preview_tnetcu.png"
          alt="Logo"
        />
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
        <div className="mainInfo">
          <p>Mail: correo@correo.com</p>
          <input type="email" placeholder="Ingrese su correo electrónico" />
          <button>Submit</button>
          <label>
            <input type="checkbox" />
            Leí y acepto la política de privacidad y términos de servicio
          </label>
          <button>Registrarme para grupo de WhatsApp</button>
        </div>
        <p>&copy; 2024 Yoga Mat Tienda. Todos los derechos reservados.</p>
      </div>
      <div className="additionalInfo">
        <a href="#">Customer Care</a>
        <a href="#">Our Community</a>
        <a href="#">Terms of Service</a>
        <a href="#">Privacy Policy</a>
      </div>
      <div>
      </div>
    </footer>
  );
};
