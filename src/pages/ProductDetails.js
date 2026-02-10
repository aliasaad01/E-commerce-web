import { ArrowLeft, ShoppingCart } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { toast } from "react-toastify";

export default function ProductDetails() {
  const productId = useParams().id;
  // console.log(productId);

  const dispatch = useDispatch();
  let product = useSelector((state) =>
    state.product.items.find((p) => +productId === +p.id)
  );

  // console.log(product);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product is not found !</h2>
          <Link to={"/"} className="text-blue-600 hover:text-blue-800">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div>
        <Link to={"/"}>
          <div className="bg-zinc-200 hover:bg-zinc-300 transition-all ease-in-out rounded-md px-3 py-2 mt-4 w-fit flex justify-center items-center">
            <ArrowLeft className="inline -ml-1 size-5 mr-2" /> Back To Products
          </div>
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="shadow-md p-4 rounded lg:w-[450px] xl:w-[600px]">
            <img src={product.image} alt="" />
          </div>

          <div>
            <h1 className="font-bold text-3xl mb-4">{product.title}</h1>
            <p className="text-gray-600 leading-5 mb-6">
              {product.description}
            </p>
            <div className="mb-6">
              <span className="font-bold text-3xl">${product.price}</span>
            </div>
            <div className="flex justify-start items-center gap-3 mb-6">
              <h2 className="font-semibold mb-2">Category:</h2>
              <span className="bg-zinc-200 px-2 py-1 rounded-md w-fit inline">
                {product.category}
              </span>
            </div>
            <Link>
              <button
                className="md:w-auto bg-blue-500 hover:bg-blue-600 transition-all ease text-white px-8 py-3 rounded-md flex justify-center items-center gap-2"
                onClick={() => {
                  dispatch(addToCart(product));
                  toast.success("The product has been added.");
                }}
              >
                <ShoppingCart /> Add To Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
