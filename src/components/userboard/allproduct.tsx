// @ts-nocheck
import { useNavigate } from "react-router-dom";
import Likeitem from "../smallcomponents/likebuttuon";
import AddtoCart from "../smallcomponents/addto-cart-button";
import { Product, useProductStore } from "../data/ProductStore";
import Rating from "@mui/material/Rating";

const Allproduct = () => {
  const { products } = useProductStore();
  const navigate = useNavigate();

  const goToProduct = (id: number) => {
    navigate(`/pri/home/product/${id}`);
  };

  const averageRating = (item) =>
    item.ratings.length
      ? (
          item.ratings.reduce((sum: number, value: number) => sum + value, 0) /
          item.ratings.length
        ).toFixed(2)
      : "No ratings";

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className=" max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-8">
          {products.map((item: Product) => (
            <div
              key={item.id}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-transform duration-300 ease-in-out transform hover: scale-105 hover:shadow-lg"
            >
              <div
                className="relative flex-shrink-0 overflow-hidden cursor-pointer"
                onClick={() => goToProduct(item.id)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
              </div>

              <div className="flex-1 p-4">
                <div className="left">
                  <h3 className="text-lg font-semibold text-gray-900 truncate">
                    {item.title}
                  </h3>
                  <p className="text-xl font-bold text-gray-800 mt-1">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
                <div className="right">
                  <Rating
                    name="read-only"
                    precision={0.5}
                    value={
                      item.ratings.reduce(
                        (sum: number, value: number) => sum + value,
                        0
                      ) / item.ratings.length
                    }
                    readOnly
                  />
                  <div className="rating">
                    <span className="mr-[10px]">Ratings:</span>
                    {averageRating(item)}
                  </div>
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6 flex justify-between bg-white border-t border-gray-200 shadow-md transition-transform duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0">
                <div className="flex items-center active:translate-y-0.5">
                  <AddtoCart item={item} />
                </div>
                <div className="flex items-center">
                  <Likeitem id={item.id} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Allproduct;
