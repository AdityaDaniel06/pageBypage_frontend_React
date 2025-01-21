import { Link, useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-gray-100 to-gray-300 text-center">
      <h1 className="text-9xl font-extrabold text-emerald-600 drop-shadow-lg">
        404
      </h1>
      <h2 className="mt-4 text-3xl font-bold text-gray-800">Page Not Found</h2>
      <p className="mt-2 text-lg text-gray-600">
        Sorry, we couldn’t find the page you’re looking for. Please check the
        URL or navigate back to the homepage.
      </p>
      <div className="mt-6 flex space-x-4">
        <Link
          to="/"
          className="rounded-md bg-emerald-600 px-6 py-3 font-medium text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-emerald-700"
        >
          Go to Homepage
        </Link>
        <button
          className="rounded-md bg-gray-700 px-6 py-3 font-medium text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-800"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default PageNotFound;
