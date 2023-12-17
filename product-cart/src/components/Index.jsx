import React from "react";
import Product from "./Product";
import AddProduct from "./AddProduct";

const Index = () => {
  return (
    <>
      <main className="py-16">
        <div className="productWrapper">
          <div className="productContainer" id="lws-productContainer">
            <Product />
          </div>
          <div>
            <AddProduct />
          </div>
        </div>
      </main>
    </>
  );
};

export default Index;
