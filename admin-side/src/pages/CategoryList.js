import TableHead from "../components/TableHead";
import TableBodyCategory from "../components/TableBodyCategory";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../store/actions/categoryAction";

const CategoryList = () => {
  const thead = ["No", "Category Name", "Action"];
  const dispatch = useDispatch();
  const {categories: category} = useSelector(state => state.category)

  useEffect(() => {
    dispatch(fetchCategory())
  }, []);

  return (
    <div className="flex flex-wrap mt-4 ml-60 max-w" id="movieTable">
      <div className="w-full xl:w-full mb-12 xl:mb-0 px-4">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3 className="font-semibold text-base text-blueGray-700">
                  Category Lists
                </h3>
              </div>
              <div className="px-4 flex-grow flex-1 absolute ml-28"></div>
            </div>
          </div>
          <div className="block w-full overflow-x-auto">
            <table className="items-center w-full bg-transparent border-collapse">
              <thead>
                <tr>
                  {thead.map((el, idx) => (
                    <TableHead className="w-full" el={el} key={idx + 1} />
                  ))}
                </tr>
              </thead>
              <tbody id="bodyMovies">
                {
                    category.map((el, idx) => 
                        <TableBodyCategory key={idx + 1} idx={idx + 1} el={el}/>
                    )
                }
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
