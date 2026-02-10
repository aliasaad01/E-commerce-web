import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Newsletter Section */}
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Subscribe to My Newsletter
          </h2>
          <p className="text-gray-300 max-w-md">
            Get updates about my projects, coding tips, and e-commerce UI/UX
            insights.
          </p>
        </div>

        <form className="w-full md:w-1/3 relative">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full py-3 px-4 rounded-full text-black focus:outline-none"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 transition-colors px-6 py-2 rounded-full">
            Subscribe
          </button>
        </form>
      </div>

      {/* Main Footer Links */}
      <div className="bg-slate-800 py-10">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">AUDIOPHILE</h2>
            <p className="text-gray-300">
              An e-commerce website is an online platform where users can buy
              and sell products or services, featuring product listings,
              shopping cart, checkout process, and user accounts.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Facebook
                  className="bg-white text-black p-2 rounded-md hover:bg-[#1877f2] hover:text-white transition-colors"
                  size={32}
                />
              </a>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Twitter
                  className="bg-white text-black p-2 rounded-md hover:bg-[#1da1f2] hover:text-white transition-colors"
                  size={32}
                />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Youtube
                  className="bg-white text-black p-2 rounded-md hover:bg-[#ff0033] hover:text-white transition-colors"
                  size={32}
                />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram
                  className="bg-white text-black p-2 rounded-md hover:bg-[#b33a62] hover:text-white transition-colors"
                  size={32}
                />
              </a>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Pages</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-blue-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/faqs"
                  className="hover:text-blue-400 transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Categories</h2>
            <ul className="space-y-2">
              <li>Monitors</li>
              <li>GPUs</li>
              <li>Laptops</li>
              <li>Power Supply</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p className="text-gray-300">
              Email:{" "}
              <a
                href="mailto:ali.devx@gmail.com"
                className="hover:text-blue-400"
              >
                ali.asaad.devx@gmail.com
              </a>
            </p>
            <p className="text-gray-300">
              Phone:{" "}
              <a href="tel:+963937237163" className="hover:text-blue-400">
                +963 937237163
              </a>
            </p>
            <p className="text-gray-300">Location: Syria</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-slate-900 py-4 text-center text-gray-400 text-sm">
        <p>&copy; 2026 Ali Asaad. All rights reserved.</p>
        <p>Built with React.js & Tailwind CSS.</p>
      </div>
    </footer>
  );
}
