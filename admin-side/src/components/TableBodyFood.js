import { useNavigate } from "react-router-dom";
import { destroyFood, fetchFood } from "../store/actions/foodAction";
import { useDispatch} from "react-redux";

const TableBodyFood = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const deleteFood = (id) => {
    dispatch(destroyFood(id))
    .then(() => {
      dispatch(fetchFood())
    })
  };

  const movePage = (id) => {
    navigate(`/${id}`);
  };
  return (
    <tr>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">
        {props.idx}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">
        {props.el.name}
      </td>
      <td className="border-t-0 px-3 border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-justify">
        {props.el.description}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">
        Rp. {props.el.price.toLocaleString("id-ID")}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">
        <img src={props.el.imgUrl} alt="" width="200" />
      </td>
      <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-base whitespace-nowrap">
       {props.el.status}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">
        {props.el.AuthorId}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">
        {props.el.CategoryId}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">
      <button
          onClick={() => movePage(props.el.id)}
          className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Ingredients
        </button>
        <button
          onClick={() => movePage(props.el.id)}
          className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Edit Food
        </button>
        <button
          onClick={() => {
            deleteFood(props.el.id);
          }}
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Delete Food
        </button>
      </td>
    </tr>
  );
};
export default TableBodyFood;
