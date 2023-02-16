import React from "react";
import "./navbar.css";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

function Navbar() {

  return (
    <div className="navbar">
      <a href="/" className="navbar-logo">
        YourLogo
      </a>
      <ul className="navbar-menu">
        <li className="navbar-menu-item">
          <a href="/shop">Shop</a>
        </li>
        <li className="navbar-menu-item">
          <a href="/about">About</a>
        </li>
        <li className="navbar-menu-item">
          <a href="/contact">Contact</a>
        </li>
        <li className="navbar-menu-item">
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={4} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
