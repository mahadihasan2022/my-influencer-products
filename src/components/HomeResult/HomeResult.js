import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import './HomeResult.css'

const HomeResult = (props) => {
  // console.log(props.product);
  const { product, handleAddToCart } = props;
  const { name, img, price, id, brand } = product;
  // console.log(props);
  return (
    <div>
      <div className="product-info sm:w-64 sm:h-64">
        <img src={img} alt=""></img>
        <div className="product-details-info">
          <p className="text-details">Model:{name}</p>
          <p className="text-details">Brand:{brand}</p>
          <p className="text-details">price:{price}</p>
          <p className="text-details">Product Key:{id}</p>
        </div>
        <button onClick={() => handleAddToCart(product)} className="btn-cart">
          <p className="btn-text"> Add to Cart</p>
          <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default HomeResult;
