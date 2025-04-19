import { useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addToCart } from "../Features/CartSlice";
import { useNavigate } from "react-router-dom";

//const sampleProduct = {
    //   image: "https://i.pinimg.com/474x/24/4e/d7/244ed74438d90fd62bc90672458897d7.jpg",
    //   title: "Spade with 3D",
    //   description: "This Spade was used by  Heisenburg Danger! naah its The Danger.",
    //   price: 100000,
    // };

export default function ProductViewCard({ product }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const toggleFavorite = () => setIsFavorite(!isFavorite);
  const dispatch= useDispatch()
  const navigate=useNavigate();
  const handleAddtoCart = (product) => {
    dispatch(addToCart(product));
    navigate('/cart');

  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-4xl mx-auto p-4 md:p-8 bg-white shadow-xl rounded-2xl flex flex-col md:flex-row gap-6"
    >
      {/* Product Image */}
      <div className="flex-1">
        <motion.img
          src={product?.image}
          alt={product?.title}
          className="w-full h-64 md:h-full object-cover rounded-xl"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-2"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {product?.title}
          </motion.h2>
          <p className="text-gray-700 mb-4">{product?.description}</p>
          <p className="text-xl font-semibold text-red-800">${product?.price}</p>
        </div>

        {/* Actions */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleAddtoCart(product)}
            className="flex items-center justify-center gap-2 bg-black hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded-xl transition"
          >
            <ShoppingCart size={20} />
            Add to Cart
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleFavorite}
            className={`flex items-center justify-center gap-2 border-2 ${
              isFavorite ? "border-red-500 text-red-500" : "border-gray-300 text-gray-700"
            } font-semibold py-2 px-4 rounded-xl transition`}
          >
            <motion.div
              animate={{ scale: isFavorite ? 1.2 : 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Heart fill={isFavorite ? "red" : "none"} size={20} />
            </motion.div>
            {isFavorite ? "Favorited" : "Add to Favorites"}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
