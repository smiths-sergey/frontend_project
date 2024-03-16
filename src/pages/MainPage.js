import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProducts, deleteSingleProduct } from "../store/productsSlice";
import { getProducts } from "../store/productsSelectors";
import products from "../products.json";

function MainPage() {
  const dispatch = useDispatch();
  const storeProducts = useSelector(getProducts);

  useEffect(() => {
    dispatch(addProducts(products));
  }, []);

  const onDeleteProductHandler = (id) => () => {
    dispatch(deleteSingleProduct({ id }));
  };

  return (
    <div>
      {storeProducts.length > 0 &&
        storeProducts.map((product) => {
          return (
            <div key={product.id}>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>{product.price}</p>
              <button onClick={onDeleteProductHandler(product.id)}>
                Удалить товар
              </button>
              <hr />
            </div>
          );
        })}
    </div>
  );
}
export default MainPage;
