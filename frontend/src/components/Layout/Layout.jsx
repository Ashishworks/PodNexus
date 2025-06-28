import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import DefaultHeader from "../Header/DefaultHeader";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <DefaultHeader />
      <main className="flex-1">
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
