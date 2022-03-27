import React, { useState } from "react";
import { ProductModal } from "./productsModal";
import { ProductsTable } from "./productsTable";
export const ProductsScreen = () => {
  const [openModal, setOpenModal] = useState(false);
  const [productId, setProductId] = useState(0);
  return (
    <div className="container vh-100 d-flex justify-content-center bg-dark">
      {openModal ? <ProductModal setOpenModal={setOpenModal} productId={productId} /> : null}
      <div className="row w-100">
        <div className="w-80 mt-5">
          <ProductsTable setOpenModal={setOpenModal} openModal={openModal} setProductId={setProductId}/>
        </div>
      </div>
    </div>
  );
};
