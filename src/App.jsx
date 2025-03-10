import React from 'react'
import Cart from './Pages/Cart'
import Home from './Pages/Home'
import Nav from './Components/Common/Nav'
import {SignIn} from './Pages/auth/Sign-in'
import SignUp from './Pages/auth/Sign-up'
import DashBoard from './Pages/DashBoard'
import { HashRouter } from 'react-router-dom'
import CheckOut from './Components/Billing/CheckOut'
import Payment from './Components/Billing/Payment'
import UserProfilSettings from './Components/Profile/UserProfilSettings'
import Footer from './Components/Footer'

const App = () => {
  return (
<>
 
<Nav/>
<UserProfilSettings/>
<Footer/>



</>

  )
}

export default App