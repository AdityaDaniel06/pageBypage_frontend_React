import book01 from "../../assets/images/harrypotter1.jpg";

function BookItem() {
  return (
    <div className="my-8 justify-center px-6 sm:flex">
      <div className="max-w-xs rounded-lg bg-slate-50 p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
        {/* Book Image */}
        <img
          className="mx-auto mb-4 h-60 w-44 object-cover"
          src={book01}
          alt="Harry Potter Book Cover"
        />

        {/* Book Details */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-700">Harry Potter</h3>
          <p className="text-sm text-gray-500">J.K. Rowling</p>
          <p className="mt-2 text-xl font-bold text-gray-800">₹ 199.00</p>
        </div>

        {/* Button */}
        <div className="mt-4 flex justify-center">
          <button className="rounded-lg bg-emerald-500 px-6 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-emerald-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookItem;
