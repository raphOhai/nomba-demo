import { Br, Button, Container, Ntext } from "components";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import yoo from "../../../assets/images/jpegs/chaw.svg";

const PictureCta = () => {
  return (
    <div className="cta-box">
      <div className="grid1 ">
        <div className="flex center">
          <Container>
            <div id="hero-box" className="shift-Top-deskto">
              <div className="stack gap2">
                <div className="stack gap1">
                  <div className="padding-top slideDown group">
                    <Ntext
                      variant="h1"
                      color="primary-100"
                      className=" md:text-left md:leading-[20px]"
                      data-animation="ltr"
                    >
                      <div className="black-Text">
                        5-star experience <Br on="desktop" /> for your customers
                      </div>
                    </Ntext>
                  </div>

                  <div className="slideDown group">
                    <Ntext variant="text4lite" color="primary-100" className=" md:text-left" data-animation="ltr">
                      <div className="grey-text2">
                        Create the ultimate dining experience for your <Br on="all" /> customers by providing them with
                        an accessible menu where <Br on="desktop" /> orders and payments can be made.
                      </div>
                    </Ntext>
                  </div>

                  <div className="flex gap2 slideDown group">
                    <div>
                      <Button
                        className="!font-medium !text-[16px] !min-w-[100px] !w-[200px] !text-center"
                        text="Get Started Now"
                        withArrow={true}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>

        <div className="maxWidth2">
          <div className="stack gap1 relative">
            <div className="div1 large-img-cta1 ">
              <StaticImage
                alt="Iphone with hand"
                src="../../../assets/images/bar.jpg"
                className=" responsive-img large-img-cta"
                // height={600}
                // width={1000}
              />
            </div>
            <div className="img-cta-grid gap1 div2 relative ">
              <div className="large-img-cta2  ">
                <StaticImage
                  alt="Iphone with hand"
                  src="../../../assets/images/jpegs/last-cta-pic2.jpg"
                  className=" responsive-img"
                  height={500}
                />
              </div>
              <div className="large-img-cta3">
                <StaticImage
                  alt="Iphone with hand"
                  src="../../../assets/images/barGirl.png"
                  className=" responsive-img large-img-c"
                  // height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PictureCta;
