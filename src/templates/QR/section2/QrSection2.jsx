import { Button, Container, Ntext } from "components";

import React from "react";

const QrSection2 = () => {
  return (
    <div className="Qr-Section padding-top padding-buttom">
      <Container>
        <div className="grid1 Qr-section2-box">
          <div className="stack gap2 padding-top">
            <Ntext variant="h4" color="primary-100" className="text-left" data-animation="ltr">
              <div className="Qr-section-text-1"> MAKING PAYMENT</div>
            </Ntext>

            <Ntext variant="h4" color="primary-100" className="text-left" data-animation="ltr">
              <div className="Qr-section-text-2">Pay securely through the Nomba QR</div>
            </Ntext>

            <Ntext variant="text4lite" color="primary-100" className="text-left" data-animation="ltr">
              <div className="grey-text">
                Using the Nomba App or the QR card(s) provides you, our customers, with advanced protection during each
                and every transactions.
              </div>
            </Ntext>

            <Button
              className="!font-medium !text-[16px] !min-w-[100px] !w-[300px] !text-center Qr-section-btn"
              //   onClick={onOpen}
              text="Open  account for free"
              withArrow={true}
            />
          </div>
          <div className="center">
            <div className="cool-box"></div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default QrSection2;
