import React from "react";
import ctl from "@netlify/classnames-template-literals";
import { Container, Ntext } from "components";
import constants from "config/constants.json";

const GetMax = ({ title, description }) => {
  const { SIGNUP_URL } = constants;

  return (
    <section className="">
      <Container>
        <div className={heroTextHeaders}>
          <div className="flex flex-col gap-4">
            <Ntext variant="text8" color="primary-100" className="md:basis-3/5 " data-animation="h">
              {title}
            </Ntext>
            <div className="max-w-[503.85px]">
              <Ntext variant="text3" color="n-grey1" data-animation="h">
                {description}
              </Ntext>
            </div>
          </div>

          <div className={subTextStyle}>
            <div className="btn">
              <a href={SIGNUP_URL}>
                <button className="animate-button-reverse">
                  Get your terminal
                  <svg
                    className="btn_svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M8.5 12H14.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12.5 9L15.5 12L12.5 15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </a>
            </div>
            <div className="btn">
              <a href="tel:+23401888899">
                <button className="animate-button">
                  Contact sales
                  <svg
                    className="btn_svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M8.5 12H14.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12.5 9L15.5 12L12.5 15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

const heroTextHeaders = ctl(`
md:flex
md:flex-row
md:items-start
justify-between
mb-10
gap-5
`);

const subTextStyle = ctl(`
mb-8
mt-6
md:mt-3
basis-2/5
flex 
flex-row
gap-3
`);

export { GetMax };
