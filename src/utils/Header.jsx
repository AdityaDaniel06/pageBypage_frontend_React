import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="bg-green-500 px-5 py-2.5">
        <ul className="flex cursor-pointer flex-row items-center justify-evenly gap-5 text-white">
          <h1 className="cursor-pointer text-2xl font-bold">🧾 Page By Page</h1>
          <li className="cursor-pointer text-lg font-medium">Home</li>
          <li className="cursor-pointer text-lg font-medium">About</li>
          <li className="cursor-pointer text-lg font-medium">Contact</li>
          <li className="cursor-pointer text-lg font-medium">Blog</li>
          <li className="cursor-pointer text-lg font-medium">FAQ</li>
          <span className="">
            <button className="rounded-md bg-slate-50 px-3 py-2 font-medium text-green-600 hover:bg-green-600 hover:text-slate-100">
              <Link to="/user/signup">Sign up</Link>
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button className="rounded-md bg-slate-50 px-3.5 py-2 font-medium text-green-600 hover:bg-green-600 hover:text-slate-100">
              <Link to="/user/login">Login</Link>
            </button>
          </span>
          <li>
            <Link to="admin">Admin</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Header;
