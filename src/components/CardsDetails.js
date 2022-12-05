import React, { useState, useEffect } from "react";
import "./style.css";
import { FaTrash } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  deleteProduct,
  removeOneProduct,
} from "../feature/productSlice";

function CardsDetails() {
  const { id } = useParams();
  const getData = useSelector((data) => data.productReducer.products);
  const [finalData, setFinalData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getSelectedData = () => {
    const data = getData.filter((data) => {
      return data.id == id;
    });
    setFinalData(data);
  };

  const removeOne = (data) => {
    dispatch(removeOneProduct(data));
  };

  const sendData = (data) => {
    dispatch(addProduct(data));
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
    navigate("/", { replace: true });
  };
  useEffect(() => {
    getSelectedData();
  }, [id]);

  return (
    <>
      <h2 className="text-center" style={{ margin: "20px" }}>
        Product Details
      </h2>
      <section
        className="container mt-2"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {finalData.map((data) => (
          <div
            className="card"
            style={{
              display: "flex",
              flexDirection: "row",
              width: "900px",
              height: "400px",
            }}
            key={data.id}
          >
            <div>
              <img
                src={data.imgdata}
                alt="product img"
                style={{ width: "110%", height: "100%" }}
              />
            </div>
            <div className="info" style={{ width: "100%", padding: "20px" }}>
              <h3>Restaurant: {data.rname}</h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "50px auto",
                }}
              >
                <div>
                  <p style={{ marginBottom: "10px" }}>Price: {data.price}</p>
                  <p>
                    Rating:
                    <span
                      style={{
                        backgroundColor: "green",
                        padding: "3px",
                        borderRadius: "5px",
                        marginLeft: "5px",
                        color: "white",
                      }}
                    >
                      {data.rating}{" "}
                      <sup>
                        <FaStar />
                      </sup>
                    </span>{" "}
                  </p>
                  <p style={{ marginBottom: "10px" }}>Dishes: {data.address}</p>
                  <p>Order Review: {data.somedata}</p>
                </div>
              </div>

              <div>
                <span style={{ marginRight: "100px" }}>
                  Total: {data.price * data.qnty} BDT
                </span>
                <span>
                  Remove:{" "}
                  <FaTrash
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => handleDelete(data.id)}
                  />
                </span>
              </div>
              <div
                style={{
                  backgroundColor: "gray",
                  height: "35px",
                  width: "100px",
                  margin: "20px auto",
                  borderRadius: "7px",
                  fontSize: "20px",
                }}
              >
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => removeOne(data)}
                >
                  -
                </span>
                <span style={{ margin: "0 20px" }}>{data.qnty}</span>
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => sendData(data)}
                >
                  +
                </span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default CardsDetails;
