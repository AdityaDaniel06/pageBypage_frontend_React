import axios from "axios";
import { useEffect, useState } from "react";

function BookFiction() {
  const [bookData, setbookData] = useState([]);

  const fetchBooks = () => {
    let api = "http://localhost:8080/product/showbooks/category=fiction";
    axios.get(api).then((response) => {
      setbookData(response.data);
      console.log(response);
    });
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      {bookData.map((book) => (
        <div key={book._id}>
          <h2>{book.title}</h2>
          <p>{book.description}</p>
        </div>
      ))}
    </div>
  );
}

export default BookFiction;
