import CartItem from "../Components/cart/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../Features/CartSlice";
import { FaArrowLeft } from "react-icons/fa6";

const Cart = () => {
 
  
const cart=useSelector((state)=>state.cart.items);
//const totalPrice=useSelector((state)=>state.cart.totalAmount);
const dispatch=useDispatch();
function handleClearCart(){
    dispatch(clearCart());
}
   
  return (
    <div className=''>
        
<div className='p-6'>
    <p>Home 
    <span>/Cart</span></p>
</div>
{
    cart.length===0?
    <div className='flex flex-col items-center justify-center '>
        <p className='text-center text-2xl font-semibold text-red-800'>Shopping Cart</p>
        </div>:
        <div className="mx-auto px-2 m-2 ">
        <ul className='flex lg:justify-between lg:text-lg md:text-lg text-[12px] justify-between p-6 shadow-sm'>
            <li className='lg:ml-6 '>Product</li>        
            <li className=' lg:ml-36 ml-38 md:ml-26'>Quantity</li>
            <li className=" lg:mr-64 ml-4 md:mr-30">Subtotal</li>
            
            
        </ul>
    </div>
}





   

<div>

    {
        cart.length===0?<div className='flex flex-col items-center justify-center h-[30vh]'>
        <p className='text-center text-2xl font-semibold'>Your Cart is Empty</p>

       <Link to={'/'}> <button className="text-center  flex items-center mx-2 text-gray-600"> <span><FaArrowLeft className="text-gray-600"/></span>Add Items</button></Link>
        </div> :
        cart.map((item,index)=>(
            <CartItem key={index} item={item} />
        ))
    }
    {/* <CartItem item={dummyProduct}/> */}
    
</div>



{/* buttons in the cart page */}
<div className='flex justify-between items-center mt-4'>
<div className='border border-[1px] ml-4 rounded-sm px-1'>
<Link to={'/'}><p className='m-2 font-semibold'>Return To Shop</p></Link>
</div>

<div className='border border-[1px] mr-4 rounded-sm px-1 cursor-pointer' >
    <p className='m-2 font-semibold cursor-pointer' onClick={()=>handleClearCart()}>Clear Cart</p>
</div>

</div>


<div className='grid lg:flex lg:justify-between '>
<div className='mt-6 ml-4 '>
    <input type="text"  placeholder='Coupon Code' className=" outline-none border border-gray-950 rounded-sm mr-4 w-80 h-10 "/>
    <button className='bg-red-800 h-10 rounded mt-2'><p className='mx-3 text-gray-100 '>Apply Coupon</p></button>
</div>

<div className='border mt-8 lg:w-100 p-6 border-2 m-4 rounded-sm'>
<p className='font-semibold pb-3'>Cart</p>
<div >
<ul className='gap-6'>
    <li className='flex justify-between border-b-[1px]'>
        <p className='m-2'>SubTotal</p>
        <span className='m-2'>100$</span>
    </li>
    <li className='flex justify-between border-b-[1px] '>
    <p className='m-2'>Shipping</p>
    <span className='m-2'>1000$</span>
    </li>
    <li className='flex justify-between border-b-[1px]'>
    <p className='m-2'>
       Total 
    </p>
    <span className='m-2'>
        ugx 800
    </span>
    </li>
</ul>
    
</div>
<div className='text-center m-4 bg-red-800 rounded h-10 flex items-center justify-center'>
  <Link to={'/checkout'}> <button ><p className='text-gray-100'>Procees to checkout</p></button></Link> 
</div>
</div>

</div>

    </div>
  )
}

export default Cart