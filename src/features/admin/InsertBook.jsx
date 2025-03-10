/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";
import { message } from "antd";
import Loader from "../../utils/Loader";

const booksCategory = [
  "Fiction",
  "Non-Fiction",
  "Kids",
  "Comics",
  "Biography",
  "History",
  "Science",
  "Cooking",
  "Adventure",
  "Education",
  "Politices",
  "Religion",
  "Business",
  "Entertainment",
  "Sports",
  "Health",
  "Travel",
  "Literature",
  "Philosophy",
  "Mythology",
  "Art",
  "Science Fiction",
  "Mystery",
  "Thriller",
  "Fantasy",
  "Romance",
  "Horror",
  "Musical",
  "Other",
];

const bookBinding = [
  "Paperback",
  "Hardcover",
  "Hardcover with Spine",
  "Special Edition",
];

// const bookLanguage = ["English", "Hindi", "Other"];
function InsertBook() {
  const [input, setInput] = useState({});
  const [bookImg, setBookImg] = useState();
  //   const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
    console.log(input);
  };
  function handleImage(e) {
    // setBookImg(e.target.files[0]);
    const file = e.target.files[0];
    if (file.size > 5 * 1024 * 1024) {
      alert("Image size must be less than 5MB");
      return;
    }
    setBookImg(file);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append("file", bookImg);
    formData.append("upload_preset", "pageBypage");
    formData.append("cloud_name", "dhqehriqv");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dhqehriqv/image/upload",
        formData,
      );
      console.log("Cloudinary response", response);

      if (response.status === 200) {
        const api1 = "http://localhost:8080/product/addProduct";
        const bookData = { ...input, image: response.data.url };

        await axios.post(api1, bookData);
        message.success("Book uploaded successfully!");

        // Reset form fields
        setInput({});
        setBookImg(null);
        document.getElementById("form").reset(); // Reset file input
      } else {
        message.error("Failed to upload book image.");
      }
    } catch (e) {
      console.error(e);
      message.error("An error occurred while uploading.");
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) return <Loader />;

  return (
    <div className="mt-2 p-2">
      <p className="mb-5 ml-6 text-2xl font-semibold">Insert Book Details</p>
      <form className="mx-5 my-2">
        <div className="my-3 flex gap-5">
          <label htmlFor="title" className="w-52 p-2">
            Enter Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            className="w-80 rounded-sm border-2 border-gray-500 focus:border-green-600 focus:outline-none focus:ring focus:ring-lime-600 focus:ring-opacity-50"
            value={input.title}
            onChange={handleInput}
          />
        </div>
        <div className="my-3 flex gap-5">
          <label htmlFor="author" className="w-52 p-2">
            Enter Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            className="w-80 rounded-sm border-2 border-gray-500 focus:border-green-600 focus:outline-none focus:ring focus:ring-lime-600 focus:ring-opacity-50"
            required
            value={input.author}
            onChange={handleInput}
          />
        </div>
        <div className="my-3 flex gap-5">
          <label htmlFor="genre" className="w-52 p-2">
            Enter Genre
          </label>
          <input
            type="text"
            className="w-80 rounded-sm border-2 border-gray-500 focus:border-green-600 focus:outline-none focus:ring focus:ring-lime-600 focus:ring-opacity-50"
            id="genre"
            name="genre"
            required
            value={input.genre}
            onChange={handleInput}
          />
        </div>
        <div className="my-3 flex gap-5">
          <label htmlFor="year" className="w-52 p-2">
            Enter Publication Year
          </label>
          <input
            type="number"
            id="year"
            name="year"
            className="w-80 rounded-sm border-2 border-gray-500 focus:border-green-600 focus:outline-none focus:ring focus:ring-lime-600 focus:ring-opacity-50"
            required
            value={input.year}
            onChange={handleInput}
          />
        </div>
        <div className="my-3 flex gap-5">
          <label htmlFor="rating" className="w-52 p-2">
            Enter Rating
          </label>
          <input
            className="w-80 rounded-sm border-2 border-gray-500 focus:border-green-600 focus:outline-none focus:ring focus:ring-lime-600 focus:ring-opacity-50"
            type="number"
            id="rating"
            name="rating"
            required
            value={input.rating}
            onChange={handleInput}
          />
        </div>
        <div className="my-3 flex gap-5">
          <label htmlFor="pages" className="w-52 p-2">
            Enter Language
          </label>
          <input
            type="text"
            className="w-80 rounded-sm border-2 border-gray-500 focus:border-green-600 focus:outline-none focus:ring focus:ring-lime-600 focus:ring-opacity-50"
            id="language"
            name="language"
            required
            value={input.language}
            onChange={handleInput}
          />
        </div>
        <div className="my-3 flex gap-5">
          <label htmlFor="category" className="w-52 p-2">
            Choose Category
          </label>
          <select
            className="w-80 rounded-sm border-2 border-gray-500 focus:border-green-600 focus:outline-none focus:ring focus:ring-lime-600 focus:ring-opacity-50"
            id="category"
            name="category"
            value={input.category}
            onChange={handleInput}
          >
            <option value="">Select Category</option>
            {booksCategory.map((option, index) => (
              <option key={index} value={option} className="bg-green-50">
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="my-3 flex gap-5">
          <label htmlFor="binding" className="w-52 p-2">
            Choose Binding
          </label>
          <select
            className="w-80 rounded-sm border-2 border-gray-500 focus:border-green-600 focus:outline-none focus:ring focus:ring-lime-600 focus:ring-opacity-50"
            id="binding"
            name="binding"
            value={input.binding}
            onChange={handleInput}
          >
            <option value="">Binding Type</option>
            {bookBinding.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="my-3 flex gap-5">
          <label htmlFor="price" className="w-52 p-2">
            Enter Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            className="w-80 rounded-sm border-2 border-gray-500 focus:border-green-600 focus:outline-none focus:ring focus:ring-lime-600 focus:ring-opacity-50"
            required
            value={input.price}
            onChange={handleInput}
          />
        </div>
        <div className="my-3 flex gap-5">
          <label htmlFor="discount" className="w-52 p-2">
            Enter Discount(if any)
          </label>
          <input
            type="number"
            id="discount"
            name="discount"
            className="w-80 rounded-sm border-2 border-gray-500 focus:border-green-600 focus:outline-none focus:ring focus:ring-lime-600 focus:ring-opacity-50"
            required
            value={input.discount}
            onChange={handleInput}
          />
        </div>
        <div>
          <div className="my-3 flex gap-5">
            <label htmlFor="description" className="w-52 p-2">
              Enter a Description
            </label>
            <textarea
              id="description"
              name="description"
              className="w-80 rounded-sm border-2 border-gray-500 focus:border-green-600 focus:outline-none focus:ring focus:ring-lime-600 focus:ring-opacity-50"
              rows="3"
              cols="60"
              value={input.description}
              onChange={handleInput}
            ></textarea>
          </div>
          <div className="my-3 flex gap-5">
            <label htmlFor="img" className="w-52 p-2">
              Add Image
            </label>
            <input
              className="border-1 w-80 bg-slate-200 text-sm text-stone-700 file:mr-5 file:border-2 file:bg-emerald-500 file:px-5 file:text-emerald-600 hover:file:cursor-pointer focus:border-green-600"
              id="img"
              name="img"
              type="file"
              onChange={handleImage}
            />
          </div>
          <button
            type="submit"
            className="my-6 rounded-md bg-emerald-600 px-3.5 py-2 font-medium text-slate-50 hover:text-slate-100 hover:shadow-xl"
            onClick={handleSubmit}
          >
            Add to Database
          </button>
          &nbsp; &nbsp;
          <button
            type="reset"
            className="rounded-md border-emerald-100 bg-slate-200 px-3.5 py-2 font-medium text-emerald-600 hover:shadow-xl"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default InsertBook;
