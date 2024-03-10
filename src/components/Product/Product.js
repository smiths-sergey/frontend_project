import Styles from "./product.module.css";
function Product(props) {
  return (
    <div className={Styles.product}>
      <p>{props.product.title}</p>
      <p>{props.product.description}</p>
      <p>{props.product.price}</p>
      <button
        onClick={props.showDialog.bind(
          this,
          `Товар ${props.product.title} добавлен в корзину`
        )}
      >
        В корзину
      </button>
    </div>
  );
}

export default Product;
