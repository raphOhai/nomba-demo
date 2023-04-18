import React from "react";
import PropType from "prop-types";
import BuyPower from "svgs/sponsors/buy-power.svg";
import GiGm from "svgs/sponsors/gigm.svg";
import RelianceHMO from "svgs/sponsors/reliance-hmo.svg";
import { StaticImage } from "gatsby-plugin-image";
const SponsorList = ({ gig, reliance, gigm, crossFit, buyPower, className }) => {
  return (
    <div
      className={`flex justify-start md:justify-center gap-5 md:gap-14 mt-[50px] items-center flex-nowrap scrollbar-hide overflow-auto ${className}`}
    >
      {gig && (
        <StaticImage
          width={80}
          className="min-w-[80px]"
          height={50}
          src="../../../assets/images/jpegs/abc-logo2.png"
          alt="ABC"
        />
      )}

      {reliance && <RelianceHMO className="min-w-[80px]" />}
      {gigm && <GiGm className="min-w-[80px]" />}
      {buyPower && <BuyPower className="min-w-[80px]" />}
      {crossFit && (
        <StaticImage
          width={74}
          className="min-w-[80px]"
          height={28}
          src="../../../assets/images/jpegs/cross-fit-png.png"
          alt="CrossFit"
        />
      )}
    </div>
  );
};

SponsorList.defaultProps = {
  gig: true,
  reliance: true,
  gigm: true,
  crossFit: true,
  buyPower: true,
};
SponsorList.propTypes = {
  gig: PropType.bool,
  reliance: PropType.bool,
  gigm: PropType.bool,
  crossFit: PropType.bool,
  buyPower: PropType.bool,
  className: PropType.string,
};
export { SponsorList };
