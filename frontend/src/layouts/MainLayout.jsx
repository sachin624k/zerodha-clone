import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../landing_page/Navbar";
import Footer from "../landing_page/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
