import ResturantCards from "./ResturantCards";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
  const [listOfRestuarants, setListRestuarants] = useState([]);


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

      const restaurantCard = cards.find(
        (card) =>
          card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );

      const restaurants =
        restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(
          (restaurant) => restaurant.info
        ) || [];

      setListRestuarants(restaurants);
    } catch (err) {
      console.error("Error fetching restaurant data:", err);
    }
  };


  return (

    <div >
      <div>
        <button className='filter-btn' onClick={() => {
          let filteredList = listOfRestuarants.filter((res) => res.avgRating > 4)
          setListRestuarants(filteredList)
        }
        }>Top Rated Restaurants</button>
      </div>
      <div className='res-container'>

        {listOfRestuarants.map(restuarant => <ResturantCards key={restuarant.id} resData={restuarant} />)}


      </div>


    </div>
  )
}

export default Body;