import { Badge } from "@mui/material";
import { Link } from 'react-router-dom'; 
import ShoppingBagTwoToneIcon from "@mui/icons-material/ShoppingBagTwoTone";
import "./CartWidget.css"; 

const CartWidget = ({ badgeContent }) => {
  return (
    <div className="cartWidgetContainer">
      <Link to="/cart" className="cartLink"> 
        <Badge
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          badgeContent={badgeContent}
          color="secondary"
          showZero={true}
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
