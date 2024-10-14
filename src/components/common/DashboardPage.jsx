import React from "react";

// Wrapper for every page
function DashboardPage({ children }) {
  return <div className=" flex flex-col !h-[100%]">{children}</div>;
}

export default DashboardPage;
