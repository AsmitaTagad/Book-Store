import React from "react";
import { useDispatch } from "react-redux";
import { setSignUp } from "../../redux/slices/globalSlicer";

const SignUp = () => {
  const dispatch = useDispatch();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#fff] z-40">
      <div className="bg-white rounded-2xl shadow-lg w-[400px] p-6 relative">
        <button
          onClick={() => dispatch(setSignUp(false))}
          className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="border rounded-lg px-3 py-2"
          />
          <input
            type="email"
            placeholder="Email"
            className="border rounded-lg px-3 py-2"
          />
          <input
            type="password"
            placeholder="Password"
            className="border rounded-lg px-3 py-2"
          />

          <button
            type="submit"
            className="bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
