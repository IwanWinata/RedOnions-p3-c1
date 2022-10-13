import logo from "../assets/logo2.png";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import xmark from "../assets/remove.png";

const NavBar = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [changeHeader, setChangeHeader] = useState(false);
  const onChangeHeader = () => {
    if (window.scrollY >= 50) {
      setChangeHeader(true);
    } else {
      setChangeHeader(false);
    }
  };
  const movePage = () => {
    navigate("/");
  };
  window.addEventListener("scroll", onChangeHeader);

  const logOut = () => {
    localStorage.clear()
    navigate("/")
  }
  return (
    <>
      <header
        className={
          changeHeader
            ? "bg-white fixed z-50 top-0 left-0 w-full shadow-md transition duration-500"
            : "bg-transparent fixed z-50 top-0 left-0 w-full transition duration-500"
        }
      >
        <nav className="flex items-center max-w-screen-xl mx-auto px-6 py-3">
          <div className="flex flex-grow">
            <img
              onClick={() => movePage()}
              className="w-36 cursor-pointer"
              src={logo}
              alt="logo"
            />
          </div>
          {localStorage.access_token ? (
            <div className="flex items-center justify-end space-x-4">
              <div className="relative flex cursor-pointer">
                <span onClick={logOut} className="bg-primary px-6 py-2 rounded-xl items-center justify-center text-white poppins">Log Out</span>
              </div>
              <img className="w-10 h-10 rounded-full" alt="logo" />
              <p className="text-gray-700 poppins hidden md:block lg:block"></p>
            </div>
          ) : (
            <div className="flex items-center justify-end space-x-6">
              <button
                to="/login"
                onClick={() => setShowModal(true)}
                className="poppins font-semibold"
              >
                Sign In
              </button>
              <Link
                to="/register"
                className=" bg-primary px-6 py-3 text-white poppins rounded-full ring-red-300 focus:outline-none focus:ring-4 transform transition duration-700 hover:scale-105"
              >
                Sign Up
              </Link>
            </div>
          )}
        </nav>
      </header>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <button
              className="text-red-500 text-xl underline absolute top-1/2 right-1/3 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setShowModal(false)}
            >
              <img src={xmark} alt="" width="60"></img>
            </button>
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <LoginPage />
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default NavBar;
