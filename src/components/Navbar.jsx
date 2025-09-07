import React from "react";
import { Link } from "react-router-dom";
import navBg from "../assets/Images/navbar.png";
import logo from "../assets/Images/logo.png";
import bell from "../assets/Images/bell.png";
import profile from "../assets/Images/profile.png";
import { useSelector } from "react-redux";
import { setSignUp } from "../redux/slices/globalSlicer";
const Navbar = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <div
      className="w-full flex items-center sticky top-0 z-100 bg-black/80"
      style={{
        backgroundImage: `url(${navBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "black",
      }}
    >
      <div className="flex justify-between items-center w-full p-[14px] px-[36px]">
        <div className="flex justify-center items-center gap-[16px]">
          <img
            src={logo}
            className="w-[104px] h-[98px]"
            style={{ backgroundSize: "contain" }}
          />
          <div className="text-[#CC9600] text-[28px] font-BonaNova">E-Book</div>
        </div>
        <div className="flex justify-between items-center gap-[46px]">
          <nav className="flex justify-between items-center gap-[42px] text-[20px] font-600">
            <Link to="/" className=" text-[#fff]">
              Home
            </Link>
            <Link to="/books" className=" text-[#fff]">
              About
            </Link>
            <Link to="/login" className=" text-[#fff]">
              Shop
            </Link>
            <Link to="/register" className=" text-[#fff]">
              Delivery Team
            </Link>
            <Link to="/dashboard" className=" text-[#fff]">
              Sellers
            </Link>
          </nav>
          <img src={bell} className="w-[20px] h-[20px]" />

          <div className="flex flex-col gap-[4px] justify-between items-center">
            {user && <img src={profile} className="w-[44px] h-[36px]" />}

            {user ? (
              <span className="text-[#fff] text-[10px] font-400">Mr. Demo</span>
            ) : (
              <span
                className="text-[#CC9600] text-[14px] font-400 cursor-pointer"
                onClick={() => setSignUp(true)}
              >
                Login / Register
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
