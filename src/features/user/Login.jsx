import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

function Login() {
  return (
    <div className="mx-auto my-12 flex h-[600px] max-w-4xl rounded-lg shadow-lg shadow-slate-300 md:flex">
      {/* Left Section - Form */}
      <div className="flex-1 bg-white px-10 py-8">
        <h2 className="text-center text-2xl font-bold text-gray-800">
          Welcome Back!
        </h2>
        <p className="text-center text-sm text-gray-500">
          Choose how you want to log in
        </p>

        {/* Google Login Button */}
        <button className="mt-6 flex w-full items-center justify-center gap-3 rounded-md border-2 border-emerald-500 py-3 text-sm font-semibold text-emerald-500 transition duration-300 hover:bg-emerald-100">
          <FcGoogle size={24} />
          Login with Google
        </button>

        {/* Login Form */}
        <form className="mt-6 space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@example.com"
              required
              className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-emerald-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-700"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="*******"
              required
              className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-emerald-500"
            />
            <p className="mt-2 cursor-pointer text-right text-xs font-semibold text-emerald-500 hover:underline">
              Forgot Password?
            </p>
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-emerald-500 px-6 py-3 text-lg font-semibold text-white shadow-md transition duration-300 hover:bg-emerald-600"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account? &nbsp;
          <Link
            to="/user/signup"
            className="font-semibold text-emerald-600 hover:underline"
          >
            Sign up for free.
          </Link>
        </p>
      </div>

      {/* Right Section - Gradient */}
      <div className="hidden flex-1 items-center justify-center bg-gradient-to-bl from-emerald-500 to-emerald-700 md:flex">
        <h2 className="px-4 text-center text-3xl font-extrabold text-white">
          Experience a Seamless Shopping Experience...
        </h2>
      </div>
    </div>
  );
}

export default Login;
