import React from 'react'
import Cart from './Pages/Cart'
import Home from './Pages/Home'
import Nav from './Components/Common/Nav'
import {SignIn} from './Pages/auth/Sign-in'
import SignUp from './Pages/auth/Sign-up'
import DashBoard from './Pages/DashBoard'
import { HashRouter, Route, Routes } from 'react-router-dom'
import CheckOut from './Components/Billing/CheckOut'
import UserProfilSettings from './Pages/UserProfilSettings'
import Footer from './Components/Common/Footer'
import About from './Pages/About'
import Contact from './Pages/Contact'
import NotFound from './Pages/NotFound'
import WishList from './Pages/WishList'
import LayOut from './Pages/Layouts/LayOut'

const App = () => {

//   async function getData(){
//     const addy="http://localhost:8000/"
//     const response=await fetch(addy);
//     const res=response.json();
//     console.log(res);
// }

// getData()








  return (
<>
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
  </Routes>
</HashRouter>
</>

  )
}

export default App