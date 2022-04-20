import React from "react";
import ctl from "@netlify/classnames-template-literals";
import { StaticImage } from "gatsby-plugin-image";
import { Container, Ntext, ReadMore } from "components";
import Mastercard from "svgs/mastercard.svg";
import Visa from "svgs/visa.svg";
import FourG from "svgs/fourg.svg";
import Usb from "svgs/usb.svg";
import Printer from "svgs/about-printer.svg";
import Wifi from "svgs/about-wifi.svg";

const proTerminalFeatures = [
  "Accepts all Bank Cards",
  "Pocket Friendly",
  "Light and Sleek",
  "Easy to operate",
  "Connects to 4G/3G/2G Wifi",
  "Bluetooth Connectivity",
];

const ProTerminal = () => {
  return (
    <Container>
      <div className={sectionWrapStyle}>
        <Ntext
          variant="h3"
          value="The Smartest Way to Accept Offline and Online Payments"
          color="primary-100"
          className={headingTextStyle}
        />

        <div className={featuresWrapStyle}>
          <div>
            <div className={featuresIconWrapStyle}>
              <Mastercard />
              <Visa />
              <Wifi />
              <Printer />
              <FourG />
              <Usb />
            </div>

            <ul className={terminalUlStyle}>
              {proTerminalFeatures.map(item => (
                <li key={item}>
                  <Ntext
                    variant="h5"
                    color="primary-100"
                    value={item}
                    weight="normal"
                    className="normal-case"
                  />
                </li>
              ))}
            </ul>

            <ReadMore color="primary-100" to="/" text="Request a terminal" />
          </div>

          <StaticImage
            src="../../../assets/images/jpegs/Nomba Pro 2.png"
            alt="Nomba Pro 2"
            className={imageStyle}
          />
        </div>
      </div>
    </Container>
  );
};

const sectionWrapStyle = ctl(`
  bg-primary
  md:pt-[74px]
  pt-[55px]
  lg:my-[180px]
  my-[90px]
  max-h-[780px]
  md:max-h-[1010px]
  lg:max-h-[700px]
  overflow-hidden
`);
const headingTextStyle = ctl(`
  md:max-w-[635px] 
  max-w-[325px] 
  mx-auto
  text-center
  md:mb-[40px]
`);
const featuresWrapStyle = ctl(`
  flex 
  flex-col 
  lg:flex-row
  justify-between 
  md:px-[70px]
  px-[25px]
`);
const featuresIconWrapStyle = ctl(`
  flex 
  gap-4 
  items-center 
  mb-8 
  mt-14
`);
const imageStyle = ctl(`
  mt-16

  md:h-[581px] 
  md:w-[421px] 

`);
const terminalUlStyle = ctl(`
  lg:mb-24 mb-6
`);

export { ProTerminal };
