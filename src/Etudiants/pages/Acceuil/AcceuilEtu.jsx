import { useState } from "react";
import ActionEtu from "./Components/ActionEtu";
import ListRoomEtu from "./Components/ListRoomEtu";
import "./../Room/RoomEtu.css";

const AcceuilEtu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <section className="relative grid grid-cols-1 lg:grid-cols-2 min-h-screen overflow-x-hidden">
        <div className="block lg:hidden scale-75 z-10 absolute top-2 right-2 text-white rounded-md transition-all w-10 h-10 items-center justify-center">
          <div id="menuToggle">
            <input
              id="checkbox"
              type="checkbox"
              checked={menuOpen}
              onChange={toggleMenu}
            />
            <label className="toggle" htmlFor="checkbox">
              <div className="bar bar--top"></div>
              <div className="bar bar--middle"></div>
              <div className="bar bar--bottom"></div>
            </label>
          </div>
        </div>
        <div><ActionEtu /></div>
        <div
          className={`absolute bg-slate-50 lg:relative lg:translate-x-0 lg:bg-transparent transform transition-transform duration-300 ${menuOpen ? "translate-x-0 " : "translate-x-full"
            }`}
        >
          <ListRoomEtu />
        </div>

        <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-5/6 bg-slate-300"></div>
      </section>
    </>
  );
};

export default AcceuilEtu;
