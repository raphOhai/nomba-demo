import ctl from "@netlify/classnames-template-literals";
import { Ntext, Button, ReadMore } from "components";
import Lottie from "lottie-web";
import PropTypes from "prop-types";
import React, { createRef, useEffect } from "react";
import { SectionWrapper } from "../components";
import animation from "./animations/moving-cards.json";
import { nombaPro } from "../constants";

export function NombaProHeroSection({
  proHeaderText,
  proHeaderSubText,
  proHeaderButtonText,
  linkText,
  link = { href: { url: nombaPro.dashdboardUrl } },
}) {
  let animationContainer = createRef();
  useEffect(() => {
    const instance = Lottie.loadAnimation({
      container: animationContainer.current,
      animationData: animation,
    });
    // Return clean up function here
    return () => instance.destroy();
  }, [animationContainer]);

  return (
    <SectionWrapper className={pageHeaderWrapperStyle}>
      <div className={proHeroTextContainer}>
        <Ntext variant="h1" color="c-dark" className="mb-[20px]">
          {proHeaderText}
        </Ntext>
        <Ntext variant="p18" color="c-grey4" className="mb-[20px]">
          {proHeaderSubText}
        </Ntext>
        <Ntext variant="text4" color="n-grey3" weight={500} className="line-through">
          Retail &nbsp;₦ 30,000
        </Ntext>
        <div className="flex items-center mb-[20px]">
          <Ntext variant="pricing" value="₦ 25,000" />
          <Ntext variant="pricingSub" color="n-grey2" weight={500} className="ml-[10px]">
            &nbsp;Promo price
          </Ntext>
        </div>
        <div className={heroButtonsContainer}>
          <Button {...link} text={proHeaderButtonText} size="medium" />
          <ReadMore color="n-grey6" variant="text3" href={{ url: "tel:+23401888899" }} text={linkText} />
        </div>
      </div>
      <div className={proHeroImageContainer} ref={animationContainer} />
    </SectionWrapper>
  );
}

// gap-[7%]
// pl-[15%]
const pageHeaderWrapperStyle = ctl(`
xl:pt-[150px]
md:pt-[120px]
sm:pt-[160px]
pt-[100px]
flex
justify-between
mb-[94px]
md:mb-[120px]
`);

const proHeroTextContainer = ctl(`
justify-center
max-w-[378px]
md:justify-start
md: max-w-[640px]
lg:max-w-[632px]
md:bg-none
bg-no-repeat
bg-cover
bg-nomba-pro-hero-bg
`);

const heroButtonsContainer = ctl(`
flex
flex-col
md:flex-row
gap-[30px]
items-center
`);

const proHeroImageContainer = ctl(`
hidden
md:flex
justify-end
bg-no-repeat
mt-[-5%]
md:w-[500px]
md:h-[500px]
`);

NombaProHeroSection.propTypes = {
  proHeaderText: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.object]),
  proHeaderSubText: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.object]),
  proHeaderButtonText: PropTypes.string,
  image: PropTypes.node,
  link: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  linkText: PropTypes.string,
};
