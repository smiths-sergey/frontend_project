import Styles from "./product.module.css";
function Product(props) {
  const { title, description, price, img } = props.product;
  return (
    <div className={Styles.product}>
      <img src={img} alt="My Image" width="300" />
      <p>{title}</p>
      <p>{description}</p>
      <p>{price}</p>
      <button
        onClick={props.showDialog.bind(
          this,
          `Товар ${title} добавлен в корзину`
        )}
      >
        В корзину
      </button>
    </div>
  );
}

export default Product;
