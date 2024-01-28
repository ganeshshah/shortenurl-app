import React from "react";
import Header from "./Header";
import logo from "../../Images/logo.png";
import SearchContainer from "./SearchContainer";

export default function Sidenav() {
  return (
    <div className="flex flex-cols-2 bg-cyan-100">
      <div className="w-1/6 h-screen">
      <nav className="bg-cyan-800 w-64 h-screen fixed top-0 left-0 text-white font-semibold shadow-lg">
          <div className="flex justify-center pt-4 pb-16">
            <img
              src={logo}
              className="w-10 h-10 pr-2"
            ></img>
            <span className="">Shrink Url</span>
          </div>
          <ul className="flex flex-col text-white">
            <li className="pb-4">
              <a
                href="#"
                className="block px-4 py-2 text-sm hover:bg-cyan-500"
              >
                Home
              </a>
            </li>
            <li className="pb-4">
              <a
                href="#"
                className="block px-4 py-2 text-sm hover:bg-cyan-500"
              >
                All urls
              </a>
            </li>
            <li className="pb-4">
              <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-500">
                Analytics
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="w-5/6  h-full">
        <div>
          <div className="bg-cyan-100 h-15 shadow-xl">
            <Header/>
          </div>
          <div>
            <SearchContainer/>
          </div>
        </div>
      </div>
    </div>
  );
}
