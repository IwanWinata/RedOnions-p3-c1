import { useNavigate } from "react-router-dom"

const FoodCard = (props) => {
    const navigate = useNavigate()
    const moveDetail = (id) => {
        navigate(`/detail/${id}`)
    }
    return (
        <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
            <span className="bg-red-100 border border-red-500 rounded-full text-primary text-sm poppins px-4 py-1 inline-block mb-4 ">{props.el.Category.name}</span>
            {
                props.el.status === "Available" ? 
                <span className="bg-lime-100 border border-green-500 rounded-full text-lime-500 text-sm poppins px-4 py-1 inline-block mb-4 ml-2">{props.el.status}</span>
                :
                <span className="bg-gray-100 border border-gray-500 rounded-full text-gray-500 text-sm poppins px-4 py-1 inline-block mb-4 ml-2">{props.el.status}</span>

            }
            <img onClick={() => moveDetail(props.el.id)} className="w-64 mx-auto transform transition duration-300 hover:scale-105" src={props.el.imgUrl}  alt="" />
            <div className="flex flex-col items-center my-3 space-y-2">
                <h1 className="text-gray-900 poppins text-lg">{props.el.name}</h1>
                <p className="text-gray-500 poppins text-sm text-center">{props.el.description}</p>
                <h2 className="text-gray-900 poppins text-2xl font-bold">IDR {props.el.price.toLocaleString("id-ID")}</h2>
                {
                    props.el.status === "Available" ?
                    <button className="bg-primary text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105">Order Now</button>
                    :
                    <button className="bg-gray-300 text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24" disabled>Not Available</button>
                }
            </div>
        </div>
    )
}
export default FoodCard