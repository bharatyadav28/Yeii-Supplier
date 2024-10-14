import React from "react";

// Page heading
function PageHeading({ pageName }) {
  return (
    <h1 className="text-2xl font-medium mb-5">
      <span className="text-[#00131F] mr-1">{pageName}</span>
      <span className="text-[var(--medium-gray)]">dashboard</span>
    </h1>
  );
}

export default PageHeading;
