import Button from "./Button";
import Star from "../assets/star.png";
import { useState } from "react";
import { CurrencyFormatter } from "../utils/currencyFormatter";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface CheckoutProps {
  price: number | undefined;
  ratings: number | undefined;
  reviews: number | undefined;
}

const formatter = new CurrencyFormatter("en-IN", "INR");

const Checkout = (props: CheckoutProps) => {
  const navigate = useNavigate();
  const onClick = () => {
    toast.success("Reservation Successful");
    setTimeout(() => navigate("/"), 2000);
  };
  const [day, setDays] = useState(1);
  return (
    <>
      <section className="flex-col justify-between hidden p-5 mt-10 mr-10 border-2 rounded-lg shadow-2xl md:flex card">
        {/* PRICE + RATINGS + REVIEWS */}
        <div className="flex justify-around">
          <h4 className="text-lg font-semibold">
            {formatter.format(props.price as number)}
            <span className="font-light"> night</span>
          </h4>
          <h4 className="flex items-center gap-2">
            <p className="flex items-center">
              <img src={Star} className="inline-block w-3 h-3 md:w-4 md:h-4 " />
              {props.ratings}
            </p>
            <span className="text-sm text-slate-500">
              {props.reviews} reviews
            </span>
          </h4>
        </div>
        {/* PRICE CALCULATION */}
        <div className="border-2 rounded-lg">
          <div className="flex">
            <input
              type="date"
              name="checkin"
              className="w-full h-10 border-r-2"
              placeholder="Days of Stay"
              onChange={(e) => setDays(parseInt(e.target.value))}
              value={day}
            />
            <input
              type="date"
              name="checkout"
              className="w-full h-10 rounded-lg"
              placeholder="Days of Stay"
              onChange={(e) => setDays(parseInt(e.target.value))}
              value={day}
            />
          </div>
          <input
            type="number"
            name="days"
            className="w-full h-10 border-t-2 rounded-lg"
            placeholder="Days of Stay"
            onChange={(e) => setDays(parseInt(e.target.value))}
            value={day}
          />
        </div>
        <Button margin="0" width="100%" text="Reserve" onClick={onClick} />
        {/* PRICE CALCULATION */}
        <div className="flex justify-between">
          <p className="font-semibold">Total before Taxes:</p>
          <p>{formatter.format((props.price as number) * day)}</p>
        </div>
      </section>
    </>
  );
};
export default Checkout;
