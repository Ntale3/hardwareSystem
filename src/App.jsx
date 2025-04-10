import Cart from './Pages/Cart'
import Home from './Pages/Home'
// import Nav from './Components/Common/Nav'
import {SignIn} from './Pages/auth/Sign-in'
import SignUp from './Pages/auth/Sign-up'
// import DashBoard from './Pages/DashBoard'
import { HashRouter, Route, Routes } from 'react-router-dom'
// import CheckOut from './Components/Billing/CheckOut'
import UserProfilSettings from './Pages/UserProfilSettings'
// import Footer from './Components/Common/Footer'
import About from './Pages/About'
import Contact from './Pages/Contact'
import NotFound from './Pages/NotFound'
import WishList from './Pages/WishList'
import LayOut from './Pages/Layouts/LayOut'
import OverviewPage from "./Pages/adminDashboard/OverviewPage";
import ProductsPage from "./Pages/adminDashboard/ProductsPage";
import UsersPage from "./Pages/adminDashboard/UsersPage";
import SalesPage from "./Pages/adminDashboard/SalesPage";
import OrdersPage from "./Pages/adminDashboard/OrdersPage";
import AnalyticsPage from "./Pages/adminDashboard/AnalyticsPage";
import SettingsPage from "./Pages/adminDashboard/SettingsPage"
// import Sidebar from "./Components/Common/SideBar"
// import { AppContext } from './Context/AppContext'
import DashLayout from './Pages/Layouts/DashLayout'
import ProductCard from './Components/Common/ProductCard'

const App = () => {

  return (
<div>
<HashRouter>
   <Routes>    
    <Route element={<LayOut/>} path='/'>
    <Route element={<Home/>} index/>  
    <Route element={<Contact/>} path='/contact'/>
    <Route element={<Cart/>} path='/cart'/>
    <Route element={<WishList/>} path='/wishList' />
    <Route element={<UserProfilSettings/>} path='/profile'/>
    <Route element={<About/>} path='/about'/>
    </Route>
    <Route element={<NotFound/>} path='*'/>
    <Route element={<SignUp/>} path='/signUp'/>
    <Route element={<SignIn/>} path='/sign-in'/>
 
 <Route element={<DashLayout/>} path='dash'>
        <Route path='dash/overview' element={<OverviewPage />} />
				<Route path='dash/products' element={<ProductsPage />} />
				<Route path='dash/users' element={<UsersPage />} />
				<Route path='dash/sales' element={<SalesPage />} />
				<Route path='dash/orders' element={<OrdersPage />} />
				<Route path='dash/analytics' element={<AnalyticsPage />} />
				<Route path='dash/settings' element={<SettingsPage />} />
 </Route>    
  </Routes>  
 </HashRouter> 
 {/* <ProductCard/> */}

</div>

  )
}

export default App