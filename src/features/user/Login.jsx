import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

function Login() {
  return (
    <div className="mx-auto my-12 h-[440px] w-[970px] border shadow-lg shadow-slate-200 md:flex">
      <div className="flex-1 px-10 py-8">
        <h2 className="text-center text-xl font-bold">Welcome back!</h2>
        <p className="text-center">Choose the way, you wanna Login.</p>
        <button className="mt-2 flex w-full justify-center rounded border-2 border-green-500 py-2 align-baseline">
          <span>
            <FcGoogle className="" size={30} />
          </span>
          <span className="ml-3 font-semibold text-green-500">
            Login with Google
          </span>
        </button>
        <form className="mt-3">
          <label htmlFor="email" className="font-semibold">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@example.com"
            required
            className="border-1 mb-2 mt-1 w-full rounded border-gray-200 focus:border-green-600"
          />
          <label htmlFor="password" className="font-semibold">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="*******"
            required
            className="border-b-1 mt-1 w-full rounded border-gray-300 focus:border-green-600"
          />
          <p className="mt-0.5 text-right text-xs font-semibold text-green-500">
            Forgot Password?
          </p>
          <button
            type="submit"
            className="mt-4 w-full bg-green-500 py-3 text-lg font-semibold tracking-wider text-white hover:bg-green-700"
          >
            Login
          </button>
          <p className="mt-1 text-center text-sm">
            Dont have an account? &nbsp;
            <Link to="/signup" className="text-green-600">
              Sign Up for free.
            </Link>
          </p>
        </form>
      </div>
      <div className="flex-1 bg-gradient-to-l from-green-500"></div>
    </div>
  );
}

export default Login;
