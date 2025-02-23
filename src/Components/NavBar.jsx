import { FaLocationDot } from "react-icons/fa6";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoMdCart } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";//humburger
import { useState } from "react";
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

  const[searchBarvisible,SetsearchBarvisible]=useState(false);
  function toggleSearch(icon){
    if(icon===0){
      SetsearchBarvisible(!searchBarvisible);
      
    }
  }


  return (
    <div className='flex justify-between  py-4 px-0.5 border-b-[1px] border-gray-400'>
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

    
    
    </div>
  )
}

export default NavBar