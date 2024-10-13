import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../imgs/logo.png";

const NavBar = () => {
  const [search, setSearch] = useState(false);
  return (
    <nav className="navbar">
      <Link to="/" className="flex-none w-10">
        <img src={logo} className="w-full" alt="logo image"/>
      </Link>

      <div className={"absolute bg-white w-full left-0 top-full mt-0.5 border-b border-grey py-4 px-[5vw] md:border-0 md:block md:w-auto md:relative md:p-0 md:inset-0 " + (search ? "show": "hide")}>
        <input
          type="text"
          placeholder="Search..."
          className="w-full md:w-auto bg-grey p-4 pl-6 pr-[12%] md:pr-6 md:pl-12 rounded-full placeholder:text-dark-grey"
        />
        <i className="fi fi-rr-search absolute right-[10%] md:pointer-events-none md:left-5 top-1/2  -translate-y-1/2 text-xl text-dark-grey"></i>
      </div>
      <div className="flex items-center gap-3 md:gap-6 ml-auto">
        <button className="md:hidden bg-grey rounded-full w-12 h-12 flex items-center justify-center" onClick={() => setSearch(currentValue => !currentValue)}>
          <i className="fi fi-rr-search text-xl"></i>
        </button>
      </div>
    </nav>
  );
};
export default NavBar;
