import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { detailFood, editFood } from "../store/actions/foodAction";
import { fetchCategory } from "../store/actions/categoryAction";

const EditPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { foodId } = useParams();
  const {food} = useSelector(state => state.foods)
  const {categories: category} = useSelector(state => state.category)
  const [newFood, setNewFood] = useState({})
  const [ingredient, setIngredient] = useState({
    nameIngredient: "",
  })
  
  useEffect(() => {
    dispatch(detailFood(foodId))
    .then(() => {
      dispatch(fetchCategory())
    })
  }, [])

  useEffect(() => {
    if(food.id){
      setNewFood({
        ...food
      })
    }
  }, [food])

  useEffect(() => {
    let arrIng = []

    if(newFood.Foodingconjs){
      newFood.Foodingconjs.forEach(el => {
        arrIng.push(el.Ingredient.name) 
      });
      setIngredient({
        nameIngredient: arrIng.join(",")
      })
    }

  }, [newFood])

  const changeFood = (e) => {
    const { name, value } = e.target;
    setNewFood({
      ...newFood,
      [name]: value,
    });
  };

  const changeIngredient = (e) => {
    const {name, value} = e.target
    setIngredient({
      ...ingredient,
      [name]: value
    })
  }

  const submitFood = (e) => {
    e.preventDefault();
    dispatch(editFood(newFood, foodId, ingredient))
    .then(() => navigate("/foods"))
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
                value={ingredient.nameIngredient}
                onChange={changeIngredient}
                name="nameIngredient"
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
                Edit Food
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default EditPage;
