import ctl from "@netlify/classnames-template-literals";
import React from "react";
import { ReadMore } from "components";
import GlobeIcon from "svgs/globe-icon.svg";
import { nombaPro } from "../../constants";
import PropTypes from "prop-types";

export function AllOnOneCard({ bgImage, mainText, linkText, linkUrl, topIcon, alternate, image }) {
  return (
    <div className={`${bgImage} ${cardWrapper} rounded-[10px]`}>
      <div className="flex flex-col justify-between h-[100%]">
        <div className={container}>
          <div className="max-w-[300px]">
            <div className={`${titleStyle} text-${alternate ? "n-light" : "n-dark"}`}>{mainText}</div>
          </div>
          <div className="hidden md:flex">{topIcon}</div>
        </div>
        <div className={`${container} items-baseline`}>
          <ReadMore
            href={linkUrl}
            variant="readMore"
            className="whitespace-nowrap"
            text={linkText}
            color={alternate ? "n-light" : "n-grey6"}
          />
          {image}
        </div>
      </div>
    </div>
  );
}

AllOnOneCard.propTypes = {
  className: PropTypes.string,
  mainText: PropTypes.string,
  linkText: PropTypes.string,
  linkUrl: PropTypes.string,
  topIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.string]),
  alternate: PropTypes.bool,
  image: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.string]),
};

AllOnOneCard.defaultProps = {
  mainText: "Wifi and 4G enabled",
  linkText: nombaPro.orderText,
  linkUrl: nombaPro.dashdboardUrl,
  topIcon: <GlobeIcon />,
  alternate: false,
};

const titleStyle = ctl(`
text-[20px]
leading-[32px]
md:text-[32px]
md:leading-[48px]
tracking-[-0.02em]
font-[600]
md:tracking-[-0.04em]
`);

const cardWrapper = ctl(`
p-[30px]
md:h-[392px]
`);

const container = ctl(`
flex
w-[290px]
md:w-[665px]
justify-between
`);
