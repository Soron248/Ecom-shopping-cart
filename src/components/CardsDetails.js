import React from "react";
import "./style.css";

import { FaTrash } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
function CardsDetails() {
  return (
    <>
      <h2 className="text-center" style={{ margin: "20px" }}>
        Product Details
      </h2>
      <div
        className="container mt-2"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="card"
          style={{
            display: "flex",
            flexDirection: "row",
            width: "900px",
            height: "400px",
          }}
        >
          <div>
            <img
              src="https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp"
              alt="product img"
              style={{ width: "110%", height: "100%" }}
            />
          </div>
          <div className="info" style={{ width: "100%", padding: "20px" }}>
            <h3>Restaurant: {}</h3>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "50px auto",
              }}
            >
              <div>
                <p style={{ marginBottom: "10px" }}>Price: {}</p>
                <p>
                  Rating:{" "}
                  <span
                    style={{
                      backgroundColor: "green",
                      padding: "3px",
                      borderRadius: "5px",
                    }}
                  >
                    {}{" "}
                    <sup>
                      <FaStar />
                    </sup>
                  </span>{" "}
                </p>
                <p style={{ marginBottom: "10px" }}>
                  Dishes: {}Pizza, Fast Food, Pasta
                </p>
                <p>Order Review: {}650 + order placed from here recently</p>
              </div>
            </div>

            <div>
              <span style={{ marginRight: "100px" }}>Total: {} BDT</span>
              <span>
                Remove: <FaTrash style={{ color: "red" }} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardsDetails;
