import axios from "axios";
import { useEffect, useState } from "react";
import BookItem from "./BookItem";

function PopularCollection({ limit }) {
  const [bookData, setBookData] = useState([]);

  const fetchBooks = () => {
    let api = "http://localhost:8080/product/showbooks/?category=Fiction";
    axios.get(api).then((response) => {
      setBookData(response.data.data);
      console.log(response.data.data);
    });
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <>
      <div className="my-5 bg-slate-200 py-6">
        <h2 className="pt-2 text-center text-3xl font-bold">Now Trending</h2>
        <div className="xs:align-items-center flex-grow flex-wrap justify-evenly sm:flex">
          <div className="flex flex-grow flex-row flex-wrap justify-around">
            {/* Using map and slicing the data to the limit */}
            {bookData.slice(0, limit).map((book) => (
              <BookItem data={book} key={book._id} className="w-1/4" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default PopularCollection;
