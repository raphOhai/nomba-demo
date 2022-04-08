import React from "react";
import ctl from "@netlify/classnames-template-literals";
import { StaticImage } from "gatsby-plugin-image";
import { Container, Ntext, ReadMore, Br } from "components";

const HomepageBusiness = () => {
  return (
    <>
      <section className={homepageBusinessStyle}>
        <Container>
          <div className={containerWrapperStyle}>
            <div className={textWrapperStyle}>
              <Ntext variant="h2" color="primary-1000">
                You mean business <Br />
                when you go pro
              </Ntext>
              <Ntext variant="p18" className={subTextStyle}>
                Receive payments on a new level with <Br variant="mobile" /> the
                new Nomba Pro terminal
              </Ntext>
              <ReadMore color="primary-1000" to="/" text="See how it works" />
            </div>
            <div className={imageStyle}>
              <StaticImage
                width={755}
                height={780}
                src="../../../assets/images/jpegs/homepage/Nomba Pro 1.png"
                alt="Nomba POS"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

const homepageBusinessStyle = ctl(`
bg-primary-300
-mt-[21rem]
md:-mt-[27rem]
lg:-mt-[40rem]
`);
const containerWrapperStyle = ctl(`
grid
md:grid-cols-5
md:gap-[40px]
pt-[15rem]
md:pt-[25rem]
`);
const imageStyle = ctl(`
md:col-start-3
md:col-end-6
md:row-start-1
md:row-end-3
`);
const textWrapperStyle = ctl(`
pb-10
md:pb-20
md:col-start-1
md:col-end-3
md:row-start-2
md:row-end-auto
`);
const subTextStyle = ctl(`
my-3
max-w-[324px]
`);

export { HomepageBusiness };
