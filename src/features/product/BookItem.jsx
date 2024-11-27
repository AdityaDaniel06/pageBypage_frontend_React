import book01 from "../../assets/images/harrypotter1.jpg";

function BookItem({ data }) {
  return (
    <div className="my-5 justify-center px-3 sm:flex">
      <div className="max-w-xs rounded-lg bg-slate-50 p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
        {/* Book Image */}
        <img
          className="mx-auto mb-2 h-60 w-40 object-cover"
          src={book01}
          alt="Harry Potter Book Cover"
        />

        {/* Book Details */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-700">{data?.title}</h3>
          <p className="text-sm text-gray-500">{data?.author}</p>
          <p className="mt-1 text-lg font-bold text-gray-800">₹{data?.price}</p>
        </div>

        {/* Button */}
        <div className="mt-4 flex gap-4">
          <button className="rounded-lg bg-emerald-500 px-3 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-emerald-600">
            Add to Cart
          </button>
          <button className="rounded-lg bg-zinc-200 px-3 py-2 text-sm font-medium text-green-600 transition-colors duration-300 hover:bg-zinc-300">
            More Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookItem;
