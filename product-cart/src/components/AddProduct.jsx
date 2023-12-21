import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/product/actions";
import uuid from "react-uuid";

const AddProduct = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState([]);

  const inputHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setInput({ ...input, id: uuid() });
    dispatch(addProduct(input));
  };
  return (
    <div className="formContainer">
      <h4 className="formTitle">Add New Product</h4>
      <form
        className="space-y-4 text-[#534F4F]"
        id="lws-addProductForm"
        onSubmit={submitHandler}
      >
        <div className="space-y-2">
          <label for="lws-inputName">Product Name</label>
          <input
            className="addProductInput"
            id="lws-inputName"
            type="text"
            required
            onChange={inputHandler}
            name="name"
          />
        </div>

        <div className="space-y-2">
          <label for="lws-inputCategory">Category</label>
          <input
            className="addProductInput"
            id="lws-inputCategory"
            type="text"
            required
            onChange={inputHandler}
            name="category"
          />
        </div>

        <div className="space-y-2">
          <label for="lws-inputImage">Image Url</label>
          <input
            className="addProductInput"
            id="lws-inputImage"
            type="text"
            required
            onChange={inputHandler}
            name="image_url"
          />
        </div>

        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label for="ws-inputPrice">Price</label>
            <input
              className="addProductInput"
              type="number"
              id="lws-inputPrice"
              required
              onChange={inputHandler}
              name="price"
            />
          </div>

          <div className="space-y-2">
            <label for="lws-inputQuantity">Quantity</label>
            <input
              className="addProductInput"
              type="number"
              id="lws-inputQuantity"
              required
              onChange={inputHandler}
              name="quantity"
            />
          </div>
        </div>

        <button type="submit" id="lws-inputSubmit" className="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
