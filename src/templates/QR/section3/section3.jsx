import { Container, Ntext } from "components";
import React from "react";
import QuoteIcon from "./QuoteIcon";

const Quotes = ({ mainText, name, brand }) => {
  return (
    <div className="QrSection2-main padding-top padding-buttom">
      <Container>
        <div className="quote-container gap-1">
          <div>
            <QuoteIcon />
          </div>
          <div className="stack gap2">
            <Ntext variant="text4lite" color="primary-100" className="text-left" data-animation="ltr">
              <div className="Quote-text1">{mainText}</div>
            </Ntext>

            <Ntext variant="text4lite" color="primary-100" className="text-left" data-animation="ltr">
              <div className="Quote-text2">{name}</div>
            </Ntext>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Quotes;
