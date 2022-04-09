import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (props) => {
  // console.log(props.product);
  const { product, handleAddToCart } = props;
  const { name, img, price, id, brand } = product;
  // console.log(props);
  return (
    <div className="product sm:w-64 sm:h-64">
      <img src={img} alt=""></img>
      <div className="product-details">
        <p className="details">Model:{name}</p>
        <p className="details">Brand:{brand}</p>
        <p className="details">price:{price}</p>
        <p className="details">Product Key:{id}</p>
      </div>
      <button onClick={() => handleAddToCart(product)} className="btn-cart">
        <p className="btn-text"> Add to Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
