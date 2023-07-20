import { people01, people02, people03, quotes } from "../assets";

const FeedbackCard = () => (
  <><div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card text-white">
        <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />
        <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
        This app has given me all the information I need to plan my day. It gives very precise weather updates which is perfect for me and my line of business
        </p>

        <div className="flex flex-row">
            <img src={people01} className="w-[48px] h-[48px] rounded-full" />
            <div className="flex flex-col ml-4">
                <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-gradient">
                    Herman Jensen
                </h4>
                <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
                Events Planner
                </p>
            </div>
        </div>
    </div>
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card text-white">
            <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />
            <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
            Love this tool. I get instant weather updates!
            </p>

            <div className="flex flex-row">
                <img src={people02} className="w-[48px] h-[48px] rounded-full" />
                <div className="flex flex-col ml-4">
                    <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-gradient">
                        Herman Jensen
                    </h4>
                    <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
                    Car Wash Busniess
                    </p>
                </div>
            </div>
        </div>
        <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card text-white">
            <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />
            <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
            Great for personal and business use!
            </p>

            <div className="flex flex-row">
                <img src={people03} className="w-[48px] h-[48px] rounded-full" />
                <div className="flex flex-col ml-4">
                    <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-gradient">
                        Herman Jensen
                    </h4>
                    <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
                    Gardener
                    </p>
                </div>
            </div>
        </div>
    </>
);


export default FeedbackCard;