import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Content } from "@/lib/schema";

const Layout = ({
  children,
  content,
}: {
  content: Content;
  children: ReactNode;
}) => {
  return (
    <>
      <Header content={content} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
