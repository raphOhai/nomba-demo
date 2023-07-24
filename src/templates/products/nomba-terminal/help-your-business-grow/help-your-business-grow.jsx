import ctl from "@netlify/classnames-template-literals";
import { Ntext, Br, ReadMore } from "components";
import React from "react";
import { SectionWrapper } from "../components";
import { nombaPro } from "../constants";
import firstImg from "./images/first.png";
import FirstOverlay from "./images/overlay-1.svg";
import SecondOverlay from "./images/overlay2.svg";
import secondImg from "./images/second.png";
import ThirdOverlay from "./images/overlay3.svg";

export function HelpYouGrowYourBusiness() {
  return (
    <div className="bg-[#F3F3F3]">
      <SectionWrapper className={pageWrapper}>
        <div className="mb-[50px]">
          <Ntext
            variant="h3"
            // color="c-dark"
            className="flex justify-center text-center"
          >
            Simple and easy way to
            <Br on="all" />
            help you grow your business
          </Ntext>
        </div>

        <div className={`${alternateImgAndText} mb-[100px]`}>
          <div className={imgWrapper}>
            <div className={`${overlayContainer} md:top-[42px]`}>
              <FirstOverlay />
              <SecondOverlay />
            </div>
            <div className="img-hover0-zoom img-hover-zoom w-[100%] flex justify-end">
              <img src={firstImg} alt="attendant with nomba pro" className={blockImage} />
            </div>
          </div>
          <div className={textContainer}>
            <div className="header">
              <Ntext variant="text6lite" color="c-0" weight={600}>
                Receive instant payments <Br on="all" />
                anywhere, anytime
              </Ntext>
            </div>
            <div className="description">
              <Ntext color="n-grey5" variant="text3">
                With Nomba Pro, you’re able to accept payments on the go at lightning speed. The Nomba Pro Terminal also
                gets you started with getting right out of the box with unlimited and ultra fast 4G connection for
                unlimited transactions.
              </Ntext>
            </div>
            <div className="action">
              <ReadMore text={nombaPro.orderText} color="n-dark" variant="text3" href={nombaPro.dashdboardUrl} />
            </div>
          </div>
        </div>

        <div className={`${alternateImgAndText} ${invertedCol}`}>
          <div className={textContainer}>
            <div className="header">
              <Ntext variant="text6lite" color="c-0" weight={600}>
                Get paid easily via bank transfers or debit cards
              </Ntext>
            </div>
            <div className="description">
              <Ntext color="n-grey5" variant="text3">
                Nomba Pro offers you access to accepting payments anytime, anyday via bank transfer or debit cards
                quickly, easily, and securely. No more long waiting days for your money.
              </Ntext>
            </div>
            <div className="action">
              <ReadMore text={nombaPro.orderText} color="n-dark" variant="text3" href={nombaPro.dashdboardUrl} />
            </div>
          </div>
          <div className={imgWrapper}>
            <div className={`${overlayContainer} md:top-[64px] right-0`}>
              <ThirdOverlay />
            </div>
            <div className="img-hover0-zoom img-hover-zoom w-[100%] flex justify-start">
              <img src={secondImg} alt="attendant with nomba pro" className={blockImage} />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}

const overlayContainer = ctl(`
z-[1] 
initial
absolute 
`);

const imgWrapper = ctl(`
md:max-w-[602px] 
flex
relative
w-[100%]
md:max-h-[595px]
`);

const blockImage = ctl(`
rounded-[10px] 
`);

const invertedCol = ctl(`
flex-col-reverse
`);

const alternateImgAndText = ctl(`
flex
flex-col
md:flex-row
gap-[30px]
items-center
justify-between
`);

const pageWrapper = ctl(`
pt-[20px]
pb-[28px]
md:mb-[100px]
`);

const textContainer = ctl(`
flex
flex-col
gap-[30px]
md:gap-[34px]
max-w-[460px]
`);
