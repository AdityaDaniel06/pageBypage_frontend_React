import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      {/* Top Header */}
      <div className="flex items-center justify-between bg-emerald-500 px-6 py-3">
        <h1 className="cursor-pointer text-2xl font-bold text-white">
          🧾 Page By Page
        </h1>
        {/* Search Bar */}
        <input
          type="text"
          placeholder="What are you looking for?"
          className="w-72 rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
        />
        {/* Additional Links */}
        <div className="hidden items-center space-x-6 text-white md:flex">
          <span className="hover: cursor-pointer">Track Order</span>
          <span className="cursor-pointer">Wishlist</span>
          <span className="cursor-pointer">Cart</span>
          <span>
            <Link to="admin" className="hover:text-gray-200">
              Admin
            </Link>
          </span>
        </div>
        <div className="flex items-center space-x-4">
          {/* Action Buttons */}
          <button className="rounded-md bg-white px-4 py-2 text-sm font-medium text-emerald-600 shadow-md transition hover:bg-emerald-600 hover:text-white">
            <Link to="/user/signup">Sign up</Link>
          </button>
          <button className="rounded-md bg-white px-4 py-2 text-sm font-medium text-emerald-600 shadow-md transition hover:bg-emerald-600 hover:text-white">
            <Link to="/user/login">Login</Link>
          </button>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-gray-100 px-6 py-3 shadow-md">
        <nav>
          <ul className="flex flex-wrap justify-center gap-8 text-emerald-600">
            <li className="cursor-pointer text-lg font-medium transition hover:text-emerald-800">
              Fiction
            </li>
            <li className="cursor-pointer text-lg font-medium transition hover:text-emerald-800">
              Non-Fiction
            </li>
            <li className="cursor-pointer text-lg font-medium transition hover:text-emerald-800">
              Kids
            </li>
            <li className="cursor-pointer text-lg font-medium transition hover:text-emerald-800">
              Comics
            </li>
            <li className="cursor-pointer text-lg font-medium transition hover:text-emerald-800">
              Best Seller
            </li>
            <li className="cursor-pointer text-lg font-medium transition hover:text-emerald-800">
              New Arrival
            </li>
            <li className="cursor-pointer text-lg font-medium transition hover:text-emerald-800">
              Stationary & Gifts
            </li>
            <li className="cursor-pointer text-lg font-medium transition hover:text-emerald-800">
              Board Games
            </li>
            <li className="cursor-pointer text-lg font-medium transition hover:text-emerald-800">
              Locate Store
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
