import DisplayProduct from "../features/product/DisplayProduct";
import CorouselCategory from "./CorouselCategory";
import CorouselHome from "./CorouselHome";

function Home() {
  return (
    <>
      <CorouselHome />
      <CorouselCategory />
      <DisplayProduct />
    </>
  );
}

export default Home;
