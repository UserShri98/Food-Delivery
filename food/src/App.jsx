import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';

import {createBrowserRouter,Outlet} from 'react-router-dom'

function App() {

 
  return (
    <>
      <div>
        <Header />
       <Outlet/>
      </div>

    </>
  )
}

 export const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
     path:'/',
    element:<Body/>
      },
 {
    path:'/about',
    element:<About/>
  },
    {
    path:'/contact',
    element:<Contact/>
  },
   {
    path:'/restaurant/:resId',
    element:<RestaurantMenu/>
  },
    ],
    errorElement:<Error/>
  },
])


export default App
