import StatCard from "./StatCard";

const dummyProduct = {
  image: "https://i.pinimg.com/474x/f9/0a/a7/f90aa7243e10b8a85145da71e4a8b421.jpg",
  title: "Stylish Headphones",
  description: "Experience high-quality sound with modern design.",
  price: "89.99",
};

const ProductCard = () => (
  <div className="p-4 grid place-items-center min-h-screen bg-gray-50">
    <StatCard product={dummyProduct} />
  </div>
);

export default ProductCard;
