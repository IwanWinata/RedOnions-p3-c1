import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postUser } from "../store/actions/userAction";
import { useDispatch} from "react-redux";

const RegisterPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  });

  const changeUser = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  const submitRegister = (e) => {
    e.preventDefault();
    dispatch(postUser(newUser))
    .then(() => {
      navigate("/foods")
    })
  };
  return (
    <main className="h-screen w-full banner">
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="container mx-auto mt" id="divRegister">
          <div className="flex justify-center px-6 my-12 mt-32">
            <div className="w-full xl:w-3/4 lg:w-11/12 flex">
              <div
                className="w-full h-auto bg-orange-100 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                style={{
                  backgroundImage: `url('https://asset.kompas.com/crops/xcKRd-I9DEl8tmFE9qZzi1zGlHw=/0x0:1000x667/750x500/data/photo/2021/10/20/616fcbfce7bad.jpg')`,
                }}
              ></div>
              <div className="w-full lg:w-7/12 bg-orange-100 p-5 rounded-lg lg:rounded-l-none">
                <h3 className="pt-4 text-2xl text-center">
                  Create an Account!
                </h3>
                <form
                  onSubmit={submitRegister}
                  className="px-8 pt-6 pb-8 mb-4 bg-orange-100 rounded"
                  id="registerForm"
                >
                  <div className="mb-4 md:flex md:justify-between">
                    <div className="mb-4 md:mr-2 md:mb-0">
                      <label className="block mb-2 text-sm font-bold text-gray-700">
                        Username
                      </label>
                      <input
                        value={newUser.username}
                        onChange={changeUser}
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        name="username"
                        type="text"
                        placeholder="Username"
                      />
                    </div>
                  </div>

                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label className="block mb-2 text-sm font-bold text-gray-700 mt-3">
                      Email
                    </label>
                    <input
                      value={newUser.email}
                      onChange={changeUser}
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      name="email"
                      type="text"
                      placeholder="Email"
                    />
                  </div>

                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label className="block mb-2 text-sm font-bold text-gray-700 mt-3">
                      Password
                    </label>
                    <input
                      value={newUser.password}
                      onChange={changeUser}
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      name="password"
                      type="password"
                      placeholder="password"
                    />
                  </div>

                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label className="block mb-2 text-sm font-bold text-gray-700 mt-3">
                      Phone Number
                    </label>
                    <input
                      value={newUser.phoneNumber}
                      onChange={changeUser}
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      name="phoneNumber"
                      type="text"
                      placeholder="phoneNumber"
                    />
                  </div>

                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label className="block mb-2 text-sm font-bold text-gray-700 mt-3">
                      Address
                    </label>
                    <input
                      value={newUser.address}
                      onChange={changeUser}
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      name="address"
                      type="text"
                      placeholder="Address"
                    />
                  </div>

                  <div className="mb-6 text-center mt-5">
                    <button className="w-full py-3 bg-primary text-white ring-red-400 focus:outline-none focus:ring-4 mt-6 rounded-lg transition duration-300 poppins ">
                      Register New Admin
                    </button>
                  </div>

                  <hr className="mb-6 border-t" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;
