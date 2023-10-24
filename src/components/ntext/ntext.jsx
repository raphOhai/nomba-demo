import PropTypes from "prop-types";
import React from "react";

import ctl from "@netlify/classnames-template-literals";
import tailwindconfig from "../../../tailwind.config";

const {
  theme: {
    extend: { colors },
  },
} = tailwindconfig;

const Ntext = ({ value, variant: textVariant, weight, color = "primary", className, children, ...props }) => {
  let TextElement = textVariant[0] === "p" ? "p" : textVariant;

  // h7 is not a valid, we will use replace this with an h6 tag but the style for h7 will be retained according to the design system
  if (textVariant === "h7") {
    TextElement = "h6";
  }

  const customVariants = [
    "text0",
    "text1",
    "text2",
    "text3",
    "text4lite",
    "text4",
    "text5lite",
    "text5",
    "text6",
    "text6heavy",
    "text6lite",
    "text7",
    "text8",
    "text9",
    "text9lite",
    "prohero",
    "prosubText",
    "readMore",
    "pricing",
    "pricingSub",
    "pricingMain",
    "p24",
    "p24regular",
  ];

  if (customVariants.includes(textVariant)) {
    TextElement = "div";
  }

  const [_color, _shade] = color.split("-");

  const textColor = colors[_color][_shade ? _shade : "DEFAULT"];

  const textStyle = ctl(`
  ${variants[textVariant]}
  ${className}
  `);

  const dynamicStyle = {
    color: textColor,
    fontWeight: weight,
  };
  return (
    <TextElement style={dynamicStyle} className={textStyle} {...props}>
      {value || children}
    </TextElement>
  );
};

const variants = {
  h1: `
    md:text-[65px]
    text-[37px]
    md:leading-[75px]
    leading-[44.4px]
    font-bold 
    `,

  h2: `
    font-bold
    md:text-[48px]
    tracking-[-0.03em]
    text-[32px]
    md:leading-[59.04px]
    leading-[40.2px]
    md:tracking-[-0.04em] 
    `,

  h3: `
    md:text-[40px]
    text-[32px]
    md:leading-[47.87px]
    leading-[39.4px]
    font-semibold 
    `,
  h4: `
    md:text-[28px]
    text-[18px]
    md:leading-[39.2px]
    leading-[25.2px]
    font-semibold 
    `,
  h5: `
    md:text-[21px]
    text-[14px]
    md:leading-[30.5px]
    leading-[19.6px]
    font-semibold 
    `,
  h6: `
    md:text-[18px]
    text-[16px]
    md:leading-[21px]
    leading-[19.6px]
    font-semibold 
    `,
  h7: `
    text-[14px]
    leading-[19.6px]
    font-semibold 
    uppercase
    tracking-[3px]
    `,
  p24: `
    md:text-[24px]
    text-[16px]
    md:leading-[32px]
    leading-[24.8px]
    font-[200]
    `,
  p24regular: `
    md:text-[24px]
    text-[16px]
    md:leading-[32px]
    leading-[24.8px]
    md:font-[500]
    font-[400]
    `,
  p18: `
    md:text-[18px]
    text-[16px]
    md:leading-[32.8px]
    leading-[28.8px]
    `,
  p16: `
    md:text-[16px]
    text-[14px]
    md:leading-[28.8px]
    leading-[25.2px]
    `,
  p14: `
    md:text-[14px]
    text-[12px]
    md:leading-[25.2px]
    leading-[21.6px]
    `,
  p12: `
    text-[12px]
    leading-[21.6px]
    `,
  text0: `
    text-[10px]
    font-[400]
    leading-[16px]
    `,
  text1: `
    text-[12px]
    font-[400]
    leading-[18px]
    `,
  text2: `
    text-[14px]
    leading-[22px]
    font-[400]
    `,
  text3: `
    text-[14px]
    leading-[22px]
    md:text-[16px]
    md:leading-[24px]
    font-normal
    `,
  text4lite: `
    font-[400]
    leading-[24px]
    md:text-[20px]
    md:leading-[30px]
    text-[16px]
    tracking-[-0.4px]
    `,
  text4: `
    font-[700]
    text-[20px]
    leading-[30px]
    tracking-[-0.02em]
    `,
  text5lite: `
    font-[400px]
    md:text-[20px]
    md:leading-[30px]
    text-[16px]
    leading-[24px]
    `,
  text5: `
  font-[600]
  text-[20px]
  leading-[24px]
  md:font-[700]
  md:text-[24px]
  md:leading-[32px]
  tracking-[-0.02em]
    `,
  text6: `
    font-[700]
    text-[24px]
    leading-[32px]
    tracking-[-0.02em]
    md:text-[32px]
    md:leading-[40px]
    md:tracking-[-0.03em]
      `,
  text6lite: `
    font-[600]
    text-[24px]
    leading-[30px]
    tracking-[-0.02em]
    md:text-[32px]
    md:leading-[40px]
    md:tracking-[-0.03em]
    `,
  text6heavy: `
    font-[700]
    text-[24px]
    leading-[32px]
    tracking-[-0.02em]
    md:text-[32px]
    md:leading-[40px]
    md:tracking-[-0.03em]
    `,
  text7: `
    text-[24px]
    leading-[32px]
    tracking-[-0.02em]
    font-[700]
    md:text-[40px]
    md:leading-[48px]
    md:tracking-[-0.04em]
    `,
  text8: `
    font-[700]
    text-[40px]
    leading-[48px]
    tracking-[-0.04em]
    md:text-[48px]
    md:leading-[60px]
    md:tracking-[-0.04em]
    `,
  text9: `
    font-[700]
    text-[40px]
    leading-[48px]
    tracking-[-0.04em]
    md:text-[64px]
    md:leading-[84px]
    `,
  text9lite: `
    font-[600]
    text-[32px]
    md:text-[64px]
    leading-[40px]
    md:leading-[74px]
    tracking-[-0.04em]
  `,
  prohero: `
    font-[700]
    text-[48px]
    md:text-[80px]
    leading-[60px]
    md:leading-[96px]
    tracking-[-0.04em]
    `,
  prosubText: `
    font-[400]
    text-[16px]
    md:text-[20px]
    leading-[24px]
    md:leading-[32px]
    tabular-nums
    lining-nums
    `,
  readMore: `
    text-[16px]
    leading-[24px]
    font-[500]
    md:font-[600]
    `,
  pricing: `
    text-[32px]
    leading-[40px]
    tracking-[-0.02em]
    font-[700]
    md:text-[48px]
    md:leading-[60px]
    md:tracking-[-0.04em]
    `,
  pricingMain: `
    text-[48px]
    leading-[60px]
    tracking-[-0.04em]
    font-[700]
    md:text-[64px]
    md:leading-[84px]
    `,
  pricingSub: `
    font-[500]
    text-[16px]
    leading-[24px]
    md:text-[20px]
    md:leading-[60px]
    `,
};
const validElements = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "h7",
  "p12",
  "p14",
  "p16",
  "p18",
  "p24",
  "p24regular",
  "text0",
  "text1",
  "text2",
  "text3",
  "text4lite",
  "text4",
  "text5lite",
  "text5",
  "text6",
  "text6lite",
  "text6heavy",
  "text7",
  "text8",
  "text9",
  "text9lite",
  "prohero",
  "prosubText",
  "readMore",
  "pricing",
  "pricingSub",
  "pricingMain",
];

Ntext.defaultProps = {};
Ntext.propTypes = {
  value: PropTypes.string,
  variant: PropTypes.oneOf([...validElements]),
  weight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  color: PropTypes.string,
  className: PropTypes.string,
};

export { Ntext };
