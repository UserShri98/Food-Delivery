import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

     
const {resId}=useParams();
// console.log(resId)

const resInfo=useRestaurantMenu(resId)

   if(resInfo===null)  return <h2>Loading...</h2>;

    const{name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info
 
    const {itemCards}=resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card
    console.log(resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards)

    return (
        <div>
            <div className="text-center">
                <h1 className="font-bold text-2xl my-6">{name}</h1>
                <p className="font-bold text-lg">{cuisines.join(', ')}-{costForTwoMessage}</p>
                <h1>Menu</h1>
                <ul>
          {itemCards.map(items=><li key={items.card.info.id}>{items.card.info.name}-Rs {items.card.info.price/100}/-</li>)}
                               
  </ul>
            </div>
        </div>
    )
}
export default RestaurantMenu;