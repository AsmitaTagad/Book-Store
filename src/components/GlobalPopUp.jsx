import React from "react";
import SignUp from "./authetication/SignUp";
import { useSelector } from "react-redux";

const GlobalPopUp = () => {
  const isSignUp = useSelector((state) => state.global.isSignUp);

  console.log("isSignUp", isSignUp);
  if (!isSignUp) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center">
      {isSignUp && (
        <>
          <div className="absolute inset-0 bg-[#fff] backdrop-blur-sm"></div>
          <div className="relative z-10">
            <SignUp />
          </div>
        </>
      )}
    </div>
  );
};

export default GlobalPopUp;
