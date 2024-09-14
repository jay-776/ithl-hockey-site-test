import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { NavList } from "../../utils/Navlist";
import { setCurrentPage } from "../../store/reducers/navSlice";
import { Category } from "../../utils/Category";
import { setAuthStat } from "../../store/reducers/authSlice";

const Navbar = () => {
  const { currentPage } = useSelector((state) => state.nav);
  const { authStat } = useSelector((state) => state.auth);
  const [bigImg, setBigImg] = useState("");
  const [smallImg, setSmallImg] = useState(NavList);
  const dispatch = useDispatch();

  useEffect(() => {
    setBigImg(currentPage);
  }, [currentPage]);

  const handlePage = useCallback(
    (page) => {
      dispatch(setCurrentPage(page));
    },
    [dispatch]
  );

  const handleAuthstat = () => {
    dispatch(setAuthStat(true));
  };

  return (
    <div className="fixed z-50 w-full h-72 bg-cover bg-center bg-no-repeat bg-[url('/nav.png')] opacity-90">
      <div className="fixed z-50 w-full ">
        <div className=" z-50 items-center flex justify-center w-full pt-0 p-5 h-72 ">
          <div className="flex items-center justify-between flex-col">
            {bigImg && (
              <img
                src={`/logo/${bigImg}.png`}
                alt="ITHL"
                className={`absolute z-10 top-0 ${
                  currentPage === "home" ? "w-56 lg:w-72" : "w-40 lg:w-56"
                }`}
              />
            )}

            {currentPage === "home" ? (
              <div className="flex flex-col">
                <div className="flex rounded-lg justify-center mt-20 lg:mt-44 gap-0 lg:gap-1 items-center z-50">
                  {smallImg?.map((item, index) =>
                    item ? (
                      <div
                        key={index}
                        className="w-16 lg:w-24 text-white rounded-full lg:p-1 m-2 text-center"
                      >
                        <Link to={`/${item}`}>
                          <img
                            src={`/logo/${item}.png`}
                            alt="ITHL"
                            onClick={() => handlePage(item)}
                          />
                        </Link>
                      </div>
                    ) : null
                  )}
                </div>

                <div className="absolute flex rounded-lg gap-0 lg:gap-1 top-[147px] lg:top-[184px] scale-y-50 opacity-30 items-center">
                  {smallImg?.map((item, index) =>
                    item ? (
                      <div
                        key={index}
                        className="w-16 lg:w-24 text-white rounded-full lg:p-1 m-2 text-center"
                      >
                        <img src={`/logo/${item}.png`} alt="ITHL" />
                      </div>
                    ) : null
                  )}
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-5 gap-3">
                {Category.map((item, index) => (
                  <div
                    key={index}
                    className={`lg:w-28 w-20 py-2 z-20 border mt-20 lg:mt-56 text-[14px] md:text-base md:w-24 lg:text-lg text-white border-[#1c1b1b] rounded-lg text-center cursor-pointer ${
                      currentPage === "europa"
                        ? "bg-[#ffcc00]"
                        : currentPage === "core"
                        ? "bg-[#a1681d]"
                        : currentPage === "rammer"
                        ? "bg-[#f67316]"
                        : currentPage === "sweat"
                        ? "bg-[#b0080e]"
                        : currentPage === "elite"
                        ? "bg-[#0522c5]"
                        : ""
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="flex w-full justify-between top-4 absolute p-1 sm:p-4 lg:p-10">
          <div className="flex items-center gap-5 p-1 lg:p-4  h-12 text-black">
            <Link to={"/"}>
              <div className="text-[#ffffff]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  strokeWidth={1.0}
                  stroke="currentColor"
                  className="size-9 lg:size-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </div>
            </Link>
          </div>
          <div className="flex flex-col justify-center gap-5">
            {authStat === true ? (
              <div className="flex flex-col gap-36 lg:gap-16">
                <div className="flex lg:justify-center justify-end md:gap-2 lg:gap-7">
                  <div className="text-white rounded-full p-0 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="currentColor"
                      className="size-8 lg:size-11"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  </div>
                  <div className="text-white rounded-full p-0 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="currentColor"
                      className="size-8 lg:size-11"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 0.785 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
                      />
                    </svg>
                  </div>
                  <div
                    className="text-white rounded-full p-0 cursor-pointer"
                    onClick={() => handleAuthstat()}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="currentColor"
                      className="size-8 lg:size-11"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Please search here..."
                    className="w-full py-3 px-4 text-sm text-white rounded-lg bg-[#4a8dcb2d] border border-[#444444] outline-none"
                  />
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-24 lg:gap-16 w-full">
                <div className="flex lg:justify-between items-end flex-col gap-3 lg:flex-row">
                  <Link to={"/login"}>
                    <div className="flex text-white justify-center items-center space-x-2 px-3 py-1 lg:h-12 lg:w-20 w-16 h-10 text-sm lg:text-lg border border-[#2d2d2d] rounded-md hover:bg-[#2d2d2d80] transition-shadow shadow-md">
                      Login
                    </div>
                  </Link>
                  <Link to={"/register"}>
                    <div className="flex text-white justify-center items-center space-x-2 px-3 py-1 lg:h-12 lg:w-20 w-16 h-10 text-sm lg:text-lg border bg-[#4a8dcbb7] border-[#bdbdbd] rounded-md hover:bg-[#4a8dcb] transition-shadow shadow-md">
                      Register
                    </div>
                  </Link>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Please search here..."
                    className="w-full py-3 px-4 text-sm text-white rounded-lg bg-[#4a8dcb2d] border border-[#444444] outline-none"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
