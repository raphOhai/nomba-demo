import React from "react";
import ctl from "@netlify/classnames-template-literals";
import { StaticImage } from "gatsby-plugin-image";
import { Ntext, Container } from "components";
import AppStore from "svgs/apple.svg";
import PlayStore from "svgs/playstore.svg";
import SubFooterLeft from "svgs/subfooter-left.svg";
import SubFooterRight from "svgs/subfooter-right.svg";
import { DownloadButton } from "./download-button";

const SubFooter = () => {
  return (
    <div className={pageWrapperStyle}>
      <SubFooterLeft className={subFooterLeftImage} />
      <SubFooterRight className={subFooterRightImage} />

      <Container>
        <div className={pageInnerWrapStyle}>
          <div className={textWrapStyle}>
            <Ntext variant="h2" color="primary-100" className={headingStyle}>
              Get a free <br className="lg:hidden" />
              <span className="text-secondary">Nomba</span> account
            </Ntext>

            <Ntext
              variant="h5"
              color="primary-100"
              value="Change how you spend, manage and save money"
              className={subfooterParagraphStyle}
            />

            <div className={buttonWrapStyle}>
              <DownloadButton url="https://download_apple">
                <AppStore /> App Store
              </DownloadButton>

              <DownloadButton url="https://download_google">
                <PlayStore /> Google Play
              </DownloadButton>
            </div>
          </div>

          <StaticImage
            src="../../../assets/images/phone-mockup.png"
            alt="a phone mockup showing financial transaction"
          />
        </div>
      </Container>
    </div>
  );
};
const pageWrapperStyle = ctl(`
  bg-primary 
  relative 
  overflow-hidden
`);
const pageInnerWrapStyle = ctl(`
  flex flex-col 
  lg:flex-row 
  items-center 
  justify-between 
  lg:pt-4 
`);
const textWrapStyle = ctl(`
  lg:text-left 
  text-center
`);
const subFooterLeftImage = ctl(`
  absolute 
  lg:-top-10 
  xl:-top-0 
`);
const subFooterRightImage = ctl(`
  absolute 
  2xl:-right-2 
  lg:-right-8 
  sm:-right-36 
  -right-52 
  2xl:-bottom-12 bottom-0
`);
const headingStyle = ctl(`
  lg:flex gap-2
  min-w-max
  mt-[114px]
  lg:mt-0
`);
const subfooterParagraphStyle = ctl(`
  w-[240px] 
  md:w-[350px] 
  lg:w-auto 
  mx-auto 
  normal-case 
  font-normal
  pt-3 lg:pt-0
  leading-[180%]
`);
const buttonWrapStyle = ctl(`
  flex 
  lg:justify-start 
  justify-center 
  lg:gap-6 gap-5 
  mt-8 mb-4 lg:mb-0
`);

export { SubFooter };
