// import { FcGoogle } from "react-icons/fc";
// import { BsTwitterX } from "react-icons/bs";
// import { TiSocialLinkedin } from "react-icons/ti";
// import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
function Signup() {
  return (
    <div className="mx-auto my-12 h-[440px] w-[970px] border shadow-lg shadow-slate-200 md:flex">
      <div className="flex-1 bg-gradient-to-r from-green-500"></div>
      <div className="flex-1 px-10 py-8">
        <h2 className="text-center text-xl font-bold">Lets Get Started.</h2>
        <p className="mb-6 text-center">Create an Account.</p>
        {/* <div className="flex justify-center gap-8">
          <FcGoogle className="rounded-full" size={30} />

          <BsTwitterX size={24} />

          <TiSocialLinkedin size={34} />
        </div> */}
        <form>
          <div className="flex">
            {/* <FaUser className="absolute left-0 text-green-700" /> */}
            <input
              placeholder="First Name"
              className="mr-5 border-b-2 text-lg focus:outline-none"
            />
            {/* <FaUser /> */}
            <input
              placeholder="Last Name"
              className="border-b-2 text-lg focus:outline-none"
            />
          </div>
          <div className="mt-4 border-b-2">
            <MdEmail />
            <input
              placeholder="Email Address"
              className="text-lg focus:outline-none"
            />
          </div>
          <div className="mt-4 border-b-2">
            <RiLockPasswordFill />
            <input
              placeholder="Password"
              className="text-lg focus:outline-none"
            />
            {/* <input placeholder="Confirm Password" /> */}
          </div>
          <p className="mt-4 text-sm font-normal">
            <input
              type="checkbox"
              name="confirm"
              className="mr-1 cursor-pointer appearance-none outline-none default:ring-green-500 checked:bg-green-500 indeterminate:bg-gray-300 focus:ring-green-500"
            />
            I accept the terms of Use & Privacy Policy.
          </p>
          <button
            type="submit"
            className="mt-4 w-full bg-green-500 py-2.5 text-lg font-semibold tracking-wider text-white hover:bg-green-700"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
