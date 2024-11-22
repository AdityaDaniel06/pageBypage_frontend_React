import BookCategory from "./BookCategory";
import PopularCollection from "./PopularCollection";

function DisplayProduct() {
  return (
    <>
      <PopularCollection />
      <BookCategory />
      <PopularCollection />
    </>
  );
}

export default DisplayProduct;
