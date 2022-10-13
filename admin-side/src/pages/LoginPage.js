import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../store/actions/userAction";

const LoginPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  const changeUser = (e) => {
    const { name, value } = e.target;
    setUserLogin({
      ...userLogin,
      [name]: value,
    });
  };

  const submitLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(userLogin))
    .then(() => {
      navigate("/foods")
    })
  };
  return (
    <main className="h-screen w-full banner">
      <div className="flex flex-col justify-center items-center h-screen">
        <div
          id="divLogin"
          className="p-9 w-1/4 bg-white justify-center rounded-lg border m-auto border-gray-200 shadow-lg sm:p-10 dark:bg-orange-100"
        >
          <form onSubmit={submitLogin} className="space-y-10" id="loginForm">
            <h4 className="text-xl font-medium text-gray-900 dark:text-black">
              Sign in to our platform
            </h4>

            <div>
              <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-black">
                Your Email :
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={userLogin.email}
                onChange={changeUser}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black"
                placeholder="name@company.com"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                Your Password :
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                value={userLogin.password}
                onChange={changeUser}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black"
              />
            </div>
            <div className="flex items-center justify-between">
              <button className="w-full py-3 bg-primary text-white ring-red-400 focus:outline-none focus:ring-4 mt-6 rounded-lg transition duration-300 poppins">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
