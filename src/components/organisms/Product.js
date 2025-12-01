import { useReducer } from "react";
import { TYPES } from "../../actions/actions";
import { shoppingReducer } from "../../reducer/shoppingReducer";
import { shoppingInitialState } from "../../reducer/shoppingInitialState";
import CardContainer from "./CardsContainer";

const Product = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { products } = state;

  const addToCart = (id) => dispatch({ type: TYPES.ADD_TO_CART, payload: id });

  return <CardContainer addToCart={addToCart} />;
};

export default Product;
