import { dividerClasses } from '@mui/material';
import React from 'react';
import construct from '../Images/4486bd4b-21e0-4eeb-9303-83a02ee9dfce.jpg'
const About = () => {
    

    return (
    <div>
        <section className='lg:flex lg:gap-2 lg:mx-3 flex flex-col gap-10 lg:flex-row '>
            <div className='bg-white w-full h-96 pt-24 '>
<h1 className='mb-3 mx-2 font-bold lg:text-2xl sm:text-[1px]'>Our Story</h1>
<p className='mb-3 mx-2 font-serif '>
Launced in 2015, Exclusive is South Asia’s premier 
online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. 
</p>

<p className='mb-3 mx-2 font-serif'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.

</p>
            </div>
            <div className=' w-full h-96'>
<img src={construct} alt="" className='h-full w-full  h-full object-cover' />
            </div>
        </section>

        <section>

        </section>
    </div>
    
)};
    export default About;
         