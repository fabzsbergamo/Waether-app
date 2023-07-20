import { arrowUp } from "../assets";

const StartNowButton = () => (
  <div className="flex justify-center items-center w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer">
    <div className="flex justify-center items-center flex-col bg-primary w-[100%] h-[100%] rounded-full">
      <div className="flex justify-center items-start flex-row">
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Start</span>
        </p>
        <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
      </div>
      
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-gradient">Now</span>
      </p>
    </div>
  </div>
);

export default StartNowButton;