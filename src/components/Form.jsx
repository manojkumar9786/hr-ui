import React from "react";
import { BsDot } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

const Form = ({setOpenForm}) => {
  return (
    <form action="" onSubmit={(e)=> e.preventDefault()}>
      <div className="px-5 py-[18.5px] border-b flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <h1 className="font-semibold text-[19px]">New Applications</h1>
          <div className="flex items-center text-[#FF8A00]">
            <BsDot size={14} />
            <p className="font-semibold text-xs">Pending</p>
          </div>
        </div>

        <div className="flex items-center space-x-3 text-[#8A8A8A]">
          <button className="bg-[#007AFF] text-white px-3 py-1 rounded-md text-[11.5px]">
            Submit
          </button>
          <button onClick={() => setOpenForm(false)}>
            <IoMdClose size={18} />
          </button>
        </div>
      </div>

      <div>
        <div className="flex justify-between px-5 py-4">
          <div className="flex">
            <img
              className="w-[46px] h-[46px] rounded-md mr-3"
              src="./emp.png"
              alt=""
            />
            <div className="text-sm font-medium flex flex-col space-y-2">
              <p>James</p>
              <span className="font-normal">TT-2024-008</span>
            </div>
          </div>

          <div className="space-y-1">
            <div className="w-[100px] p-1 rounded-md text-[12px] bg-[#F5F5F5] text-[#969696] flex justify-between px-3">
              <p className="text-[#000]">Open</p>
              <select
                name=""
                id=""
                className="bg-none space-x-3 border-none bg-[#F5F5F5] outline-none"
              ></select>
            </div>
            <p className="text-sm text-[#737373] ml-7">Tridots Tech</p>
          </div>
        </div>

        <hr />

        <div className="px-5 py-4">
          <div>
            <div className="grid grid-cols-2 gap-5">
              <div className="text-[#717579] text-[15px] flex flex-col">
                <label htmlFor="series">
                  Series <span className="text-[#DE0A0A]">*</span>
                </label>
                <select
                  name=""
                  id="series"
                  className="w-[260px] text-[13px] font-medium outline-none mt-3 px-3 text-sm border rounded-md p-2"
                >
                  <option value="" className="w-20">
                    LAP/
                  </option>
                </select>
              </div>
              <div className="text-[#717579] text-[15px] flex flex-col">
                <label htmlFor="leaveType">Leave Type</label>
                <input
                  type="text"
                  value="Casual Leave"
                  id="leaveType"
                  className="w-[260px] text-[13px] font-medium outline-none mt-3 px-3 rounded-md text-sm border p-2"
                />
              </div>
              <div className="text-[#717579] text-[15px] flex flex-col">
                <label htmlFor="fromDate">
                  From Date <span className="text-[#DE0A0A]">*</span>
                </label>
                <input
                  type="text"
                  value="00-00-0000"
                  id="fromDate"
                  className="w-[260px] outline-none mt-3 px-3 rounded-md text-sm border p-2"
                />
              </div>
              <div className="text-[#717579] text-[15px] flex flex-col">
                <label htmlFor="toDate">
                  To Date <span className="text-[#DE0A0A]">*</span>
                </label>
                <input
                  type="text"
                  value="00-00-0000"
                  id="toDate"
                  className="w-[260px] outline-none mt-3 px-3 rounded-md text-sm border p-2"
                />
              </div>
              <div className="text-[#717579] text-[15px] flex flex-col">
                <label htmlFor="postingDate">
                  Posting Date <span className="text-[#DE0A0A]">*</span>
                </label>
                <input
                  type="text"
                  value="00-00-0000"
                  id="postingDate"
                  className="w-[260px] outline-none mt-3 px-3 rounded-md text-sm border p-2"
                />
              </div>
              <div className="text-[#717579] text-[15px] flex flex-col">
                <label htmlFor="postingDate">Total Days</label>
                <input
                  type="text"
                  value="0 Days"
                  id="postingDate"
                  className="w-[260px] text-[#5D5D5D] outline-none mt-3 px-3 rounded-md text-sm border p-2"
                />
              </div>
              <div className="text-[#717579] text-[15px] flex items-center space-x-3">
                <input
                  type="radio"
                  value="0 Days"
                  id="postingDate"
                  className=""
                />
                <label htmlFor="postingDate">Half Day</label>
              </div>
            </div>

            <div className="text-[#717579] text-[15px] flex flex-col mt-5">
              <label htmlFor="fromDate">
                Reason<span className="text-[#DE0A0A]">*</span>
              </label>
              <textarea
                type="text"
                id="fromDate"
                rows={6}
                className="w-full outline-none mt-3 px-3 rounded-md text-sm border p-2"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
