import { TrashIcon } from "@heroicons/react/solid";
import React from "react";
import "./ShowReview.css";

const ShowReview = (props) => {
  // console.log(props.product);
  const { product, handelRemove } = props;
  const { name, img, comment, ratting } = product;
  // console.log(props);
  return (
    <div className="flex md:p-6 rounded-lg md:w-96 sm:w-auto review-items">
      <div className="flex w-24 h-24 items-center">
        <img src={img} alt=""></img>
      </div>
      <div className="flex text-sm font-semibold">
        <div className="text-left pl-12">
          <p>Name: {name}</p>
          <p>Comment: {comment}</p>
          <p>
            Ratting: <span className="text-orange-400">{ratting}</span>
          </p>
        </div>
        <div className="flex items-center pl-12 ">
          <button onClick={handelRemove}>
            <TrashIcon className="h-5 w-8 text-red-900 btn"></TrashIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowReview;
