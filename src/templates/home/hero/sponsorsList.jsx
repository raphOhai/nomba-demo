import React from "react";
import GodIsGood from "svgs/sponsors/god-is-good.svg";
// import CrossFitLogo from "svgs/sponsors/cross-fit-png.png";
import BuyPower from "svgs/sponsors/buy-power.svg";
import GIGM from "svgs/sponsors/gigm.svg";
import RelianceHMO from "svgs/sponsors/reliance-hmo.svg";
import { Container } from "components";
import { StaticImage } from "gatsby-plugin-image";
const SponsorList = () => {
  return (
    <div className="flex justify-center gap-10 md:gap-14 mt-[50px] items-center flex-nowrap scrollbar-hide overflow-auto">
      <GodIsGood className="min-w-[80px]" />
      <RelianceHMO className="min-w-[80px]" />
      <GIGM className="min-w-[80px]" />

      <BuyPower className="min-w-[80px]" />
      <StaticImage
        width={74}
        className="min-w-[80px]"
        height={28}
        src="../../../assets/images/jpegs/cross-fit-png.png"
        alt="Nomba Lite"
      />
    </div>
  );
};

export { SponsorList };
