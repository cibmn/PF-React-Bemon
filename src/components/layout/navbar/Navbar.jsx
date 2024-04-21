import { Link } from "react-router-dom";
import "./Navbar.css";
import CartWidget from "../../common/cartWidget/CartWidget";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Typography from "@mui/material/Typography";

export const Navbar = ({ toggleCartVisibility }) => {
  const handleCartClick = () => {
    console.log("Cart clicked");
    toggleCartVisibility();
  };

  return (
    <div className="navbar" id="myNavbar">
      <div className="leftSection">
        <img
          className="logo"
          src="https://res.cloudinary.com/dg1pxjbvm/image/upload/v1711085242/WhatsApp_Image_2023-10-07_at_3.56.48_PM-removebg-preview_tnetcu.png"
        />
        <Link to="/" className="navbarLinkTitle">
          <Typography variant="h5">Yoga Mat tienda</Typography>
        </Link>
      </div>

      <div className="centerSection">
        <ul>
          <li className="navItem">
            <Link to="/" className="navbarLink">
              Mats
            </Link>
          </li>
          <li className="navItem">
            <Link to="/newArrivals" className="navbarLink redLink">
              New Arrivals
            </Link>
          </li>
          <li className="navItem">
            <Link to="/propsAccessories" className="navbarLink">
              Props & Accessories
            </Link>
          </li>
          <li className="navItem">
            <Link to="/sale" className="navbarLink">
              Sale
            </Link>
          </li>
          <li className="navItem">
            <Link to="/community" className="navbarLink">
              Community
            </Link>
          </li>
          <li className="navItem">
            <Link to="/more" className="navbarLink">
              More
            </Link>
          </li>
        </ul>
      </div>

      <div className="rightSection">
        {/* Otros iconos en el lado derecho */}
        <SearchIcon className="navbarIcon" />
        <AccountCircleIcon className="navbarIcon" />
        <LocationOnIcon className="navbarIcon" />
        {/* Pasa la función handleCartClick al prop onClick de CartWidget */}
        <CartWidget badgeContent={1} onClick={handleCartClick} />
      </div>
    </div>
  );
};
