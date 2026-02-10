import { Menu, ShoppingCart, User } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "../features/products/ProductSlice";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "FAQs", path: "/faqs" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isUserMenuOpen, setisUserMenuOpen] = useState(false);
  const [isBurgerOpen, setisBurgerOpen] = useState(false);
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.product.searchTerm);
  const cartItems = useSelector((state) => state.cart.items || []);

  const itemsCount =
    cartItems?.reduce((total, item) => total + (item.quantity || 1), 0) || 0;

  return (
    <header className="bg-white text-center shadow-md sticky top-0 z-50">
      <div className="py-4 shadow-md">
        <ul className="container mx-auto flex flex-wrap justify-between items-center md:flex-row px-4 md:px-2 relative">
          <button className="absolute left-4 top-1/2 -translate-y-1/2 md:hidden">
            <Menu onClick={() => setisBurgerOpen(true)} />
          </button>
          <div
            className={`flex gap-4 md:w-fit flex-col absolute top-0 bg-white z-10 transition-all duration-500 ease-in-out
                        md:flex-row md:static w-full ${
                          isBurgerOpen ? "left-0" : "-left-full"
                        }`}
          >
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end
                  onClick={() => setisBurgerOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold text-blue-500"
                      : "font-semibold text-gray-500 hover:text-blue-500 transition-colors duration-300"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </div>

          {
            <div
              className={`flex flex-col absolute right-0 md:right-0 top-12 z-10 bg-zinc-50 p-4 gap-4 transition-all duration-300 ease-in-out ${
                isUserMenuOpen
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 Scale-95 pointer-events-none"
              }`}
            >
              <li>
                <Link
                  to={"/"}
                  onClick={() => setisUserMenuOpen(false)}
                  className="hover:text-blue-500 transition-colors duration-300"
                >
                  Sign
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  onClick={() => setisUserMenuOpen(false)}
                  className="hover:text-blue-500 transition-colors duration-300"
                >
                  My Account
                </Link>
              </li>
            </div>
          }

          <User
            size={32}
            className="hover:bg-gray-200 text-black rounded-full transition-colors duration-300 cursor-pointer ml-auto p-1 hover:text-blue-500"
            onClick={() => {
              setisUserMenuOpen(!isUserMenuOpen);
            }}
          />
        </ul>
      </div>

      <nav className="flex justify-between items-center container mx-auto md:py-6 py-8 px-2">
        <div className="flex items-center">
          <Link to={"/"} className="py-2 px-4 rounded">
            <img src={logo} className="text-white" alt="" />
          </Link>
        </div>

        <form className="w-1/2 sm:block hidden">
          <input
            type="text"
            placeholder="Search Product"
            className="bg-zinc-100 rounded-md focus:outline-none py-3 px-3 w-full"
            style={{ border: "1px solid #d4d4d8" }}
            value={searchTerm}
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
          />
        </form>

        <Link to={"/cart"} className="relative">
          <ShoppingCart
            size={54}
            className="cursor-pointer bg-gray-100 px-3 py-2 rounded-full"
          />
          {itemsCount > 0 && (
            <span className="absolute top-0.5 right-0.5 p-1 text-white bg-red-600 rounded-full size-6 flex justify-center items-center">
              {itemsCount}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
}
