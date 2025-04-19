import React, { use } from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch ,useSelector} from "react-redux";
import { removeFromCart } from "../../Features/CartSlice";
import { useSelect } from "@material-tailwind/react";

const CartItem = ({ item}) => {

    const dispatch = useDispatch();
    const handleRemove = (items) => {

        dispatch(removeFromCart(items));
    }
  
   


    
  return (
    
    <div className="flex items-center justify-between gap-4 p-4 bg-white rounded-2xl shadow-md mb-1">
      <div className="flex items-center gap-4">
        <img src={item?.image} alt={item?.name} className="w-16 h-16 rounded-xl" />
        <div>
          <h4 className="text-[12px] font-semibold">{item.title}</h4>
          <p className="text-gray-500">${item.price}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          className="px-1 lg:px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
          
        >
          -
        </button>
        <span className="lg:px-2 px-0.5">{item.quantity}</span>
        <button
          className=" px-1 lg:px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
          +
        </button>
      </div>

      <div>
        <p className="text-sm lg:text-lg font-semibold">
          ugx 4000
        </p>
      </div>
      <button  className="text-red-500 hover:text-red-700" onClick={()=>handleRemove(item)} >
        <MdDelete/>
      </button>
    </div>
  );
};

export default CartItem;
