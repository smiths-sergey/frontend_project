import { useParams } from "react-router-dom";
import Product from "../components/Product/Product";
import { useFetch } from "../components/customHooks/useFetch";

function CardPage() {
  const { id } = useParams();
  const [product, isLoading] = useFetch(
    `https://65edcc3708706c584d9a9e72.mockapi.io/products/${id}`
  );


  return (    
    <Product key={product.id} product={product} />    
  );
}

export default CardPage;
