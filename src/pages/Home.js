import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import ProductGrid from "../components/ProductGrid";
import { setSelectedCategory } from "../features/products/ProductSlice";

const categories = [
  "All",
  "Graphic Cards",
  "Laptop",
  "Monitors",
  "Power Supply",
];

export default function Home() {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    (state) => state.product.selectedCategory
  );

  const buttons = categories.map((cat) => {
    return (
      <button
        key={cat}
        className={`py-2 px-4 rounded-md text-black transition-all ease-in
          ${
            selectedCategory === cat
              ? "bg-blue-500 text-white"
              : "bg-gray-300 hover:bg-zinc-400 active:scale-110"
          }
          `}
        onClick={() => dispatch(setSelectedCategory(cat))}
      >
        {cat}
      </button>
    );
  });

  return (
    <div>
      <div className="bg"></div>

      <div className="container mx-auto my-10 px-4">
        <div className="flex gap-4 flex-wrap justify-center">{buttons}</div>

        <ProductGrid />
      </div>

      <Footer />
    </div>
  );
}
