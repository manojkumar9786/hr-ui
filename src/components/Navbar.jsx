import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { LuUsers2 } from "react-icons/lu";
import { BsBell } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="py-[18.5px] px-5 border-b flex justify-between">
      <div className="flex items-center space-x-2 font-[Outfit] font-normal text-[15px] text-[#171717]">
        <div className="border rounded-sm border-[#171717]">
          <IoIosArrowBack size={10} />
        </div>
        <p>Manage</p>
      </div>

      <div className="flex items-center space-x-5">
        <div className="border rounded-md flex items-center text-[#B5B5BE] space-x-1 border-[#E6E7EC] p-2 w-[289px]">
          <CiSearch size={18} />
          <input
            type="search"
            placeholder="Search"
            className="border-none outline-none text-[12px] text-[#B5B5BE] font-normal"
            name=""
            id=""
          />
        </div>

        <div className="flex items-center space-x-5">
          <div className="border border-[#E6E7EC] rounded-md p-2 flex items-center space-x-2 text-[#B5B5BE]">
            <MdOutlinePermContactCalendar size={10} />
            <p className="font-normal text-[11px] text-[#23272E]">Today</p>
            <IoIosArrowDown size={10} />
          </div>
          <div className="border border-[#E6E7EC] rounded-md p-2 flex items-center space-x-2 text-[#5461FF]">
            <LuUsers2 size={10} />
            <p className="font-normal text-[11px]">Share</p>
          </div>
        </div>

        <div className="flex space-x-5">
          <div className="relative">
            <BsBell size={18} />
            <div className="bg-[#1086E7] rounded-full px-1 text-white top-[-12px] text-[10px] py-[2px] right-[-11px] absolute">
                23
            </div>
          </div>
          <div className="relative">
            <IoMailOutline size={18} />
            <div className="bg-[#34C759] rounded-full px-1 text-white top-[-12px] text-[10px] py-[2px] right-[-11px] absolute">
                23
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
