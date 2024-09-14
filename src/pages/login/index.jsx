import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthStat } from "../../store/reducers/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAuthstat = () => {
    event.preventDefault();
    dispatch(setAuthStat(true));
    navigate("/");
  };

  return (
    <div className="bg-animate min-h-screen flex items-center justify-center p-4">
      <div className="max-w-lg hidden lg:flex h-[560px]">
        <img src="/(5).jpg" className="rounded-3xl w-full" alt="hockeyplayer" />
      </div>
      <div className="border w-full border-gray-400 h-[560px] bg-[#ebebeb15] bg-opacity-80 p-8 rounded-3xl max-w-md">
        <h1 className="text-4xl font-extrabold text-center mb-8 neon-text">
          ITHL Login
        </h1>
        <form className="space-y-6" onSubmit={() => handleAuthstat()}>
          <div className="relative">
            <input
              type="text"
              placeholder="Name"
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
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-400 to-blue-500 text-white font-bold py-3 mt-10 rounded-lg hover:from-blue-500 hover:to-blue-600 transform focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            Login
          </button>
          <button class="w-full max-w-md font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
            <div class="bg-white p-2 rounded-full">
              <svg class="w-4" viewBox="0 0 533.5 544.3">
                <path
                  d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                  fill="#4285f4"
                />
                <path
                  d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                  fill="#34a853"
                />
                <path
                  d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                  fill="#fbbc04"
                />
                <path
                  d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                  fill="#ea4335"
                />
              </svg>
            </div>
            <span class="ml-4">Sign Up with Google</span>
          </button>
        </form>
        <div className="mt-3 text-center">
          <h1 className="text-white"> Don't have an ITHL account??</h1>
          <Link to={"/register"}>
            <h1 className="text-sky-300 underline font-bold">Register</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
