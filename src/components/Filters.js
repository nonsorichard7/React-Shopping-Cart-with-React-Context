import React from "react";
import { Form, Button } from "react-bootstrap";
import "../App.css";
import Rating from "./Rating";
import { CartState } from "../Context/Context";

const Filters = () => {
  const {
    newState: {
      isAscending,
      isDescending,
      includeOutofStock,
      fastDeliveryOnly,
      byRating,
    },
    newDispatch,
  } = CartState();

  return (
    <div>
      <div className="filter-container">
        <span className="title">Filter Products</span>
        <span>
          <Form.Check
            inline
            type="radio"
            label=" Ascending"
            id={`inline- 1`}
            onChange={() => newDispatch({ type: "ASCENDING" })}
            checked={isAscending ? true : false}
          />
        </span>
        <span>
          <Form.Check
            inline
            type="radio"
            label=" Descending"
            id={`inline- 2`}
            onChange={() => newDispatch({ type: "DESCENDING" })}
            checked={isDescending ? true : false}
          />
        </span>
        <span>
          <Form.Check
            inline
            type="checkbox"
            label=" Out of Stocks"
            id={`inline - 3`}
            onChange={() => newDispatch({ type: "OUT_OF_STOCK" })}
            checked={includeOutofStock ? true : false}
          />
        </span>
        <span>
          <Form.Check
            inline
            type="checkbox"
            label="Fast Delivery Only"
            id={`inline - 4`}
            onChange={() => newDispatch({ type: "FAST_DELIVERY" })}
            checked={fastDeliveryOnly ? true : false}
          />
        </span>
        <span>
          <Rating
            rating={byRating}
            onclick={(i) => newDispatch({ type: "BY_RATING", payload: i + 1 })}
          />
        </span>

        <Button
          variant="light"
          className="btn"
          onClick={() => newDispatch({ type: "CLEAR_FILTERS" })}
        >
          Clear Filters
        </Button>
      </div>
    </div>
  );
};

export default Filters;
