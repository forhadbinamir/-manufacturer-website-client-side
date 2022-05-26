import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./Pages/Dashboard/Dashboard";
import ManageUsers from "./Pages/Dashboard/ManageUsers";
import MyOrders from "./Pages/Dashboard/MyOrders";
import MyPortfolio from "./Pages/Dashboard/MyPortfolio";
import MyReviews from "./Pages/Dashboard/MyReviews";
import Payment from "./Pages/Dashboard/Payment";
import Home from "./Pages/Home/Home";
import RequireAuth from "./Pages/Hooks/RequireAuth";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import Purchase from "./Pages/Purchase/Purchase";
import UserInfo from "./Pages/Purchase/UserInfo";
import Register from "./Pages/Register/Register";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>}
        >
          <Route index element={<ManageUsers></ManageUsers>}></Route>
          <Route path="orders" element={<MyOrders></MyOrders>}></Route>
          <Route path="reviews" element={<MyReviews></MyReviews>}></Route>
          <Route path="portfolio" element={<MyPortfolio></MyPortfolio>}></Route>
          <Route path="payment" element={<Payment></Payment>}></Route>
        </Route>

        <Route path='/purchase/:id' element={<RequireAuth>
          <Purchase></Purchase>
        </RequireAuth>}></Route>
        <Route path='/userinfo/:id' element={<RequireAuth>
          <UserInfo></UserInfo>
        </RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
