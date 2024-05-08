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
          style={{ width: "120px" }}
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
        <div className="mainInfoTwo">
          <div style={{ marginBottom: "8px" }}>
            <input
              type="email"
              placeholder="Ingrese su correo electrónico"
              style={{ width: "200px", height: "30px", textAlign: "center" }}
            />
            <button
              style={{ marginBottom: "10px", margin: "10px", width: "60px" }}
            >
              Submit
            </button>
          </div>
          <div>
            <label style={{ marginBottom: "3px", margin: "30px" }}>
              <input type="checkbox" />
              Leí y acepto la política de privacidad y términos de servicio
            </label>
          </div>
          <button
            style={{
              marginBottom: "8px",
              margin: "20px",
              backgroundColor: "green",
              color: "white",
              width: "400px",
              height: "30px",
              textAlign: "center",
            }}
            size="large"
          >
            Agregarme en difución de WhatsApp
          </button>
        </div>
        <div style={{ marginBottom: "30px", margin: "10px" }}>
          <p>&copy; 2024 Yoga Mat Tienda. Todos los derechos reservados.</p>
        </div>
      </div>
      <div
        className="additionalInfo"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          justifyItems: "start",
        }}
      >
        <div>
          <a href="#" className="titleList" style={{ textDecoration: "none" }}>
            Customer Care
          </a>
          <div className="infoList" style={{ textDecoration: "none" }}>
            <ul>
              <li>
                <a href="#" style={{ textDecoration: "none" }}>Mi Cuenta</a></li>
              <li><a href="#" style={{ textDecoration: "none" }}>Preguntas Frecuentes</a></li>
              <li><a href="#" style={{ textDecoration: "none" }}>Contáctenos</a></li>
              <li><a href="#" style={{ textDecoration: "none" }}>Guía de Ajuste</a></li>
              <li><a href="#" style={{ textDecoration: "none" }}>Quiz de Colchonetas de Yoga</a></li>
              <li><a href="#" style={{ textDecoration: "none" }}>Envíos</a></li>
              <li><a href="#" style={{ textDecoration: "none" }}>Política de Devolución</a></li>
              <li><a href="#" style={{ textDecoration: "none" }}>Garantía del Producto</a></li>
              <li><a href="#" style={{ textDecoration: "none" }}>Tarjetas de Regalo</a></li>
              <li><a href="#" style={{ textDecoration: "none" }}>No vender mi información personal</a></li>
              <li><a href="#" style={{ textDecoration: "none" }}>Información de Falsificación</a></li>
            </ul>
          </div>
        </div>
        <div>
          <a href="#" className="titleList" style={{ textDecoration: "none" }}>
            Our Community
          </a>
          <div className="infoList" style={{ textDecoration: "none" }}>
            <ul>
            <li><a href="#" style={{ textDecoration: "none" }}>Community Guidlines</a></li>
            <li><a href="#" style={{ textDecoration: "none" }}>Eventos</a></li>
            <li><a href="#" style={{ textDecoration: "none" }}>Historias</a></li>
            <li><a href="#" style={{ textDecoration: "none" }}>Embajadores</a></li>
            </ul>
          </div>
        </div>
        <div>
          <a href="#" className="titleList" style={{ textDecoration: "none" }}>
            Terms of Service
          </a>
          <div className="infoList" style={{ textDecoration: "none" }}>
            <ul>
          <li><a href="#" style={{ textDecoration: "none" }}>Términos Generales</a></li>
          <li><a href="#" style={{ textDecoration: "none" }}>Política de Privacidad</a></li>
          <li><a href="#" style={{ textDecoration: "none" }}>Términos de pago</a></li>
          <li><a href="#" style={{ textDecoration: "none" }}>Terminos de Subscripción</a></li>
          </ul>
          </div>
        </div>
        <div>
          <a href="#" className="titleList" style={{ textDecoration: "none" }}>
            Política de Privacidad
          </a>
          <div className="infoList" >
            <ul>
            <li><a href="#" style={{ textDecoration: "none" }}>Data Collection</a></li>
            <li><a href="#" style={{ textDecoration: "none" }}>Data Usage</a></li>
            <li><a href="#" style={{ textDecoration: "none" }}>Data Sharing</a></li>
            <li><a href="#" style={{ textDecoration: "none" }}>Data Retention</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
