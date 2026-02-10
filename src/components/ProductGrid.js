import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

export default function ProductGrid() {
  const products = useSelector((state) => state.product.filteredItems);

  const productsList = products.map((product) => {
    return <ProductCard key={product.id} product={product} />;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 my-24">
      {productsList}
    </div>
  );
}
