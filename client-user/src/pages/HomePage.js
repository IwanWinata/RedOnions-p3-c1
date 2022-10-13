import Banner from "../components/Banner";
import FoodCard from "../components/FoodCard";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFood } from "../store/actions/foodAction";

const HomePage = () => {
  const dispatch = useDispatch();
  const { foods, loading } = useSelector((state) => state.foods);
  let [limit, setLimit] = useState(6);

  useEffect(() => {
    dispatch(fetchFood(limit));
  }, [limit]);

  const incLimit = () => {
    setLimit((limit = limit + 6));
  };

  return (
    <div>
      <Carousel />
      <Banner />
      <h1 className="text-4xl font-bold mt-6 text-center text-white w-full bg-red-500">
        Menu
      </h1>
      {loading ? (
        <img
          src="https://i.pinimg.com/originals/50/7e/92/507e92e1d92210aac1a7130c8757a0dd.gif"
          alt=""
        ></img>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 m-6 lg:grid-cols-3 gap-10 mt-12">
          {foods.rows.map((el) => (
            <FoodCard el={el} key={el.id} />
          ))}
        </div>
      )}
      <div className="grid place-items-center mb-4">
        {foods.totalItems >= limit && (
          <button
            onClick={() => incLimit()}
            className="bg-red-600 rounded-md border-whites transform transition duration-300 hover:scale-105 border-2 px-4 py-2 text-white font-bold"
          >
            Load More
          </button>
        )}
      </div>
      <Footer />
    </div>
  );
};
export default HomePage;
