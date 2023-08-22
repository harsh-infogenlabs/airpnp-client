import { useState, useRef, useContext } from "react";
import { SearchContext } from "../pages/Home";

const filterItem = [
  {
    id: 1,
    name: "Beach",
    imgUrl:
      "https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg",
  },
  {
    id: 2,
    name: "Countryside",
    imgUrl:
      "https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg",
  },
  {
    id: 3,
    name: "Cold Weather",
    imgUrl:
      "https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg",
  },
  {
    id: 4,
    name: "Farm",
    imgUrl:
      "https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg",
  },
  {
    id: 5,
    name: "Amazing Views",
    imgUrl:
      "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
  },
  {
    id: 6,
    name: "Cabins",
    imgUrl:
      "https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg",
  },
  {
    id: 7,
    name: "Luxury",
    imgUrl:
      "https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg",
  },
  {
    id: 8,
    name: "Treehouse",
    imgUrl:
      "https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg",
  },
  {
    id: 9,
    name: "Camping",
    imgUrl:
      "https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg",
  },
  {
    id: 10,
    name: "Historic",
    imgUrl:
      "https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg",
  },
  {
    id: 11,
    name: "Island",
    imgUrl:
      "https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg",
  },
];

const Filters = () => {
  const filterContext = useContext(SearchContext);
  const [scrollPosition, setScrollPosition] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    const container = containerRef.current;
    const newScrollPosition = scrollPosition + 500; // Adjust the value as needed
    setScrollPosition(newScrollPosition);
    container?.scrollTo({ left: newScrollPosition, behavior: "smooth" });
  };

  return (
    <>
      <div className="flex items-center justify-center w-full bg-white border-t-2 shadow-sm">
        <div
          ref={containerRef}
          className="flex items-center w-10/12 gap-5 p-5 mx-5 my-5 overflow-y-scroll md:gap-10 hide-scrollbar scroll-smooth"
        >
          {filterItem.map((item) => (
            <button
              className="flex flex-col items-center flex-shrink-0 hover:border-b-2"
              key={item.id}
              onClick={() => {
                filterContext?.setFilter(item.name);
              }}
            >
              <img src={item.imgUrl} className="w-6 h-6" />
              <p className="text-sm font-normal">{item.name}</p>
            </button>
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="w-8 h-8 text-sm font-bold text-center transition-shadow border-2 rounded-full hover:shadow-xl"
        >
          &gt;
        </button>
      </div>
    </>
  );
};
export default Filters;
