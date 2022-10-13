import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch} from "react-redux";
import {postCategory} from "../store/actions/categoryAction"

const AddCategory = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const [newCategory, setNewCategory] = useState({
        name: ""
    })

    const changeCategory = (e) => {
        const {name, value} = e.target
        setNewCategory({
            ...newCategory,
            [name]: value
        })
    }
    const submitCategory = (e) => {
        e.preventDefault();
        dispatch(postCategory(newCategory))
        .then(() => {
          navigate("/categoryList")
        })
      };
    return (
        <main className="h-screen w-full banner">
      <div className="flex flex-col justify-center items-center h-screen">
        <div
          id="divLogin"
          className="p-9 w-1/2 mt-10 mb-10 bg-white justify-center rounded-lg border m-auto border-gray-200 shadow-lg sm:p-10 dark:bg-orange-100"
        >
          <form onSubmit={submitCategory} className="space-y-10" id="loginForm">
            <h4 className="text-xl font-medium text-gray-900 dark:text-black">
              Create New Category
            </h4>

            <div>
              <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-black">
                Category 
              </label>
              <input
                onChange={changeCategory}
                value={newCategory.name}
                name="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black"
                placeholder="Category Name"
              />
            </div>

            <div className="flex items-center justify-between">
              <button className="w-full py-3 bg-primary text-white ring-red-400 focus:outline-none focus:ring-4 mt-6 rounded-lg transition duration-300 poppins">
                Add Category
              </button>
            </div>
          </form>
        </div>
      </div>
      </main>
    )
}

export default AddCategory