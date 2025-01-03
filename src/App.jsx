import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import SpinnerFullPage from "./ui/SpinnerFullPage";

// import Home from "./utils/Home";
// import Login from "./features/user/Login";
// import Signup from "./features/user/Signup";
// import AppLayout from "./utils/AppLayout";
const Home = lazy(() => import("./utils/Home"));
const Login = lazy(() => import("./features/user/Login"));
const Signup = lazy(() => import("./features/user/Signup"));
const AppLayout = lazy(() => import("./utils/AppLayout"));
const BookFiction = lazy(() => import("./features/product/BookFiction"));

const MyCharts = lazy(() => import("./features/admin/charts/MyCharts"));
const AdminDashboard = lazy(() => import("./features/admin/AdminDashboard"));
const InsertBook = lazy(() => import("./features/admin/InsertBook"));

import BookNonFiction from "./features/product/BookNonFiction";
import BookKids from "./features/product/BookKids";
import BookComic from "./features/product/BookComic";
import BestSeller from "./features/product/BestSeller";
import NewArrival from "./features/product/NewArrival";
import Stationary from "./features/product/Stationary";
import Boardgames from "./features/product/Boardgames";
import LocateStore from "./features/product/LocateStore";
import ViewCart from "./features/cart/ViewCart";
import Checkout from "./features/cart/Checkout";
// import PageNotFound from "./ui/PageNotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<SpinnerFullPage />}>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="user/login" element={<Login />} />
              <Route path="user/signup" element={<Signup />} />
              <Route path="fiction" element={<BookFiction />} />
              <Route path="nonfiction" element={<BookNonFiction />} />
              <Route path="kids" element={<BookKids />} />
              <Route path="comic" element={<BookComic />} />
              <Route path="bestseller" element={<BestSeller />} />
              <Route path="newarrival" element={<NewArrival />} />
              <Route path="stationary" element={<Stationary />} />
              <Route path="boardgames" element={<Boardgames />} />
              <Route path="locatestore" element={<LocateStore />} />
              <Route path="viewcart" element={<ViewCart />} />
              <Route path="checkout" element={<Checkout />} />
            </Route>
          </Routes>
          <Routes>
            <Route path="/admin" element={<AdminDashboard />}>
              <Route index element={<MyCharts />} />
              <Route path="insert" element={<InsertBook />} />

              {/* <Route path="/edit/:id" element={<EditBook />} /> */}
            </Route>
            {/* <Route path="*" element={<PageNotFound />} /> */}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
