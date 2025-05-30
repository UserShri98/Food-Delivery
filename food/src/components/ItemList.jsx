import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const ItemList=({items})=>{
  const dispatch=useDispatch()

  const handleAddItems=(item)=>{
     dispatch(addItems(item))
  }

    return (
        <div>
        {items.map((item)=>(
            <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">


           <div className="w-9/12">
    
          <div className="py-2" > 
            <span>{item.card.info.name}-</span>    
            <span> 
  {item.card.info.price || item.card.info.defaultPrice/100}  ₹ /-</span>
          </div>
          <p className="text-xs">{item.card.info.description}</p>
         </div>
         <div className="w-5/12 p-4">
         <div className="absolute">
            <button className="p-2 mx-16 shadow-lg rounded-lg bg-black text-white" onClick={()=>handleAddItems(item)}>Add +</button>
         </div>
            {item.card.info.imageId && (
  <img className="w-full"
    src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.card.info.imageId}`}
    alt={item.card.info.name || "Food item"}
  />
)}
            </div>
           </div>
           
        ))}
        </div>
    )
}

export default ItemList;