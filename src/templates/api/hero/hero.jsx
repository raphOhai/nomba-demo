import React, { useContext } from "react";
import ctl from "@netlify/classnames-template-literals";
import { Ntext, Br, Container, ReadMore, GetTerminal } from "components";
import heroVideo from "jpegs/api/hero.mp4";
import { SponsorList } from "../feature-section";
import { AppContext } from "states/context";
const ApiHero = ({ title, subtext }) => {
  const { onOpen } = useContext(AppContext);

  return (
    <section className="pb-20">
      <Container>
        <div className="flex flex-col-reverse gap-10 md:flex-row md:gap-[57px] items-center justify-center md:justify-between mb-24 md:h-[90vh]">
          <div className={heroTextWrapperStyle}>
            <div className="flex flex-row justify-center md:justify-start gap-3 ">
              <div className="rounded-full px-5 py-[10px] border border-n-grey6">
                <Ntext variant="text2" color="n-yellow3">
                  Nomba for Developers
                </Ntext>
              </div>
            </div>
            <div>
              <Ntext variant="text8" className="md:hidden" color="primary-100">
                {title}
              </Ntext>
              <Ntext variant="text9" className="hidden md:block" color="primary-100">
                {title}
              </Ntext>
            </div>

            <div className="mb-4">
              <Ntext variant="text4lite" className="" color="n-grey1">
                {subtext}
              </Ntext>
            </div>
            <div className={heroButtonsContainer}>
              <GetTerminal onClick={onOpen} text="Get Started" type="animate-button-reverse" />

              <ReadMore
                color="primary-100"
                className="text-center"
                weight={500}
                defaultStyle={false}
                variant="text3"
                extraTrackText="Documentation"
                href={{ url: "https://docs.nomba.com" }}
                text="Documentation"
              />
            </div>
          </div>
          <div>
            {/* <ApiLogo className="hidden md:block" />
            <ApiLogoMobile className="md:hidden mt-10" /> */}

            <video
              src={heroVideo}
              controls={false}
              className="hidden md:block"
              muted
              playsInline
              autoPlay
              loop
              width={516}
              height={516}
            ></video>
            <video
              src={heroVideo}
              controls={false}
              className="md:hidden mt-10"
              muted
              playsInline
              autoPlay
              loop
              width={300}
              height={300}
            ></video>
          </div>
        </div>
        <div className="text-center">
          <div className="max-w-[650px] mx-auto mb-10">
            <Ntext color="primary-100" variant="text6">
              Companies of all sizes trust our APIs for <Br on="desktop" /> financial ease and growth
            </Ntext>
          </div>
          <SponsorList />
        </div>
      </Container>
    </section>
  );
};

const heroTextWrapperStyle = ctl(`
lg:max-w-[692px]
md:mt-[50px]
max-w-[100%]
flex flex-col gap-[10px] items-center md:items-start
lg:mb-[80px]
sm:mb-[120px]
md:mx-2
mb-10
`);
const heroButtonsContainer = ctl(`
flex
flex-col
md:flex-row
gap-[30px]
md:items-center
w-full items-stretch 
mt-[50px]
`);

export { ApiHero };
