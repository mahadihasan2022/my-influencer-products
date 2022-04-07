import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import Search from "../Search/Search";
import "./Home.css";

const Home = () => {
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
  };

  return (
    <div className="p-16 card">
      <h1 className="text-center text-4xl font-bold pb-12">
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
      </div>
    </div>
  );
};

export default Home;
