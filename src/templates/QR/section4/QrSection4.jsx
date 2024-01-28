import React from "react";
import Cta from "../CTA/Cta";
import { Container } from "components";

const QrSection4 = () => {
  return (
    <div style={{ backgroundColor: "#fff" }} className="padding-top padding-buttom">
      <Container>
        <div style={{ backgroundColor: "#fff" }} className=" Qr-Section">
          <Cta
            mainText={"Experience faster payment transactions "}
            subText={
              "With Nomba QR, you can easily pay in seconds - simply scan through the Nomba app or the Mini POS."
            }
            whiteBg={true}
          />
        </div>
      </Container>
    </div>
  );
};

export default QrSection4;
