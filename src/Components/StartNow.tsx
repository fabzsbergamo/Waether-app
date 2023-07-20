import { discount, robot } from "../assets";
import StartNowButton from "./StartNowButton";

const Hero = () => {
  return (
    <section id="start now">
    <div className="flex md:flex-row flex-col sm:px-16 px-8 py-8">
      <div className="flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6">
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] ml-2">
            <span className="text-white">20%</span>{" "}
            <span className="text-gradient">Discount For</span>{" "}
            <span className="text-white">1 Month</span>{" "}
            <span className="text-gradient">Account</span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>{" "}
          </h1>
          <div className="ss:hidden md:mr-4 mr-0">
            <StartNowButton />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Weather App.
        </h1>
        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5 text-white">
          Our team of experts uses latest technology to get you the latest weather updates!
        </p>
      </div>

      <div className="flex-1 flex justify-center items-center md:my-0 my-10 relative">
        <img src={robot} alt="billing" className="w-[100%] h-[85%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      {/* <div className="lg:hidden flex justify-center items-center">
        <StartNow />
      </div> */}
      </div>
    </section>
  );
};

export default Hero;