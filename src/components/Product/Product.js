import { Link } from "react-router-dom";
import Styles from "./product.module.css";
function Product(props) {
  const { title, description, price, img, id } = props.product;
  return (
    <div className={Styles.product}>
      <h2>
        <Link to={`/catalog/${id}`}>{title}</Link>
      </h2>
      <img src={img} alt="My Image" width="300" />

      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
}

export default Product;
