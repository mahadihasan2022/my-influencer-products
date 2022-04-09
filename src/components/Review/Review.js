import useReviews from "../CustomHooks/useReviews";
import ShowReview from "../ShowReview/ShowReview";
import "./Review.css";

const Shop = () => {
  const [products, setProducts] = useReviews([]);

  const handelRemove = (product) => {
    // console.log(product);
    const rest = product.filter((pd) => pd.id !== product.id);
    setProducts(rest);
  };
  return (
    <div className="shop p-12">
      <h1 className="text-center font-bold text-4xl pb-20">
        Customers Reviews
      </h1>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 md:pl-14 product-container">
        {products.map((product) => (
          <ShowReview
            key={product.id}
            product={product}
            handelRemove={handelRemove}
          ></ShowReview>
        ))}
      </div>
    </div>
  );
};

export default Shop;
