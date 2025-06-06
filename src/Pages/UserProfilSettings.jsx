import FormCompo from '../Components/Billing/FormCompo'

const UserProfilSettings = () => {
  return (
    <div className='flex  lg:w-full my-30 gap-20'>


<div className='hidden lg:block md:block ml-10'>
<div>
<h2 className='font-semibold'>Manage My Account</h2>
<ul className='my-3 flex-col gap-5'>
    <li>My Profile</li>
    <li>Adress Book</li>
    <li>My Payment Optios</li>
</ul>
</div>
<div>
    <h2 className='font-semibold'>My Orders</h2>
    <ul>
        <li>My Returns</li>
        <li>My Cancellations</li>

    </ul>    
</div>
</div>
{/* {name,placeholder,inputType} */}

<div className='lg:w-1/2 w-full mx-3  lg:ml-60'>
<div className='flex lg:flex-row md:flex-row flex-col gap-4 w-full'>
<FormCompo name={"FirstName"} placeholder={"Md"} inputType={'text'}/>
<FormCompo name={"LastName"} placeholder={"Rimel"} inputType={'text'}/>
</div>
<div className='flex gap-4 lg:flex-row md:flex-row flex-col '>
<FormCompo name={"Email"} placeholder={"remel@gmail.com"} inputType={'text'}/>
<FormCompo name={"Address"} placeholder={"Address"} inputType={'text'}/>
</div>

<div className=''>
    <div className='mb-2'>
        <h2 className='text-gray-500 mb-2 font-semibold'>Password Changes</h2>
    </div>
    
    <div className='flex flex-col gap-4'>
    <input type="text" name="current-password" placeholder="current password" className='lg:w-full w-full md:w-full  focus:outline-none bg-gray-300  h-10 rounded-b-md'/>
    <input type="text" name="new-password" placeholder="New password" className='lg:w-full w-full md:w-95 md:w-full focus:outline-none bg-gray-300  h-10 rounded-b-md'/>
    <input type="text" name="comfirm-password" placeholder="comfirm password" className='lg:w-full md:w-95 w-full md:w-full focus:outline-none bg-gray-300  h-10 rounded-b-md'/>
    </div>
    <div className='flex gap-2 items-center my-2 flex-row-reverse '>
            <button className='bg-red-700 font-semibold text-white rounded-md p-2'>Save Changes</button>
            <button className='bg-black font-semibold text-white rounded-md p-2'>Cancel</button>
    </div>

</div>
</div>




    </div>
  )
}

export default UserProfilSettings