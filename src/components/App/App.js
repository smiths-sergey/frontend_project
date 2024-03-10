import { useState } from "react";

import Styles from "./app.module.css";

import Product from "../Product/Product";
import DialogModal from "../DialogModal/DialogModal";

function App() {
  const products = [
    {
      id: 1,
      title: "Креветки",
      price: 100,
      description: "Мы вкусные креветки",
    },
    { id: 2, title: "Пицца", price: 1000, description: "Дорогая пицца" },
  ];

  const [modalState, setModalState] = useState({
    isOpen: false,
    message: "",
  });

  const showDialog = (message) => {
    setModalState({
      isOpen: true,
      message: message,
    });
  };

  return (
    <div className={Styles.app}>
      <button onClick={showDialog.bind(this, "Спасибо за регистрацию!")}>
        Зарегистрироваться
      </button>

      {products.map((product) => (
        <Product key={product.id} product={product} showDialog={showDialog} />
      ))}

      {modalState.isOpen && (
        <DialogModal modalState={modalState} setModalState={setModalState} />
      )}
    </div>
  );
}

export default App;
