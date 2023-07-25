export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((a) => a.id !== action.payload.id),
      };

    case "CHANGE_CART_QTY":
      return {
        ...state,
        cart: state.cart.map((c) => {
          if (c.id === action.payload.id) {
            return { ...c, qty: action.payload.qty };
          }
          return c;
        }),
      };

    default:
      return state;
  }
};

export const newReducer = (newState, action) => {
  switch (action.type) {
    case "ASCENDING":
      return {
        ...newState,
        isAscending: !newState.isAscending,
        isDescending: false,
      };

    case "DESCENDING":
      return {
        ...newState,
        isDescending: !newState.isDescending,
        isAscending: false,
      };

    case "OUT_OF_STOCK":
      return {
        ...newState,
        includeOutofStock: !newState.includeOutofStock,
      };

    case "FAST_DELIVERY":
      return {
        ...newState,
        fastDeliveryOnly: !newState.fastDeliveryOnly,
      };

    case "BY_RATING":
      return {
        ...newState,
        byRating: action.payload,
      };

    case "searchQuery":
      return {
        ...newState,
        searchQuery: action.payload,
      };

    case "CLEAR_FILTERS":
      return {
        isAscending: false,
        isDescending: false,
        includeOutofStock: false,
        fastDeliveryOnly: false,
        byRating: 0,
      };

    default:
      return newState;
  }
};
