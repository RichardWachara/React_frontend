import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OutletComponent from "./Components/Utils/OutLetComponent/OutletComponent";
import Home from "./Pages/Home/Home";
import Product from "./Pages/Product/Product";
import Shop from "./Pages/Shop/Shop";
import Login from "./Pages/Login/Login";
import Signin from "./Pages/Signin/Signin";
import Checkout from "./Pages/Checkout/Checkout";
import ScrollToTop from "./Components/Utils/ScrollToTop/ScrollToTop";
import PrivateRoute from "./Components/Utils/PrivateRoute/PrivateRoute";
import { AuthProvider } from "./Components/Utils/Context/AuthContext";
import { ProdProvider } from "./Components/Utils/Context/ProdContext";
import VerifyEmail from "./Pages/VerifyEmail/VerifyEmail";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AuthProvider>
        <ProdProvider>
          <Routes>
            <Route path="/" element={<OutletComponent />}>
              <Route index element={<Home />} />
              <Route path="/product" element={<Product />} />
              <Route path="/shop" element={<Shop />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/checkout" element={<Checkout />} />
            </Route>
            <Route path="/verify-email" element={<VerifyEmail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<Signin />} />
          </Routes>
        </ProdProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
