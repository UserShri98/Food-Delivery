import { useEffect, useState } from "react";

const RestaurantMenu = () => {

    const[resInfo,setResInfo]=useState(null);

    useEffect(() => {
        fetchMenu()
    }, [])


    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=830418&catalog_qa=undefined&submitAction=ENTER")

        const json=await data.json();
        console.log(json)
        setResInfo(json.data)
    }

    if(resInfo===null) return;

    const{name,cuisines,costForTwoMessage}=resInfo?.cards[1]?.card?.card?.info


    return (
        <div>
            <div>
                <h1>{name}</h1>
                <h1>Menu</h1>
                <ul>
                    <li>Panipuri</li>
                    <li>Pavbhaji</li>
                    <li>Pizza</li>
                </ul>
            </div>
        </div>
    )
}
export default RestaurantMenu;