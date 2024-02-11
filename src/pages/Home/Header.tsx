import Container from "../../layouts/Container";
import header from "../../assets/header.png";

const Header = () => {
  return (
    <Container>
      <div className="flex  flex-col mx-auto items-start mt-8">
        <div className="flex justify-between items-center self-stretch">
          <div className="flex flex-col items-center gap-[8px]">
            <h1 className="text-[#061C3D] text-[64px] font-extrabold uppercase">
              Best Event <br /> management firm
            </h1>
          </div>
          <div>
            <p className="text-[#061C3D] text-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
              Cursus imperdiet sed id elementum. Quam vel aliquam sit <br />{" "}
              vulputate.
            </p>
          </div>
        </div>
        <div className="flex w-[195px] h-[52px] p-[24px] justify-center items-center mt-8 bg-[#0B63E5]">
          <button className="text-[#FFF] text-[16px] font-bold">Explore</button>
        </div>
      </div>
      <div>
        <img className="w-full h-[608px] my-20" src={header} alt="" />
      </div>
    </Container>
  );
};

export default Header;
