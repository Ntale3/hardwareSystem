import { IoIosHeartEmpty } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import { AiOutlineSearch } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { GiHamburgerMenu } from "react-icons/gi";
import {useState} from 'react'
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const pages=[
    {
        name:'Home',
        url:'/',
    },
    {
        name:'Contact',
        url:'/contact',
    },
    {
        name:'About',
        url:'/about',
    },
    {
        name:'Sign Up',
        url:'/signUp',
    }
                

]


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

const user=[
    {item:'Manage my Account',
    logo:'url',
    url:'url'
    
    },
    {item:'My orders',
        logo:'url',
        url:'url'
        
        },
        {item:'My Cancellations',
            logo:'url',
            url:'url'
            
            },
            {item:'My Reviews',
                logo:'url',
                url:'url'
                
                },
                {item:'LogOut',
                    logo:'url',
                    url:'url'
                    
                }    
]

const Nav = () => {

    const [sideBarVisible,setsideBarVisible]=useState(false);

    const sideBarToggle=()=>{       
       setsideBarVisible(!sideBarVisible)
       
    }




  return (
    
        <div>
{
    sideBarVisible&& <div className="fixed inset-y-0 left-0 bg-gray-900 w-64 p-4 z-50 text-gray-300" onClick={(e) => e.stopPropagation()}>
    <div className="flex items-center gap-8  border-b-[1px] pb-8 justify-center">
        <p><RxCross2 size={30} onClick={sideBarToggle}/></p>
        <span className="text-2xl font-bold">LOGO</span>
    </div>
    <div className="pt-6 border-b-[1px]">
       <h2 className="font-semibold">Navigation</h2> 
       <div className="pb-6">
        <ul className="flex flex-col gap-2">
            {
                pages.map((items,index)=>{
                    return <li key={index}className="pl-4">
                       <Link to={items.url}><p>{items.name}</p></Link> 
                    </li>
                })
            }
        </ul>
       </div>
    </div>

    <div className="pt-6 border-b-[1px]">
       <h2 className="font-semibold">Our Categories</h2> 
       <div className="pb-6" >
        <ul className="flex flex-col gap-2">
            {
                Categ.map((items,index)=>{
                    return <li key={index}className="pl-4">
                        <p>{items.title}</p>
                    </li>
                })
            }
        </ul>
       </div>
    </div>

    <div className="pt-6 ">
       <h2 className="font-semibold">Account</h2> 
       <div className="pb-6" >
        <ul className="flex flex-col gap-2">
            {
                user.map((items,index)=>{
                    return <li key={index}className="pl-4">
                        <p>{items.item}</p>
                    </li>
                })
            }
        </ul>
       </div>
    </div>



  </div>
}







    <nav className='flex justify-between lg:px-8 pt-6 px-2 lg:border-b-[1px] bg-gray-100 border-gray-400 '>
     <div className='flex items-center lg:pl-8 pl-2 hidden lg:block md:block'>
      <p className='font-bold text-2xl'>Categories</p>
     </div>
    
     <div >
      <ul className='flex gap-6 items-center pt-2 cursor-pointer'>
       {
        pages.map((items,index)=>{
            return <li key={index} className="hidden lg:block">
               <Link to={items.url}>{items.name}</Link> 
            </li>
        })
       }  
      </ul>
     </div>
    
   
     <div>
      <ul className='flex items-center gap-4 items-center lg:pb-2 lg:pr-8'>
        <li>
          <div className="bg-gray-200 rounded-sm flex items-center lg:px-2  sm:w-[400px] lg:w-[250px]">
                  <AiOutlineSearch size={25} />
                  <input
                    className="bg-transparent p-2  focus:outline-none"
                    type="text"
                    placeholder="what are you looking for?"
                  />
                </div>
        </li>
       <Link to={'/wishList'}>  <li><IoIosHeartEmpty size={25}/></li></Link>
        <Link to={'/cart'}><li><LuShoppingCart size={25}/></li></Link>
        <Link to={'/profile'}><li><VscAccount size={25}/></li></Link>
        <li className=" lg:hidden" onClick={()=>sideBarToggle()}><GiHamburgerMenu size={25}/></li>
      </ul>
     </div>
    </nav>
    </div>
        
  )
}

export default Nav