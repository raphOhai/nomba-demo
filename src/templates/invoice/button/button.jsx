import React, { useContext } from "react";
import PropTypes from "prop-types";

import ctl from "@netlify/classnames-template-literals";
import { AppContext } from "states/context";
import Loader from "src/assets/images/svgs/loader.svg";
import ArrowRight from "src/assets/images/svgs/arrow-right.svg";

const Button = ({
  text,
  variant: buttonVariant = "primary",
  size: buttonSize = "xsmall",
  isLoading,
  withArrow,
  className,
  disabled: buttonDisabled,

  isflex,
  children,
}) => {
  const buttonStyle = ctl(`
  ${baseStyle}
  ${sizes[buttonSize]}
  min-w-[100%]
  ${variants[buttonVariant]}
  ${buttonDisabled && `opacity-25`}
  `);

  let ButtonElement = "button";
  const { onOpen } = useContext(AppContext);

  return (
    <ButtonElement
      className={`${buttonStyle} ${className}`}
      onClick={onOpen}
      disabled={buttonDisabled || isLoading}
      trackingText={text}
    >
      <span className={isflex ? "flex flex-row gap-5" : textStyle}>{text || children}</span>
      {isLoading && <Loader />}
      {withArrow && <ArrowRight />}
    </ButtonElement>
  );
};

const textStyle = ctl(`
  block
`);

const baseStyle = ctl(`
rounded
text-primary
text-center
gap-2
font-semibold
text-[16px]
transition
duration-400
inline-flex
items-center
justify-center
disabled:cursor-not-allowed
`);

const sizes = {
  xsmall: `
  md:min-w-[166px]
  h-[45px]
  `,
  small: `
  md:min-w-[200px]
  h-[58px]
  `,
  medium: `
  md:min-w-[275px]
  h-[58px]
  `,
  large: `
  md:min-w-[375px]
  h-[58px]
  `,
  xlarge: `
  md:min-w-[420px]
  h-[58px]
  `,
  custom: `
  rounded-[10px]
  md:min-w-[212px]
  h-[50px]
  `,
};

const variants = {
  primary: `
bg-secondary
hover:bg-secondary/80
disabled:bg-secondary
`,
  alternative: `
bg-primary-400
hover:bg-primary
hover:text-primary-100
disabled:bg-primary-400
disabled:text-primary
`,
};

Button.defaultProps = {
  variant: "primary",
  size: "xsmall",
  isflex: false,
};
Button.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "alternative"]),
  size: PropTypes.oneOf(["xsmall", "small", "medium", "large", "xlarge"]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  withArrow: PropTypes.bool,
  isflex: PropTypes.bool,
};

export { Button };