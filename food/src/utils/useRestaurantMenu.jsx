import { useEffect ,useState} from "react";
import { MENU_LIST } from "../utils/constants";



const useRestaurantMenu=(resId)=>{

    const[resInfo,setResInfo]=useState(null);
 

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData=async()=>{
    const data=await fetch(MENU_LIST+resId);
    const json=await data.json();
    setResInfo(json.data)
  }


    return resInfo;
}
export default useRestaurantMenu;