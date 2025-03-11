import React from 'react';
const Categ=[
    {title:'Tiles',
    url:'url',},
    {title:'Cement',
    url:'url',}        
    ,{title:'Plumbing',
     url:'url'},
    {title:'Electricals',
    url:'url',},
    {title:'Paintings',
    url:'url',},
    {title:'Steel & Iron',
    url:'url',},
    {title:'Tools',
    url:'url',},
    {title:'Roofings',
     url:'url',},

]
const AdvertSection = () => {
    return(
        
        <div className='flex  justify-between bg-gray-100'>
            {/* categories  */}
                        <div className='hidden lg:block md:block lg:m-4 lg:border-r-[1px] border-gray-300 lg:pr-16 '>
                        <ul className='flex flex-col gap-4 md:gap-2  w-3/4'>
                            {Categ.map((Categ,index)=>{

                                return <li key={index} className="flex items-center ml-1.5 mr-6 lg:pl-13">
                                <p className="text-xl text-blue-950 hover:text-blue-400  ">{Categ.title}</p> </li>
                            })}
                        </ul>
                        </div>

                <div className='flex-3/4 lg:m-4 my-4 mx-2  '>

                    <div className=" justify-center items-center ">                       
                        <div className="bg-yellow-400  h-80 lg:h-96 flex justify-center items-center">
                            <h1 className="text-4xl font-bold">Get 50% off on your first order</h1>
                        </div>
                    </div>

                </div>




        </div>
        
        
    )
};

export default AdvertSection;
