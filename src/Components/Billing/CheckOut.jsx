import React from 'react'
import FormCompo from './FormCompo'
import Payment from './Payment'
import Footer from '../Common/Footer'
import Nav from '../Common/Nav'
const CheckOut = () => {
  return (
    < div className='mx-auto'>
    <Nav/>
<div>
    <div>
        <p className='text-xl font-bold m-6'>Billing Details</p>
    </div>
<div className='flex flex-col md:flex-row md:justify-between lg:flex-row gap-10 lg:gap-96'>
   <div className='mx-6 '>
    <FormCompo name={"FirstName"} placeholder={""} inputType={"text"}  />
    <FormCompo name={"CompanyName"} placeholder={""} inputType={"text"} />
    <FormCompo name={"Street Address"} placeholder={""} inputType={"text"}/>
    <FormCompo name={"Apartment, floor, etc. (optional)"} placeholder={""} inputType={"text"}/>
    <FormCompo name={"Town/City"} placeholder={""} inputType={"text"} width={'96'}/>
    <FormCompo name={"Email Address"} placeholder={""} inputType={"text"}/>
    <div className='flex gap-2 items-center'>
    <input type="checkbox" name="checker" id="checker" />
    <div>
      <p className='text-[14px]'>Save this information for  faster check-out next time.</p>
    </div>
    </div>
    
   </div>
    
  


   <div className='mr-8 ml-6  lg:w-1/2 mb-2 '>
    <Payment/>
    </div>
    </div> 
</div>   

  <Footer/>
   
    </div>
  )
}

export default CheckOut