import ShoppingBagTwoToneIcon from "@mui/icons-material/ShoppingBagTwoTone";
import { Badge } from "@mui/material";
import { Link } from 'react-router-dom'; 
import "./CartWidget.css"; 

const CartWidget = ({ badgeContent }) => {
  return (
    <span>
      <Link to="/cart" className="cartLink"> 
        <Badge
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          badgeContent={badgeContent}
          color="secondary"
          className="badgeContainer"
        >
          <div className="iconContainer">
            <ShoppingBagTwoToneIcon color="action" className="bagIcon" />
          </div>
        </Badge>
      </Link>
    </span>
  );
};

export default CartWidget;
