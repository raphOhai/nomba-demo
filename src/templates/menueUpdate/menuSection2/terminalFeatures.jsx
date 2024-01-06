import { Br, Button, Container, Ntext } from "components";
import { StaticImage } from "gatsby-plugin-image";

import React from "react";
import Circle from "../hero/glowSvgs/circle";
import Stick from "../hero/glowSvgs/stick";
import LongStick from "../hero/glowSvgs/longStick";
import BallStick from "../hero/glowSvgs/ballStick";
import BallStick2 from "../hero/glowSvgs/ballStick2";
import InterSectionChecker from "../hero/hooks/observer";
// import yoo from "../../../assets/images/svgs/terminal/pos-feature3.png";

const TerminalFeatures = () => {
  InterSectionChecker("trigger", "box", "right-Box");
  return (
    <>
      <div className="maxWidth elevate2 stack padding-buttom padding-top ">
        <div className="flex center relative">
          {/* <BallStick /> */}
          <div className="rapper">
            <div className="flex center">
              <div className="rotate360">
                <LongStick />
              </div>
            </div>
            <div id="glow1" className=" flex center circle-blink">
              <div className="yellow"></div>
              <div className="yellow2"></div>
            </div>
          </div>
        </div>
        <div className="terminal-features stack box-animation card main__card">
          <div aria-hidden="true">
            {/* <span class=" card__line_left"></span>
            <span class="card__line card__line_right"></span> */}
            <span id="box" class=" card__line card__line_top"></span>
            {/* <span class="card__line card__line_bottom"></span> */}
          </div>
          <div className="tf-grid1 trigger">
            <div className="grey-box grid-item flex center">
              <StaticImage
                alt="Iphone with hand"
                src="../../../assets/images/svgs/terminal/pos.png"
                className="responsive-im im u pos-img-1 SlideUp"
                width={500}
                // height={200}
              />
            </div>
            <div className="text-box ">
              <div className="stack gap">
                <Ntext variant="text6heavy" color="primary-100" className="text-left">
                  <div className="">POS Terminal</div>
                </Ntext>
                <Ntext variant="text4lite" color="primary-100" className="text-left">
                  <div className="grey-text">
                    Waiters have the convenience to effortlessly receive customers' orders, oversee both orders and
                    tables, and also seamlessly process their payment; providing a smooth dining experience for
                    customers.
                  </div>
                </Ntext>
                <Button
                  className="!font-large !text-[16px] !min-w-[100px] !w-[200px] !text-left text-Btn"
                  text="Get Started"
                  WithNomArrow={true}
                />
              </div>
            </div>
          </div>
          <div className="flex center">
            <Stick />
          </div>
          <div className="tf-grid2">
            <div className="text-box grid-item ">
              <div className="stack gap ">
                <Ntext variant="text6heavy" color="primary-100" className="text-left" data-animation="ltr">
                  <div className="">Order Display System</div>
                </Ntext>
                <Ntext variant="text4lite" color="primary-100" className="text-left" data-animation="ltr">
                  <div className="grey-text">
                    Made for kitchen or bar teams, to help easily handle orders from different areas, ensuring a smooth
                    workflow and efficient order management for everyone in the various stations in your business.
                  </div>
                </Ntext>
                <Button
                  className="!font-large !text-[16px] !min-w-[100px] !w-[200px] !text-left text-Btn"
                  text="Get Started"
                  WithNomArrow={true}
                />
              </div>
            </div>
            <div className="grey-box flex center grid-item">
              <StaticImage
                alt="Iphone with hand"
                src="../../../assets/images/svgs/terminal/pos3.png"
                className="responsive-im im SlideUp"
                // width={230}
              />
            </div>
          </div>
          <div className="flex center">
            <Stick />
          </div>
          <div className="tf-grid1">
            <div className="grey-box flex center grid-item">
              <StaticImage
                alt="Iphone with hand"
                src="../../../assets/images/svgs/terminal/pos2.png"
                className="responsive-im im pos-img-2 SlideUp"
                width={240}
                // height={240}
              />
            </div>
            <div className="text-box">
              <div className="stack gap">
                <Ntext variant="text6heavy" color="primary-100" className="text-left" data-animation="ltr">
                  <div className="">Flexible Options for Customers</div>
                </Ntext>
                <Ntext variant="text4lite" color="primary-100" className="text-left" data-animation="ltr">
                  <div className="grey-text">
                    When customers order, they can choose to dine in at the restaurant, pick up their order inside, or
                    have it delivered to their location – enjoying flexible dining choices and delightful experience!
                  </div>
                </Ntext>
                <Button
                  className="!font-large !text-[16px] !min-w-[100px] !w-[200px] !text-left text-Btn"
                  text="Get Started"
                  WithNomArrow={true}
                />
              </div>
            </div>
          </div>
        </div>
        {/* <main class="main page__main">
          <div class="card main__card">
            <div aria-hidden="true">
              <span class="card__line card__line_left"></span>
              <span class="card__line card__line_right"></span>
              <span class="card__line card__line_top"></span>
              <span class="card__line card__line_bottom"></span>
            </div>
          </div>
        </main> */}
        <div className="flex center relative rotate360">
          {/* <BallStick /> */}
          <div className="rapper">
            <div className="flex center">
              <div className="rotate360">
                <LongStick />
              </div>
            </div>
            <div className=" flex center circle-blink">
              <div className="yellow"></div>
              <div className="yellow2"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TerminalFeatures;
