import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { searchFood } from "../store/actions/foodAction";
import { useDispatch, useSelector } from "react-redux";

const DetailPage = () => {
  const { foodId } = useParams();
  const dispatch = useDispatch();
  const { food, loading } = useSelector((state) => state.foods);
  let arrIng = []
  if(food.id){
    food.Foodingconjs.forEach(el => 
      arrIng.push(el.Ingredient.name)  
    )
  }

  useEffect(() => {
    dispatch(searchFood(foodId));
  }, []);
  console.log(food);

  return (
        <main className="h-screen w-full banner">
      {loading || !food.id ? (
        <img
          src="https://c.tenor.com/2yQv-RptjeQAAAAC/fastfood.gif"
          className="absolute top-0"
          alt=""
        ></img>
      ) : (
          <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-4xl font-bold text-red-600 underline indent-0.5 underline-offset-4">
              {food.name} by {food.Author.username}
            </h1>
            <h1 className="text-2xl font-bold text-red-600 mt-2">
              {food.Category.name}
            </h1>
            <h1 className="mt-4 text-red-600 text-2xl font-semibold">
              IDR {food.price.toLocaleString("id-ID")}
            </h1>
            <img className="w-96" src={food.imgUrl} alt="" />
            <p className="text-lg poppins w-1/2 text-center text-red-500">{food.description}</p>
            <p className="text-lg poppins w-1/2 text-center text-red-500">Ingredients:</p>
            <p className="text-lg poppins w-1/2 text-center text-red-500">- {arrIng.join(", ")}</p>
          </div>
      )}
      </main>
  );
};

export default DetailPage;
