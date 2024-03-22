import { FaCartShopping } from "react-icons/fa6";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="leftSection">
    <img className="logo" src="https://res.cloudinary.com/dg1pxjbvm/image/upload/v1711085242/WhatsApp_Image_2023-10-07_at_3.56.48_PM-removebg-preview_tnetcu.png" />
        <a href="#" className="navbarLink">Yoga Mat tienda</a>
      </div>

      <div className="centerSection">
        <ul>
          <li className="navItem">
            <a href="#" className="navbarLink">Home</a>
          </li>
          <li className="navItem">
            <a href="#" className="navbarLink">About</a>
          </li>
          <li className="navItem">
            <a href="#" className="navbarLink">Contact us</a>
          </li>
          <li className="navItem">
            <a href="#" className="navbarLink">More</a>
          </li>
        </ul>
      </div>

      <div className="rightSection">
        <span className="cartCounter">0</span>
        <FaCartShopping color="peru" size="2rem" />
      </div>
    </div>
  );
};
