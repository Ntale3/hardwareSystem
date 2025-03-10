import React from 'react'

const FormCompo = ({name,placeholder,inputType}) => {
  
  return (
    <div className='mb-2'>
       <div>
        <p className='text-gray-500 mb-2 font-semibold'>{name}</p>
       </div>
                <div>
    <input type={inputType} placeholder={placeholder} className={`  lg:w-87 w-full focus:outline-none bg-gray-300  h-10 rounded-b-md`}></input>
                
                </div>
    </div>
  )
}

export default FormCompo