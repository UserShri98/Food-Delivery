import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import cuisineIcon from './assets/cuisine-icon-3.jpg';
import './App.css'

function App() {

  // Header
  //logo
  //nav-items
  // Body
  // search
  //resturant cards

  // Footer
  // copyright
  //links
  //contact

  const Header = () => {
    return (

      <div className='header'>
        <div>
          <img src={cuisineIcon} className="logo" />
        </div>
        <div className='nav-items'>
          <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    )
  }

  



  const resList = [
  
      {
        
          id: '1',
          name: 'Indian Coffee House',
          cloudinaryImageId: 'fa4944f0cfdcbca2bec1f3ab8e3db3f7',
          locality: 'Chhindwara City',
          areaName: 'Khajri Chowk',
          costForTwo: '₹300 for two',
          cuisines: ['South Indian', 'Chinese', 'Fast Food', 'Beverages'],
          avgRating: 4.6,
          veg: true,
          sla: {
            deliveryTime: 51,
            lastMileTravel: 13.1,
            slaString: '50-55 mins',
          },
        },
      
        {
        
          id: '2',
          name: 'Chandan',
          cloudinaryImageId: 'fa4944f0cfdcbca2bec1f3ab8e3db3f7',
          locality: 'Chhindwara City',
          areaName: 'Khajri Chowk',
          costForTwo: '₹300 for two',
          cuisines: ['South Indian', 'Chinese', 'Fast Food', 'Beverages'],
          avgRating: 4.6,
          veg: true,
          sla: {
            deliveryTime: 51,
            lastMileTravel: 13.1,
            slaString: '50-55 mins',
          },
        },   

         {
        
          id: '3',
          name: 'Indian Coffee House',
          cloudinaryImageId: 'fa4944f0cfdcbca2bec1f3ab8e3db3f7',
          locality: 'Chhindwara City',
          areaName: 'Khajri Chowk',
          costForTwo: '₹300 for two',
          cuisines: ['South Indian', 'Chinese', 'Fast Food', 'Beverages'],
          avgRating: 4.6,
          veg: true,
          sla: {
            deliveryTime: 51,
            lastMileTravel: 13.1,
            slaString: '50-55 mins',
          },
        },
    
         {
        
          id: '4',
          name: 'Indian Coffee House',
          cloudinaryImageId: 'fa4944f0cfdcbca2bec1f3ab8e3db3f7',
          locality: 'Chhindwara City',
          areaName: 'Khajri Chowk',
          costForTwo: '₹300 for two',
          cuisines: ['South Indian', 'Chinese', 'Fast Food', 'Beverages'],
          avgRating: 4.6,
          veg: true,
          sla: {
            deliveryTime: 51,
            lastMileTravel: 13.1,
            slaString: '50-55 mins',
          },
        },
    
  ]


  const ResturantCards = ({ resData }) => {

     const {name,avgRating,cuisines,cloudinaryImageId,sla:{deliveryTime}}=resData
    return (
      <div className='res-cards' style={{ backgroundColor: "#f0f0f0" }}>
        <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} />
        {name}
        <h4>{avgRating}*</h4><br/>
        <h4 style={{ fontSize: "large" }}>{deliveryTime}</h4>
        <h6>{cuisines.join(', ')}</h6>

      </div>
    )
  }


  const Body = () => {
    return (
      <div >
        <div className='search'>
          Search
        </div>
       <div className='res-container'>
          {/* <ResturantCards resData={resList[0]} />
         <ResturantCards resData={resList[1]} />
        <ResturantCards resData={resList[2]} />
        <ResturantCards resData={resList[3]} /> */}
           {resList.map(restuarant=><ResturantCards key={restuarant.id} resData={restuarant}/>)}
 

       </div>
      

      </div>
    )
  }



  return (
    <>
      <div>
        <Header />
        <Body />
      </div>

    </>
  )
}

export default App
