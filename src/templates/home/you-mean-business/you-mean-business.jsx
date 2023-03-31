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
                Receive payments on a new level with <Br on="mobile" /> the new
                Nomba Pro terminal
              </Ntext>
              <ReadMore
                color="primary-1000"
                to="/products/pos-terminals"
                text="See how it works"
              />
            </div>
            <div className={imageWrapperStyle}>
              <StaticImage
                width={540}
                height={706}
                src="../../../assets/images/jpegs/homepage/Nomba Pro.webp"
                alt="Nomba POS"
                className={imageStyle}
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

// -mt-[21rem]
// md:-mt-[27rem]
// lg:-mt-[40rem]
const homepageBusinessStyle = ctl(`
bg-primary-300
mt-[-9.5rem]
`);

// md:pt-[25rem]
// md:pt-[15rem]
const containerWrapperStyle = ctl(`
grid
lg:grid-cols-5
md:gap-[40px]
mt-[150px]
pt-[5rem]
`);
const imageWrapperStyle = ctl(`
md:col-span-3
relative
overflow-hidden
lg:h-auto
sm:h-[700px]
h-[400px]
lg:mt-0
md:-mt-[250px]
sm:-mt-[160px]
pointe-events-none
`);
const imageStyle = ctl(`
absolute
right-0
sm:bottom-[-80px]
bottom-[-80px]
sm:w-auto
w-full
`);
const textWrapperStyle = ctl(`
pb-10
lg:pt-[350px]
md:pb-20
md:col-span-2
`);
const subTextStyle = ctl(`
my-3
max-w-[324px]
`);

export { HomepageBusiness };
