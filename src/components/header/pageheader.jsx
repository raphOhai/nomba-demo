import React from "react";
import PropTypes from "prop-types";
import { Ntext, Button, Container } from "components";

import ctl from "@netlify/classnames-template-literals";

import constants from "config/constants.json";

const { SIGNUP_URL } = constants;

const PageHeader = ({
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
          <div
            className={imageStyle}
            style={{
              clipPath: "polygon(64% 0, 100% 0, 100% 100%, 0 100%, 0 50%)",
            }}
          >
            {image}
          </div>
        </div>
      </section>
    </Container>
  );
};

const pageHeaderWrapperStyle = ctl(`
xl:pt-[150px]
lg:pt-[120px]
sm:pt-[160px]
pt-[120px]
grid
xl:grid-cols-2
gap-[40px]
mb-[-50px]
`);

const subTextStyle = ctl(`
max-w-[330px] 
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
md:-mt-[240px]

`);

PageHeader.defaultProps = {
  link: { href: { url: SIGNUP_URL } },
};

PageHeader.propTypes = {
  pageHeaderText: PropTypes.string,
  pageHeaderSubText: PropTypes.string,
  pageHeaderButtonText: PropTypes.string,
  image: PropTypes.node,
  link: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
export { PageHeader };
