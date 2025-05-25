import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_LIST } from "../utils/constants";

const RestaurantMenu = () => {

    const[resInfo,setResInfo]=useState(null);
     
const {resId}=useParams();
console.log(resId)

    useEffect(() => {
        fetchMenu()
    }, [])


    const fetchMenu = async () => {
        const data = await fetch(MENU_LIST+resId)

        const json=await data.json();
        console.log(json)
        setResInfo(json.data)
    }

    if(resInfo===null)  return <h2>Loading...</h2>;

    const{name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info
 
    const {itemCards}=resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card

    return (
        <div>
            <div>
                <h1>{name}</h1>
                <p>{cuisines.join(', ')}-{costForTwoMessage}</p>
                <h1>Menu</h1>
                <ul>
          {itemCards.map(items=><li key={items.card.info.id}>{items.card.info.name}-Rs {items.card.info.price/100}/-</li>)}
                               
  </ul>
            </div>
        </div>
    )
}
export default RestaurantMenu;