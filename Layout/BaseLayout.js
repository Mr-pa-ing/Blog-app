import React from "react";

const BaseLayout = ({ children }) => {
  return <main className="container mx-auto">{children}</main>;
};

export default BaseLayout;
