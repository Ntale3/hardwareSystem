import { GiTireIronCross } from "react-icons/gi";
import { FaPeopleRoof } from "react-icons/fa6";
import { MdPlumbing } from "react-icons/md";
import { MdOutlineElectricBolt } from "react-icons/md";
import { FaPaintRoller } from "react-icons/fa6";
import { GiHammerNails } from "react-icons/gi";
import { GiConcreteBag } from "react-icons/gi";
import { PiCheckerboard } from "react-icons/pi";
import CategoryComp from "./CategoryComp";


const categories = [
  {
    name: "Tiles",
    icon: <PiCheckerboard/>,
    color: "from-blue-100 to-blue-200",
    Link:"#"
  },
  {
    name: "Cement",
    icon: <GiConcreteBag/>,
    color: "from-green-100 to-green-200",
  },
  {
    name: "Plumbing",
    icon: <MdPlumbing/>,
    color: "from-yellow-100 to-yellow-200",
  },
  {
    name: "Electricals",
    icon: <MdOutlineElectricBolt/>,
    color: "from-red-100 to-red-200",
  },
  {
    name: "Paintings",
    icon: <FaPaintRoller/>,
    color: "from-blue-100 to-blue-200",
    Link:"#"
  },
  {
    name: "Steel & Iron",
    icon: <GiTireIronCross/>,
    color: "from-green-100 to-green-200",
  },
  {
    name: "Tools",
    icon: <GiHammerNails/>,
    color: "from-yellow-100 to-yellow-200",
  },
  {
    name: "Roofings",
    icon: <FaPeopleRoof/>,
    color: "from-red-100 to-red-200",
  },
];

 function BrowseByCategory() {
  return (
    <section className=" px-4 md:px-4 max-w-7xl mx-auto">
           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          
          
           {categories.map((cat, index) => (
         
<CategoryComp key={index} name={cat.name} icon={cat.icon}/>
        
          
        ))} 
      </div>
      
    </section>
    
  );
}
export default BrowseByCategory;