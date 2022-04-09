import React from 'react';

const Results = (props) => {
    // const { result } = props.data;
    const { name, image, price, slug, brand } = props.data;

    return (
        <div className="product">
        <img src={image} alt=""></img>
        <div className="product-details">
          <p className="product-name">Model:{name}</p>
          <p>Brand:{brand}</p>
          <p>price:{price}</p>
          <p>id:{slug}</p>
        </div>
      </div>
      );
}

export default Results;