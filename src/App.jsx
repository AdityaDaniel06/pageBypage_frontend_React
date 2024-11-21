import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

// import Home from "./utils/Home";
// import Login from "./features/user/Login";
// import Signup from "./features/user/Signup";
// import AppLayout from "./utils/AppLayout";
const Home = lazy(() => import("./utils/Home"));
const Login = lazy(() => import("./features/user/Login"));
const Signup = lazy(() => import("./features/user/Signup"));
const AppLayout = lazy(() => import("./utils/AppLayout"));

// import AdminDashboard from "./features/admin/AdminDashboard";
// import InsertBook from "./features/admin/InsertBook";
// import MyCharts from "./features/admin/charts/MyCharts";
const MyCharts = lazy(() => import("./features/admin/charts/MyCharts"));
const AdminDashboard = lazy(() => import("./features/admin/AdminDashboard"));
const InsertBook = lazy(() => import("./features/admin/InsertBook"));

import SpinnerFullPage from "./ui/SpinnerFullPage";
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
            </Route>
          </Routes>
          <Routes>
            <Route path="/admin" element={<AdminDashboard />}>
              <Route index element={<MyCharts />} />
              <Route path="insert" element={<InsertBook />} />
              {/* <Route path="/display" element={<Display />} />
            <Route path="/search" element={<Search />} />
            <Route path="/edit/:id" element={<EditBook />} /> */}
            </Route>
            {/* <Route path="*" element={<PageNotFound />} /> */}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
