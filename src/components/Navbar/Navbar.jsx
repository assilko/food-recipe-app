import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context/context";

export default function Navbar() {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);

  return (
    <nav className="  flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="text-2xl font-semibold">
        <NavLink
          to={"/"}
          className="text-2xl font-bold text-red-950 hover:text-red-400 duration-300"
        >
          Eat & Drink
        </NavLink>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(event) => setSearchParam(event.target.value)}
          placeholder="Search for any ingredient..."
          className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-200 focus:shadow-red-300"
        />
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink
            to={"/"}
            className="text-red-950 font-semibold hover:text-red-400 duration-300 transition-colors border-b-2 border-transparent hover:border-red-300"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favorites"}
            className="text-red-950 font-semibold hover:text-red-400 duration-300 border-b-2 border-transparent hover:border-red-300"
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
