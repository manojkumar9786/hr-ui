import React, { useState } from "react";
import { PiDotsSixBold } from "react-icons/pi";
import { TfiReload } from "react-icons/tfi";
import { IoFilterOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { TbSortAscendingSmallBig } from "react-icons/tb";
import { MdOutlineWindow } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { LuChevronsUpDown } from "react-icons/lu";
import { TiTick } from "react-icons/ti";
import { CiHeart } from "react-icons/ci";
import { BsDot } from "react-icons/bs";
import Form from "./Form";

const data = [
  {
    name: "James",
    status: "Pending",
    statusColor: "text-orange-500",
    employeeId: "TT-2024-008",
    fromDate: "30-05-2024",
    leaveDays: "3 days",
    totalDays: "8 d",
    avatar: "./emp.png",
  },
  {
    name: "James",
    status: "Approved",
    statusColor: "text-green-500",
    employeeId: "TT-2024-008",
    fromDate: "30-05-2024",
    leaveDays: "3 days",
    totalDays: "8 d",
    avatar: "./emp.png", // Replace with actual image URL
  },
  {
    name: "James",
    status: "Approved",
    statusColor: "text-green-500",
    employeeId: "TT-2024-008",
    fromDate: "30-05-2024",
    leaveDays: "3 days",
    totalDays: "8 d",
    avatar: "./emp.png", // Replace with actual image URL
  },
  {
    name: "James",
    status: "Approved",
    statusColor: "text-green-500",
    employeeId: "TT-2024-008",
    fromDate: "30-05-2024",
    leaveDays: "3 days",
    totalDays: "8 d",
    avatar: "./emp.png", // Replace with actual image URL
  },
];

const Home = () => {
  const [count, setCount] = useState(10);
  const [openForm, setOpenForm] = useState(false);
  return (
    <div className="bg-[#F9F9F9] p-5 relative">
      <div className="flex justify-between">
        <div className="flex  items-center space-x-3 text-[#B5B5BE]">
          <PiDotsSixBold size={22} />
          <p className="font-medium text-[19px] text-[#282828]">Employee</p>
        </div>

        <div className="flex items-center space-x-5 text-[#5D5D5D]">
          <div className="border border-[#E6E7EC] rounded-md p-2">
            <TfiReload size={14} />
          </div>
          <div className="border border-[#E6E7EC] rounded-md p-2 space-x-2 flex items-center">
            <IoFilterOutline />
            <select
              name=""
              id=""
              className="text-[11px] font-normal border-none outline-none"
            >
              <option value="">Filter</option>
            </select>
          </div>
          <div className="border border-[#E6E7EC] rounded-md p-2">
            <BsThreeDots />
          </div>
        </div>
      </div>

      <div className="bg-white border rounded-lg my-3">
        <div className="flex justify-between p-5 items-center">
          <div className="flex gap-3">
            <div className="w-[100px] p-1 rounded-md text-[12px] bg-[#F5F5F5] text-[#969696]">
              <p>ID</p>
            </div>
            <div className="w-[100px] p-1 rounded-md text-[12px] bg-[#F5F5F5] text-[#969696]">
              <p>Employee</p>
            </div>
            <div className="w-[100px] p-1 rounded-md text-[12px] bg-[#F5F5F5] text-[#969696]">
              <p>Employee Name</p>
            </div>
            <div className="w-[100px] p-1 rounded-md text-[12px] bg-[#F5F5F5] text-[#969696]">
              <p>Leave type</p>
            </div>
            <div className="w-[100px] p-1 rounded-md text-[12px] bg-[#F5F5F5]  flex justify-between">
              <select
                name=""
                id="series"
                className="w-[100px] text-[12px] outline-none bg-[#F5F5F5] text-[#000] text-sm border-none rounded-md"
              >
                <option value="" className="w-20">
                  All
                </option>
              </select>
            </div>
          </div>

          <div className="flex space-x-3 text-[#5D5D5D]">
            <button
              onClick={() => setOpenForm(!openForm)}
              className="bg-[#1086E7] rounded-md p-1 text-[11px] font-medium cursor-pointer text-white"
            >
              <p>New Application</p>
            </button>
            <div className="border rounded-md p-1">
              <TbSortAscendingSmallBig size={16} />
            </div>
            <div className="border rounded-md p-1">
              <MdOutlineWindow size={16} />
            </div>
            <div className="border rounded-md p-1">
              <IoIosArrowBack size={16} />
            </div>
            <div className="border rounded-md p-1">
              <IoIosArrowForward size={16} />
            </div>
            <div className="border rounded-md p-1 text-[11px]">
              <input
                type="number"
                value={count}
                onChange={(e) => setCount(e.target.value)}
                className="w-8 border-none outline-none"
                name=""
                id=""
              />
            </div>
          </div>
        </div>

        <div className="container mx-auto">
          <table className="min-w-full bg-white border border-l-0 border-r-0 border-gray-200 rounded-lg">
            <thead>
              <tr className="w-full text-gray-700 border-b text-left">
                <th className="py-2 px-4 border-r">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <div className="border rounded-full bg-[#F5F5F5] text-[#707070]">
                        <TiTick size={9} />
                      </div>
                      <p className="text-[14px] font-normal">Employee Name</p>
                    </div>
                    <LuChevronsUpDown />
                  </div>
                </th>
                <th className="py-2 px-4 border-r">
                  <div className="flex items-center gap-5">
                    <p className="font-normal">Status</p>
                    <LuChevronsUpDown />
                  </div>
                </th>
                <th className="py-2 px-4 border-r">
                  <div className="flex items-center gap-5">
                    <p className="font-normal">Employee ID</p>
                    <LuChevronsUpDown />
                  </div>
                </th>
                <th className="py-2 px-4 border-r">
                  <div className="flex items-center gap-5">
                    <p className="font-normal">From Date</p>
                    <LuChevronsUpDown />
                  </div>
                </th>
                <th className="py-2 px-4 border-r">
                  <div className="flex items-center gap-5">
                    <p className="font-normal">Total Leave Days</p>
                    <LuChevronsUpDown />
                  </div>
                </th>
                <th className="py-2 px-4 border-r text-[#737373]">
                  <div className="ml-8">
                    <CiHeart />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="py-4 px-4 flex items-center text-sm">
                    <img
                      className="w-8 h-8 rounded-md mr-3"
                      src={row.avatar}
                      alt={row.name}
                    />
                    {row.name}
                  </td>
                  <td
                    className={`py-4 px-4 font-medium text-[12px] ${
                      row.status === "Approved"
                        ? "text-[#0CA637]"
                        : "text-[#FF8A00]"
                    }`}
                  >
                    <div className="flex items-center text-xs">
                      <BsDot size={14} />
                      <p>{row.status}</p>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-[14px] text-[#737373]">{row.employeeId}</td>
                  <td className="py-4 px-4 text-[14px] text-[#737373]">{row.fromDate}</td>
                  <td className="py-4 px-4 text-[14px] text-[#737373]">{row.leaveDays}</td>
                  <td className="py-4 px-4 text-[14px] text-[#737373]">
                    <div className="flex items-center ml-1 gap-4 text-xs">
                      <p>{row.totalDays}</p>
                      <CiHeart size={14} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div
        className={`h-[90vh] absolute bg-white w-[617px] border-l transition-all duration-300 ease-in-out top-0 right-0 shadow-md ${
          openForm ? "block" : "hidden"
        }`}
      >
        <Form setOpenForm={setOpenForm} />
      </div>
    </div>
  );
};

export default Home;
