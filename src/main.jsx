import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop';
import Home from './components/Layout/Home';
import Order from './components/order/order';
import Inventory from './components/Inventory/Inventory';
import Login from './components/LogIn/LogIn';
import cartProductsLoder from './loder/cartProductsLoder';
import Checkout from './components/CheckOut/Checkout';
const router = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>,
      children:[
        {
          path: '/',
          element: <Shop></Shop>
        },
        {
          path: 'order',
          element: <Order></Order>,
          loader: cartProductsLoder
        },
        {
          path: 'inventory',
          element: <Inventory></Inventory>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'checkout',
          element: <Checkout></Checkout>
        }

      ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
