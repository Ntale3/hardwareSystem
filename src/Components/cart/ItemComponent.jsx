import React from 'react'
import { LuChevronUp } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
const ItemComponent = ({image,itemName,itemPrice,quatity,subtotal}) => {
  return (
    <div className="mx-auto px-2 shadow-sm m-2  mb-6 ">
        <ul className='flex justify-between p-6 '>
            <li className='flex items-center'>
                <img src={image} alt="" className='w-15' />
            <p className='text-xs lg:text-lg'>{itemName}</p>
            </li>
            <li>{itemPrice}</li>
            <li >
                <div className='border flex gap-1 items-center rounded-sm '>
                    <p className='ml-1'>{quatity}</p>
                    
                    <div className='mr-1 '>
                       <p><LuChevronUp/></p> 
                       <p><IoIosArrowDown/></p>
    
                    </div>
                    </div>
                
            </li>
            <li>{subtotal}</li>
        </ul>
    </div>
  )
}

export default ItemComponent