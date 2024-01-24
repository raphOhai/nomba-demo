import React from "react";
import "../styles/index.scss";
import { Br, Button, Container, Ntext, ReadMore } from "components";
import { StaticImage } from "gatsby-plugin-image";
import yoo from "../../../assets/images/illustrations/girl.png";

const HeroSectionHomePage = () => {
  return (
    <div className="home-hero-section relative">
      <Container>
        <div className=" grid1 ">
          <div className="stack gap2 padding-top padding-buttom ">
            <div className="stack gap2">
              <div className="stack gap1">
                <div className="stack gap2">
                  <Ntext
                    variant="h1"
                    color="primary-100"
                    className="text-center md:text-left md:leading-[20px]"
                    // data-animation="ltr"
                  >
                    <div className="black-text home-hero-text">Take Payments. Handle Business. Thrive Today.</div>
                  </Ntext>
                </div>

                <Ntext
                  variant="text4lite"
                  color="primary-100"
                  className="text-center md:text-left"
                  data-animation="ltr"
                >
                  <div className="black-text">
                    Nomba makes money matters and running businesses easier. With <Br on="desktop" /> our POS terminals
                    to receive payment and business tools to manage better.
                  </div>
                </Ntext>
              </div>

              <div className=" hero-btn gap flex elevate2">
                <div className="hero-btn-grid">
                  <div>
                    <Button
                      // onClick={onOpen}
                      className="!font-medium  !text-center responsive-btn  black-button "
                      text="Get Started Now"
                      withArrow={true}
                    />
                  </div>
                  <div>
                    <ReadMore
                      className="!font-medium !text-center contact-btn-white    "
                      // color="n-grey6"
                      variant="text3"
                      href={{ url: "tel:+23401888899" }}
                      text="Contact sales"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <StaticImage
              alt="Iphone with hand"
              src="../../../assets/images/illustrations/girl3.png"
              className="girl-pos"
              // width={230}
            />
          </div>

          <div className="hero-vector">
            <svg xmlns="http://www.w3.org/2000/svg" width="567" height="1197" viewBox="0 0 567 1197" fill="none">
              <g opacity="0.64" filter="url(#filter0_f_10658_13975)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M520.376 278.703C578.647 257.974 634.415 177.143 688.982 206.252C745.999 236.668 711.186 332.133 733.908 392.613C748.169 430.573 796.565 454.29 797.396 494.831C798.277 537.754 734.338 564.958 738.319 607.705C743.72 665.681 822.904 700.662 821.992 758.881C821.208 808.989 767.59 841.562 734.074 878.83C695.157 922.103 666.05 1001.02 607.989 996.84C540.548 991.986 512.466 904.254 462.021 859.246C433.278 833.601 402.1 812.777 373.178 787.334C346.353 763.737 322.284 738.862 296.759 713.865C264.145 681.926 192.299 663.263 200.674 618.397C210.696 564.703 327.704 578.136 332.254 523.705C338.719 446.358 202.883 393.739 225.653 319.535C242.703 263.972 340.302 317.78 397.891 309.801C440.078 303.957 480.251 292.977 520.376 278.703Z"
                  fill="url(#paint0_linear_10658_13975)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_10658_13975"
                  x="0"
                  y="0"
                  width="1022"
                  height="1197"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_10658_13975" />
                </filter>
                <linearGradient
                  id="paint0_linear_10658_13975"
                  x1="-84.1189"
                  y1="609.981"
                  x2="666.726"
                  y2="1195.96"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#172368" />
                  <stop offset="1" stop-color="#CD6549" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSectionHomePage;
