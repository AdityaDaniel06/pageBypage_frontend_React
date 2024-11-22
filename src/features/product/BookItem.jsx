import book01 from "../../assets/images/harrypotter1.jpg";
function BookItem() {
  return (
    <div className="mx-10 my-8 flex gap-4">
      <div className="bg-slate-50 px-10 py-7 hover:shadow-lg">
        <img className="mb-2 h-60 w-44" src={book01} alt="Book Cover" />
        <div>
          <h3 className="text-lg font-semibold">Harry Potter</h3>
          <p className="text-sm">Author</p>
          <p> ₹ 199.00</p>
        </div>
        <div>
          <button className="rounded-lg bg-emerald-500 px-4 py-2 text-xs text-white hover:bg-emerald-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookItem;
