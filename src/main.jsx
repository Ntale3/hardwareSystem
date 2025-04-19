
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppProvider } from './Context/AppContext.jsx'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import Productreducer, { fetchProducts } from './Features/ProductSlice.jsx'
import productsApi from './Features/ProductsApi.jsx'
import  cartreducer from './Features/CartSlice.jsx'
const store=configureStore({
  reducer:{
    products:Productreducer,
    cart:cartreducer,
    [productsApi.reducerPath]:productsApi.reducer, 
  },
middleware:(getDefaultMiddleware)=>
  getDefaultMiddleware().concat(productsApi.middleware),
 
})
store.dispatch(fetchProducts())
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
<AppProvider>
       <App/>
  </AppProvider>
  </Provider>
 
    
 
)
