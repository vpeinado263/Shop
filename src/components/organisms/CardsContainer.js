import Card from "../molecules/Card";
import styles from "@/styles/CardsContainer.module.css";

const CardContainer = ({ productos, addToCart }) => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.card}>
          {productos && productos.length > 0 ? (
            productos.map((producto) => (
              <Card
                key={producto.id}
                producto={producto}
                addToCart={addToCart}
              />
            ))
          ) : (
            <p>No hay productos disponibles</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
