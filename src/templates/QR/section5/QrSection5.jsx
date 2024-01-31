import { Br, Container, Ntext } from "components";
import React from "react";
import SlideImages from "../slideImages/SlideImages";
import Quotes from "../section3/section3";
import { StaticImage } from "gatsby-plugin-image";
import Video from "../video/video";

const QrSection5 = () => {
  return (
    <div className="QrSection5Container padding-buttom padding-top stack gap5">
      <Container>
        <div className="stack gap5">
          <Video />
        </div>
      </Container>

      <div className="stack gap5">
        <Quotes
          mainText={
            "Using QR codes for our pop-up galleries lets us sell at any location, anytime. Buyers scan the code for a specific piece of art to see the price and purchase from their phones."
          }
          name={"Anyadike Godwin"}
        />
        <Container>
          <SlideImages />
        </Container>
      </div>
      <Container>
        <div className="stack gap3 ">
          <div className="stack gap1">
            <Ntext variant="h4" color="primary-100" className="text-left" data-animation="ltr">
              <div className="QrSection5-text1-a ">NOMBA QR PAYMENTS</div>
            </Ntext>

            <Ntext variant="p" color="primary-100" className="text-left" data-animation="ltr">
              <div className="QrSection5-text2-a">
                Why you should choose <Br on="desktop" /> Nomba QR payments
              </div>
            </Ntext>
          </div>
          <div className="grid1 QrSectionCardsContainer gap1">
            <div className="QrSectionCards stack gap-1">
              <div>
                <StaticImage
                  alt="Iphone with hand"
                  src="../../../assets/images/svgs/icons/1.png"
                  className=""
                  width={100}
                  height={100}
                />
              </div>
              <Ntext variant="h4" color="primary-100" className="text-left" data-animation="ltr">
                <div className="QrSection5-text1">A simpler payment lifestyle</div>
              </Ntext>
              <Ntext variant="h4" color="primary-100" className="text-left" data-animation="ltr">
                <div className="QrSection5-text2">
                  Unlike credit and debit cards, which require contract fees and terms and conditions, Nomba QR solution
                  is relatively easier to set up and transact with.
                </div>
              </Ntext>
            </div>
            <div className="QrSectionCards stack gap-1">
              <div>
                <StaticImage
                  alt="Iphone with hand"
                  src="../../../assets/images/svgs/icons/2.png"
                  className=""
                  width={100}
                  height={100}
                />
              </div>
              <Ntext variant="h4" color="primary-100" className="text-left" data-animation="ltr">
                <div className="QrSection5-text1">Less talk, pay on the go</div>
              </Ntext>
              <Ntext variant="h4" color="primary-100" className="text-left" data-animation="ltr">
                <div className="QrSection5-text2">
                  Nomba QR payments is faster and cuts down the usual steps in payment for all-around convenience.
                </div>
              </Ntext>
            </div>
            <div className="QrSectionCards stack gap-1">
              <div>
                <StaticImage
                  alt="Iphone with hand"
                  src="../../../assets/images/svgs/icons/3.png"
                  className=""
                  width={100}
                  height={100}
                />
              </div>
              <Ntext variant="h4" color="primary-100" className="text-left" data-animation="ltr">
                <div className="QrSection5-text1">Easily accessible in many ways</div>
              </Ntext>
              <Ntext variant="h4" color="primary-100" className="text-left" data-animation="ltr">
                <div className="QrSection5-text2">
                  Nomba QR can be used by anyone, in different forms — virtually via your Nomba App or physically via
                  sticker, card, or dangler.
                </div>
              </Ntext>
            </div>
            <div className="QrSectionCards stack gap-1">
              <div>
                <StaticImage
                  alt="Iphone with hand"
                  src="../../../assets/images/svgs/icons/4.png"
                  className=""
                  width={100}
                  height={100}
                />
              </div>
              <Ntext variant="h4" color="primary-100" className="text-left" data-animation="ltr">
                <div className="QrSection5-text1">Enhanced Security</div>
              </Ntext>
              <Ntext variant="h4" color="primary-100" className="text-left" data-animation="ltr">
                <div className="QrSection5-text2">
                  Nomba QR offers a secure and centralized way to make and take payments as all payment information is
                  encrypted, and no need for customer’s information to complete transactions.
                </div>
              </Ntext>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default QrSection5;
