import logoImage from "../assets/Logo.png";
import Share from "../assets/share.svg";
import toast from "react-hot-toast";
const RoomsNavbar = () => {
  return (
    <nav className="sticky top-0 flex items-center justify-between w-full h-20 bg-white md:justify-center drop-shadow-sm">
      <a href="/" className="gap-1 mx-2 text-red-500 align-middle md:flex">
        <img src={logoImage} className="w-8 h-8" alt="logo" />
        <p className="hidden text-2xl font-bold tracking-tighter md:block">
          airpnp
        </p>
      </a>
      <button
        className="px-2 py-1 text-sm font-medium rounded-lg md:hidden hover:bg-slate-200"
        onClick={() => {
          navigator.clipboard.writeText(window.location.href);
          toast.success("Copied to clipboard");
        }}
      >
        <img
          src={Share}
          alt="share"
          className="inline-block w-4 h-4 mx-1 md:w-5 md:h-5"
        />
        <p className="text-xs">Share</p>
      </button>
    </nav>
  );
};
export default RoomsNavbar;
