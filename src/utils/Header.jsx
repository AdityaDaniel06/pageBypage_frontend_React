import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { BsCart4 } from "react-icons/bs";
import { RiAdminLine } from "react-icons/ri";
import { Tooltip } from "react-tooltip";
import { useDispatch, useSelector } from "react-redux";
import { FiLogOut } from "react-icons/fi";
import { logout } from "../features/user/userSlice";

function Header() {
  const cartData = useSelector((state) => state.cart);
  const userData = useSelector((state) => state.user);
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const isLoggedIn = userData.isAuthenticated && token;
  const isAdmin = userData.isAdmin;

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logout());
    window.location.reload();
    // navigate("/", { replace: true });
  };

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
      <div className="flex flex-wrap items-center justify-between gap-4 bg-emerald-500 px-6 py-3">
        <h1 className="cursor-pointer text-2xl font-bold text-white">
          <Link to="/">🧾 Page By Page</Link>
        </h1>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="What are you looking for?"
          className="min-w-[150px] max-w-[550px] flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
        />

        {/* Icons */}
        <div className="hidden items-center space-x-6 text-white md:flex">
          <span className="hover: cursor-pointer">
            <Link to="trackorder" aria-label="Track Order">
              <FaTruckFast size={22} />
              <Tooltip id="trackorder" content="Track Order" />
            </Link>
          </span>
          <span className="cursor-pointer">
            <Link to="wishlist" aria-label="Wishlist">
              <FaRegHeart size={22} />
              <Tooltip id="wishlist" content="Wishlist" />
            </Link>
          </span>
          <span className="relative cursor-pointer">
            <Link to="viewcart" aria-label="My Cart">
              <BsCart4 size={22} />
              <Tooltip id="viewcart" content="My Cart" />
              {cartData.cart.length > 0 && (
                <span className="absolute left-3 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-zinc-500 text-xs text-white">
                  {cartData.cart.length}
                </span>
              )}
            </Link>
          </span>
          {isAdmin && (
            <span>
              <Link to="admin" aria-label="admin">
                <Tooltip id="admin" content="Admin" />
                <RiAdminLine size={22} />
              </Link>
            </span>
          )}
        </div>

        {/* Authentication */}
        <div className="flex items-center space-x-4">
          {!isLoggedIn ? (
            <>
              <Link to="/user/signup">
                <button className="rounded-md bg-white px-4 py-2 text-sm font-medium text-emerald-600 shadow-md transition hover:bg-emerald-600 hover:text-white">
                  Sign up
                </button>
              </Link>
              <Link to="/user/login">
                <button className="rounded-md bg-white px-4 py-2 text-sm font-medium text-emerald-600 shadow-md transition hover:bg-emerald-600 hover:text-white">
                  Login
                </button>
              </Link>
            </>
          ) : (
            <div className="flex items-center space-x-3">
              <p className="font-medium text-white">
                Hi, {userData.firstname || "User"}
              </p>
              <p className="cursor-pointer" onClick={handleLogout}>
                <FiLogOut size={22} className="text-white" />
              </p>
            </div>
          )}
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
            <li className="cursor-pointer text-lg font-medium transition hover:text-emerald-800">
              <NavLink to="stationary">Stationary & Gifts</NavLink>
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
