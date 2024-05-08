import React, { useState } from "react";
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
          <div style={{ marginBottom: "10px" }}>
            <input type="email" placeholder="Ingrese su correo electrónico" />
            <button style={{ marginBottom: "10px", margin: "10px" }}>
              Submit
            </button>
          </div>
          <div>
            <label style={{ marginBottom: "10px", margin: "10px" }}>
              <input type="checkbox" />
              Leí y acepto la política de privacidad y términos de servicio
            </label>
          </div>
          <button
            style={{
              marginBottom: "10px",
              margin: "20px",
              backgroundColor: "green",
              color: "white",
            }}
            size="large"
          >
            Registrarme para grupo de WhatsApp
          </button>
        </div>
        <div style={{ marginBottom: "10px", margin: "10px" }}>
          <p>&copy; 2024 Yoga Mat Tienda. Todos los derechos reservados.</p>
        </div>
      </div>
      <div
        className="additionalInfo"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          justifyContent: "start", 
        }}
      >
        <div>
          <a href="#">Customer Care</a>
          <div>
            <a href="#">Mi Cuenta</a>
            <a href="#">Preguntas Frecuentes</a>
            <a href="#">Contáctenos</a>
            <a href="#">Guía de Ajuste</a>
            <a href="#">Quiz de Colchonetas de Yoga</a>
            <a href="#">Envíos</a>
            <a href="#">Política de Devolución</a>
            <a href="#">Garantía del Producto</a>
            <a href="#">Tarjetas de Regalo</a>
            <a href="#">No vender mi información personal</a>
            <a href="#">Información de Falsificación</a>
          </div>
        </div>
        <div>
          <a href="#">Our Community</a>
          <div>
            <a href="#">Community Guidlines</a>
            <a href="#">Events</a>
            <a href="#">Stories</a>
            <a href="#">Ambassadors</a>
          </div>
        </div>
        <div>
          <a href="#">Terms of Service</a>
          <div>
            <a href="#">General Terms</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Payment Terms</a>
            <a href="#">Subscription Terms</a>
          </div>
        </div>
        <div>
          <a href="#">Privacy Policy</a>
          <div>
            <a href="#">Data Collection</a>
            <a href="#">Data Usage</a>
            <a href="#">Data Sharing</a>
            <a href="#">Data Retention</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
