import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{
   
    const dispatch=useDispatch();
    const cartItems=useSelector((store)=>store.cart.items)

    const handleClearCart=()=>{
        dispatch(clearCart())
    }

    return <div className="text-center font-bold m-4 p-4">
 <h1 className="font-bold text-2xl">Cart</h1>
 <div className="w-6/12 m-auto">

 <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleClearCart}>Clear Cart</button>
   {cartItems.length===0 && <h1>Your cart is empty!Please add some items to place order</h1>}
    <ItemList items={cartItems}/>
 </div>
    </div>
}

export default Cart;