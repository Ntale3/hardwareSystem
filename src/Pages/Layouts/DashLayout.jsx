import { Outlet} from "react-router-dom"
import Sidebar from "../../Components/Common/SideBar"
const DashLayout = () => {
  return (
    <div>
    <div className='flex  bg-gray-900 text-gray-100 overflow-hidden'>
    <div className='fixed inset-0 z-0'>
				<div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80' />
				<div className='absolute inset-0 backdrop-blur-sm' />
			</div>

            <Sidebar/>

            <main>
                <Outlet/>
            </main>





    </div>
    </div>




  )
}

export default DashLayout