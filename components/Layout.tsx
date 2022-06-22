import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

type Props = {
  children?: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col bg-blue-100">
      <h1 className="text-5xl text-center m-5"><a href="/">Kiw Trio</a></h1>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
