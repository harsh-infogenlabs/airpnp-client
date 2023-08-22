import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { createContext, useState } from "react";
import Properties from "../data/Properties";
import useLabel from "../hooks/useLabel";

interface SearchContextType {
  searchValue: string;
  setSetsearchValue: React.Dispatch<React.SetStateAction<string>>;
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchContext = createContext<SearchContextType | undefined>(
  undefined
);

const Home = () => {
  const [searchValue, setSetsearchValue] = useState("");
  const [filter, setFilter] = useLabel("", "Filter");
  return (
    <>
      <SearchContext.Provider
        value={{ searchValue, setSetsearchValue, filter, setFilter }}
      >
        <Navbar />
        <div className="flex flex-wrap justify-center gap-10 mt-36">
          {Properties.filter(
            (property) =>
              property.tags.includes(filter) || property.name.match(searchValue)
          ).map((property, index) => (
            <Card
              key={index}
              id={property.id}
              name={property.name}
              imgUrl={property.imgUrl}
              place={property.place}
              distance={property.distance}
              date={property.date}
              price={property.price}
            />
          ))}
        </div>
      </SearchContext.Provider>
    </>
  );
};
export default Home;
