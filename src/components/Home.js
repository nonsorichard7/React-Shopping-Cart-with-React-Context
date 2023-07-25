import React from "react";
import { CartState } from "../Context/Context";
import SingleProduct from "./SingleProduct";
import Filters from "./Filters";
import "../App.css";

const Home = () => {
  const {
    state: { products },
    newState: {
      isAscending,
      isDescending,
      includeOutofStock,
      fastDeliveryOnly,
      byRating,
      searchQuery,
    },
  } = CartState();

  const newProducts = () => {
    let sortedProducts = products;
    if (isAscending) {
      sortedProducts = sortedProducts.sort((a, b) => {
        return a.price - b.price;
      });
    }

    if (isDescending) {
      sortedProducts = sortedProducts.sort((a, b) => {
        return b.price - a.price;
      });
    }

    if (!includeOutofStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }
    if (fastDeliveryOnly) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.fastDelivery === true
      );
    }
    if (byRating) {
      sortedProducts = sortedProducts.filter((prod) => prod.rating >= byRating);
    }
    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts;
  };

  return (
    <div className="Home">
      <Filters />
      <div className="product-container">
        {newProducts().map((prod) => {
          return <SingleProduct prod={prod} key={prod.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
