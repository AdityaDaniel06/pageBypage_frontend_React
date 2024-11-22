import BookItem from "./BookItem";

function PopularCollection() {
  return (
    <>
      <div className="my-5 bg-slate-200 py-6">
        <h2 className="pt-2 text-center text-3xl font-bold">Now Trending</h2>
        <div className="flex">
          <BookItem />
          <BookItem />
          <BookItem />
          <BookItem />
        </div>
      </div>
    </>
  );
}

export default PopularCollection;
