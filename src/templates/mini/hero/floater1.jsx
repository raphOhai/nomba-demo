import ctl from "@netlify/classnames-template-literals";
import React from "react";
import img1 from "jpegs/mini/latest-buy/1.png";
import img2 from "jpegs/mini/latest-buy/2.png";
import img3 from "jpegs/mini/latest-buy/3.png";
import { Ntext } from "components";
const FloatingBanner = ({ className }) => {
  return (
    <>
      <div className={`${className} ${container}`}>
        <div className="flex justify-end relative">
          <div className="absolute  left-0">
            <img src={img1} alt="" className="w-[24px] h-[24px] " />
          </div>
          <div className="absolute left-[6px]">
            <img src={img2} alt="" className="w-[24px] h-[24px] " />
          </div>
          <div className="absolute left-[12px]">
            <img src={img3} alt="" className=" w-[24px] h-[24px] " />
          </div>
          <div>
            <Ntext variant="text1" color="n-light">
              <span className="font-bold text-n-yellow3">080******65</span> bought a Nomba Mini 2 hrs ago
            </Ntext>
          </div>
        </div>
      </div>
    </>
  );
};

const container = ctl(`
bg-n-grey4 border border-n-grey5 rounded-lg flex flex-col py-[13px] w-[352px] px-4
`);
export { FloatingBanner };
