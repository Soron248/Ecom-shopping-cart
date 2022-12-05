import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Table from "react-bootstrap/esm/Table";
import { FaShoppingCart } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { deleteProduct } from "../feature/productSlice";

function Header() {
  const product = useSelector((data) => data.productReducer.products);
  const [anchorEl, setAnchorEl] = useState(null);
  const [price, setPrice] = useState(0);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  const handleTotal = () => {
    let price = 0;
    product.map((data) => (price = data.price * data.qnty + price));
    setPrice(price);
  };

  useEffect(() => {
    handleTotal();
  }, [handleTotal]);

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
            badgeContent={product.length}
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
            {product.length ? (
              <div
                className="card_details"
                style={{ width: "24rem", padding: "10" }}
              >
                <Table>
                  <thead>
                    <tr>
                      <th>Photo</th>
                      <th>Resturaurant Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.map((data) => {
                      return (
                        <tr key={data.id}>
                          <td>
                            <Link to={`/cart/${data.id}`} onClick={handleClose}>
                              <img
                                src={data.imgdata}
                                alt="product_img"
                                style={{ width: "5rem", height: "5rem" }}
                              />
                            </Link>
                          </td>
                          <td>
                            <p>{data.rname}</p>
                            <p>Price: {data.price} BDT</p>
                            <p>Quantity: {data.qnty}</p>
                            <p onClick={() => handleDelete(data.id)}>
                              <FaTrash
                                style={{
                                  color: "red",
                                  cursor: "pointer",
                                  fontSize: "20px",
                                }}
                                className="smalltrash"
                              />
                            </p>
                          </td>
                          <td className="mt-5">
                            <p
                              style={{ marginTop: "40px" }}
                              onClick={() => handleDelete(data.id)}
                            >
                              <FaTrash
                                style={{
                                  color: "red",
                                  cursor: "pointer",
                                  fontSize: "20px",
                                }}
                                className="largetrash"
                              />
                            </p>
                          </td>
                        </tr>
                      );
                    })}
                    <tr>
                      <td
                        colSpan={3}
                        style={{ textAlign: "center", fontWeight: "bold" }}
                      >
                        Total: {price} BDT
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            ) : (
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
            )}
          </Menu>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
