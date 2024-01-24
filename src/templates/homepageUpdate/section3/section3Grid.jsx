import { Br, Ntext } from "components";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Seethrough from "./seethrough";

const Section3Grid = () => {
  return (
    <div className="stack gap1">
      <div className="section3-Grid1 gap1 ">
        <div className="grid-card relative">
          <div className="stack gap1">
            <div className="stack gap-1">
              <Ntext variant="h4" color="primary-100" className="text-left">
                <div className="section3-Grid-bold-text">Simplified Digital Menu</div>
              </Ntext>
              <Ntext variant="text4lite" color="primary-100" className="text-left">
                <div className="section3-Grid-small-text">
                  Nomba Menu is a all-in-one digital tool that simplifies sales, <Br on="all" /> orders, and payments
                  for your hospitality business.
                </div>
              </Ntext>
            </div>

            <div className="flex gap-6">
              <div>
                <StaticImage
                  alt="Iphone with hand"
                  src="../../../assets/images/illustrations/phone1.png"
                  className=""
                  // width={230}
                />
              </div>
              <div className="stack gap-8">
                <div>
                  <StaticImage
                    alt="Iphone with hand"
                    src="../../../assets/images/illustrations/frame1.png"
                    className=""
                    // width={230}
                  />
                </div>
                <div>
                  <StaticImage
                    alt="Iphone with hand"
                    src="../../../assets/images/illustrations/frame3.png"
                    // className="responsive"
                    // width={230}
                    // height={300}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="see-through-container">
            <Seethrough />
          </div>
        </div>
        <div className="grid-card">
          <div></div>
        </div>
      </div>

      <div className="grid1 gap1">
        <div className="grid-card"></div>
        <div className="grid-card"></div>
      </div>
    </div>
  );
};

export default Section3Grid;
