import React, { useState, useEffect } from "react";
import LanguageIcon from "@mui/icons-material/Language";
import LoyaltyTwoToneIcon from "@mui/icons-material/LoyaltyTwoTone";
import { ThemeProvider, createTheme, CssBaseline, Switch } from "@mui/material";

const TopBar = () => {
  const texts = [
    "Nueva colección Invierno! Explora la colaboración junto a Kerala",
    "Envíos gratis desde $70.000 worldwide",
    "Devoluciones sin cargo hasta tope 30 días",
  ];
  const icons = [
    <LanguageIcon key="language-icon" style={{ marginRight: "5px", marginTop: "3px", marginBottom: "3px" }} />,
    <LoyaltyTwoToneIcon key="pre-order-icon" style={{ marginLeft: "5px", marginRight: "5px", marginTop: "3px", marginBottom: "3px" }} />,
  ];

  const [index, setIndex] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
          <span style={{ marginLeft: "5px", marginRight: "5px", marginTop: "3px", marginBottom: "3px" }}>Pre Venta</span>
        </div>
        <div className="top-bar-text" style={{ textAlign: "center", marginTop: "3px", marginBottom: "3px" }}>
          {texts[index]}
        </div>

        <div className="top-bar-icons" style={{ display: "flex", alignItems: "center" }}>
          <span style={{ marginRight: "5px", marginTop: "3px", marginBottom: "3px" }}>Idioma</span>
          {icons[0]}

          <span style={{ marginRight: "5px", marginTop: "3px", marginBottom: "3px" }}>Modo</span>
          <Switch checked={darkMode} onChange={handleDarkModeToggle} />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default TopBar;
