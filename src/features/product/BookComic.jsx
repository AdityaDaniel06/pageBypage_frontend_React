import axios from "axios";
import { useEffect, useState } from "react";
import BookItem from "./BookItem";
function BookComic() {
  const [bookData, setbookData] = useState([]);

  const fetchBooks = () => {
    let api = "http://localhost:8080/product/showbooks/?category=Comics";
    axios.get(api).then((response) => {
      setbookData(response.data.data);
      // console.log(response.data.data);
    });
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  if (bookData.length === 0)
    return (
      <h3 className="my-8 text-center text-3xl">
        No Comic Available right now.
      </h3>
    );

  return (
    <>
      <h2 className="mt-7 text-center text-3xl font-medium text-slate-800">
        Children&apos;s Books
      </h2>
      <div className="flex flex-grow flex-row flex-wrap">
        {bookData.map((book) => (
          <BookItem data={book} key={book._id} className="w-1/6" />
        ))}
      </div>
    </>
  );
}
export default BookComic;
