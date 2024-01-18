import React from "react";
import Nav from "../components/Navigation/Nav";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <div className="overflow-x-hidden relative h-screen">
        <Nav />
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
