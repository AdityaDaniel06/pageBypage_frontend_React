function InsertBook() {
  const booksCategory = [
    "Fiction",
    "Non-Fiction",
    "Kids",
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

  return (
    <div className="mt-2 p-2">
      <p className="mb-5 ml-6 text-2xl font-semibold">Insert Book Details</p>
      <form className="mx-5 my-2">
        <div className="my-3 flex gap-5">
          <label htmlFor="id">Enter Unique Id</label>
          <input type="text" id="id" name="id" required className="ml-5" />
        </div>
        <div className="my-3 flex gap-5">
          <label htmlFor="title">Enter Title</label>
          <input type="text" id="title" name="title" required />
        </div>
        <div className="my-3 flex gap-5">
          <label htmlFor="author">Enter Author</label>
          <input type="text" id="author" name="author" required />
        </div>
        <div className="my-3 flex gap-5">
          <label htmlFor="genre">Enter Genre</label>
          <input type="text" id="genre" name="genre" required />
        </div>
        <div className="my-3 flex gap-5">
          <label htmlFor="year">Enter Year of Publication</label>
          <input type="number" id="year" name="year" required />
        </div>
        <div className="my-3 flex gap-5">
          <label htmlFor="rating">Enter Rating</label>
          <input type="number" id="rating" name="rating" required />
        </div>
        <div className="my-3 flex gap-5">
          <label htmlFor="pages">Enter Pages</label>
          <input type="number" id="pages" name="pages" required />
        </div>
        <div className="my-3 flex gap-5">
          <label htmlFor="">Is Book Part of a Series?</label>
          <input type="checkbox" id="isSeries" name="isSeries" />

          <label htmlFor="category "></label>
          <select id="category" name="category">
            <option value="">Select Category</option>
            {booksCategory.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="my-3 flex gap-5">
          <label htmlFor="">Enter Price</label>
          <input type="number" id="price" name="price" required />
        </div>
        <div>
          <div className="my-3 flex gap-5">
            <label htmlFor="description"></label>
            <textarea
              id="description"
              name="description"
              rows="4"
              cols="50"
            ></textarea>
          </div>
          <button type="submit">Insert Book</button>
          <button type="reset">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default InsertBook;
