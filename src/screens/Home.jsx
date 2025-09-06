import React from "react";
import Background from "../assets/Images/homeback.png";
import Bookscroller from "../components/homepage/Bookscroller";
import Bookstore from "../assets/Images/store.png";
import Footer from "../components/homepage/Footer";

const Home = () => {
  return (
    <div className="flex bg-[#ffffff] flex-col gap-[32px]">
      <div
        className="w-full flex h-[580px] relative z-0 pt-[120px] justify-center"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute z-20 text-[#fff] flex flex-col justify-center items-center w-full gap-[12px]">
          <sapn className="text-[#FF7700] font-600 text-[48px]">
            {" "}
            The Book Lover's Dreamlands Awaits!
          </sapn>{" "}
          <br />
          <div className="flex flex-col justify-center items-center gap-[2px] m-0 p-0 text-[20px]">
            <span className="m-0 p-0">
              Welcome to the ultimate book lover's paradise! Join our community
              and contribute to the ever-
            </span>
            <span className="m-0 p-0">
              evolving library of stories, where every book has a chance to
              inspire someone new.
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center flex-col gap-[20px] w-full">
        <h6 className="text-[48px] text-[#000000]">Our Best Picks</h6>
        <div className="flex justify-center items-center min-h-[400px] w-full">
          <Bookscroller />
        </div>
      </div>
      <div className="flex flex-col bg-[#000000] gap-[36px]">
      <div className="w-full flex flex-col relative z-0 pt-[120px] justify-center bg-[#000000] py-[8px] ">
        <div className="flex justify-center items-center gap-[60px] flex-row">
          <img src={Bookstore} className="w-[543px] h-[307px] object-cover" />
          <div className="flex flex-col gap-[40px]">
            <div className="flex flex-col justify-center gap-[20px] leading-tight ">
              <div className="text-[40px] font-800 text-[#fff] p-0 m-0 leading-tight">
                <span>
                  Your favourite <span className="text-[#CC9600]">Reads</span>{" "}
                </span>{" "}
                <br />
                <span className="text-[#CC9600]">Are Here!</span>
              </div>
              <div className="text-[#fff] font-400 p-0 m-0 leading-tight">
                Buy your favorite books online with ease! Enjoy exclusive offers{" "}
                <br />
                and discounts on selected titles. Dive into our collection and{" "}
                <br />
                find special deals that make reading more affordable. Shop now{" "}
                <br />
                and unlock more savings with every purchase!
              </div>
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-col text-[#CA891D] font-600">
                <span className="text-[40px]">800+</span>
                <span className="text-[16px]">Book Listing</span>
              </div>
              <div className="flex flex-col text-[#CA891D] font-600">
                <span className="text-[40px]">1K+</span>
                <span className="text-[16px]">Registered Members</span>
              </div>
              <div className="flex flex-col text-[#CA891D] font-600">
                <span className="text-[40px]">50+</span>
                <span className="text-[16px]">Branch Count</span>
              </div>
            </div>
            <button className="flex border-[#CC9600] rounded-[8px] p-[8px] text-[#fff] justify-center items-center max-w-[191px] text-[14px]">
              Explore More
            </button>
          </div>
        </div>
      </div>
      <Footer />
      </div>
    </div>
  );
};

export default Home;
