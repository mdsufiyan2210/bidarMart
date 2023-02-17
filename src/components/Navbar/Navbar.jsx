import React from "react";
import "./navbar.css";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

function Navbar() {

const cardNumber=useSelector((state)=>state.CardAdded)
const navigate = useNavigate()
const shopIcon = (params) => {
navigate("/cart")
}

  return (
    <div className="navbar">
      <a href="/" className="navbar-logo">
        YourLogo
      </a>
      <ul className="navbar-menu">
        <li className="navbar-menu-item">
          <Link to="/shop">Shop </Link>
        </li>
        <li className="navbar-menu-item">
          <Link to="/about">About</Link>
        </li>
        <li className="navbar-menu-item">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="navbar-menu-item">
          <IconButton aria-label="cart" onClick={shopIcon}>
            <StyledBadge badgeContent={cardNumber} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
