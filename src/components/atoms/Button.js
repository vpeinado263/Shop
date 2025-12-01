const Button = ({ bgcolor, ccolor, addToCart, id }) => {
  return (
    <>
      <button className="buttonCard" onClick={() => addToCart(id)}>
        Agregar al carrito
      </button>
      <style jsx>{`
        .buttonCard {
          color: ${!ccolor ? "white" : ccolor};
          background-color: ${bgcolor};
          border: none;
          border-radius: 0.5rem;
          box-shadow: 1px 2px 2px black;
          padding: 10px 20px;
          font-weight: bold;
          transition: 0.3s;
          margin: auto;
        }
        .buttonCard:hover {
          transform: translateY(2px);
          box-shadow: none;
          background-color: rgb(41, 104, 200);
        }
      `}</style>
    </>
  );
};
export default Button;
