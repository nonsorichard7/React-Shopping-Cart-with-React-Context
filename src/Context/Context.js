import React, { useContext, useReducer } from "react";
import { createContext } from "react";
import { faker } from "@faker-js/faker";
import { cartReducer, newReducer } from "./Reducer";

const cart = createContext();
faker.seed(90);
const Context = ({ children }) => {
  const products = [...Array(30)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(),
    inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    rating: faker.helpers.arrayElement([1, 2, 3, 4, 5]),

    fastDelivery: faker.datatype.boolean(),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [newState, newDispatch] = useReducer(newReducer, {
    isAscending: false,
    isDescending: false,
    includeOutofStock: false,
    fastDeliveryOnly: false,
    byRating: 0,
    searchQuery: "",
  });

  return (
    <cart.Provider value={{ state, dispatch, newState, newDispatch }}>
      {children}
    </cart.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(cart);
};
