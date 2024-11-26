// import img01 from "../../assets/images/dicount_booken.webp";
import img02 from "../../assets/images/got01.jpg";

function BookSale() {
  return (
    <>
      <div className="px-10 sm:flex">
        <div className="w-1/2 pr-10">
          <img src={img02} alt="sale book" className="h-96" />
        </div>
        <div className="w-1/2">
          <h3 className="mb-10 text-3xl font-medium text-emerald-700">
            Special Offers
          </h3>
          <p className="mb-5">
            Order the Series Now!!!. Before the time expires
          </p>

          <p className="mb-28 flex text-2xl font-semibold">
            <span className="mr-8 text-lg text-red-600">
              <p> 0 0</p> <p>Days</p>
            </span>
            <span className="mr-8 text-lg text-red-600">
              <p> 0 0</p> <p>Hour</p>
            </span>
            <span className="mr-8 text-lg text-red-600">
              <p> 0 0</p> <p>Mins</p>
            </span>
            <span className="mr-8 text-lg text-red-600">
              <p> 0 0</p> <p>Sec</p>
            </span>
          </p>

          <button className="rounded-md bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-500">
            Order Now
          </button>
        </div>
      </div>
      ;
    </>
  );
}

export default BookSale;
