import { CiFilter } from "react-icons/ci";
function Filter() {
  return (
    <>
      <div className="w-80 p-9">
        <h4 className="my-3 flex">
          <CiFilter size={25} />
          &nbsp; <span className="text-lg">Filter</span>
        </h4>
        <div>
          <label htmlFor="minPrice" className="my-2">
            Min Price:
          </label>
        </div>
        <div>
          <input type="number" id="minPrice" name="minPrice" className="my-2" />
          <label htmlFor="maxPrice" className="my-2">
            Max Price:
          </label>
        </div>
        <input
          type="number"
          id="maxPrice"
          name="maxPrice"
          className="mb-4 mt-1"
        />

        <p className="mb-1 border-t-2 pt-2">Choose Category</p>
        {/* <span className="flex">
          <input className="mx-2 mt-1 p-0" type="checkbox" value="Fiction" />
          <label htmlFor="filter">Fiction</label>
        </span>
        <span className="flex">
          <input
            className="mx-2 mt-1 p-0"
            type="checkbox"
            value="Non-Fiction"
          />
          <label htmlFor="filter">Non-Fiction</label>
        </span>
        <span className="flex">
          <input
            className="mx-2 mt-1 p-0"
            type="checkbox"
            value="Best-Seller"
          /> */}
        {/* </span> */}
        <span className="flex">
          <input
            className="mx-2 mt-1 p-0"
            type="checkbox"
            value="Best Seller"
          />
          <label htmlFor="filter">Best Seller</label>
        </span>
        <span className="mb-3 flex">
          <input
            className="mx-2 mt-1 p-0"
            type="checkbox"
            value="New Arrival"
          />
          <label htmlFor="filter">New Arrival</label>
        </span>
        <h4 htmlFor="language" className="border-t-2 pt-2">
          Language:
        </h4>
        <p className="flex">
          <input className="mx-2 mt-1 p-0" type="checkbox" value="english" />
          <label htmlFor="filter">English</label>
        </p>
        <p className="flex">
          <input className="mx-2 mt-1 p-0" type="checkbox" value="Hindi" />
          <label htmlFor="filter">Hindi</label>
        </p>
        <p className="flex border-b-2 pb-3">
          <input className="mx-2 mt-1 p-0" type="checkbox" value="other" />
          <label htmlFor="filter">Other</label>
        </p>
        <h4 htmlFor="sort" className="mt-3">
          Sort By Price
        </h4>
        <select id="sort" name="sort" className="my-2 w-52">
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>

        {/* <button type="submit">Submit</button> */}
      </div>
    </>
  );
}

export default Filter;
