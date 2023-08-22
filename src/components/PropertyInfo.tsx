import location from "../assets/location.svg";
import superhost from "../assets/superhost.svg";
import calender from "../assets/calender.svg";

const PropertyInfo = () => {
  return (
    <section className="mt-10 border-b-2 ">
      <div className="flex">
        <img
          src={superhost}
          className="inline-block m-3 w-7 h-7"
          alt="superhost"
        />
        <span className="font-bold">
          Mathew is a Superhost
          <p className="font-normal text-slate-500">
            Superhosts are experienced, highly rated hosts who are committed to
            providing great stays for their guests.
          </p>
        </span>
      </div>
      <div className="flex">
        <img
          src={location}
          className="inline-block m-3 w-7 h-7"
          alt="superhost"
        />
        <span className="font-bold">
          Great Location
          <p className="font-normal text-slate-500">
            95% of recent guests gave the location a 5-star rating.
          </p>
        </span>
      </div>
      <div className="flex">
        <img
          src={calender}
          className="inline-block m-3 w-7 h-7"
          alt="superhost"
        />
        <span className="font-bold">Free cancellation for 48 hours.</span>
      </div>
    </section>
  );
};
export default PropertyInfo;
