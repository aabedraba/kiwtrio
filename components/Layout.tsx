import { ReactNode } from "react";
import Navbar from "./Navbar";

type Props = {
  children?: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return <div className="flex flex-col bg-blue-100">{children}</div>;
};
