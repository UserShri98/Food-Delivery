import ResturantCards from "./ResturantCards";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestuarants, setListRestuarants] = useState([]);
  const [filteredRes,setFilteredRes]=useState([])
  const [searchText,setSearchText]=useState("")

  useEffect(() => {
    fetchData(); 
  }, []);

 const fetchData = async () => {
  try {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    const cards = json?.data?.cards || [];

    

    const restaurantData = cards.find(
      (card) =>
        card?.card?.card?.id === "restaurant_grid_listing_v2"
    )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    if (Array.isArray(restaurantData)) {
      setListRestuarants(restaurantData);
      setFilteredRes(restaurantData);
    } else {
      console.warn("Restaurant data not found in API response");
    }
  } catch (err) {
    console.error("Error fetching restaurant data:", err);
  }
};

 const onlineStatus=useOnlineStatus();
 if(onlineStatus===false) return (
  <h1>You're not online!Check your internet connection</h1>
 )


  return (

    <div >
      
      <div className='filter-btn flex items-center' >
        <div className="search p-4 m-4">
          <input
          type="text"
          className="border border-solid border-black"
          value={searchText}
          onChange={(e)=>setSearchText(e.target.value)}
          />
          <button className="px-4 py-2 bg-green-300 m-4 rounded-lg" onClick={()=>{
            const filtered=listOfRestuarants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
            setFilteredRes(filtered)
          }}>Search</button>
          </div>
         <div>
             <button
         className="px-4 py-2 bg-gray-200 rounded-lg" onClick={() => {
          let filteredList = listOfRestuarants.filter((res) => res.info.avgRating > 4)
          setFilteredRes(filteredList)
        }
        }>Top Rated Restaurants</button>
         </div>
      </div>
      <div className='flex flex-wrap'>
        {/* {console.log(filteredRes)} */}

        {filteredRes.map(restuarant => 
       <Link key={restuarant.info.id} to={"/restaurant/"+restuarant.info.id}> <ResturantCards key={restuarant.info.id} resData={restuarant} /></Link>
        )}


      </div>


    </div>
  )
}

export default Body;