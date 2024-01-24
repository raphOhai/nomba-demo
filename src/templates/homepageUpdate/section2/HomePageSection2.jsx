import { Br, Container, Ntext } from "components";
import React from "react";
import Ratings from "./star";

import { StaticImage } from "gatsby-plugin-image";

const HomePageSectionn2 = () => {
  return (
    <div className="home-page-section2-root relative">
      <Container>
        <div className="stack gap5 padding-buttom">
          <div className="padding-top stack gap-6  ">
            <Ntext variant="h4" color="primary-100" className="text-center" data-animation="ltr">
              <div className="intro-text">Join 1 million+ people and businesses using the Nomba App</div>
            </Ntext>
            <div className="flex gap-4 center">
              <div className="flex center">
                <div className="flex gap-1 ">
                  <Ratings yellowStar={true} />
                  <Ratings yellowStar={true} />
                  <Ratings yellowStar={true} />
                  <Ratings yellowStar={true} />
                  <Ratings yellowStar={false} />
                </div>
              </div>

              <div>
                <Ntext variant="text4lite" color="primary-100" className="text-center" data-animation="ltr">
                  <div className="grey-text2">3.5 out of 5.0 (based on 10k+ app reviews)</div>
                </Ntext>
              </div>
            </div>
            <div className="flex center">
              <div className="flex gap-4">
                <StaticImage
                  alt="Iphone with hand"
                  src="../../../assets/images/svgs/appStore.svg"
                  className=""
                  // width={230}
                />

                <StaticImage
                  alt="Iphone with hand"
                  src="../../../assets/images/svgs/playStore.svg"
                  className=""
                  // width={230}
                />
              </div>
            </div>
          </div>

          <div className="stack gap2  padding-buttom">
            <div className="flex center ">
              <div className="tusted-line">
                <Ntext variant="h4" color="primary-100" className="text-center" data-animation="ltr">
                  <div className="intro-text">TRUSTED BY</div>
                </Ntext>
              </div>
            </div>

            <div className="flex gap5">
              <div>
                <StaticImage
                  alt="Iphone with hand"
                  src="../../../assets/images/svgs/trustedby/1.svg"
                  className="responsive"
                  // width={120}
                  // height={25}
                />
              </div>

              <div>
                <StaticImage
                  alt="Iphone with hand"
                  src="../../../assets/images/svgs/trustedby/2.svg"
                  className="responsive"
                  // width={200}
                  // height={50}
                />
              </div>
              <div>
                <StaticImage
                  alt="Iphone with hand"
                  src="../../../assets/images/svgs/trustedby/3.png"
                  className="responsive"
                  // width={120}
                  // height={40}
                />
              </div>

              <div>
                <StaticImage
                  alt="Iphone with hand"
                  src="../../../assets/images/svgs/trustedby/4.png"
                  className="responsive"
                  // width={120}
                  // height={40}
                />
              </div>

              <div>
                <StaticImage
                  alt="Iphone with hand"
                  src="../../../assets/images/svgs/trustedby/5.svg"
                  className="responsive"
                  // width={120}
                  // height={40}
                />
              </div>

              <div>
                <StaticImage
                  alt="Iphone with hand"
                  src="../../../assets/images/svgs/trustedby/6.png"
                  className="responsive"
                  // width={120}
                  // height={40}
                />
              </div>

              <div>
                <StaticImage
                  alt="Iphone with hand"
                  src="../../../assets/images/svgs/trustedby/7.svg"
                  className="responsive"
                  // width={120}
                  // height={40}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="stats-block">
          <div className="stack gap">
            <div>
              <Ntext variant="h4" color="primary-100" className="text-center" data-animation="ltr">
                <div className="intro-text ">235k+</div>
              </Ntext>
            </div>
            <div>
              <Ntext variant="p" color="primary-100" className="text-center" data-animation="ltr">
                <div className="grey-text2">
                  Trusted by 235k+ registered <Br on="all" /> merchants and businesses
                </div>
              </Ntext>
            </div>
          </div>
          <div className="stack gap">
            <div>
              <Ntext variant="h4" color="primary-100" className="text-center" data-animation="ltr">
                <div className="intro-text">10B+</div>
              </Ntext>
            </div>
            <div>
              <Ntext variant="p" color="primary-100" className="text-center" data-animation="ltr">
                <div className="grey-text2">
                  More than ten (10) billion <Br on="all" /> transactions processed
                </div>
              </Ntext>
            </div>
          </div>
          <div className="stack gap">
            <div>
              <Ntext variant="h4" color="primary-100" className="text-center" data-animation="ltr">
                <div className="intro-text">150B+</div>
              </Ntext>
            </div>

            <div>
              <Ntext variant="p" color="primary-100" className="text-center" data-animation="ltr">
                <div className="grey-text2">
                  Over one hundred and fifty million <Br on="all" /> naira sales transactions, annually
                </div>
              </Ntext>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePageSectionn2;
