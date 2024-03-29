import "./App.css";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register/Register";
import Header from "./components/common/Header";
import Profile from "./components/Profile/Profile";
import Purchase from "./components/Purchase/Purchase";
import Cart from "./components/cart/Cart";
import { ProtectedRoute } from "protected-route-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userProfile } from "./components/redux/action/user";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddProduct from "./components/Add_Product/AddProduct";
import Order from "./components/Order/Order";
import Allorders from "./components/Allorders/Allorders";
import { AllOrders, CartItem } from "./components/redux/action/note";

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated, message, error } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (message) {
      toast.success(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      dispatch({ type: "cleanMessage" });
    }

    if (error) {
      toast.error(error, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      dispatch({ type: "cleanError" });
    }
  }, [dispatch, message, error, toast]);
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(userProfile());
      dispatch(AllOrders())
    }
  }, [dispatch, isAuthenticated]);
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute
                isAuthenticated={!isAuthenticated}
                redirect="/purchase"
              >
                <Login />
              </ProtectedRoute>
            }
          />

         

          <Route
            path="/login"
            element={
              <ProtectedRoute
                isAuthenticated={!isAuthenticated}
                redirect="/profile"
              >
                <Login />
              </ProtectedRoute>
            }
          />
          <Route
            path="/register"
            element={
              <ProtectedRoute
                isAuthenticated={!isAuthenticated}
                redirect="/profile"
              >
                <Register />
              </ProtectedRoute>
            }
          />

       

          <Route
            path="/profile"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Profile />
              </ProtectedRoute>
            }
          />

          <Route
            path="/purchase"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                redirect="/profile"
              >
                <Purchase />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                redirect="/profile"
              >
                <Cart />
              </ProtectedRoute>
            }
          />

          <Route
            path="/add_product"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                redirect="/profile"
              >
                <AddProduct />
              </ProtectedRoute>
            }
          />

          <Route
            path="/order_product/:price/:product_id"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                redirect="/profile"
              >
                <Order />
              </ProtectedRoute>
            }
          />

<Route
            path="/allorders"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                redirect="/profile"
              >
                <Allorders />
              </ProtectedRoute>
            }
          /> 

        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
