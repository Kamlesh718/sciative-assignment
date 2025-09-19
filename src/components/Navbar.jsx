import cubeLogo from "../assets/cube.png";

function Navbar() {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav className="flex gap-2 justify-between p-4 items-center">
      <div
        className="flex gap-3 items-center hover:cursor-pointer"
        onClick={() => handleScroll("section-1")}
      >
        <img src={cubeLogo} alt="logo" className="size-8" />
        <span className="text-gray-600 text-xl md:text-2xl font-semibold font-mono hidden md:inline">
          uiAid
        </span>
      </div>
      <div className="flex items-center gap-5 font-semibold text-lg text-gray-500 ">
        <span
          className="hover:cursor-pointer text-sm md:text-lg hover:text-gray-700"
          onClick={() => handleScroll("section-2")}
        >
          About
        </span>
        <span
          className="hover:cursor-pointer text-sm md:text-lg hover:text-gray-700"
          onClick={() => handleScroll("section-3")}
        >
          Work
        </span>
        <span
          className="hover:cursor-pointer text-sm md:text-lg hover:text-gray-700"
          onClick={() => handleScroll("section-4")}
        >
          Research
        </span>
      </div>
      <span className="text-sm md:text-lg border-[2px] border-violet-500  px-4 py-1 rounded-full text-violet-500 hover:cursor-pointer hover:bg-violet-500 hover:text-white">
        Login
      </span>
    </nav>
  );
}

export default Navbar;
