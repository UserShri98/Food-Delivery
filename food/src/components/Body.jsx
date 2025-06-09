import ResturantCards from "./ResturantCards";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestuarants, setListRestuarants] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");

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
        (card) => card?.card?.card?.id === "restaurant_grid_listing_v2"
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

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <div className="text-center mt-10 text-xl text-red-500 font-semibold">
        You're not online! Check your internet connection.
      </div>
    );

  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-yellow-50 min-h-screen px-6 py-6">
      <div className="max-w-screen-xl mx-auto">
        {/* Filters */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search restaurants..."
              className="border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-200"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-200"
              onClick={() => {
                const filtered = listOfRestuarants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRes(filtered);
              }}
            >
              Search
            </button>
          </div>
          <button
            className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-200"
            onClick={() => {
              const filteredList = listOfRestuarants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRes(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>

        {/* Restaurant Cards */}
        <div className="flex flex-wrap gap-6 justify-center">
          {filteredRes.map((restuarant) => (
            <Link key={restuarant.info.id} to={"/restaurant/" + restuarant.info.id}>
              <ResturantCards resData={restuarant} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
