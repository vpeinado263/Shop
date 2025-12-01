import Button from "../atoms/Button";
import styles from "@/styles/Card.module.css";
import Image from "next/image";

const Card = ({ producto, addToCart }) => {
  const { id, title, text, img, price, bgcolor, ccolor } = producto;

  return (
    <>
      <div className={styles.containerCard}>
        <figure className={styles.productCard}>
          <h5 className={styles.productPrice}>$ {price}</h5>
          <Image
            src={img}
            alt={title}
            width={270}
            height={200}
            className={styles.productImage}
          />
          <figcaption>
            <h3 className={styles.productTitle}>{title}</h3>
          </figcaption>
          <p className={styles.productDescription}>{text}</p>
          <Button
            bgcolor={bgcolor}
            ccolor={ccolor}
            addToCart={addToCart}
            id={id}
          />
        </figure>
      </div>
    </>
  );
};
export default Card;
