import { FaLocationDot } from "react-icons/fa6";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoMdCart } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";//humburger
import { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

const NavItems=[
{
  logo:<FaSearch size={30}/>,
  label:'Search'
},
{
  logo:<FaLocationDot size={30}/>,
  label:'Store Locator'
},
{
  logo:< IoMdCart size={30}/>,
  label:'Cart'
},
{
  logo:<RiAccountCircleFill size={30}/>,
  label:'SignIn'
},
{
  logo:<GiHamburgerMenu size={30}/>,
  label:'burger'
}

]
const ListItems=({item,className})=>{
  return(
    <li className={className}>
       {item.logo}
    </li>
  )
}
const NavBar = () => {

  const[searchBarvisible,SetsearchBarvisible]=useState(true);
  function toggleSearch(icon){
    if(icon===0){
            SetsearchBarvisible(!searchBarvisible);
      
    }
  }


  return (
   searchBarvisible ? <div className='flex justify-between  py-4 px-0.5 border-b-[1px] border-gray-400'>
     <div className="flex gap-6">
      <img src="//www.builddirect.com/cdn/shop/files/logo-blue.png?v=1681982602&width=600" alt="" className="w-[187px]"/> 
          
    </div>
    
    <div className='flex ml-3 lg:mr-2'>
      <ul className='flex lg:gap-8 gap-2'>
       {NavItems.map((items,index)=>{
        if(items.label==='burger'){          
          return(
            <ListItems
            key={index}
            item={items}
            className="lg:hidden flex items-center text-blue-400"
            />
          )
        }
      return <li key={index} className="flex items-center justify-center" onClick={()=>toggleSearch(index)}><p className="text-blue-400">{items.logo}</p> <p className="text-gray-600 hidden lg:block">{items.label}</p></li>
     
        }
    
       )}
      </ul>
     
    </div>  
    
    </div>:
    <div className="flex items-center py-4 px-0.5 shadow-sm justify-center">
 <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px] ">
        <AiOutlineSearch size={25} className="text-gray-600"/>
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="Search ....."
        />
        
      </div>
      <RxCross2 size={25} onClick={()=>toggleSearch(0)} className="text-gray-600" />
      </div>
  )
}

export default NavBar
