import { useState } from "react";
import logo from "../assets/logo2.png";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../store/actions/userAction";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);

  const userChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const postLogin = (e) => {
      if (!user.email || !user.password) {
        setError(true);
      }
    e.preventDefault();
    dispatch(userLogin(user)).then(() => {
      navigate("/");
    });
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {/* logo  */}
      <img className="w-52" src={logo} alt="logo" />
      {/* sign up form  */}
      <form
        onSubmit={postLogin}
        className="bg-white w-96 mt-6 p-4 rounded-lg shadow-lg"
      >
        {localStorage.access_token && (
          <div
            class="bg-teal-100 border-t-4 mb-2 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
            role="alert"
          >
            <div class="flex">
              <div class="py-1">
                <svg
                  class="fill-current h-6 w-6 text-teal-500 mr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                </svg>
              </div>
              <div>
                <p class="font-bold">Login Succes</p>
                <p class="text-sm">You are already login, Please! close this tab</p>
              </div>
            </div>
          </div>
        )}

        {error && (
          <div
            class="bg-red-100 border mb-2 border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong class="font-bold">Holy smokes!</strong>
            <span class="block sm:inline">
               Email or Password invalid either empty
            </span>
            <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
            </span>
          </div>
        )}
        <input
          value={user.name}
          onChange={userChange}
          placeholder="email"
          name="email"
          type="text"
          className="w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
        />
        <input
          value={user.password}
          onChange={userChange}
          name="password"
          placeholder="password"
          type="password"
          className="w-full px-4 mt-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
        />
        <button className="w-full py-3 bg-primary text-white ring-red-400 focus:outline-none focus:ring-4 mt-6 rounded-lg transition duration-300 poppins ">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
