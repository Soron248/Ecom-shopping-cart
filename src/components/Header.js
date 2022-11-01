import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaShoppingCart } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import { useSelector } from "react-redux";

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              fontSize: "30px",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Shop Cart
          </Link>

          <Nav className="me-auto">
            <Link
              to="/"
              style={{
                textDecoration: "none",
                marginLeft: "30px",
                fontSize: "20px",
                color: "white",
              }}
            >
              Home
            </Link>
          </Nav>

          <Badge
            badgeContent={0}
            color="primary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <FaShoppingCart
              style={{ color: "white", fontSize: "25px", cursor: "pointer" }}
            />
          </Badge>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <div
              className="card_details d-flex justify-content-center align-items-center"
              style={{ width: "24rem", padding: 10, position: "relative" }}
            >
              <FaTimes
                onClick={handleClose}
                style={{
                  position: "absolute",
                  top: 2,
                  right: 20,
                  fontSize: 23,
                  cursor: "pointer",
                }}
              />
              <p style={{ fontSize: 22 }}>Your cart is empty</p>
              <img
                src="./image/cart.gif"
                alt="cartLogo"
                className="emptycart_img"
                style={{ width: "5rem", padding: 10 }}
              />
            </div>
          </Menu>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
