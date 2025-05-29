import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import { lazy,Suspense } from 'react';
import UserContext from './utils/UserContext';
// import Grocery from './components/Grocery';

import {createBrowserRouter,Outlet} from 'react-router-dom'


const Grocery=lazy(()=>import('./components/Grocery'))

function App() {
 
 const [userName,setUserName]=useState();

 useEffect(()=>{
  //API Call
  const data={
    name:"Shrinath"
  }
  setUserName(data.name)
 },[])

  return (
    <>
    <UserContext.Provider value={{loggedUser:userName}}>
      <div>
        <Header />
       <Outlet/>
      </div>
      </UserContext.Provider>

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
    path:'/grocery',
    element:<Suspense><Grocery/></Suspense>
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
