import React from 'react';
import ShoppingBagTwoToneIcon from "@mui/icons-material/ShoppingBagTwoTone";
import { Badge } from "@mui/material";

const CartWidget = (props) => {
  const { badgeContent } = props;

  return (
    <div>
      <Badge
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        badgeContent={badgeContent}
        color="secondary"
      >
        <ShoppingBagTwoToneIcon color="action" />
      </Badge>
    </div>
  );
};

export default CartWidget;
