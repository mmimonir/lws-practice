import React from "react";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";

const Product = () => {
  const products = useSelector((state) => state.products);
  // console.log(products);
  return (
    <>
      {products.length > 0 ? (
        products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))
      ) : (
        <h1>No Items in Stock</h1>
      )}
    </>
  );
};

export default Product;
