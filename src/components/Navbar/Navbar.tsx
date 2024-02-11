import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex w-full  max-w-[1440px] p-[24px] items-center justify-between mx-auto gap-[202px]">
      <div className="flex w-[1400px] justify-between items-center flex-shrink-0">
        <div className="flex items-center gap-[24px]">
          <h1 className=" text-[32px] font-black">
            Event <span className="text-[#0B63E5]">360</span>
          </h1>
        </div>
        <div className="flex justify-center items-center gap-[16px]">
          <button className="flex p-[12px] items-center gap-[8px] self-stretch">
            <Link
              to="/"
              className="text-[#000] text-[16px] font-medium tracking-[0px]"
            >
              Home
            </Link>
          </button>
          <button className="flex p-[12px] items-center gap-[8px] self-stretch">
            <Link
              to="/"
              className="text-[#000] text-[16px] font-medium tracking-[0px]"
            >
              Home
            </Link>
          </button>
          <button className="flex p-[12px] items-center gap-[8px] self-stretch">
            <Link
              to="/"
              className="text-[#000] text-[16px] font-medium tracking-[0px]"
            >
              Home
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
