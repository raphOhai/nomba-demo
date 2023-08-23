import ctl from "@netlify/classnames-template-literals";
import { Container, Ntext, ReadMore } from "components";
import React from "react";

import { StaticImage } from "gatsby-plugin-image";

const SectionTwo = ({ title, description, data }) => {
  return (
    <section className="bg-[#38383874] py-20 ">
      <Container>
        <div className="md:max-w-[819px] md:mx-auto  text-center md:mt-12 mb-7">
          <Ntext variant="h2" className="md:text-center" color="primary-100">
            {title}
          </Ntext>
          <Ntext variant="text3" className="md:px-5 mt-[28px]" color="primary-500">
            {description}
          </Ntext>
        </div>
        <div className="flex justify-between">
          {data.map(s => (
            <div key={s.title} className={`${cardWrapStyle}`}>
              <div className="md:hidden ">{s.iconMobile}</div>
              <div className={cardInnerWrapper}>
                <div className="flex items-center gap-[20px]">
                  {s.icon}
                  <Ntext variant="text5" color="primary-100">
                    {s.title}
                  </Ntext>
                </div>
                <div className="flex flex-col gap-4">
                  <Ntext variant="text3" color="m-light">
                    {s.description}
                  </Ntext>
                  <ReadMore color="secondary" variant="text2" href={{ url: "tel:+23401888899" }} text="Learn more" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <StaticImage src="../../../assets/images/jpegs/api/image-temp.png" alt="Temp Doc" />
        </div>
      </Container>
    </section>
  );
};

const cardWrapStyle = ctl(`

md:w-[400px] 
md:py-10
py-5
px-10
md:px-0
md:h-[200px]
h-[80px] 
border-n-grey5 
bg-n-grey6
border 
rounded-[10px]
`);

const cardInnerWrapper = ctl(`
md:flex 
flex-col 
gap-[16px]
justify-around
mx-auto
max-w-[340px]
hidden
`);
export { SectionTwo };
