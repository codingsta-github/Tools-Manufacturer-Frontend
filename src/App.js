import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Login from "./Pages/Authentication/Login";
import RequireAuth from "./Pages/Authentication/RequireAuth";
import SignUp from "./Pages/Authentication/SignUp";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound";
import Purchase from "./Pages/Purchase";
import Footer from "./Pages/Shared/Footer";
import Header from "./Pages/Shared/Header";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyReview from "./Pages/Dashboard/MyReview";
import MyOrder from "./Pages/Dashboard/MyOrder";
import Users from "./Pages/Dashboard/Users";
import AddTool from "./Pages/Dashboard/AddTool";
import MyProfile from "./Pages/Dashboard/MyProfile";
import ManageOrder from "./Pages/Dashboard/ManageOrder";
import ManageTools from "./Pages/Dashboard/ManageTools";
import Payment from "./Pages/Payment";
import MyPortfolio from "./Pages/Home/MyPortfolio";
import Blogs from "./Pages/Home/Blogs";

function App() {
  return (
    <div className="App ">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route
          path="/tool/:_id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        ></Route>
        <Route path="/payment/:_id" element={<Payment></Payment>}></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route
            path="manageOrder"
            element={<ManageOrder></ManageOrder>}
          ></Route>
          <Route
            path="manageTools"
            element={<ManageTools></ManageTools>}
          ></Route>
          <Route path="myOrder" element={<MyOrder></MyOrder>}></Route>
          <Route path="myReview" element={<MyReview></MyReview>}></Route>
          <Route path="users" element={<Users></Users>}></Route>
          <Route path="addTool" element={<AddTool></AddTool>}></Route>
        </Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/myPortfolio" element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
