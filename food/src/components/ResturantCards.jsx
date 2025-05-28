import { CARD_URL } from "../utils/constants";
  const ResturantCards = ({ resData }) => {

     const {name,avgRating,cuisines,cloudinaryImageId,sla}=resData?.info
    return (
      <div className='p-4 mx-4 w-[180px] rounded-lg bg-gray-100 hover:bg-gray-200'>
        <img className="rounded-lg" src={CARD_URL+cloudinaryImageId }/>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{avgRating}*</h4><br/>
        {/* <h4 style={{ fontSize: "large" }}>{deliveryTime}</h4> */}
        <h4>{sla.slaString}</h4>
        <h6>{cuisines.join(', ')}</h6>

      </div>
    )
  }

  export default ResturantCards;