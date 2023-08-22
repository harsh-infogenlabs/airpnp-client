import Share from "../assets/share.svg";
import toast from "react-hot-toast";
const ShareButton = () => {
  return (
    <button
      className="hidden px-2 py-1 ml-auto text-sm font-medium rounded-lg md:inline-block hover:bg-slate-200"
      onClick={() => {
        navigator.clipboard.writeText(window.location.href);
        toast.success("Copied to clipboard");

        // WHATSAPP SHARE
        //     const whatsappURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(
        //       window.location.href
        //     )}`;
        //     window.open(whatsappURL, "_blank");
      }}
    >
      <img
        src={Share}
        alt="share"
        className="inline-block w-4 h-4 mx-1 md:w-5 md:h-5"
      />
      <p className="text-xs">Share</p>
    </button>
  );
};
export default ShareButton;
