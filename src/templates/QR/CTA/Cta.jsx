import { Button, Ntext } from "components";
import React from "react";

const Cta = ({ mainText, subText, whiteBg = false }) => {
  return (
    <div className="grid1 Qr-section2-box gap3">
      <div className="stack gap2 padding-top">
        {whiteBg ? (
          <Ntext variant="h4" color="primary-100" className="text-left" data-animation="ltr">
            <div style={{ color: "#997A00" }} className="Qr-section-text-1 hide-mobile-flex">
              {" "}
              MAKING PAYMENT
            </div>
          </Ntext>
        ) : (
          <Ntext variant="h4" color="primary-100" className="text-left" data-animation="ltr">
            <div className="Qr-section-text-1 hide-mobile-flex"> MAKING PAYMENT</div>
          </Ntext>
        )}

        {whiteBg ? (
          <Ntext variant="h4" color="primary-100" className="text-left" data-animation="ltr">
            <div style={{ color: "black" }} className="Qr-section-text-2">
              {mainText}
            </div>
          </Ntext>
        ) : (
          <Ntext variant="h4" color="primary-100" className="text-left" data-animation="ltr">
            <div className="Qr-section-text-2">{mainText}</div>
          </Ntext>
        )}

        {whiteBg ? (
          <Ntext variant="text4lite" color="primary-100" className="text-left" data-animation="ltr">
            <div style={{ color: "#4D4D4D" }} className="grey-text">
              {subText}
            </div>
          </Ntext>
        ) : (
          <Ntext variant="text4lite" color="primary-100" className="text-left" data-animation="ltr">
            <div className="grey-text">{subText}</div>
          </Ntext>
        )}

        <Button
          className="!font-medium !text-[16px] !min-w-[100px] !w-[300px] !text-center Qr-section-btn"
          //   onClick={onOpen}
          text="Open  account for free"
          withArrow={true}
        />
      </div>
      <div className="center">
        <div className={whiteBg ? "cool-box-white" : "cool-box"}></div>
      </div>
    </div>
  );
};

export default Cta;
