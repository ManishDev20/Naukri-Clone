import React, { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full bg-white py-3 shadow-[0px_10px_30px-rgba(0,0,0,0.2)]">
      <div className="md:max-w-[1150px] mx-auto flex justify-between items-center py-2">
        <div className="flex items-center gap-10">
          <div className="">
            <Link to={"/"}>
              <img
                src="./images/naukriNewLogo.svg"
                alt=""
                className=""
                width={150}
              />
            </Link>
          </div>
          <div className="flex items-center gap-10 text-gray-600 ml-5">
            <Link to={"/jobs"}>Jobs</Link>
            <Link to={"/companies"}>Companies</Link>
            <Link to={"/services"}>Services</Link>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-[#275df5] font-semibold py-2 px-5 border-[#275df5] border rounded-[30px]">
            Login
          </button>
          <button className="text-[#fff] font-bold py-2 px-5 bg-[#f05537] rounded-[30px]">
            Register
          </button>

          {/* dropdown  */}

          <div className="toggle relative inline-block text-left">
            <div className="">
              <div
                onClick={() => toggleDropdown()}
                className=" border-l-2 inline-flex w-full justify-center items-center gap-x-1.5  bg-white px-3 text-[16px] text-gray-500 "
                aria-expanded="true"
                aria-haspopup="true"
              >
                For employers
                <svg
                  className="-mr-1 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div
              className={` ${
                isOpen === false ? "hidden" : "block"
              } listing absolute top-[20px] left-3 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none `}
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
            >
              <div className="py-1 ">
                <Link
                  to={"/"}
                  className="text-gray-700 block px-4 py-2 text-sm hover:text-[blue]"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-0"
                >
                  Account settings
                </Link>
                <Link
                  to={"/"}
                  className="text-gray-700 block px-4 py-2 text-sm hover:text-[blue]"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-1"
                >
                  Support
                </Link>
                <Link
                  className="text-gray-700 block px-4 py-2 text-sm hover:text-[blue]"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-2"
                >
                  License
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
