import { useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

const StatCard = ({ product} ) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="max-w-sm w-full bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
      <motion.img
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-cover"
        whileHover={{ scale: 1.05}}
        transition={{ duration: 0.4 }}
      />
      <div className="p-4 space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
        <p className="text-gray-600 text-sm">{product.description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold text-blue-600">UGX {product.price}</span>
          <div className="flex space-x-2">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-xl flex items-center space-x-1"
              onClick={() => alert("Added to cart!")}
            >
              <ShoppingCart size={18} />
              <span>Add to Cart</span>
            </button>
            <button
              onClick={toggleFavorite}
              className={`p-2 rounded-full border ${
                isFavorite ? "bg-red-100 text-red-500 border-red-300" : "text-gray-500 border-gray-300"
              } transition-colors duration-200`}
            >
              <Heart fill={isFavorite ? "currentColor" : "none"} size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
