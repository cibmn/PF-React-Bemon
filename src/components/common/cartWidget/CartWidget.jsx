

import React, { useContext } from "react";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import ShoppingBagTwoToneIcon from "@mui/icons-material/ShoppingBagTwoTone";
import "./CartWidget.css";

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);
  const totalItems = getTotalItems();

  return (
    <div className="cartWidgetContainer">
      <Link to="/cart" className="cartLink">
        <Badge
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          badgeContent={totalItems}
          showZero
          color="secondary"
          className="badgeContainer"
        >
          <div className="iconContainer">
            <ShoppingBagTwoToneIcon color="action" className="bagIcon" />
          </div>
        </Badge>
      </Link>
    </div>
  );
};

export default CartWidget;
