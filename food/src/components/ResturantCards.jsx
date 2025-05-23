import { CARD_URL } from "../utils/constants";
  const ResturantCards = ({ resData }) => {

     const {name,avgRating,cuisines,cloudinaryImageId,sla}=resData?.info
    return (
      <div className='res-cards' style={{ backgroundColor: "#f0f0f0" }}>
        <img className="res-logo" src={CARD_URL+cloudinaryImageId }/>
      <h3>{name}</h3>
        <h4>{avgRating}*</h4><br/>
        {/* <h4 style={{ fontSize: "large" }}>{deliveryTime}</h4> */}
        <h4>{sla.slaString}</h4>
        <h6>{cuisines.join(', ')}</h6>

      </div>
    )
  }

  export default ResturantCards;