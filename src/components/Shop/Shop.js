import React, { useEffect, useState } from "react";
import Cart from "../Carts/Carts";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetch("names.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleAddToCart = (product) => {
    // console.log(selectedProduct);
    const newCart = [...carts, product];

    if (newCart.length === 5) {
      alert("you are selected 4 items");
    } else {
      setCarts(newCart);
    }
  };
  const choseHandle = () => {
    const chossed = Math.floor(Math.random() * carts.length);
    const newChossed = carts[chossed];
    setCarts([newChossed]);
    console.log(newChossed);
  };

  const handleRestart = () => {
    setCarts([]);
  };
  return (
    <div className=" card p-16">
      <h1 className="text-4xl font-bold text-center pb-12">
        My Influencer Products
      </h1>
      <div className="shop-container">
        <div className="products-container">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}
        </div>
        <div className="cart-container">
          <h1>Selected Phone</h1>
          {carts.map((cart) => (
            <Cart cart={cart} key={cart.id}></Cart>
          ))}

          <div className="p-4 btn-color">
            <button onClick={choseHandle} className="shop-btn-cart">
              Chosse One
            </button>
          </div>
          <div>
            <button onClick={handleRestart} className="shop-btn-cart">
              Restart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
