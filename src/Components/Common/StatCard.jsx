import { useState } from "react";
import { Heart} from "lucide-react";
import { CiHeart } from "react-icons/ci";

import { FiShoppingCart } from "react-icons/fi";

import { motion } from "framer-motion";

const StatCard = ({ product} ) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
      <motion.img
        src={product.image}
        alt={product.title}
        className="w-full lg:h-64 md:h-56 h-32 object-cover"
        whileHover={{ scale: 1.05}}
        transition={{ duration: 0.4 }}
      />
      <div className="p-4 space-y-3">
        <h2 className="lg:text-xl md:text-xl text-sm font-semibold text-gray-800">{product.title}</h2>
        <p className="text-gray-600 text-sm">{product.description}</p>
        <div className="flex flex-col lg:flex-row md:flex-row lg:flex md:flex  items-center justify-between mt-4">
          <span className="lg:text-lg text-sm font-bold text-red-800">UGX {product.price}</span>
          <div className="lg:flex lg:space-x-2 md:flex md:flex md:space-x-2 flex space-x-2 ">
            <button
              className="bg-black hover:bg-gray-900 text-white lg:px-3 md:px-2 md:py-2 px-1.5 py-1.5 lg:py-2 rounded-xl lg:flex lg:flex-row  
              md:flex md:flex-row flex  items-center gap-2 "
              // onClick={() => alert("Added to cart!")}
            >
              <FiShoppingCart className="lg:text-lg md:text-[19px] text-[8px]"/>
              <span className="lg:text-[14px] md:text-[14px] text-[6px]">Add to Cart</span>
            </button>
            <button
              onClick={toggleFavorite}
              className={`lg:p-2 md:p-0 rounded-full border ${
                isFavorite ? "bg-red-100 text-red-500 border-red-300" : "text-gray-800 border-gray-700"
              } transition-colors duration-200`}
            >
              <CiHeart  fill={isFavorite &&"currentColor"} className="lg:text-lg md:text-[19px] text-[10px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
