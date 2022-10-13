import { useDispatch} from "react-redux";
import { destroyCategory, fetchCategory } from "../store/actions/categoryAction";
import { useNavigate } from "react-router-dom";

const TableBodyCategory = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const deleteCategory = (id) => {
    dispatch(destroyCategory(id))
    .then(() => {
        dispatch(fetchCategory())
    })
  };

  const movePage = (id) => {
    navigate(`/category/${id}`);
  };
  return (
    <tr>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">
        {props.idx}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">
        {props.el.name}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">
        <button
            onClick={() => movePage(props.el.id)}
          className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Edit Category
        </button>
        <button
          onClick={() => {
            deleteCategory(props.el.id);
          }}
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Delete Category
        </button>
      </td>
    </tr>
  );
};
export default TableBodyCategory;
