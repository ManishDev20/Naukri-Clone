import React, { useRef, useState } from "react";
import Carousel from "react-grid-carousel";

const Home = () => {
  const [isopen, setIsOpen] = useState(false);

  const togglerDrop = () => {
    setIsOpen(!isopen);
  };

  const experienceInput = useRef();

  const fillExperience = (inp) => {
    console.log(inp);
    experienceInput.current.value = inp;
    togglerDrop();
  };

  return (
    <div id="home" className="md:max-w-[1300px] mx-auto text-center pt-10 pb-5">
      <div className="text-4xl font-bold mt-8 py-4">
        Find your dream job now
      </div>
      <div className="text-xl ">5 Lakh+ jobs for you to explore</div>
      <div className="md:max-w-[950px] relative bg-white mx-auto shadow-[0px_50px_50px_rgba(0,0,0,0.05)] rounded-[50px] gap-3 my-10 py-6 px-8 flex items-center">
        {/* experience input option dropdown */}
        <div
          className={` ${
            isopen === false ? "hidden" : ""
          } w-[220px] h-[170px] absolute top-[70px] left-[405px] text-[16px] bg-white rounded-2xl`}
        >
          <ul className={` text-black text-left `}>
            <li
              onClick={() => fillExperience("Fresher")}
              className="bg-gray-200 p-2 cursor-pointer"
            >
              Fresher
            </li>
            <li
              onClick={() => fillExperience("1 Year")}
              className="px-2 cursor-pointer"
            >
              1 Year
            </li>
            <li
              onClick={() => fillExperience("2 Year")}
              className="px-2 cursor-pointer"
            >
              2 Year
            </li>
            <li
              onClick={() => fillExperience("3 Year")}
              className="px-2 cursor-pointer"
            >
              3 Year
            </li>
            <li
              onClick={() => fillExperience("4 Year")}
              className="px-2 cursor-pointer"
            >
              4 Year
            </li>
            <li
              onClick={() => fillExperience("5 Year & above")}
              className="px-2 cursor-pointer"
            >
              5 Year
            </li>
          </ul>
        </div>
        <div className="">
          <i className="fa-solid fa-magnifying-glass text-[25px] text-gray-500"></i>
        </div>

        <div className="border-r-2 border-gray-200 px-2 pr-0">
          <input
            type="text"
            className="text-[18px] w-[320px] outline-none"
            placeholder="Enter skills / Designs / Companies"
          />
        </div>
        {/* experience input */}
        <div className="flex border-r-2 border-gray-200 px-3 pr-5 relative">
          <input
            ref={experienceInput}
            onClick={() => togglerDrop()}
            type="text"
            className="text-[18px] w-[170px]  outline-none "
            placeholder="Select experience"
          />
          <svg
            onClick={() => togglerDrop()}
            className="-mr-1 h-5 w-5 text-gray-400"
            viewBox="0 0 15 15"
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
        <div className="">
          <input
            className="text-[18px] w-[170px] outline-none px-4 "
            type="text"
            placeholder="Enter location"
          />
        </div>
        <div className="">
          <button className=" text-white font-semibold bg-blue-500 p-2 px-6  rounded-3xl">
            Search
          </button>
        </div>
      </div>
      <div className="md:max-w-[1300px] mx-auto flex flex-col gap-5 my-[80px]">
        <div className="flex justify-center items-center gap-5">
          <div className="w-[180px] h-[70px] px-5 flex justify-center items-center border rounded-[10px] shadow-[1px_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[5px_8px_30px_0px_rgba(0,0,0,0.3)] ">
            <i class="fa-solid fa-house bg-gray-200 p-[10px] rounded-full text-[22px]"></i>
            <span className="mx-[20px] ">Remote</span>
          </div>
          <div className="w-[160px] h-[70px] px-5 flex justify-center items-center border rounded-[10px] shadow-[1px_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[5px_8px_30px_0px_rgba(0,0,0,0.3)] ">
            <i class="fa-regular fa-building bg-gray-200 p-[10px] rounded-full text-[22px]"></i>
            <span className="mx-[20px] ">MNC</span>
          </div>
          <div className="w-[180px] h-[70px] px-6 flex justify-center items-center border rounded-[10px] shadow-[1px_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[5px_8px_30px_0px_rgba(0,0,0,0.3)] ">
            <i class="fa-solid fa-graduation-cap bg-gray-200 p-[10px] rounded-full text-[22px]"></i>
            <span className="mx-[20px] ">Fresher</span>
          </div>
          <div className="w-[230px] h-[70px] px-5 flex justify-center items-center border rounded-[10px] shadow-[1px_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[5px_8px_30px_0px_rgba(0,0,0,0.3)] ">
            <i class="fa-solid fa-computer bg-gray-200 p-[10px] rounded-full text-[22px]"></i>
            <span className="mx-[20px] ">Software &...</span>
          </div>
          <div className="w-[180px] h-[70px] px-5 flex justify-center items-center border rounded-[10px] shadow-[1px_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[5px_8px_30px_0px_rgba(0,0,0,0.3)] ">
            <i class="fa-solid fa-rocket bg-gray-200 p-[10px] rounded-full text-[22px]"></i>
            <span className="mx-[20px] ">Startup</span>
          </div>
          <div className="w-[180px] h-[70px] px-5 flex justify-center items-center border rounded-[10px] shadow-[1px_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[5px_8px_30px_0px_rgba(0,0,0,0.3)] ">
            <i class="fa-solid fa-arrow-trend-up bg-gray-200 p-[10px] rounded-full text-[22px]"></i>
            <span className="mx-[20px] ">Marketing</span>
          </div>
        </div>
        <div className=" flex justify-center items-center gap-5">
          <div className=" w-[200px] h-[70px] px-5 flex justify-center items-center border rounded-[10px] shadow-[1px_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[5px_8px_30px_0px_rgba(0,0,0,0.3)] ">
            <i class="fa-solid fa-briefcase bg-gray-200 p-[10px] rounded-full text-[22px]"></i>
            <span className="mx-[20px] ">Internship</span>
          </div>
          <div className=" w-[220px] h-[70px] px-5 flex justify-center items-center border rounded-[10px] shadow-[1px_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[5px_8px_30px_0px_rgba(0,0,0,0.3)] ">
            <i class="fa-solid fa-house bg-gray-200 p-[10px] rounded-full text-[22px]"></i>
            <span className="mx-[20px] ">Supply Ch...</span>
          </div>
          <div className=" w-[170px] h-[70px] px-5 flex justify-center items-center border rounded-[10px] shadow-[1px_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[5px_8px_30px_0px_rgba(0,0,0,0.3)] ">
            <i class="fa-solid fa-house bg-gray-200 p-[10px] rounded-full text-[22px]"></i>
            <span className="mx-[20px] ">Sales</span>
          </div>
          <div className=" w-[230px] h-[70px] px-5 flex justify-center items-center border rounded-[10px] shadow-[1px_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[5px_8px_30px_0px_rgba(0,0,0,0.3)] ">
            <i class="fa-solid fa-house bg-gray-200 p-[10px] rounded-full text-[22px]"></i>
            <span className="mx-[20px] ">Fortune 500</span>
          </div>
          <div className=" w-[200px] h-[70px] px-5 flex justify-center items-center border rounded-[10px] shadow-[1px_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[5px_8px_30px_0px_rgba(0,0,0,0.3)] ">
            <i class="fa-solid fa-house bg-gray-200 p-[10px] rounded-full text-[22px]"></i>
            <span className="mx-[20px] ">Analytics</span>
          </div>
        </div>
      </div>
      <div className="md:max-w-[1370px] b my-[50px] p-5">
        <h1 className="text-[30px] font-bold my-10">
          Top companies hiring now
        </h1>
        <Carousel cols={4} rows={1} gap={5}>
          <Carousel.Item>
            <div className="w-[250px] h-[150px] border-2 my-7 mx-5 rounded-xl text-left  p-5 shadow hover:shadow-[2px_8px_20px_rgba(0,0,0,0.4)] ">
              <h2 className="text-[18px] font-semibold">Product</h2>
              <p className="text-[12px]">
                <span className="text-[14px]">187</span> are actively hiring
              </p>
              <div className="flex gap-x-5 my-4">
                <img
                  className="border rounded-lg bg-white"
                  src="./images/salesforce.png"
                  alt=""
                  width={40}
                  height={40}
                />
                <img
                  className="border rounded-lg bg-white"
                  src="./images/be.png"
                  alt=""
                  width={40}
                  height={40}
                />
                <img
                  className="border rounded-lg bg-white"
                  src="./images/bigbasket.png"
                  alt=""
                  width={40}
                  height={40}
                />
                <img
                  className="border rounded-lg bg-white"
                  src="./images/ford.png"
                  alt=""
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="w-[250px] h-[150px] border-2 my-7 mx-5 rounded-xl text-left  p-5 shadow hover:shadow-[2px_8px_20px_rgba(0,0,0,0.4)] ">
              <h2 className="text-[18px] font-semibold">Product</h2>
              <p className="text-[12px]">
                <span className="text-[14px]">187</span> are actively hiring
              </p>
              <div className="flex gap-x-5 my-4">
                <img
                  className="border rounded-lg bg-white"
                  src="./images/btfly.gif"
                  alt=""
                  width={40}
                  height={40}
                />
                <img
                  className="border rounded-lg bg-white"
                  src="./images/dcom.gif"
                  alt=""
                  width={40}
                  height={40}
                />
                <img
                  className="border rounded-lg bg-white"
                  src="./images/ic.gif"
                  alt=""
                  width={40}
                  height={40}
                />
                <img
                  className="border rounded-lg bg-white"
                  src="./images/infy.gif"
                  alt=""
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="w-[250px] h-[150px] border-2 my-7 mx-5  rounded-xl text-left  p-5 shadow hover:shadow-[2px_8px_20px_rgba(0,0,0,0.4)] ">
              <h2 className="text-[18px] font-semibold">Product</h2>
              <p className="text-[12px]">
                <span className="text-[14px]">187</span> are actively hiring
              </p>
              <div className="flex gap-x-5 my-4">
                <img
                  className="border rounded-lg bg-white"
                  src="./images/jio.gif"
                  alt=""
                  width={40}
                  height={40}
                />
                <img
                  className="border rounded-lg bg-white"
                  src="./images/khata.gif"
                  alt=""
                  width={40}
                  height={40}
                />
                <img
                  className="border rounded-lg bg-white"
                  src="./images/mobi.gif"
                  alt=""
                  width={40}
                  height={40}
                />
                <img
                  className="border rounded-lg bg-white"
                  src="./images/ttt.gif"
                  alt=""
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="w-[250px] h-[150px] border-2 my-7 mx-5  rounded-xl text-left  p-5 shadow hover:shadow-[2px_8px_20px_rgba(0,0,0,0.4)] ">
              <h2 className="text-[18px] font-semibold">Product</h2>
              <p className="text-[12px]">
                <span className="text-[14px]">187</span> are actively hiring
              </p>
              <div className="flex gap-x-5 my-4">
                <img
                  className="border rounded-lg bg-white"
                  src="./images/vir.gif"
                  alt=""
                  width={40}
                  height={40}
                />
                <img
                  className="border rounded-lg bg-white"
                  src="./images/fs.gif"
                  alt=""
                  width={40}
                  height={40}
                />
                <img
                  className="border rounded-lg bg-white"
                  src="./images/ic.gif"
                  alt=""
                  width={40}
                  height={40}
                />
                <img
                  className="border rounded-lg bg-white"
                  src="./images/ford.png"
                  alt=""
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="w-[250px] h-[150px] border-2 my-7 mx-5  rounded-xl text-left  p-5 shadow hover:shadow-[2px_8px_20px_rgba(0,0,0,0.4)] ">
              <h2 className="text-[18px] font-semibold">Product</h2>
              <p className="text-[12px]">
                <span className="text-[14px]">187</span> are actively hiring
              </p>
              <div className="flex gap-x-5 my-4">
                <img
                  className="border rounded-lg bg-white"
                  src="./images/salesforce.png"
                  alt=""
                  width={40}
                  height={40}
                />
                <img
                  className="border rounded-lg bg-white"
                  src="./images/be.png"
                  alt=""
                  width={40}
                  height={40}
                />
                <img
                  className="border rounded-lg bg-white"
                  src="./images/bigbasket.png"
                  alt=""
                  width={40}
                  height={40}
                />
                <img
                  className="border rounded-lg bg-white"
                  src="./images/ford.png"
                  alt=""
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="w-[250px] h-[150px] border-2 my-7 mx-5  rounded-xl text-left  p-5 shadow hover:shadow-[2px_8px_20px_rgba(0,0,0,0.4)] ">
              <h2 className="text-[18px] font-semibold">Product</h2>
              <p className="text-[12px]">
                <span className="text-[14px]">187</span> are actively hiring
              </p>
              <div className="flex gap-x-5 my-4">
                <img
                  className="border rounded-lg bg-white"
                  src="./images/salesforce.png"
                  alt=""
                  width={40}
                  height={40}
                />
                <img
                  className="border rounded-lg bg-white"
                  src="./images/be.png"
                  alt=""
                  width={40}
                  height={40}
                />
                <img
                  className="border rounded-lg bg-white"
                  src="./images/bigbasket.png"
                  alt=""
                  width={40}
                  height={40}
                />
                <img
                  className="border rounded-lg bg-white"
                  src="./images/ford.png"
                  alt=""
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="w-[250px] h-[150px] border-2 my-7 mx-5  rounded-xl text-left  p-5 shadow hover:shadow-[2px_8px_20px_rgba(0,0,0,0.4)] ">
              <h2 className="text-[18px] font-semibold">Product</h2>
              <p className="text-[12px]">
                <span className="text-[14px]">187</span> are actively hiring
              </p>
              <div className="flex gap-x-5 my-4">
                <img
                  className="border rounded-lg bg-white"
                  src="./images/salesforce.png"
                  alt=""
                  width={40}
                  height={40}
                />
                <img
                  className="border rounded-lg bg-white"
                  src="./images/be.png"
                  alt=""
                  width={40}
                  height={40}
                />
                <img
                  className="border rounded-lg bg-white"
                  src="./images/bigbasket.png"
                  alt=""
                  width={40}
                  height={40}
                />
                <img
                  className="border rounded-lg bg-white"
                  src="./images/ford.png"
                  alt=""
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="w-[250px] h-[150px] border-2 my-7 mx-5  rounded-xl text-left  p-5 shadow hover:shadow-[2px_8px_20px_rgba(0,0,0,0.4)] ">
              <h2 className="text-[18px] font-semibold">Product</h2>
              <p className="text-[12px]">
                <span className="text-[14px]">187</span> are actively hiring
              </p>
              <div className="flex gap-x-5 my-4">
                <img
                  className="border rounded-lg bg-white"
                  src="./images/salesforce.png"
                  alt=""
                  width={40}
                  height={40}
                />
                <img
                  className="border rounded-lg bg-white"
                  src="./images/be.png"
                  alt=""
                  width={40}
                  height={40}
                />
                <img
                  className="border rounded-lg bg-white"
                  src="./images/bigbasket.png"
                  alt=""
                  width={40}
                  height={40}
                />
                <img
                  className="border rounded-lg bg-white"
                  src="./images/ford.png"
                  alt=""
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="w-[250px] h-[150px] border-2 my-7 mx-5  rounded-xl text-left  p-5 shadow hover:shadow-[2px_8px_20px_rgba(0,0,0,0.4)] ">
              <h2 className="text-[18px] font-semibold">Product</h2>
              <p className="text-[12px]">
                <span className="text-[14px]">187</span> are actively hiring
              </p>
              <div className="flex gap-x-5 my-4">
                <img
                  className="border rounded-lg bg-white"
                  src="./images/salesforce.png"
                  alt=""
                  width={40}
                  height={40}
                />
                <img
                  className="border rounded-lg bg-white"
                  src="./images/be.png"
                  alt=""
                  width={40}
                  height={40}
                />
                <img
                  className="border rounded-lg bg-white"
                  src="./images/bigbasket.png"
                  alt=""
                  width={40}
                  height={40}
                />
                <img
                  className="border rounded-lg bg-white"
                  src="./images/ford.png"
                  alt=""
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="w-[250px] h-[150px] border-2 my-7 mx-5  rounded-xl text-left  p-5 shadow hover:shadow-[2px_8px_20px_rgba(0,0,0,0.4)] ">
              <h2 className="text-[18px] font-semibold">Product</h2>
              <p className="text-[12px]">
                <span className="text-[14px]">187</span> are actively hiring
              </p>
              <div className="flex gap-x-5 my-4">
                <img
                  className="border rounded-lg bg-white"
                  src="./images/salesforce.png"
                  alt=""
                  width={40}
                  height={40}
                />
                <img
                  className="border rounded-lg bg-white"
                  src="./images/be.png"
                  alt=""
                  width={40}
                  height={40}
                />
                <img
                  className="border rounded-lg bg-white"
                  src="./images/bigbasket.png"
                  alt=""
                  width={40}
                  height={40}
                />
                <img
                  className="border rounded-lg bg-white"
                  src="./images/ford.png"
                  alt=""
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="w-[250px] h-[150px] border-2 my-7 mx-5  rounded-xl text-left  p-5 shadow hover:shadow-[2px_8px_20px_rgba(0,0,0,0.4)] ">
              <h2 className="text-[18px] font-semibold">Product</h2>
              <p className="text-[12px]">
                <span className="text-[14px]">187</span> are actively hiring
              </p>
              <div className="flex gap-x-5 my-4">
                <img
                  className="border rounded-lg bg-white"
                  src="./images/salesforce.png"
                  alt=""
                  width={40}
                  height={40}
                />
                <img
                  className="border rounded-lg bg-white"
                  src="./images/be.png"
                  alt=""
                  width={40}
                  height={40}
                />
                <img
                  className="border rounded-lg bg-white"
                  src="./images/bigbasket.png"
                  alt=""
                  width={40}
                  height={40}
                />
                <img
                  className="border rounded-lg bg-white"
                  src="./images/ford.png"
                  alt=""
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="w-[250px] h-[150px] border-2 my-7 mx-5  rounded-xl text-left  p-5 shadow hover:shadow-[2px_8px_20px_rgba(0,0,0,0.4)] ">
              <h2 className="text-[18px] font-semibold">Product</h2>
              <p className="text-[12px]">
                <span className="text-[14px]">187</span> are actively hiring
              </p>
              <div className="flex gap-x-5 my-4">
                <img
                  className="border rounded-lg bg-white"
                  src="./images/salesforce.png"
                  alt=""
                  width={40}
                  height={40}
                />
                <img
                  className="border rounded-lg bg-white"
                  src="./images/be.png"
                  alt=""
                  width={40}
                  height={40}
                />
                <img
                  className="border rounded-lg bg-white"
                  src="./images/bigbasket.png"
                  alt=""
                  width={40}
                  height={40}
                />
                <img
                  className="border rounded-lg bg-white"
                  src="./images/ford.png"
                  alt=""
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="md:max-w-[1200px] mx-auto my-[50px] ">
        <h1 className="text-[30px] font-bold ">
          Featured companies actively hiring
        </h1>
        <div className="flex gap-5 justify-center my-5">
          <div className="border border-gray-500 px-3 py-1  rounded-[20px] bg-gray-300">
            <a href="#home">All</a>
          </div>
          <div className="border border-gray-500 px-3 py-1  rounded-[20px]">
            <a href="#home">IT Services</a>
          </div>
          <div className="border border-gray-500 px-3 py-1  rounded-[20px]">
            <a href="#home">BFSI</a>
          </div>
        </div>
        <Carousel cols={4} rows={1} gap={5}>
          <Carousel.Item>
            <div className=" bg-white w-[250px] border my-7 mx-5 rounded-xl text-left  shadow hover:shadow-[2px_8px_20px_rgba(0,0,0,0.4)] flex flex-col items-center">
              <img
                src="./images/relaltd.gif"
                alt=""
                className="w-[60%] mx-auto h-[90px] my-1"
              />
              <div className="bg-[rgba(255,176,176,0.1)] w-[80%] rounded my-1 mx-auto px-[15px] py-[20px] flex flex-col items-center justify-center">
                <h1 className="text-[16px] font-semibold ">Reliance Retail</h1>
                <div className="flex my-2 text-gray-600 items-center justify-center">
                  <div className="text-[12px] font-semibold px-2 border-r  border-gray-300 text-gray-500 ">
                    <i className="fa-solid fa-star mx-1 text-yellow-400"></i>3.9
                  </div>
                  <div className="text-[12px]  text-gray-500  px-2">
                    <span className="font-semibold">27.3K</span> reviews
                  </div>
                </div>
              </div>
              <p className="w-[70%] mx-auto text-[13px] mt-3 text-center font-semibold text-gray-500 ">
                One of India's Top 100 Workplaces in 2022.
              </p>
              <div className="border py-3 px-5 rounded-3xl bg-[#edf4ff] border-none text-blue-600 font-semibold my-4">
                View Jobs
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className=" bg-white w-[250px] border my-7 mx-5 rounded-xl text-left  shadow hover:shadow-[2px_8px_20px_rgba(0,0,0,0.4)] flex flex-col items-center">
              <img
                src="./images/ic.gif"
                alt=""
                className="w-[60%] mx-auto h-[90px] my-1"
              />
              <div className="bg-[rgba(255,176,176,0.1)] w-[80%] rounded my-1 mx-auto px-[15px] py-[20px] flex flex-col items-center justify-center">
                <h1 className="text-[16px] font-semibold ">Reliance Retail</h1>
                <div className="flex my-2 text-gray-600 items-center justify-center">
                  <div className="text-[12px] font-semibold px-2 border-r  border-gray-300 text-gray-500 ">
                    <i className="fa-solid fa-star mx-1 text-yellow-400"></i>3.9
                  </div>
                  <div className="text-[12px]  text-gray-500  px-2">
                    <span className="font-semibold">27.3K</span> reviews
                  </div>
                </div>
              </div>
              <p className="w-[70%] mx-auto text-[13px] mt-3 text-center font-semibold text-gray-500 ">
                One of India's Top 100 Workplaces in 2022.
              </p>
              <div className="border py-3 px-5 rounded-3xl bg-[#edf4ff] border-none text-blue-600 font-semibold my-4">
                View Jobs
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className=" bg-white w-[250px] border my-7 mx-5 rounded-xl text-left  shadow hover:shadow-[2px_8px_20px_rgba(0,0,0,0.4)] flex flex-col items-center">
              <img
                src="./images/airtel.gif"
                alt=""
                className="w-[60%] mx-auto h-[90px] my-1"
              />
              <div className="bg-[rgba(255,176,176,0.1)] w-[80%] rounded my-1 mx-auto px-[15px] py-[20px] flex flex-col items-center justify-center">
                <h1 className="text-[16px] font-semibold ">Reliance Retail</h1>
                <div className="flex my-2 text-gray-600 items-center justify-center">
                  <div className="text-[12px] font-semibold px-2 border-r  border-gray-300 text-gray-500 ">
                    <i className="fa-solid fa-star mx-1 text-yellow-400"></i>3.9
                  </div>
                  <div className="text-[12px]  text-gray-500  px-2">
                    <span className="font-semibold">27.3K</span> reviews
                  </div>
                </div>
              </div>
              <p className="w-[70%] mx-auto text-[13px] mt-3 text-center font-semibold text-gray-500 ">
                One of India's Top 100 Workplaces in 2022.
              </p>
              <div className="border py-3 px-5 rounded-3xl bg-[#edf4ff] border-none text-blue-600 font-semibold my-4">
                View Jobs
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className=" bg-white w-[250px] border my-7 mx-5 rounded-xl text-left  shadow hover:shadow-[2px_8px_20px_rgba(0,0,0,0.4)] flex flex-col items-center">
              <img
                src="./images/empower.gif"
                alt=""
                className="w-[60%] mx-auto h-[90px] my-1"
              />
              <div className="bg-[rgba(255,176,176,0.1)] w-[80%] rounded my-1 mx-auto px-[15px] py-[20px] flex flex-col items-center justify-center">
                <h1 className="text-[16px] font-semibold ">Reliance Retail</h1>
                <div className="flex my-2 text-gray-600 items-center justify-center">
                  <div className="text-[12px] font-semibold px-2 border-r  border-gray-300 text-gray-500 ">
                    <i className="fa-solid fa-star mx-1 text-yellow-400"></i>3.9
                  </div>
                  <div className="text-[12px]  text-gray-500  px-2">
                    <span className="font-semibold">27.3K</span> reviews
                  </div>
                </div>
              </div>
              <p className="w-[70%] mx-auto text-[13px] mt-3 text-center font-semibold text-gray-500 ">
                One of India's Top 100 Workplaces in 2022.
              </p>
              <div className="border py-3 px-5 rounded-3xl bg-[#edf4ff] border-none text-blue-600 font-semibold my-4">
                View Jobs
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className=" bg-white w-[250px] border my-7 mx-5 rounded-xl text-left  shadow hover:shadow-[2px_8px_20px_rgba(0,0,0,0.4)] flex flex-col items-center">
              <img
                src="./images/infy.gif"
                alt=""
                className="w-[60%] mx-auto h-[90px] my-1"
              />
              <div className="bg-[rgba(255,176,176,0.1)] w-[80%] rounded my-1 mx-auto px-[15px] py-[20px] flex flex-col items-center justify-center">
                <h1 className="text-[16px] font-semibold ">Reliance Retail</h1>
                <div className="flex my-2 text-gray-600 items-center justify-center">
                  <div className="text-[12px] font-semibold px-2 border-r  border-gray-300 text-gray-500 ">
                    <i className="fa-solid fa-star mx-1 text-yellow-400"></i>3.9
                  </div>
                  <div className="text-[12px]  text-gray-500  px-2">
                    <span className="font-semibold">27.3K</span> reviews
                  </div>
                </div>
              </div>
              <p className="w-[70%] mx-auto text-[13px] mt-3 text-center font-semibold text-gray-500 ">
                One of India's Top 100 Workplaces in 2022.
              </p>
              <div className="border py-3 px-5 rounded-3xl bg-[#edf4ff] border-none text-blue-600 font-semibold my-4">
                View Jobs
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className=" bg-white w-[250px] border my-7 mx-5 rounded-xl text-left  shadow hover:shadow-[2px_8px_20px_rgba(0,0,0,0.4)] flex flex-col items-center">
              <img
                src="./images/fs.gif"
                alt=""
                className="w-[60%] mx-auto h-[90px] my-1"
              />
              <div className="bg-[rgba(255,176,176,0.1)] w-[80%] rounded my-1 mx-auto px-[15px] py-[20px] flex flex-col items-center justify-center">
                <h1 className="text-[16px] font-semibold ">Reliance Retail</h1>
                <div className="flex my-2 text-gray-600 items-center justify-center">
                  <div className="text-[12px] font-semibold px-2 border-r  border-gray-300 text-gray-500 ">
                    <i className="fa-solid fa-star mx-1 text-yellow-400"></i>3.9
                  </div>
                  <div className="text-[12px]  text-gray-500  px-2">
                    <span className="font-semibold">27.3K</span> reviews
                  </div>
                </div>
              </div>
              <p className="w-[70%] mx-auto text-[13px] mt-3 text-center font-semibold text-gray-500 ">
                One of India's Top 100 Workplaces in 2022.
              </p>
              <div className="border py-3 px-5 rounded-3xl bg-[#edf4ff] border-none text-blue-600 font-semibold my-4">
                View Jobs
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className=" bg-white w-[250px] border my-7 mx-5 rounded-xl text-left  shadow hover:shadow-[2px_8px_20px_rgba(0,0,0,0.4)] flex flex-col items-center">
              <img
                src="./images/jio.gif"
                alt=""
                className="w-[60%] mx-auto h-[90px] my-1"
              />
              <div className="bg-[rgba(255,176,176,0.1)] w-[80%] rounded my-1 mx-auto px-[15px] py-[20px] flex flex-col items-center justify-center">
                <h1 className="text-[16px] font-semibold ">Reliance Retail</h1>
                <div className="flex my-2 text-gray-600 items-center justify-center">
                  <div className="text-[12px] font-semibold px-2 border-r  border-gray-300 text-gray-500 ">
                    <i className="fa-solid fa-star mx-1 text-yellow-400"></i>3.9
                  </div>
                  <div className="text-[12px]  text-gray-500  px-2">
                    <span className="font-semibold">27.3K</span> reviews
                  </div>
                </div>
              </div>
              <p className="w-[70%] mx-auto text-[13px] mt-3 text-center font-semibold text-gray-500 ">
                One of India's Top 100 Workplaces in 2022.
              </p>
              <div className="border py-3 px-5 rounded-3xl bg-[#edf4ff] border-none text-blue-600 font-semibold my-4">
                View Jobs
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className=" bg-white w-[250px] border my-7 mx-5 rounded-xl text-left  shadow hover:shadow-[2px_8px_20px_rgba(0,0,0,0.4)] flex flex-col items-center">
              <img
                src="./images/relaltd.gif"
                alt=""
                className="w-[60%] mx-auto h-[90px] my-1"
              />
              <div className="bg-[rgba(255,176,176,0.1)] w-[80%] rounded my-1 mx-auto px-[15px] py-[20px] flex flex-col items-center justify-center">
                <h1 className="text-[16px] font-semibold ">Reliance Retail</h1>
                <div className="flex my-2 text-gray-600 items-center justify-center">
                  <div className="text-[12px] font-semibold px-2 border-r  border-gray-300 text-gray-500 ">
                    <i className="fa-solid fa-star mx-1 text-yellow-400"></i>3.9
                  </div>
                  <div className="text-[12px]  text-gray-500  px-2">
                    <span className="font-semibold">27.3K</span> reviews
                  </div>
                </div>
              </div>
              <p className="w-[70%] mx-auto text-[13px] mt-3 text-center font-semibold text-gray-500 ">
                One of India's Top 100 Workplaces in 2022.
              </p>
              <div className="border py-3 px-5 rounded-3xl bg-[#edf4ff] border-none text-blue-600 font-semibold my-4">
                View Jobs
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
        <div className="my-5">
          <button className="text-[16px] border border-blue-700 py-2 px-5 rounded-[40px] text-blue-700 text-semibold">
            View all companies
          </button>
        </div>
      </div>
      <div className="md:max-w-[1100px] mx-auto border h-[350px] rounded-[30px] mt-[100px]  bg-gradient-to-b from-white to-orange-100 relative">
        <div className=" absolute top-5 left-14 flex flex-col">
          <img
            className=" left-[50px] top-[50px] "
            src="./images/role.png"
            alt=""
            width={400}
            height={400}
          />
          <div className="text-2xl font-bold text-left w-[300px] my-2">
            Discover jobs across popular roles
          </div>
          <p className="text-[14px] text-left my-3">
            Select a role and we'll show you relevant jobs for it!
          </p>
        </div>
        <div className="w-[500px] border absolute right-[50px] top-[-40px] rounded-[20px] bg-white px-10 py-[80px]  ">
          <div className="grid grid-cols-2 gap-3 ">
            <div className="border h-[80px] rounded-xl p-4 hover:shadow-[5px_10px_20px_rgba(0,0,0,0.4)]">
              <h1 className="text-[16px] font-semibold text-left ">
                Frontend Developer
              </h1>
              <h2 className="text-[16px] p-1 text-left ">13.2K+ jobs</h2>
            </div>
            <div className="border h-[80px] rounded-xl p-4 hover:shadow-[5px_10px_20px_rgba(0,0,0,0.4)]">
              <h1 className="text-[16px] font-semibold text-left ">
                Frontend Developer
              </h1>
              <h2 className="text-[16px] p-1 text-left ">13.2K+ jobs</h2>
            </div>
            <div className="border h-[80px] rounded-xl p-4 hover:shadow-[5px_10px_20px_rgba(0,0,0,0.4)]">
              <h1 className="text-[16px] font-semibold text-left ">
                Frontend Developer
              </h1>
              <h2 className="text-[16px] p-1 text-left ">13.2K+ jobs</h2>
            </div>
            <div className="border h-[80px] rounded-xl p-4 hover:shadow-[5px_10px_20px_rgba(0,0,0,0.4)]">
              <h1 className="text-[16px] font-semibold text-left ">
                Frontend Developer
              </h1>
              <h2 className="text-[16px] p-1 text-left ">13.2K+ jobs</h2>
            </div>
            <div className="border h-[80px] rounded-xl p-4 hover:shadow-[5px_10px_20px_rgba(0,0,0,0.4)]">
              <h1 className="text-[16px] font-semibold text-left ">
                Frontend Developer
              </h1>
              <h2 className="text-[16px] p-1 text-left ">13.2K+ jobs</h2>
            </div>
            <div className="border h-[80px] rounded-xl p-4 hover:shadow-[5px_10px_20px_rgba(0,0,0,0.4)]">
              <h1 className="text-[16px] font-semibold text-left ">
                Frontend Developer
              </h1>
              <h2 className="text-[16px] p-1 text-left ">13.2K+ jobs</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="md:max-w-[1100px] mx-auto rounded-[20px] p-4 flex items-center justify-between border mt-[100px] mb-[50px] overflow-hidden relative">
        <div className=" w-[70%] ml-5 gap-2 h-full flex">
          <img
            src="./images/ff-services-ot.png"
            alt=""
            className="w-[160px] h-[130px]  "
          />
          <div className="p-4 text-left">
            <h1 className="text-[18px] font-semibold">
              Accelerate your job search with premium services
            </h1>
            <p className="text-[12px] w-[80%] my-2 text-gray-500  ">
              Services to help you get hired, faster: from preparing your CV,
              getting recruiter attention, finding the right jobs, and more!
            </p>
            <div className="flex gap-5 mt-4">
              <div className="text-[10px] font-semibold w-[150px] border rounded-[20px] bg-gray-200 pl-4 py-2 ">
                <i className="fa-solid fa-bolt mr-2 "></i> Resume Writing{" "}
                <i class="fa-solid fa-chevron-down ml-2 rotate-[-90deg]"></i>
              </div>
              <div className="text-[10px] font-semibold w-[150px] border rounded-[20px] bg-gray-200 pl-4 py-2 ">
                <i class="fa-solid fa-file mr-1"></i>priority applicant{" "}
                <i class="fa-solid fa-chevron-down ml-2 rotate-[-90deg]"></i>
              </div>
              <div className="text-[10px] font-semibold w-[150px] border rounded-[20px] bg-gray-200 pl-4 py-2 ">
                <i class="fa-solid fa-pen-to-square mr-2"></i>Resume display{" "}
                <i class="fa-solid fa-chevron-down ml-2 rotate-[-90deg]"></i>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[20%] h-[80px] my-10">
          <div className="w-[160px] px-2 h-[50px] border text-[12px] font-semibold rounded-2xl text-[#474d6a] absolute top-[-20px] pt-[25px] right-[40px] bg-[#efedff] ">
            {" "}
            by Naukri Fastforward
          </div>
          <button className="bg-blue-700  text-white text-[16px] px-5 py-2 rounded-3xl ">
            Learn More
          </button>
          <div className="text-[12px] my-2 ">includes paid services</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
