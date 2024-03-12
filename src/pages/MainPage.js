import { Link } from "react-router-dom";

function MainPage() {
  return (
    <>
      <h1>Главная страница</h1>
      <p>
        <Link to={`/catalog`}>Каталог продукции</Link>
      </p>
    </>
  );
}

export default MainPage;
