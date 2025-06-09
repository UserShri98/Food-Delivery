import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

    const [showIndex,setShowIndex]=useState(null)
     
const {resId}=useParams();

const resInfo=useRestaurantMenu(resId)

   if(resInfo===null)  return <h2>Loading...</h2>;

    const{name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info
 
    const {itemCards}=resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card


     const categories=resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c)=>c.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
     )


    return (
        <div>
            <div className="text-center">
                <h1 className="font-bold text-2xl my-6">{name}</h1>
                <p className="font-bold text-lg">{cuisines.join(', ')}-{costForTwoMessage}</p>
                <h1>Menu</h1>
             {categories.map((category,index)=>(
                <RestaurantCategory 
                key={category?.card?.card?.title}
                 data={category?.card?.card}
                 showItems={index===showIndex?true:false}
                 setShowIndex={()=>setShowIndex(index)}
                 />
             ))}
              
             
            </div>
        </div>
    )
}
export default RestaurantMenu;