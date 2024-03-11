import { useState } from "react";
import { Spin } from "antd";

import Styles from "./main.module.css";

import { useFetch } from "../customHooks/useFetch";

import Product from "../Product/Product";
import DialogModal from "../DialogModal/DialogModal";

function Main() {
  const [products, isLoading] = useFetch(
    "https://65edcc3708706c584d9a9e72.mockapi.io/products"
  );

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
    <div className={Styles.main}>
      <Spin spinning={isLoading}>
        {products.map((product) => (
          <Product key={product.id} product={product} showDialog={showDialog} />
        ))}
        {!products.length && <div className={Styles.spin}></div>}
      </Spin>

      {modalState.isOpen && (
        <DialogModal modalState={modalState} setModalState={setModalState} />
      )}
    </div>
  );
}

export default Main;
