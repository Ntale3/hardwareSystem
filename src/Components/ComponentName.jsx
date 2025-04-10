// import Card from '../Components/CARDS/Card'
import BrowseByCategory from './BrowseByCategory';
import CategSlider from './CategSlider';
import ProductCard from './Common/ProductCard';
import ExploreProducts from './ExploreProducts';
import Corousel from './Corousel';
import FlashSale from './FlashSale';
const ComponentName = () => {        
    return (
        <div>
        <section className="py-12  sm:py-16 lg:py-20">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
       <div className='flex items-center gap-2'>
        <div className='w-2 bg-red-800 rounded'>
            <p className='text-red-800'>`</p>
        </div>
        <div>
        <p className='font-semibold'>Today</p>
        </div>
       
<div>
</div>
        
       </div>
       <div className='py-2'>
            <h1 className='md:sm:text-2xl lg:text-3xl'>Flash Sales</h1>
        </div>

             <div>
             <FlashSale/>
            </div>      
            
            
           
         
    </div>
    <div className='text-center p-2 sm:mt-3 mt-8'>
        <button className=' hover:bg-red-900 bg-red-800 p-2 lg:p-2 md:p-3 text-sm lg:text-lg rounded-sm text-gray-50'>
            View All Products
        </button>
    </div>
    </section>
    {/* Section for Categories*/}
<section className='py-12 bg-white sm:py-16 lg:py-20"'>

<div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
       <div className='flex items-center gap-2'>
        <div className='w-2 bg-red-800 rounded'>
            <p className='text-red-800'>`</p>
        </div>
        <div>
        <p className='font-semibold'>Categories</p>
        </div>
       
<div>
</div>
        
       </div>
       </div>
       
<div className='py-5'>
   <p className='md:sm:text-2xl lg:text-3xl ml-4 md:ml-6 lg:ml-8'>Browse By Category</p> 
</div>

{/* Categories */}
<div>
    <BrowseByCategory/>
</div>


            
</section>

{/* Best Selling */}
<section className='py-12 bg-white sm:py-16 lg:py-20"'>

<div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
       <div className='flex items-center gap-2'>
        <div className='w-2 bg-red-800 rounded'>
            <p className='text-red-800'>`</p>
        </div>
        <div>
        <p className='font-semibold'>This Month</p>
        </div>
       
<div>
</div>
        
       </div>
       </div>
       
<div className='py-5 flex justify-between'>
   <p className='md:sm:text-2xl lg:text-3xl ml-4 md:ml-6 lg:ml-8'>Best Selling Products</p> 
   <button className='hover:bg-red-900 bg-red-800 p-2 lg:p-2 md:p-3 text-sm lg:text-lg rounded-sm text-gray-50'>
            View All 
        </button>
</div>
{/* Best selling products */}
<div >
<Corousel/>
</div>

            
</section>

{/* Advertising Section */}
<section>
<div className='flex-3/4 lg:m-4 my-4 mx-2  '>

<div className=" justify-center items-center ">                       
    <div className="bg-black h-80 lg:h-96 flex justify-center items-center">
        <h1 className="text-4xl font-bold text-gray-100">Get 50% off on your first order</h1>
    </div>
</div>

</div>

</section>
<section className='py-12 bg-white sm:py-16 lg:py-20"'>

<div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
       <div className='flex items-center gap-2'>
        <div className='w-2 bg-red-800 rounded'>
            <p className='text-red-800'>`</p>
        </div>
        <div>
        <p className='font-semibold'>Our Products</p>
        </div>
       
<div>
</div>
        
       </div>
       </div>
       
<div className='py-5'>
   <p className='md:sm:text-2xl lg:text-3xl ml-4 md:ml-6 lg:ml-8'>Explore Our Products</p> 
</div>
<ExploreProducts/>

            
            <div className='text-center p-2 sm:mt-3'>
        <button className='hover:bg-red-900 bg-red-800 p-2 lg:p-2 md:p-3 text-sm lg:text-xl rounded-sm text-gray-50'>
            View All Products
        </button>
    </div>
</section>


<section>
<div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
       <div className='flex items-center gap-2'>
        <div className='w-2 bg-red-800 rounded'>
            <p className='text-red-800'>`</p>
        </div>
        <div>
        <p className='font-semibold'>Featured</p>
        </div>
       
<div>
</div>
        
       </div>
       </div>
       <div className='py-5'>
   <p className='md:sm:text-2xl lg:text-3xl ml-4 md:ml-6 lg:ml-8'>New Arrival</p>
   <div className='flex  gap-2 '>
    <div className=' bg-black col-span-2 row-span-2 h-100 w-50  md:w-50 lg:w-100 lg:ml-50 md:ml-6 ml-4'>
        1
    </div>
    
    <div className='flex flex-col gap-2 '>
<div className='flex bg-black row-span-2  sm:w-50 w-80 md:w-70 lg:w-150 h-48 '>
2
</div>

<div className='flex gap-2'>
    <div className='col-span-1 bg-black sm:w-24 w-39 md:w-34 lg:w-74 h-50'>
3
    </div>

    <div className='col-span-1 bg-black sm:w-24 w-39 md:w-34 lg:w-74 h-50'>
4
    </div>
</div>
    </div>
  </div> 
 </div>



</section>
</div>

    )
}
export default ComponentName;