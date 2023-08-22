import dryer from "./assets/dryer.svg";
import fireplace from "./assets/fireplace.svg";
import hairdryer from "./assets/hairdryer.svg";
import breakfast from "./assets/breakfast.svg";
import wifi from "./assets/wifi.svg";
import parking from "./assets/parking.svg";

const Amenities = () => {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold">What this place offers</h2>
      <ul className="flex flex-col flex-wrap w-1/2 h-40 gap-5 mt-5 mb-20 text-lg md:mb-0">
        <li>
          <img src={wifi} alt="" className="inline-block w-6 mr-2" /> Wifi
        </li>
        <li>
          <img src={parking} alt="" className="inline-block w-6 mr-2" /> Free
          parking on premises
        </li>
        <li>
          <img src={dryer} alt="" className="inline-block w-6 mr-2" /> Dryer
        </li>
        <li>
          <img src={fireplace} alt="" className="inline-block w-6 mr-2" />
          Indoor fireplace
        </li>
        <li>
          <img src={hairdryer} alt="" className="inline-block w-6 mr-2" /> Hair
          dryer
        </li>
        <li>
          <img src={breakfast} alt="" className="inline-block w-6 mr-2" />
          Breakfast
        </li>
      </ul>
    </section>
  );
};
export default Amenities;
