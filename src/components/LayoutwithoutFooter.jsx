import React from "react";
import Header from "./Header";

const LayoutwithoutFooter = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
};

export default LayoutwithoutFooter;
