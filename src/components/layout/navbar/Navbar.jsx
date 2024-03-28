import ShoppingBagTwoToneIcon from "@mui/icons-material/ShoppingBagTwoTone";
import { Badge } from "@mui/material";
import "./Navbar.css";
import CartWidget from '../../common/cartWidget/CartWidget';

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="leftSection">
        <img
          className="logo"
          src="https://res.cloudinary.com/dg1pxjbvm/image/upload/v1711085242/WhatsApp_Image_2023-10-07_at_3.56.48_PM-removebg-preview_tnetcu.png"
        />
        <a href="#" className="navbarLinkTitle">
          Yoga Mat tienda
        </a>
      </div>

      <div className="centerSection">
        <ul>
          <li className="navItem">
            <a href="#" className="navbarLink">
              New Arrivals
            </a>
          </li>
          <li className="navItem">
            <a href="#" className="navbarLink">
              Mats
            </a>
          </li>
          <li className="navItem">
            <a href="#" className="navbarLink">
              Props & Accessories
            </a>
          </li>
          <li className="navItem">
            <a href="#" className="navbarLink">
              Sale
            </a>
          </li>
          <li className="navItem">
            <a href="#" className="navbarLink">
              Community
            </a>
          </li>
          <li className="navItem">
            <a href="#" className="navbarLink">
              More
            </a>
          </li>
        </ul>
      </div>

      <div className="rightSection">
      <CartWidget badgeContent={1} /> 
      </div>
    </div>
  );
};
