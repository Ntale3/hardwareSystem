import Stats from "./Stats.jsx";

const dummyProduct = {
  image: "https://i.pinimg.com/474x/f9/0a/a7/f90aa7243e10b8a85145da71e4a8b421.jpg",
  title: "Stylish Headphones",
  description: "Experience high-quality sound with modern design.",
  price: "89.99",
};

const ProductCard = () => (
  <div className=" lg:flex lg:place-items-center py-5 md:flex md:gap-3 md:px-2 md:place-items-end px-2">
    <Stats product={dummyProduct} />
  </div>
);

export default ProductCard;
