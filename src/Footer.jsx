import React from "react";

const Footer = () => {
  return (
    <>
      <div className="md:max-w-[1100px] mx-auto flex justify-between gap-5 border-b-2 border-gray-300 mb-5 pb-5 mt-[50px]">
        <div className=" px-5 py-2">
          <img src="./images/naukriNewLogo.svg" alt="" width={160} />
          <div className="my-8 ">
            <h2 className="text-[14px] font-semibold my-5 ">Conect with us</h2>
            <i className="text-[25px] cursor-pointer hover:text-blue-600  fa-brands fa-square-facebook"></i>
            <i className="text-[25px] cursor-pointer hover:text-red-600 mx-5 fa-brands fa-square-instagram"></i>
            <i className="text-[25px] cursor-pointer hover:text-blue-600 mr-5 fa-brands fa-square-twitter"></i>
            <i className="text-[25px] cursor-pointer hover:text-purple-600 fa-brands fa-square-google-plus"></i>
          </div>
        </div>
        <div className=" py-2 flex justify-between px-2 grid-cols-3 w-[40%]">
          <div className="col-span-1 ">
            <div className="flex flex-col gap-y-2 text-[14px]">
              <a className=" hover:text-blue-600 " href="#home">
                About us
              </a>
              <a className=" hover:text-blue-600 " href="#home">
                Careers
              </a>
              <a className=" hover:text-blue-600 " href="#home">
                Employer home
              </a>
              <a className=" hover:text-blue-600 " href="#home">
                Sitemap
              </a>
              <a className=" hover:text-blue-600 " href="#home">
                Credits
              </a>
            </div>
          </div>
          <div className="col-span-1  ">
            <div className="flex flex-col gap-y-2 text-[14px]">
              <a className=" hover:text-blue-600 " href="#home">
                Help center
              </a>
              <a className=" hover:text-blue-600 " href="#home">
                Summons/Notices
              </a>
              <a className=" hover:text-blue-600 " href="#home">
                Grievances
              </a>
              <a className=" hover:text-blue-600 " href="#home">
                Report issue
              </a>
            </div>
          </div>
          <div className="col-span-1 ">
            <div className="flex flex-col gap-y-2 text-[14px]">
              <a className=" hover:text-blue-600 " href="#home">
                Privacy policy
              </a>
              <a className=" hover:text-blue-600 " href="#home">
                Terms & conditions
              </a>
              <a className=" hover:text-blue-600 " href="#home">
                Fraud alert
              </a>
              <a className=" hover:text-blue-600 " href="#home">
                Trust & safety
              </a>
            </div>
          </div>
        </div>
        <div className=" w-[35%] ">
          <div className="border rounded-2xl px-6 py-4 border-gray-700">
            <h3 className="text-[16px] font-semibold ">Apply on the go</h3>
            <p className="text-[12px]">Get real-time job updates on our App</p>
            <div className="flex gap-4 mt-5">
              <img src="./images/android-app.png" alt="" />
              <img src="./images/ios-app.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className=" md:max-w-[1100px] mx-auto flex my-10">
        <div className=" flex gap-5 justify-between items-center w-full">
          <div className="text-[12px] text-gray-500  flex gap-5 items-center w-[50%]">
            <img src="./images/info-logo.gif" alt="" width={100} />
            <p>
              All trademarks are the property of their respective owners <br />
              All rights reserved © 2023 Info Edge (India) Ltd.
            </p>
          </div>
          <div className="text-2xl font-semibold">Our Partners</div>
          <marquee class="marq w-[30%] " bgcolor="transparent" direction="left">
            <div className="flex gap-3 ">
              <img src="./images/ic.gif" alt="" width={80} height={80} />
              <img src="./images/relaltd.gif" alt="" width={80} height={80} />
              <img src="./images/vir.gif" alt="" width={80} height={80} />
              <img src="./images/bigbasket.png" alt="" width={80} height={80} />
              <img src="./images/ic.gif" alt="" width={80} height={80} />
              <img src="./images/relaltd.gif" alt="" width={80} height={80} />
              <img src="./images/vir.gif" alt="" width={80} height={80} />
              <img src="./images/bigbasket.png" alt="" width={80} height={80} />
            </div>
          </marquee>
        </div>
      </div>
    </>
  );
};

export default Footer;
