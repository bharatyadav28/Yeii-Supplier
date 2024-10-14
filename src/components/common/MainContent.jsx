import React from "react";

import Card from "./Card";

// Pages main content Wrapper
function MainContent({ children, contentTitle, count }) {
  return (
    <Card className="bg-[var(--light-gray)] !w-full  mt-4 overflow-y-auto flex-grow h-full">
      {contentTitle && (
        <div className="font-medium">
          <span className="mr-2">{contentTitle} </span>
          <span className="text-[#4D5A62CC] text-md">{count}</span>
        </div>
      )}
      {children}
    </Card>
  );
}

export default MainContent;
