import { useReducer, useEffect } from "react";
import axios from "axios";
import { TYPES } from "../../actions/actions";
import { shoppingReducer } from "../../reducer/shoppingReducer";
import { shoppingInitialState } from "../../reducer/shoppingInitialState";
import styles from "@/styles/ShoppingCart.module.css";
import CartItem from "../molecules/CardItem";
import CardContainer from "../organisms/CardsContainer";

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  // Destructurar
  const { products, cart } = state;

  const updateState = async () => {
    const ENDPOINTS = {
      products: "http://localhost:5000/products",
      cart: "http://localhost:5000/cart",
    };

    const resProducts = await axios.get(ENDPOINTS.products),
      resCart = await axios.get(ENDPOINTS.cart);

    const productsList = await resProducts.data,
      cartItems = await resCart.data;

    dispatch({
      type: TYPES.READ_STATE,
      payload: {
        products: productsList,
        cart: cartItems,
      },
    });
  };

  useEffect(() => {
    updateState();
  }, []);

  const addToCart = (id) => dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  const deleteFromCart = (id, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_PRODUCTS, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_PRODUCT, payload: id });
    }
  };
  const clearCart = () => dispatch({ type: TYPES.CLEAR_CART });

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.shoppingTitle}>Carrito de Compras</h2>

        <div className={styles.shoppingContainer}>
          <h3 className={styles.productsTitle}>Productos</h3>

          {/* Pasar `products` como prop a `CardContainer` */}
          <CardContainer productos={products} addToCart={addToCart} />

          <h3 className={styles.shoppingTitle}>Carrito</h3>

          <div className={styles.box}>
            {cart.length > 0 ? (
              cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  deleteFromCart={deleteFromCart}
                />
              ))
            ) : (
              <p className={styles.mensaje}>carrito vacío</p>
            )}
          </div>

          <button className={styles.clearButton} onClick={clearCart}>
            Limpiar carrito
          </button>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
