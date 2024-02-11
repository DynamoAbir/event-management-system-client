import { ReactNode } from "react";

type TContainer = {
  children: ReactNode;
};

const Container = ({ children }: TContainer) => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-[20px]">{children}</div>
  );
};

export default Container;
