import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useRef, useState } from "react";
import axios from "axios";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { login, updateAdmin } from "./userSlice";

function Login() {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formValid, setFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    const emailIsValid = enteredEmail.includes("@");
    const passwordIsValid = enteredPassword.length >= 4;

    if (!emailIsValid || !passwordIsValid) {
      setFormValid(true);
      return;
    }

    setFormValid(false);
    try {
      setIsLoading(true);
      const response = await axios.post("http://localhost:8080/user/login", {
        email: enteredEmail,
        password: enteredPassword,
      });

      if (response.statusCode === 200) {
        localStorage.setItem("token", response.data.token);
        dispatch(login(response.data.data.firstname));
        if (response.data.data.role === "user") {
          navigate("/", { replace: true });
        } else if (response.data.data.role === "admin") {
          dispatch(updateAdmin());
          navigate("/admin", { replace: true });
        }
      }
    } catch (err) {
      console.error(err);
      message.error(err.response.data.message || "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

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
        <button
          type="button"
          className="mt-6 flex w-full items-center justify-center gap-3 rounded-md border-2 border-emerald-500 py-3 text-sm font-semibold text-emerald-500 transition duration-300 hover:bg-emerald-100"
        >
          <FcGoogle size={24} />
          Login with Google
        </button>

        {/* Login Form */}
        <form className="mt-6" onSubmit={handleSubmit} noValidate>
          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700"
            >
              Email:
            </label>
            <input
              className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-emerald-500"
              type="email"
              id="email"
              name="email"
              placeholder="example@example.com"
              required
              ref={email}
              aria-invalid={formValid && !email.current?.value.includes("@")}
            />
            {formValid && !email.current?.value.includes("@") && (
              <p className="mt-1 text-sm text-red-500">
                Please enter a valid email address.
              </p>
            )}
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-700"
            >
              Password:
            </label>
            <input
              className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-emerald-500"
              type="password"
              id="password"
              name="password"
              placeholder="*******"
              required
              ref={password}
              minLength={4}
              aria-invalid={formValid && password.current?.value.length < 4}
            />
            {formValid && password.current?.value.length < 4 && (
              <p className="mt-1 text-sm text-red-500">
                Password must be at least 4 characters long.
              </p>
            )}
          </div>

          {/* Forgot Password */}
          <p className="mt-2 cursor-pointer text-right text-xs font-semibold text-emerald-500 hover:underline">
            <Link to="/">Forgot Password?</Link>
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 w-full rounded-md bg-emerald-500 px-6 py-3 text-lg font-semibold text-white shadow-md transition duration-300 hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don&apos;t have an account? &nbsp;
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
          Experience a Seamless Shopping Journey...
        </h2>
      </div>
    </div>
  );
}

export default Login;
