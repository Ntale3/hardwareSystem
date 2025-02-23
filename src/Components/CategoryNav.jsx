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
  ]
const CategoryNav = () => {
  return (
    <div className="py-4 shadow-sm hidden lg:block">
        <ul className="flex gap-6">
            {items.map((items,index)=>{
                return <li key={index} className="flex items-center ml-1.5 ">
                    <p className="text-xl text-blue-950 hover:text-blue-400 ">{items.itemName}</p> <span className="mt-2 hover:text-blue-400">{items.logo}</span></li>
            })}
        </ul>
    </div>





  )
}

export default CategoryNav
