import './App.css'
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

function App() {
  return (
    <div className="App ">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route
          path="/appointment"
          element={
             <RequireAuth>
             <Purchase/>
            </RequireAuth>
          }
        ></Route>
        
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
