import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFood } from '../store/actions/foodAction';
import TableHead from "./TableHead"
import TableBodyFood from "./TableBodyFood"

const TableFood = () => {
    const dispatch = useDispatch()
    const thead = ["No", "Name", "Description", "Price", "Food image", "Status", "Author", "Category", "Action"]
    const {foods} = useSelector((state) => state.foods)

    useEffect(() => {
        dispatch(fetchFood())
    }, [])

    return (
        <div>
        {
            !foods.rows ? <h1>loading .... </h1> : 
            <div className="flex flex-wrap mt-4 ml-60 max-w" id="movieTable">
        <div className="w-full xl:w-full mb-12 xl:mb-0 px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3 className="font-semibold text-base text-blueGray-700">
                                Food Lists
                            </h3>
                        </div>
                        <div className="px-4 flex-grow flex-1 absolute ml-28">
                        </div>
                    </div>
                </div>
                <div className="block w-full overflow-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                {
                                    thead.map((el, idx) => 
                                        <TableHead el={el} key={idx + 1}/>  
                                    )
                                }
                            </tr>
                        </thead>
                        <tbody id="bodyMovies">
                            {
                                foods.rows.map((el, idx) => 
                                    <TableBodyFood el={el} idx={idx + 1} key={el.id}/>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
        }
        </div>
    )
}
export default TableFood