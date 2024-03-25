
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import './App.css';

import React from 'react'
import LayOut from '../LayOut/LayOut';
import Cart from '../Cart/Cart';
import Home from './../Home/Home';
import Product from './../Product/Product';
import Register from './../Register/Register';
import Login from './../Login/Login';
import Category from './../Category/Category';
import Brands from './../Brands/Brands';
import ProtectRoutes from '../ProtectRoutes/ProtectRoutes';
import ProductDetails from '../ProductDeatails/ProductDetails';
import Payment from '../Payment/Payment';
import AllOrders from '../AllOrders/AllOrders';
import SpecificCategory from '../SpecificCategory/SpecificCategory';
import Profile from '../Profile/Profile';

export default function App() {

  let route = createHashRouter([
    {
      path: "/", element: <LayOut />, children: [

        { path: "home", element: <ProtectRoutes><Home /></ProtectRoutes> },
        { path: "cart", element: <ProtectRoutes><Cart /></ProtectRoutes> },
        { path: "brands", element: <ProtectRoutes><Brands /></ProtectRoutes> },
        { path: "product", element: <ProtectRoutes><Product /></ProtectRoutes> },
        { path: "register", element: <Register /> },
        { path: "login", element: <Login /> },
        { path: "category", element: <ProtectRoutes><Category /> </ProtectRoutes> },
        { path: "payment", element: <ProtectRoutes><Payment /> </ProtectRoutes> },
        { path: "allorders", element: <ProtectRoutes><AllOrders /> </ProtectRoutes> },
        { path: "productDetails/:id", element: <ProtectRoutes><ProductDetails /> </ProtectRoutes> },
        { path: "specificCAtegory/:id", element: <ProtectRoutes><SpecificCategory /> </ProtectRoutes> },
        { path: "profile", element: <ProtectRoutes><Profile /> </ProtectRoutes> },
      ]
    }
  ])
  return <RouterProvider router={route}></RouterProvider>

}
