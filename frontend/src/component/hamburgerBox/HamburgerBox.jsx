import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./hamburger.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled } from "@mui/material";
import BookNavbar from "../heroAndBookSection/bookNavbar/BookNavbar";

const MenuIconStyle = styled(MenuIcon)`
  cursor: pointer;
  z-index:999;
`;

const HamburgerBox = () => {
    const [openBookNavbar,setOpenBookNavbar]=useState(false)

  return (
    <div className="hamburger-component">
      <MenuIconStyle onClick={()=>setOpenBookNavbar(!openBookNavbar)}/>
      <div className="hamburger-book-navbar" style={{display:openBookNavbar?'block':'none'}}>
      <BookNavbar open={openBookNavbar}/>
      </div>
      <button className="hamburger-basket-button">
        My Basket
        <ShoppingCartIcon fontSize="small" />
      </button>
    </div>
  );
};

export default HamburgerBox;
