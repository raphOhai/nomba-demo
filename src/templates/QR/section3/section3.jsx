import { Container, Ntext } from "components";
import React from "react";

const Quotes = ({ mainText, name, brand }) => {
  return (
    <div className="QrSection2-main padding-top padding-buttom">
      <Container>
        <div className="quote-container gap-1">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M24 23.0661H14.428V13.4942C14.428 9.41634 15.2374 6.14786 16.856 3.68872C18.4747 1.22957 20.856 0 24 0V4.48249C20.8872 4.48249 19.3307 7.48638 19.3307 13.4942H24V23.0661ZM9.57198 23.0661H0V13.4942C0 9.41634 0.809338 6.14786 2.42802 3.68872C4.04669 1.22957 6.42802 0 9.57198 0V4.48249C6.42802 4.48249 4.85603 7.48638 4.85603 13.4942H9.57198V23.0661Z"
                fill="#FFD633"
              />
            </svg>
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
