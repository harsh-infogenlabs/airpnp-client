import { useParams } from "react-router-dom";
import Star from "../assets/star.png";

import Properties from "../data/Properties";
import { Toaster } from "react-hot-toast";
import Button from "../components/Button";
import RoomsNavbar from "../layouts/RoomsNavbar";
import ShareButton from "../components/ShareButton";
import Checkout from "../components/Checkout";
import PropertyInfo from "../components/PropertyInfo";
import Description from "../components/Description";
import OwnerInfo from "../components/OwnerInfo";
import Amenities from "../components/Amenities";

const Rooms = () => {
  const params = useParams();
  if (!params.id) {
    return <div>Invalid parameter</div>;
  }
  const property = Properties.find(
    (prop) => prop.id === parseInt(params.id as string)
  );

  return (
    <>
      <Toaster position="bottom-center" />
      <RoomsNavbar />
      <main id="site-content" className="h-screen">
        <div
          id="site-content"
          className="flex flex-col-reverse w-full md:flex-col"
        >
          {/* PROPERTY INFO */}
          <section className="w-10/12 m-auto mt-5 text-start" id="propertyInfo">
            <h1 className="text-2xl font-medium tracking-wide md:text-3xl">
              {property?.name}
            </h1>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <img src={Star} className="w-3 h-3 md:w-4 md:h-4 " />
                <h3 className="text-xs font-medium md:text-sm">
                  {property?.rating}
                </h3>
              </div>
              <span className="font-medium">·</span>
              <h3 className="text-xs font-medium underline md:text-sm">
                {property?.reviews.length} reviews
              </h3>
              <span className="font-medium">·</span>
              <a
                href={`https://www.google.com/maps/place/${property?.place}`}
                target="_blank"
                className="text-xs font-medium underline md:text-sm"
              >
                {property?.place}
              </a>
              <ShareButton />
            </div>
          </section>
          {/* GALLERY */}
          <section id="gallery" className="flex w-10/12 gap-2 m-auto mt-5">
            <img
              src={property?.imgUrl[0]}
              alt="property image"
              className="object-cover w-550 h-72 md:rounded-l-xl md:h-72 md:w-96 "
            />
            <div className="flex-col hidden gap-1 md:flex">
              <img
                src={property?.imgUrl[1]}
                alt="property image"
                className="object-cover w-64 h-36"
              />
              <img
                src={property?.imgUrl[2]}
                alt="property image"
                className="object-cover w-64 h-36 "
              />
            </div>
            <div className="flex-col hidden gap-1 md:flex">
              <img
                src={property?.imgUrl[3]}
                alt="property image"
                className="object-cover w-64 h-36 rounded-tr-xl"
              />
              <img
                src={property?.imgUrl[4]}
                alt="property image"
                className="object-cover w-64 h-36 rounded-br-xl"
              />
            </div>
          </section>

          {/* CHECKOUT */}
          <section className="fixed bottom-0 flex items-center justify-between w-full h-16 bg-white border-t-2 md:hidden">
            <div className="m-2">
              <p className="font-semibold">₹{property?.price} night</p>
              <p className="font-semibold underline">{property?.date}</p>
            </div>
            <Button width="100px" margin="5px" text="Reserve" />
          </section>
        </div>

        {/* DESCRIPTION */}
        <div className="flex justify-center">
          <div className="w-11/12 m-auto md:w-2/4">
            <OwnerInfo
              name={property?.owner.name}
              profileImg={property?.owner.profileImg}
            />
            <PropertyInfo />
            <Description desc={property?.description} />
            <Amenities />
          </div>
          <Checkout
            price={property?.price}
            ratings={property?.rating}
            reviews={property?.reviews.length}
          />
        </div>
      </main>
    </>
  );
};
export default Rooms;
