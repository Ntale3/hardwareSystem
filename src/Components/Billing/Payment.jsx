import { useSelector } from "react-redux"
import ItemCheck from "./ItemCheck"

const Payment = () => {
    const cartItems = useSelector((state)=>state.cart.items)
    const item = {
        name: "Product Name",
        image: "https://via.placeholder.com/150",
        price: 1500
    }
  return (
    <div  className=''>

        <div>
            {
                cartItems.map((item, index) => (
                    <ItemCheck key={index} item={item}/>
                ))
            }
            {/* <ItemCheck item={item}/> */}
        </div>
        
      

        <div>
            <div className='border-b-1 border-gray-200'>
                <ul className='flex justify-between mb-2 items-center'>
                    <li className='my-6'><p>SubTotal</p></li>
                    <li><p className='my-6'>$1500</p></li>
                </ul>
            </div>
        </div>
        <div>
            <div className='border-b-1 border-gray-200'>
                <ul className='flex justify-between mb-2'>
                    <li className='my-6'><p>Shipping</p></li>
                    <li><p className='my-6'>Free</p></li>
                </ul>
            </div>
        </div>
        <div>
            <div className=''>
                <ul className='flex justify-between mb-2 mt-3'>
                    <li><p>Total</p></li>
                    <li><p className=''>$17000</p></li>
                </ul>
            </div>
        </div>

        <div className='flex justify-between my-6'>
            <div className=''>
                <input type="radio" name="mobileMoney" id="mobile" className='mr-2'/>
                <label htmlFor="mobile" className=''>Bank</label>
            </div>
            <div>
                <ul className='flex gap-2'>
                    <li>Airtel</li>
                    <li>MTN Money</li>
                    <li>Lyca</li>
                </ul>
            </div>
           
        </div>
        <div>
                <input type="radio" name="cash" id="cash" className='mr-2'/>
                <label htmlFor="cash">Cash on delivery</label>
            </div>

            <div className='flex gap-3 my-5'>
                <input type="text" name="" id="" placeholder='Coupon Code' className='focus:outline-none border-2 rounded-sm lg:h-13 h-10 w-fit '/>
                <button className='bg-red-800 rounded-xl lg:h-13 h-10'><p className='text-white m-3 text-[12px] lg:text-[18px] w-36'>Apply Coupon</p></button>
            </div>

            <div className='mt-3'>
                                <button className='bg-red-800 rounded-xl'><p className='text-white m-3'>Place Order</p></button>

            </div>
    </div>
  )
}

export default Payment