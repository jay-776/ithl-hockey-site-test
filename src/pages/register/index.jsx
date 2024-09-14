import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="bg-animate min-h-screen flex items-center justify-center p-4">
      <div className="max-w-lg hidden lg:flex h-[560px]">
        <img src="/(5).jpg" className="rounded-3xl w-full" alt="hockeyplayer" />
      </div>
      <div className="bg-opacity-80 w-full border border-gray-400 bg-[#ebebeb15] p-8 rounded-3xl max-w-md h-[560px]">
        <h1 className="text-4xl font-extrabold text-center mb-8 neon-text">
          ITHL Register
        </h1>
        <form className="space-y-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Name "
              className="w-full bg-[#ebebeb15] border text-black px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4a8dcb] custom-placeholder"
            />
            <i className="fas fa-user absolute right-3 top-4 text-[#ffffff]"></i>
          </div>
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-[#ebebeb15] border text-black px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4a8dcb] custom-placeholder"
            />
            <i className="fas fa-envelope absolute right-3 top-4 text-[#ffffff]"></i>
          </div>
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-[#ebebeb15] border text-black px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4a8dcb] custom-placeholder"
            />
            <i className="fas fa-lock absolute right-3 top-4 text-[#ffffff]"></i>
          </div>
          <div className="relative">
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full bg-[#ebebeb15] border text-black px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4a8dcb] custom-placeholder"
            />
            <i className="fas fa-lock absolute right-3 top-4 text-[#ffffff]"></i>
          </div>
          <Link to="/login">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-400 to-blue-500 text-white font-bold py-3 mt-10 rounded-lg hover:from-blue-500 hover:to-blue-600 transform focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Register
            </button>
          </Link>
        </form>
        <div className="mt-3 text-center">
          <h1 className="text-white">Already have an account?</h1>
          <Link to="/login">
            <h1 className="text-sky-300 underline font-bold">Log In</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
