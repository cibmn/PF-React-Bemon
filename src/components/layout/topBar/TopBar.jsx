import React, { useState, useEffect } from "react";
import LanguageIcon from "@mui/icons-material/Language";
import LoyaltyTwoToneIcon from "@mui/icons-material/LoyaltyTwoTone";

const TopBar = () => {
  const texts = [
    "Nueva colección Invierno! Explora la colaboración junto a Kerala",
    "Envíos gratis desde $70.000 worldwide",
    "Devoluciones sin cargo hasta tope 30 días",
  ];
  const icons = [
    <LanguageIcon key="language-icon" style={{ marginRight: "15px", marginTop: "3px", marginBottom: "3px" }} />,
    <LoyaltyTwoToneIcon key="pre-order-icon" style={{ marginLeft: "15px", marginRight: "5px", marginTop: "3px", marginBottom: "3px" }} />,
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="top-bar-wrapper"
      style={{
        marginTop: "0px",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#756f6f33",
        padding: "3px",
        boxSizing: "border-box",
      }}
    >
      <div className="top-bar-icons" style={{ display: "flex", alignItems: "center" }}>
        {icons[1]} 
        <span style={{ marginLeft: "5px", marginTop: "3px", marginBottom: "3px" }}>Pre Venta</span>
      </div>
      <div className="top-bar-text" style={{ textAlign: "center", marginTop: "3px", marginBottom: "3px" }}>
        {texts[index]}
      </div>
      <div className="top-bar-icons" style={{ display: "flex", alignItems: "center" }}>
        <span style={{ marginRight: "5px", marginTop: "3px", marginBottom: "3px" }}>Idioma</span>
        {icons[0]} 
      </div>
    </div>
  );
};

export default TopBar;
