import React from "react";
import { useNavigate } from "react-router-dom";
import { logo, background } from "../Assets/index";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col items-center justify-center h-screen"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
      }}
    >
      <div className="text-center mt-5">
        <img
          className="w-80 h-70 mb-15 mx-auto min-w-[150px]"
          src={logo}
          alt="logo"
        />
        <form className="mx-auto mb-5 mt-4 max-w-md">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mt-4 mb-2 text-gray-600 text-left">
              Register
            </h1>
            <p className="text-gray-500 text-left">
              Already have an account?{" "}
              <span
                onClick={() => navigate("/")}
                className="text-lime-500 cursor-pointer"
              >
                Sign In
              </span>
            </p>
          </div>
          <div className="text-left">
            <span className="">Full Name</span>
            <input
              placeholder="Full Name"
              type="text"
              className="w-full px-4 py-4 border rounded-lg mb-4"
            />
          </div>
          <div className="text-left">
            <span className="">Email</span>
            <input
              placeholder="Email"
              type="email"
              className="w-full px-4 py-4 border rounded-lg mb-4"
            />
          </div>
          <div className="text-left">
            <span className="">Role</span>
            <input
              placeholder="Role"
              type="text"
              className="w-full px-4 py-4 border rounded-lg mb-4"
            />
          </div>
          <div className="text-left">
            <span className="">Password</span>
            <input
              placeholder="Password"
              type="password"
              className="w-full px-4 py-4 border rounded-lg mb-4"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button" // No need for form submission
              onClick={() => navigate("/")} // Redirect to homepage or any other route
              className="bg-lime-500 text-white py-2 px-4 rounded-sm"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
