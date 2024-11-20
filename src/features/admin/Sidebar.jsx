import { Link, NavLink } from "react-router-dom";
import { RiDashboard2Line } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";
import { BsDatabaseAdd } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { SlLogout } from "react-icons/sl";
function Sidebar() {
  return (
    <nav className="w-64 bg-green-600 py-4 text-white">
      <h2 className="mb-6 pl-4 text-2xl font-bold">
        <Link to="/">🧾 Page By Page</Link>
      </h2>
      <ul className="space-y-4">
        <li className="text-md rounded px-4 py-2.5 font-semibold hover:bg-green-700">
          <NavLink to="/admin" className="flex gap-3 align-baseline">
            <RiDashboard2Line className="size-8" /> Dashboard
          </NavLink>
        </li>
        <li className="text-md rounded px-4 py-2 font-semibold hover:bg-green-700">
          <NavLink className="flex gap-3 align-baseline">
            <FaUserFriends className="size-8" />
            Users
          </NavLink>
        </li>
        <li className="text-md rounded px-4 py-2 font-semibold hover:bg-green-700">
          <NavLink className="flex gap-3 align-baseline">
            <TbReportSearch className="size-8" />
            Reports
          </NavLink>
        </li>
        <li className="text-md rounded px-4 py-2 font-semibold hover:bg-green-700">
          <NavLink to="insert" className="flex gap-3 align-baseline">
            <BsDatabaseAdd className="size-8" />
            Insert Data
          </NavLink>
        </li>
        <li className="text-md rounded px-4 py-2 font-semibold hover:bg-green-700">
          <NavLink className="flex gap-3 align-baseline">
            <IoSettingsOutline className="size-8" />
            Settings
          </NavLink>
        </li>
        <li className="text-md rounded px-4 py-2 font-semibold hover:bg-green-700">
          <NavLink className="flex gap-3 align-baseline">
            <SlLogout className="size-7" />
            Logout
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
