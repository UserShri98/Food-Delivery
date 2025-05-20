import ResturantCards from "./ResturantCards";
import resList from "../utils/mockData";
import { useState } from "react";

  const Body = () => {
    const [listOfRestuarants,setListRestuarants]=useState(resList);

    return (
      
      <div >
        <div>
          <button className='filter-btn' onClick={()=>{
           let filteredList=listOfRestuarants.filter((res)=>res.avgRating>4)
           setListRestuarants(filteredList)
          }
          }>Top Rated Restaurants</button>
        </div>
     <div className='res-container'>
         
           {listOfRestuarants.map(restuarant=><ResturantCards key={restuarant.id} resData={restuarant}/>)}
 

       </div>
      

      </div>
    )
  }

  export default Body;