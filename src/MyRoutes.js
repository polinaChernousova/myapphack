import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AdminProvider from "./contexts/AdminProvider";
import AuthProvider from "./contexts/AuthProvider";
import ClientProvider from "./contexts/ClientProvider";
import AddPage from "./pages/AddPage";
import AdminPage from "./pages/AdminPage";
import CartPage from "./pages/CartPage";
import DetailPage from "./pages/DetailPage";
import EditPage from "./pages/EditPage";
import Hero from "./pages/Hero";
import GalleryPage from "./pages/GalleryPage";

import MainPage from "./pages/MainPage";
import { UserAuthContextProvider } from "./contexts/UserAuthContext";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Payment from "./pages/Payment";
// import CartCheck from "./components/CartCheck";

const MyRoutes = () => {
  return (
    <UserAuthContextProvider>
      <AuthProvider>
        <ClientProvider>
          <AdminProvider>
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/admin-panel-add" element={<AddPage />} />
                <Route path="/edit/:id" element={<EditPage />} />
                <Route path="/admin-panel" element={<AdminPage />} />
                <Route path="/product-detail/:id" element={<DetailPage />} />
                <Route path="/cart" element={<CartPage />} />
                {/* <Route path="/cart" element={<CartCheck />} /> */}
                <Route path="/products" element={<MainPage />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/payment" element={<Payment />} />
              </Routes>
            </BrowserRouter>
          </AdminProvider>
        </ClientProvider>
      </AuthProvider>
    </UserAuthContextProvider>
  );
};

export default MyRoutes;
