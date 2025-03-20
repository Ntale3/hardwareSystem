import React from 'react';
import {IoCallOutline} from "react-icons/io5"
import { FaRegEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className='lg:my-10 md:my-5 sm:my-5'>
            <div className='flex gap-2 m-5'>
                <p className='text-gray-400'>Home</p>
                <p>/</p>
                <p >Contact</p>
            </div>
<div className='flex  lg:gap-5 md:gap-5 sm:gap-5 flex-col lg:flex-row md:flex-row sm:flex-row '>    
<div className='w-[340px] h-[457px] bg-gray-100 shadow-xl m-6 lg:mx-6 sm:mx-auto'>
<div className='flex gap-5 items-center p-2 '>
<div className='border bg-red-800 rounded-3xl p-1 text-gray-100 '>
<IoCallOutline size={30}/>
</div>
<p className='font-semibold '>Call To Us</p>
</div>

<div className='flex flex-col ml-2 gap-2 mt-4'>
    <p>We are available 24/7, 7 days a week.</p>
    <p className='pb-6'>Phone: +8801611112222</p>
    <hr/>
</div>

<div className='mt-5'>
<div className='flex gap-5 items-center p-2'>
<div className='border bg-red-800 rounded-3xl p-1 text-gray-100 '>
<span><FaRegEnvelope size={30}/></span>
</div>
<p className='font-semibold '>Write To Us</p>
</div>
<div className='flex flex-col gap-4 ml-2'>
<p className=' mt-4'>Fill out our form and we will contact <br/> you within 24 hours.</p>
<span>Emails: customer@exclusive.com</span>
<span>Emails: customer@exclusive.com</span>
</div>
</div>
</div>

<div className='m-6 bg-white '>
    <div className='lg:flex lg:gap-4 mb-4 grid gap-2 md:flex md:gap-3 '>
        <input type="text" placeholder=' Your Name *' className='bg-gray-200 rounded-sm h-9'/>
        <input type="text" placeholder=' Your Email*' className='bg-gray-200 rounded-sm h-9'/>
        <input type="text" placeholder=' Your Phone *' className='bg-gray-200 rounded-sm h-9'/>

    </div>
    <div className=''>
<textarea id="message" rows="4" className="block h-100 resize-none p-2.5 w-full text-sm text-gray-900 bg-gray-200 rounded-lg  focus:ring-blue-500 focus:border-blue-500   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your Message here..."></textarea>

    </div>
    <div className='flex justify-end mt-2 m'>
        <button className='bg-red-800 p-3 rounded text-white'>Send</button>
    </div>
</div>
</div>  
</div>     
    );
};

export default Contact;