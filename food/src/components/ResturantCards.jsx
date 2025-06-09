import { CARD_URL } from "../utils/constants";

const ResturantCards = ({ resData }) => {
  const { name, avgRating, cuisines, cloudinaryImageId, sla } = resData?.info;

  return (
    <div className="p-4 mx-4 w-[180px] h-[350px] rounded-lg bg-gray-100 hover:bg-gray-200 flex flex-col justify-between shadow-sm transition duration-200">
      <img
        className="rounded-lg h-[120px] w-full object-cover"
        src={CARD_URL + cloudinaryImageId}
        alt={name}
      />

      <div className="flex-grow mt-2">
        <h3 className="font-bold text-base truncate">{name}</h3>
        <h4 className="text-sm text-gray-700">{avgRating} ★</h4>
        <h4 className="text-sm text-gray-600">{sla?.slaString}</h4>
        <p className="text-xs text-gray-500 mt-2 line-clamp-2">
          {cuisines.join(", ")}
        </p>
      </div>
    </div>
  );
};

export default ResturantCards;
