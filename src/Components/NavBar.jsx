import { FaLocationDot } from "react-icons/fa6";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoMdCart } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";//humburger
import { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
const items=[
    {
      itemName:"Tiles",
      logo:<IoIosArrowDown/>
    },
    {
        itemName:"Cement",
        logo:<IoIosArrowDown/>
      },
      {
        itemName:"Plumbing",
        logo:<IoIosArrowDown/>
      },
      {
        itemName:"Electricals",
        logo:<IoIosArrowDown/>
      },
      {
        itemName:"Paintings",
        logo:<IoIosArrowDown/>
      },
      {
        itemName:"Steel & Iron",
        logo:<IoIosArrowDown/>
      },

      {
        itemName:"Tools",
        logo:<IoIosArrowDown/>
      },
      {
        itemName:"Roofings",
        logo:<IoIosArrowDown/>
      },
  ];
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


  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
      {sidebarVisible && (
        <>
          {/* <div className="fixed inset-0  bg-opacity-50 z-50" onClick={toggleSidebar}></div> */}
          <div className="fixed inset-y-0 left-0 bg-white w-64 p-4 z-50" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Categories</h2>
              <RxCross2 size={25} onClick={toggleSidebar} className="text-gray-600 cursor-pointer" />
            </div>
            <ul>
             {items.map((items,index)=>{
              return <li key={index} className="flex items-center ml-1.5 text-xl gap-3 duration-300 hover:bg-blue-500 hover:text-white rounded">
                {items.itemName}
              </li>
             })}
            </ul>
          </div>
        </>
      )}
      <div className='flex justify-between py-4 px-0.5 border-b-[1px] border-gray-400'>
        <div className="flex gap-6">
          <img src="//www.builddirect.com/cdn/shop/files/logo-blue.png?v=1681982602&width=600" alt="" className="w-[187px]"/> 
        </div>
        <div className='flex ml-3 lg:mr-2'>
          <ul className='flex lg:gap-8 gap-2'>
            {NavItems.map((items, index) => {
              if (items.label === 'burger') {          
                return (
                  <li key={index} className="lg:hidden flex items-center text-blue-400 cursor-pointer" onClick={toggleSidebar}>
                    {items.logo}
                  </li>
                )
              }
              if (items.label === 'Cart') {
                return (
                  <li key={index} className="flex items-center justify-center relative" onClick={() => toggleSearch(index)}>
                    <p className="text-blue-400">{items.logo}</p>
                    <span className="absolute top-0 right-0 lg:mr-7 bg-red-400 text-white rounded-full text-xs px-1">3</span>
                    <p className="text-gray-600 hidden lg:block">{items.label}</p>
                  </li>
                )
              }
              return (
                <li key={index} className="flex items-center text-gray-600 cursor-pointer">
                  {items.logo}
                  <p className="hidden lg:block ml-2">{items.label}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      {searchBarvisible && (
        <div className='flex items-center border-b-[1px] border-gray-400 py-2 px-4'>
          <input type="text" className="flex-grow outline-none" placeholder="Search ....." />
          <RxCross2 size={25} onClick={() => toggleSearch(0)} className="text-gray-600 cursor-pointer" />
        </div>
      )}
    </>
  )
}

export default NavBar
