import React, { useEffect } from "react";

import { Container, Ntext } from "components";

const CheckoutFAQs = ({ faqData, className }) => {
  useEffect(() => {
    const accordionItems = document.querySelectorAll(".c_wrapItem");
    let activeAccordionItem = null;
    let activeSpan = null;

    const toggleAccordionItem = (item, header) => {
      const span = header.querySelector(".vertical");
      if (activeAccordionItem === item) {
        item.classList.remove("active");
        span.classList.remove("!h-0");

        activeSpan = null;
        activeAccordionItem = null;
      } else {
        if (activeAccordionItem) {
          activeAccordionItem.classList.remove("active");
          activeSpan.classList.remove("!h-0");
        }
        item.classList.add("active");
        span.classList.add("!h-0");

        activeSpan = span;
        activeAccordionItem = item;
      }
    }

    accordionItems.forEach(item => {
      const accordionHeader = item.querySelector(".header");
      accordionHeader.addEventListener("click", () => {
        toggleAccordionItem(item.querySelector(".c_wrapItem_acc"), accordionHeader);
      });
    });
  });

  return (
    <section className="bg-n-grey8" id="faq">
      <Container>
        <div className={`c_cmQuestions ${className}`}>
          <div className="c_cmQuestions_txt">
            <Ntext
              color="primary-100"
              data-animation="h"
              variant="h1">
              FAQs
            </Ntext>
          </div>
          <div className="c_cmQuestions_acc">
            {
              faqData.map(item => (
                <div key={item.id} className="c_wrapItem">
                  <div className="c_wrapItem_head header">
                    <h3 data-animation="h">{item.header}</h3>
                    <div className="c_wrapItem_head_toggleView content_btn">
                      <span className="horizontal"></span>
                      <span className="vertical"></span>
                    </div>
                  </div>
                  <div className={`c_wrapItem_acc`}>
                    <p>{item.content}</p>
                  </div>
                  <div className="bottom_line"></div>
                </div>
              ))
            }
          </div>
        </div>
      </Container>
    </section>
  );
};

export { CheckoutFAQs };
