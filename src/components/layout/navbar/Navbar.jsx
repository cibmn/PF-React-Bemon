import ShoppingBagTwoToneIcon from "@mui/icons-material/ShoppingBagTwoTone";
import { Badge } from "@mui/material";
import "./Navbar.css";

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
              Home
            </a>
          </li>
          <li className="navItem">
            <a href="#" className="navbarLink">
              About
            </a>
          </li>
          <li className="navItem">
            <a href="#" className="navbarLink">
              Contact us
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
        <Badge
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          badgeContent={1}
          color="secondary"
        >
          <ShoppingBagTwoToneIcon color="action" />
        </Badge>
      </div>
    </div>
  );
};
