import Magnify from "../assets/Magnify.svg";
import { SearchContext } from "../pages/Home";
import { useContext } from "react";

function Search() {
  const searchContext = useContext(SearchContext);

  const onSubmit = () => {
    console.log(searchContext?.searchValue);
  };
  return (
    <span className="flex w-10/12 p-2 transition-shadow bg-white border-2 shadow-md sm:w-96 rounded-3xl hover:shadow-xl">
      <input
        type="text"
        className="w-full outline-none"
        placeholder="Enter Price"
        name="search"
        onChange={(e) => searchContext?.setSetsearchValue(e.target.value)}
        value={searchContext?.searchValue}
      />
      <button onClick={onSubmit} className="w-10 h-8 bg-red-500 rounded-full">
        <img src={Magnify} />
      </button>
    </span>
  );
}
export default Search;
