import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col bg-blue-100">
      <div>
        <img
          src="/main.jpeg"
          className="lg:h-screen lg:w-screen lg:object-cover md:object-contain"
        />
      </div>
      {children}
    </div>
  );
};
