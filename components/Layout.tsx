import { ReactNode } from "react";
import { Footer } from "./Footer";

type Props = {
  children?: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col bg-blue-100">
      {children}
      <Footer />
    </div>
  );
};
