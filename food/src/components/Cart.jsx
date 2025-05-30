import { useSelector } from "react-redux";
import ItemList from "./ItemList";


const Cart=()=>{
 
    const cartItems=useSelector((store)=>store.cart.items)

    return <div className="text-center font-bold m-4 p-4">
 <h1 className="font-bold text-2xl">Cart</h1>
 <div className="w-6/12 m-auto">
    <ItemList items={cartItems}/>
 </div>
    </div>
}

export default Cart;