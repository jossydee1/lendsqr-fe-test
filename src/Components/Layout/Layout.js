import React from "react";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";

function Layout({ children }) {
  return (
    <div>
      {/* <TopNav /> */}
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
