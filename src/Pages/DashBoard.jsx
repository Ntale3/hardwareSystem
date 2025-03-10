import { HashRouter, Route, Routes } from "react-router-dom";

import Sidebar from "../Components/Common/SideBar";

import OverviewPage from "./adminDashboard/OverviewPage";
import ProductsPage from "./adminDashboard/ProductsPage";
import UsersPage from "./adminDashboard/UsersPage";
import SalesPage from "./adminDashboard/SalesPage";
import OrdersPage from "./adminDashboard/OrdersPage";
import AnalyticsPage from "./adminDashboard/AnalyticsPage";
import SettingsPage from "./adminDashboard/SettingsPage";
const DashBoard = () => {
  return (
    <div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>
			{/* BG */}
			<div className='fixed inset-0 z-0'>
				<div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80' />
				<div className='absolute inset-0 backdrop-blur-sm' />
			</div>
			<HashRouter>
			<Sidebar />
			
			<Routes>
				<Route path='/' element={<OverviewPage />} />
				<Route path='/products' element={<ProductsPage />} />
				<Route path='/users' element={<UsersPage />} />
				<Route path='/sales' element={<SalesPage />} />
				<Route path='/orders' element={<OrdersPage />} />
				<Route path='/analytics' element={<AnalyticsPage />} />
				<Route path='/settings' element={<SettingsPage />} />
			</Routes>
			</HashRouter>
		</div>
  )
}

export default DashBoard