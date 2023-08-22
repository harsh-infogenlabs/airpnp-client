import logoImage from "../assets/Logo.png";

const Logo = () => {
  return (
    <a href="/" className="hidden gap-1 text-red-500 align-middle md:flex">
      <img src={logoImage} className="w-8 h-8" alt="logo" />
      <p className="hidden text-2xl font-bold tracking-tighter md:block">
        airpnp
      </p>
    </a>
  );
};
export default Logo;
