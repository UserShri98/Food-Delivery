import ResturantCards from "./ResturantCards";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";

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


  return (

    <div >
      
      <div className='filter-btn' >
        <div className="search">
          <input
          type="text"
          value={searchText}
          onChange={(e)=>setSearchText(e.target.value)}
          />
          <button onClick={()=>{
            const filtered=listOfRestuarants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
            setFilteredRes(filtered)
          }}>Search</button>
          </div>
        <button className="top-rated"onClick={() => {
          let filteredList = listOfRestuarants.filter((res) => res.info.avgRating > 4)
          setFilteredRes(filteredList)
        }
        }>Top Rated Restaurants</button>
      </div>
      <div className='res-container'>
        {/* {console.log(filteredRes)} */}

        {filteredRes.map(restuarant => <ResturantCards key={restuarant.info.id} resData={restuarant} />)}


      </div>


    </div>
  )
}

export default Body;