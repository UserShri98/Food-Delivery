import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Cart from './components/Cart';
import RestaurantMenu from './components/RestaurantMenu';
import { lazy,Suspense } from 'react';
import UserContext from './utils/UserContext';
import {Provider} from 'react-redux';
import OrderConfirmation from './components/OrderConfirmation';
import {createBrowserRouter,Outlet} from 'react-router-dom'
import appStore from './utils/appStore';


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
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedUser:userName}}>
      <div>
        <Header />
       <Outlet/>
      </div>
      </UserContext.Provider>
      </Provider>

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
    path:"/order-confirmation",
    element:<OrderConfirmation />
  },
  {
    path:'/grocery',
    element:<Suspense><Grocery/></Suspense>
  },
   {
    path:'/restaurant/:resId',
    element:<RestaurantMenu/>
  },
  {
     path:'/cart',
     element:<Cart/>
  },
    ],
    errorElement:<Error/>
  },
])


export default App
