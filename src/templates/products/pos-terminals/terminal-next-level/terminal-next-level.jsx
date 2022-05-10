import React from "react";
import { Container, Ntext, ReadMore } from "components";
import { StaticImage } from "gatsby-plugin-image";
import Tick from "assets/images/svgs/tick.svg";
import ctl from "@netlify/classnames-template-literals";
import constants from "config/constants.json";

const TerminalNextLevel = () => {
  const { SIGNUP_URL } = constants;
  return (
    <section
      className="mt-[80px] 
    "
    >
      <Container>
        <div className={gridStyle}>
          <div className="max-w-[520px]">
            <StaticImage
              width={514}
              height={511}
              src="../../../../assets/images/jpegs/A chance to move your business to the next level.jpg"
              alt="A chance to move your business to the next level"
              style={{
                clipPath: "polygon(100% 0, 100% 76%, 74% 100%, 0 100%, 0 0)",
              }}
            />
          </div>
          <div className={textWrapperStyle}>
            <Ntext variant="h3" className="font-extrabold">
              A chance to move your business to the next level
            </Ntext>
            <Ntext variant="p18" className="mt-4">
              Here's what you need to get the new POS terminal
            </Ntext>
            <ul className={listWrapperStyle}>
              <li className="flex mr-3">
                <Tick />

                <Ntext variant="p16" className="ml-2">
                  Your business name
                </Ntext>
              </li>
              <li className={listItemStyle}>
                <Tick />

                <Ntext variant="p16" className="ml-2">
                  Your Nomba business account number
                </Ntext>
              </li>
            </ul>
            <ReadMore
              color="primary"
              text="Create an account"
              href={{ url: SIGNUP_URL }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

const gridStyle = ctl(`
grid 
grid-cols-1 
md:grid-cols-2 
gap-[40px] 
`);
const textWrapperStyle = ctl(`
max-w-[520px] 
self-center 
mt-16 
md:mt-0
`);
const listWrapperStyle = ctl(`
flex 
flex-col 
justify-center  
lg:flex-row 
mt-6 
md:mt-4 
mb-9 
md:mb-6
`);
const listItemStyle = ctl(`
flex 
mt-6 
md:mt-0
`);

export { TerminalNextLevel };
