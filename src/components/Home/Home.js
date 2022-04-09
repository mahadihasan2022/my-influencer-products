import React, { useEffect, useState } from "react";
import HomeResult from "../HomeResult/HomeResult";
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
    <div className="md:p-16 card-contain">
      <h1 className="text-center text-4xl font-bold pb-12">
        My Influencer Products
      </h1>
      <div className="shop-contain">
        <div className="products-contain">
          {products.map((product) => (
            <HomeResult
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            ></HomeResult>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
