import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link to={`product/${product.id}`}>
      <div className="shadow-lg transition-all ease-in-out rounded-md cursor-pointer shadowEffect">
        <div className="size-64 flex justify-center items-center m-auto">
          <img src={product.image} alt="" className="p-4" />
        </div>
        <div className="bg-gray-50 p-4">
          <h2 className="text-lg font-semibold my-4 text-nowrap overflow-hidden whitespace-nowrap text-ellipsis">
            {product.title.substring(0, 25) + "..."}
          </h2>
          <p className="text-sm text-zinc-500 border-b-2 pb-4">
            {product.description.substring(0, 50) + "..."}
          </p>
          <div className="flex justify-between mt-4 items-center">
            <p className="text-xl font-semibold">{product.price}$</p>
            <p className="bg-slate-500 hover:bg-slate-600 transition-all ease-in-out text-white px-3 py-2 text-sm rounded-md">
              View Details
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
