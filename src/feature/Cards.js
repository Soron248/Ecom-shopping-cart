import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";

import Cardsdata from "../components/CardsData";
import "../components/style.css";
import { addProduct } from "./productSlice";

function Cards() {
  const dispatch = useDispatch();
  const [cardData, setCardData] = useState(Cardsdata);

  const sendData = (data) => {
    dispatch(addProduct(data));
  };

  return (
    <div className="container mt-3">
      <h2 className="text-center">Buy your product</h2>
      <div className="row">
        {cardData.map((data) => {
          return (
            <Card
              style={{
                width: "18rem",
                margin: "20px",
                boxShadow: "2px 2px 15px gray",
              }}
              key={data.id}
            >
              <Card.Img
                variant="top"
                src={data.imgdata}
                style={{
                  height: "200px",
                  marginTop: "10px",
                }}
              />
              <Card.Body>
                <Card.Title>{data.rname}</Card.Title>
                <Card.Text>Price : {data.price} BDT</Card.Text>
                <Button
                  variant="primary"
                  className="col-lg-12"
                  onClick={() => sendData(data)}
                >
                  Add to cart
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
