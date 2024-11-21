import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      {/* Top Header */}
      <div className="flex items-center justify-between bg-green-500 px-6 py-3">
        <h1 className="cursor-pointer text-2xl font-bold text-white">
          🧾 Page By Page
        </h1>
        {/* Search Bar */}
        <input
          type="text"
          placeholder="What are you looking for?"
          className="w-72 rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-green-600 focus:ring-1 focus:ring-green-600"
        />
        {/* Additional Links */}
        <div className="hidden items-center space-x-6 text-white md:flex">
          <span className="cursor-pointer hover:text-gray-300">
            Track Order
          </span>
          <span className="cursor-pointer hover:text-gray-300">Wishlist</span>
          <span className="cursor-pointer hover:text-gray-300">Cart</span>
          <span>
            <Link to="admin" className="hover:text-gray-300">
              Admin
            </Link>
          </span>
        </div>
        <div className="flex items-center space-x-4">
          {/* Action Buttons */}
          <button className="rounded-md bg-white px-4 py-2 text-sm font-medium text-green-600 shadow-md transition hover:bg-green-600 hover:text-white">
            <Link to="/user/signup">Sign up</Link>
          </button>
          <button className="rounded-md bg-white px-4 py-2 text-sm font-medium text-green-600 shadow-md transition hover:bg-green-600 hover:text-white">
            <Link to="/user/login">Login</Link>
          </button>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-gray-100 px-6 py-3 shadow-md">
        <nav>
          <ul className="flex flex-wrap justify-center gap-8 text-green-600">
            <li className="cursor-pointer text-lg font-medium transition hover:text-green-800">
              Home
            </li>
            <li className="cursor-pointer text-lg font-medium transition hover:text-green-800">
              About
            </li>
            <li className="cursor-pointer text-lg font-medium transition hover:text-green-800">
              Contact
            </li>
            <li className="cursor-pointer text-lg font-medium transition hover:text-green-800">
              Blog
            </li>
            <li className="cursor-pointer text-lg font-medium transition hover:text-green-800">
              FAQ
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
