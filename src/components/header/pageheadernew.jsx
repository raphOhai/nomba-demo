import React from "react";
import PropTypes from "prop-types";
import { Ntext, Button, Container } from "components";

import ctl from "@netlify/classnames-template-literals";

import constants from "config/constants.json";

const { SIGNUP_URL } = constants;

const PageHeaderNew = ({
  pageHeaderText,
  pageHeaderSubText,
  pageHeaderButtonText,
  image,
  link,
}) => {
  return (
    <Container>
      <section className={pageHeaderWrapperStyle}>
        <div>
          <Ntext
            variant="h1"
            className="max-w-[655px]"
            value={pageHeaderText}
          />

          <Ntext
            variant="p18"
            value={pageHeaderSubText}
            className={subTextStyle}
          />
          <Button {...link} text={pageHeaderButtonText} size="medium" />
        </div>
        <div className={imageWrapperStyle}>
          <div className={imageStyle}>{image[0]}</div>
        </div>
        <div className={imageOverlayStyle}>{image[1]}</div>
      </section>
    </Container>
  );
};

const pageHeaderWrapperStyle = ctl(`
xl:pt-[150px]
!overflow-x-hidden
lg:pt-[120px]
sm:pt-[160px]
pt-[120px]
grid
xl:grid-cols-2
gap-[40px]
mb-[-50px]
md:pb-[50px]
`);

const subTextStyle = ctl(`
max-w-[490px] 
my-6
`);
const imageWrapperStyle = ctl(`
w-full 
flex
sm:justify-end
`);

const imageStyle = ctl(`
xl:mt-0
lg:-mt-[400px]
xl:mr-[104px]
lg:mr-none
relative
xl:h-max
xl:w-max
shadow-lg
lg:w-[450px]
hidden
transition-all
lg:flex
z-10
`);

const imageOverlayStyle = ctl(`
absolute
xl:right-[calc(100%-92rem)]
lg:right-[calc(100%-78rem)]
xl:h-max
hidden
lg:flex
lg:w-[450px]
shadow-md
xl:w-max
top-[213px]
rounded-lg
transition-all
`);

PageHeaderNew.defaultProps = {
  link: { href: { url: SIGNUP_URL } },
};

PageHeaderNew.propTypes = {
  pageHeaderText: PropTypes.string,
  pageHeaderSubText: PropTypes.string,
  pageHeaderButtonText: PropTypes.string,
  image: PropTypes.node,
  link: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
export { PageHeaderNew };
