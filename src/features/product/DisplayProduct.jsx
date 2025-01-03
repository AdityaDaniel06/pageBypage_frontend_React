import BookCategory from "./BookCategory";
import PopularCollection from "./PopularCollection";

function DisplayProduct() {
  return (
    <>
      <PopularCollection limit={5} />
      <BookCategory />
      <PopularCollection limit={5} />
    </>
  );
}

export default DisplayProduct;
