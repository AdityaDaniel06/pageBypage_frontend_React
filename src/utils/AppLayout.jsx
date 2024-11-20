import Header from "./Header";
import { Outlet } from "react-router-dom";
import { MyFooter } from "./MyFooter";

function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <MyFooter />
    </>
  );
}

export default AppLayout;
