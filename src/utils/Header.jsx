import { Link, NavLink } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { BsCart4 } from "react-icons/bs";
import { RiAdminLine } from "react-icons/ri";
import { Tooltip } from "react-tooltip";

function Header() {
  return (
    <>
      {/* NotificationBar */}
      <div className="m-0 bg-zinc-600 px-3 text-xs text-white">
        <p className="py-0.5">
          <span>Do More, Be More</span> |&nbsp;<span>Singapore</span> |&nbsp;
          <span>UAE</span> |&nbsp;<span>Partner With Us</span> |&nbsp;
          <span>Contact Us</span>
        </p>
      </div>
      {/* Top Header */}
      <div className="flex items-center justify-between bg-emerald-500 px-6 py-3">
        <h1 className="cursor-pointer text-2xl font-bold text-white">
          <Link to="/">🧾 Page By Page</Link>
        </h1>
        {/* Search Bar */}
        <input
          type="text"
          placeholder="What are you looking for?"
          className="w-72 rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
        />
        {/* Additional Links */}
        <div className="hidden items-center space-x-6 text-white md:flex">
          <span className="hover: cursor-pointer">
            <Link
              to="trackorder"
              className="hover:text-gray-300"
              data-tooltip-id="trackorder"
              data-tooltip-content="Track Order"
            >
              <FaTruckFast size={22} />
              <Tooltip id="trackorder" className="bg-zinc-500" />
            </Link>
          </span>
          <span className="cursor-pointer">
            <Link
              to="wishlist"
              className="hover:text-gray-300"
              data-tooltip-id="myWish"
              data-tooltip-content="Wishlist"
            >
              <FaRegHeart className="" size={22} />
              <Tooltip id="myWish" className="bg-zinc-500" />
            </Link>
          </span>
          <span className="cursor-pointer">
            <Link
              to="cart"
              className="hover:text-gray-300"
              data-tooltip-id="myCart"
              data-tooltip-content="My Cart"
            >
              <BsCart4 size={22} />
              <Tooltip id="myCart" className="bg-zinc-500" />
            </Link>
          </span>
          <span>
            <Link to="admin" className="hover:text-gray-300">
              <RiAdminLine size={22} />
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
              <NavLink to="fiction">Fiction</NavLink>
            </li>
            <li className="cursor-pointer text-lg font-medium transition hover:text-emerald-800">
              <NavLink to="nonfiction">Non-Fiction</NavLink>
            </li>
            <li className="cursor-pointer text-lg font-medium transition hover:text-emerald-800">
              <NavLink to="kids">Kids</NavLink>
            </li>
            <li className="cursor-pointer text-lg font-medium transition hover:text-emerald-800">
              <NavLink to="comic">Comics</NavLink>
            </li>
            <li className="cursor-pointer text-lg font-medium transition hover:text-emerald-800">
              <NavLink to="bestseller">Best Seller</NavLink>
            </li>
            <li className="cursor-pointer text-lg font-medium transition hover:text-emerald-800">
              <NavLink to="newarrival">New Arrival</NavLink>
            </li>
            {/* <li className="cursor-pointer text-lg font-medium transition hover:text-emerald-800">
              <NavLink to="ebooks">E-Books</NavLink>
            </li> */}
            <li className="cursor-pointer text-lg font-medium transition hover:text-emerald-800">
              <NavLink to="stationary"> Stationary & Gifts</NavLink>
            </li>
            <li className="cursor-pointer text-lg font-medium transition hover:text-emerald-800">
              <NavLink to="boardgames">Board Games</NavLink>
            </li>
            <li className="cursor-pointer text-lg font-medium transition hover:text-emerald-800">
              <NavLink to="locatestore">Locate Store</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
