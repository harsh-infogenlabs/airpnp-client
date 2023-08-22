import Logo from "./Logo";
import Filters from "./Filters";
import Search from "./Search";
import profile from "../assets/profile.svg";
import menu from "../assets/menu.svg";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 w-full h-20 bg-white drop-shadow-sm">
      <div className="flex items-center justify-center py-3 mx-5 md:justify-between">
        {/* Logo */}
        <Logo />
        <Search />

        {/* Profile Actions */}
        <div className="items-center hidden gap-2 md:flex">
          <button className="p-2 text-sm font-medium hover:bg-slate-200 rounded-2xl">
            Airpnp your home
          </button>
          <button
            className="relative flex items-center justify-center w-20 gap-2 transition-shadow border-2 rounded-full h-11 hover:shadow-xl"
            onClick={() => setOpen(!open)}
          >
            <img src={menu} alt="menu_icon" className="w-5 h-5" />
            <img src={profile} alt="profile_icon" className="w-6 h-6" />
            <div
              className={`${
                open ? "block" : "hidden"
              } absolute bg-slate-50 top-12 right-5 shadow-lg w-52 h-24`}
            >
              <ul className="flex flex-col items-center justify-between h-full rounded-lg">
                <li className="w-full hover:bg-slate-100">Log in</li>
                <li className="w-full hover:bg-slate-100">Sign up</li>
                <li className="w-full hover:bg-slate-100">Help Center</li>
              </ul>
            </div>
          </button>
        </div>
      </div>
      <Filters />
    </nav>
  );
};
export default Navbar;
