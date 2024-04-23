import { Footer } from "./footer/Footer";
import { Navbar } from "./navbar/Navbar";
import TopBar from "./topBar/TopBar";
import { Outlet } from "react-router-dom"

export const Layout = () => {
  return (
    <div>
      <Navbar />
      <TopBar />
      <Outlet />
      <Footer />
      
    </div>
  );
};
