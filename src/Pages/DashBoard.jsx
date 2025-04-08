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
			<Sidebar/>
			
			<Routes>
				<Route path='dash/overview' element={<OverviewPage />} />
				<Route path='dash/products' element={<ProductsPage />} />
				<Route path='dash/users' element={<UsersPage />} />
				<Route path='dash/sales' element={<SalesPage />} />
				<Route path='dash/orders' element={<OrdersPage />} />
				<Route path='dash/analytics' element={<AnalyticsPage />} />
				<Route path='dash/settings' element={<SettingsPage />} />
			</Routes> 
			 </HashRouter>
		</div>
  )
}

export default DashBoard