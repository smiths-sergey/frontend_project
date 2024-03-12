import { Spin } from "antd";
import Styles from "./catalogPage.module.css";
import { useFetch } from "../components/customHooks/useFetch";
import Product from "../components/Product/Product";

function CatalogPage() {
  const [products, isLoading] = useFetch(
    "https://65edcc3708706c584d9a9e72.mockapi.io/products"
  );

  
  return (
    <div className={Styles.catalog}>
      <Spin spinning={isLoading}>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
        {!products.length && <div className={Styles.spin}></div>}
      </Spin>
     
    </div>
    
  );
}

export default CatalogPage;
