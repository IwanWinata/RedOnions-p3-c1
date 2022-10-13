import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import { fetchCategory, searchCategory } from "../store/actions/categoryAction";
import { editCategory } from "../store/actions/categoryAction";


const EditCategory = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { id } = useParams();
    const {category} = useSelector(state => state.category)
    const [newCategory = category, setNewCategory] = useState()

    useEffect(() => {
        dispatch(searchCategory(id))
    }, [])

    const changeCategory = (e) => {
        const {name, value} = e.target
        setNewCategory({
            ...newCategory,
            [name]: value
        })
    }
    const submitCategory = (e) => {
        e.preventDefault();
        dispatch(editCategory(newCategory, id))
        .then(() => {
            dispatch(fetchCategory())
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
                Edit Category
              </button>
            </div>
          </form>
        </div>
      </div>
      </main>
    )
}
export default EditCategory