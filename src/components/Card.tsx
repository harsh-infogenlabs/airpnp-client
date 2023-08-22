import { Link } from "react-router-dom";

type CardProps = {
  id: number;
  name: string;
  imgUrl: string[];
  place: string;
  distance: string;
  date: string;
  price: number;
};

const Card = (props: CardProps) => {
  return (
    <>
      <Link to={`/room/${props.id}`}>
        <div className="mt-2 ">
          <img
            className="object-cover w-96 h-80 md:w-64 md:h-64 rounded-xl"
            src={props.imgUrl[0]}
            alt="place"
          />
          <div className="mt-5">
            <p className="text-base font-medium md:text-sm">{props.place}</p>
            <p className="text-base text-gray-400 md:text-sm">
              {props.distance}
            </p>
            <p className="text-base text-gray-400 md:text-sm">{props.date}</p>
            <p className="text-base text-black md:text-sm">
              <span className="font-semibold">₹{props.price} </span>
              night
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};
export default Card;
