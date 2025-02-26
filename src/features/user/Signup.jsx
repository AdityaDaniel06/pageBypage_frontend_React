import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import { message, Spin } from "antd";
import axios from "axios";

function Signup() {
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateInput = () => {
    const newErrors = {};
    if (!userData.firstname) newErrors.firstname = "First name is required.";
    if (!userData.lastname) newErrors.lastname = "Last name is required.";
    if (!userData.email.includes("@"))
      newErrors.email = "Enter a valid email address.";
    if (userData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";
    if (userData.password !== userData.passwordConfirm) {
      newErrors.passwordConfirm = "Passwords do not match.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateInput()) return;

    try {
      setIsLoading(true);
      const response = await axios.post(
        "http://localhost:8080/user/signup",
        userData,
      );
      if (response.status === 201) {
        message.success("Signup successful! Redirecting to login...");
        setTimeout(() => (window.location.href = "/user/login"), 1500); // Redirect after success
      }
    } catch (err) {
      message.error(err.response?.data?.message || "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto my-10 flex max-w-4xl flex-col-reverse overflow-hidden rounded-lg shadow-lg shadow-gray-300 md:my-16 md:flex-row">
      {/* Left Section - Gradient */}
      <div className="hidden flex-1 items-center justify-center bg-gradient-to-br from-emerald-500 to-emerald-700 md:flex">
        <h2 className="px-8 text-center text-3xl font-extrabold text-white md:px-12">
          Join Us and Explore Endless Opportunities
        </h2>
      </div>

      {/* Right Section - Form */}
      <div className="flex-1 bg-white px-6 py-8 md:px-16">
        <h2 className="text-center text-2xl font-bold text-gray-800">
          Create Your Account
        </h2>
        <p className="mb-8 text-center text-sm text-gray-500">
          Start your journey by signing up today.
        </p>

        <form onSubmit={handleSubmit}>
          {/* Name Fields */}
          <div className="mb-6 flex flex-col gap-6 md:flex-row">
            <div className="flex-1">
              <input
                placeholder="First Name"
                className={`w-full rounded-lg border px-3 py-3 text-sm shadow-sm ${
                  errors.firstname ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring focus:ring-emerald-300`}
                name="firstname"
                value={userData.firstname}
                onChange={handleInput}
              />
              {errors.firstname && (
                <p className="mt-1 text-sm text-red-500">{errors.firstname}</p>
              )}
            </div>
            <div className="flex-1">
              <input
                placeholder="Last Name"
                className={`w-full rounded-lg border px-3 py-3 text-sm shadow-sm ${
                  errors.lastname ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring focus:ring-emerald-300`}
                name="lastname"
                value={userData.lastname}
                onChange={handleInput}
              />
              {errors.lastname && (
                <p className="mt-1 text-sm text-red-500">{errors.lastname}</p>
              )}
            </div>
          </div>

          {/* Email Field */}
          <div className="relative mb-3">
            <MdEmail
              className="absolute left-3 top-3 text-emerald-500"
              size={22}
            />
            <input
              type="email"
              placeholder="Email Address"
              className={`w-full rounded-lg border px-10 py-3 text-sm shadow-sm ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring focus:ring-emerald-300`}
              name="email"
              value={userData.email}
              onChange={handleInput}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Password Fields */}
          <div className="relative mb-4">
            <RiLockPasswordFill
              className="absolute left-3 top-3 text-emerald-500"
              size={22}
            />
            <input
              type="password"
              placeholder="Password"
              className={`w-full rounded-lg border px-10 py-3 text-sm shadow-sm ${
                errors.password ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring focus:ring-emerald-300`}
              name="password"
              value={userData.password}
              onChange={handleInput}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password}</p>
            )}
          </div>
          <div className="relative mb-6">
            <RiLockPasswordFill
              className="absolute left-3 top-3 text-emerald-500"
              size={22}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className={`w-full rounded-lg border px-10 py-3 text-sm shadow-sm ${
                errors.passwordConfirm ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring focus:ring-emerald-300`}
              name="passwordConfirm"
              value={userData.passwordConfirm}
              onChange={handleInput}
            />
            {errors.passwordConfirm && (
              <p className="mt-1 text-sm text-red-500">
                {errors.passwordConfirm}
              </p>
            )}
          </div>

          {/* Terms and Conditions */}
          <div className="mb-4 flex items-start space-x-3 text-sm">
            <input
              type="checkbox"
              className="h-5 w-5 cursor-pointer rounded border-gray-300 text-emerald-500 focus:ring-emerald-500"
              required
            />
            <label className="leading-relaxed text-gray-600">
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

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 w-full rounded-lg bg-emerald-500 py-3 text-lg font-semibold text-white shadow-lg transition duration-300 hover:bg-emerald-600 hover:shadow-xl focus:outline-none focus:ring focus:ring-emerald-300"
          >
            {isLoading ? <Spin size="small" /> : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
