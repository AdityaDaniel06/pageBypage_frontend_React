import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

function Signup() {
  return (
    <div className="mx-auto my-12 flex h-auto max-w-4xl flex-col-reverse overflow-hidden rounded-lg shadow-lg shadow-slate-300 md:flex md:h-[550px] md:flex-row">
      {/* Left Section - Gradient */}
      <div className="hidden flex-1 items-center justify-center bg-gradient-to-br from-emerald-400 to-emerald-600 md:flex">
        <h2 className="px-6 text-center text-3xl font-extrabold leading-snug text-white">
          Join Us and Explore...
        </h2>
      </div>

      {/* Right Section - Form */}
      <div className="flex-1 bg-white px-6 py-8 md:px-10">
        <h2 className="text-center text-2xl font-bold text-gray-800">
          Let’s Get Started!
        </h2>
        <p className="mb-6 text-center text-sm text-gray-500">
          Create an account to access exclusive features.
        </p>

        <form className="space-y-6">
          {/* Name Fields */}
          <div className="flex flex-col gap-4 md:flex-row">
            <input
              placeholder="First Name"
              className="w-full flex-1 rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:border-emerald-500 focus:outline-none focus:ring-emerald-500"
            />
            <input
              placeholder="Last Name"
              className="w-full flex-1 rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:border-emerald-500 focus:outline-none focus:ring-emerald-500"
            />
          </div>

          {/* Email Field */}
          <div className="relative flex items-center">
            <MdEmail className="absolute left-3 text-emerald-500" size={20} />
            <input
              placeholder="Email Address"
              className="w-full rounded-md border border-gray-300 px-10 py-2 text-sm text-gray-700 focus:border-emerald-500 focus:outline-none focus:ring-emerald-500"
            />
          </div>

          {/* Password Field */}
          <div className="relative flex items-center">
            <RiLockPasswordFill
              className="absolute left-3 text-emerald-500"
              size={20}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-md border border-gray-300 px-10 py-2 text-sm text-gray-700 focus:border-emerald-500 focus:outline-none focus:ring-emerald-500"
            />
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start space-x-2 text-sm">
            <input
              type="checkbox"
              className="h-4 w-4 cursor-pointer rounded border-gray-300 text-emerald-500 focus:ring-emerald-500"
            />
            <label className="text-gray-600">
              I accept the{" "}
              <span className="cursor-pointer font-medium text-emerald-500 underline hover:text-emerald-700">
                Terms of Use
              </span>{" "}
              &{" "}
              <span className="cursor-pointer font-medium text-emerald-500 underline hover:text-emerald-700">
                Privacy Policy
              </span>
              .
            </label>
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full rounded-md bg-emerald-500 px-6 py-3 text-lg font-semibold text-white shadow-md transition duration-300 hover:bg-emerald-600"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
