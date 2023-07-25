import React from "react";
import "../App.css";
import { Button, Card } from "react-bootstrap/";
import Rating from "./Rating";
import { CartState } from "../Context/Context";

const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="product-card">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={prod.image}
          alt={prod.name}
          className="img-scale"
        />
        <Card.Body>
          <Card.Title>
            {prod.name.length < 25 ? prod.name : prod.name.slice(0, 22) + "..."}
          </Card.Title>
          <Card.Subtitle>
            <div> ${prod.price.split(".")[0]}</div>
            {prod.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 Days Delivery</div>
            )}
          </Card.Subtitle>
          <Rating rating={prod.rating} />
          {cart.some((p) => p.id === prod.id) ? (
            <Button
              variant="danger"
              onClick={() => {
                dispatch({ type: "REMOVE_FROM_CART", payload: prod });
              }}
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              disabled={!prod.inStock}
              onClick={() => {
                dispatch({ type: "ADD_TO_CART", payload: prod });
              }}
            >
              {!prod.inStock ? "Out of Stock" : "Add to Cart"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
