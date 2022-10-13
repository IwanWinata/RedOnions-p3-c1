import logo from "../assets/logo2.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userRegister } from "../store/actions/userAction";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  });
  const [error, setError] = useState(false);

  const changeUser = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const postUser = (e) => {
    if (
      !user.email ||
      !user.username ||
      !user.password ||
      !user.phoneNumber ||
      !user.address
    ) {
      setError(true);
    }
    e.preventDefault();
    dispatch(userRegister(user))
    .then(() => {
        if(error){
            navigate("/")
        }
    })
    
  };

  return (
    <main className="h-screen w-full banner">
      <div className="flex flex-col justify-center items-center h-screen">
        {/* logo  */}
        <img className="w-52" src={logo} alt="logo" />
        {/* sign up form  */}
        <form
          onSubmit={postUser}
          className="bg-white w-96 mt-6 p-4 rounded-lg shadow-lg"
        >
          {error && (
            <div
              class="bg-red-100 border mb-2 border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong class="font-bold">Holy smokes!</strong>
              <span class="block sm:inline">
                Email or Password invalid either empty
              </span>
              <span class="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
            </div>
          )}
          <input
            value={user.username}
            onChange={changeUser}
            name="username"
            placeholder="Username"
            className="w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
          />
          <input
            value={user.email}
            onChange={changeUser}
            name="email"
            placeholder="Email"
            className="w-full px-4 py-3 mt-4 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
          />
          <input
            value={user.password}
            onChange={changeUser}
            name="password"
            placeholder="Password"
            type="password"
            className="w-full px-4 mt-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
          />
          <input
            value={user.phoneNumber}
            onChange={changeUser}
            name="phoneNumber"
            placeholder="Phone Number"
            type="number"
            className="w-full px-4 mt-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
          />
          <input
            value={user.address}
            onChange={changeUser}
            name="address"
            placeholder="Address"
            className="w-full px-4 mt-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
          />
          <button className="w-full py-3 bg-primary text-white ring-red-400 focus:outline-none focus:ring-4 mt-6 rounded-lg transition duration-300 poppins ">
            Sign Up
          </button>
        </form>
      </div>
    </main>
  );
};

export default RegisterPage;
