import React from "react";
import { useDispatch } from "react-redux";
import { cartAdd } from "../redux/cart/actions";
import { useSelector } from "react-redux";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(cartAdd(product));
  };
  const cartItem = useSelector((state) => state.carts);
  console.log(cartItem);
  return (
    <div className="lws-productCard">
      <img className="lws-productImage" src={product.image_url} alt="product" />
      <div className="p-4 space-y-2">
        <h4 className="lws-productName">{product.name}</h4>
        <p className="lws-productCategory">{product.category}</p>
        <div className="flex items-center justify-between pb-2">
          <p className="productPrice">
            BDT <span className="lws-price">{product.price}</span>
          </p>
          <p className="productQuantity">
            QTY <span className="lws-quantity">{product.quantity}</span>
          </p>
        </div>
        <button className="lws-btnAddToCart" onClick={addToCartHandler}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
