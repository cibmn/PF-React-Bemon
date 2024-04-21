import { Instagram, Facebook, LinkedIn, WhatsApp, Link } from "@mui/icons-material";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
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
