import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { postFood } from "../store/actions/foodAction";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../store/actions/categoryAction";

const AddPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { categories: category } = useSelector((state) => state.category);

  const [newFood, setNewFood] = useState({
    name: "",
    description: "",
    price: "",
    imgUrl: "",
    CategoryId: "",
    ingredients: "",
  });

  useEffect(() => {
    dispatch(fetchCategory());
  }, []);

  const changeFood = (e) => {
    const { name, value } = e.target;
    setNewFood({
      ...newFood,
      [name]: value,
    });
  };

  const submitFood = (e) => {
    e.preventDefault();
    dispatch(postFood(newFood)).then(() => {
      navigate("/foods");
    });
  };

  return (
    <main className="h-screen w-full banner">
      <div className="flex flex-col justify-center items-center h-screen">
        <div
          id="divLogin"
          className="p-9 w-1/2 bg-white justify-center rounded-lg border m-auto border-gray-200 shadow-lg sm:p-10 dark:bg-orange-100"
        >
          <form onSubmit={submitFood} className="space-y-10" id="loginForm">
            <h4 className="text-xl font-medium text-gray-900 dark:text-black">
              Create New Food on the Menu
            </h4>

            <div>
              <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-black">
                Food
              </label>
              <input
                value={newFood.name}
                onChange={changeFood}
                name="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black"
                placeholder="Food Name"
              />
            </div>

            <div>
              <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-black">
                Description
              </label>
              <input
                value={newFood.description}
                onChange={changeFood}
                name="description"
                placeholder="Food Description"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black"
              />
            </div>

            <div>
              <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-black">
                Price
              </label>
              <input
                value={newFood.price}
                onChange={changeFood}
                name="price"
                type="number"
                placeholder="Food Price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black"
              />
            </div>

            <div>
              <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-black">
                Image Url
              </label>
              <input
                value={newFood.imgUrl}
                onChange={changeFood}
                name="imgUrl"
                placeholder="Food Image"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black"
              />
            </div>

            <div>
              <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-black">
                Ingredient
              </label>
              <h1 className="pb-1">*You must write like this "steak,egg,chiken" if u want to put more than 1 ingredient*</h1>
              <input
                value={newFood.ingredients}
                onChange={changeFood}
                name="ingredients"
                placeholder="steak,egg,chiken,beef"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black"
              />
            </div>

            <div>
              <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-black">
                Category
              </label>
              <select
                value={newFood.CategoryId}
                onChange={changeFood}
                name="CategoryId"
                className="block rounded-lg appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                {category.map((el, idx) => (
                  <option key={idx + 1} value={el.id}>
                    {el.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center justify-between">
              <button className="w-full py-3 bg-primary text-white ring-red-400 focus:outline-none focus:ring-4 mt-6 rounded-lg transition duration-300 poppins">
                Add Food
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default AddPage;

{
  /* <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-black">
                Ingredients
              </label>
            <div className="grid grid-cols-1 md:grid-cols-2 m-6 lg:grid-cols-5 gap-10 mt-12">
                {
                    ingredients.map((el, idx) => 
                        <div key={idx + 1} className="flex items-center mb-4 text-base">
                          <input
                            type="checkbox"
                            value={el.value}
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            
                            className="ml-2 text-sm font-medium text-black dark:text-black"
                          >
                            {el.name}
                          </label>
                        </div>
                    )
                }
                </div>       */
}
