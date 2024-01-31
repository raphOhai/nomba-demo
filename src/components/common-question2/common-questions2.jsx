import React, { useEffect } from "react";
import { Container, Ntext } from "components";
import "./style.scss";
const CommonQuestions2 = ({ questions, className }) => {
  useEffect(() => {
    const accordionItems = document.querySelectorAll(".c_wrapItem");
    let activeAccordionItem = null;
    let activeSpan = null;
    function toggleAccordionItem(item, header) {
      const span = header.querySelector(".svgtip");
      if (activeAccordionItem === item) {
        item.classList.remove("active");
        span.classList.remove("rotate-180deg");

        activeSpan = null;
        activeAccordionItem = null;
      } else {
        if (activeAccordionItem) {
          activeAccordionItem.classList.remove("active");
          activeSpan.classList.remove("rotate-180deg");
        }
        item.classList.add("active");
        span.classList.add("rotate-180deg");

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
    <section className="" id="faq">
      <Container>
        <div className={`c_cmQuestions ${className}`}>
          <div className="c_cmQuestions_txt">
            <Ntext variant="h2" color="primary-100" data-animation="h">
              FAQs
            </Ntext>
          </div>
          <div className="c_cmQuestions_acc">
            {questions.map(item => (
              <div key={item.id} className="c_wrapItem">
                <div className="c_wrapItem_head header">
                  <h3 data-animation="h" className="">
                    {item.header}
                  </h3>
                  <div className="c_wrapItem_head_toggleView content_btn remove-border">
                    {/* <span className="horizontal hideMe"></span> */}
                    {/* <span className="vertical hideMe"></span> */}
                    <div className="svgtip rotate-180deg ">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M12 10L8 6L4 10"
                          stroke="white"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className={`c_wrapItem_acc`}>
                  <p>{item.content}</p>
                </div>
                <div className="bottom_line2"></div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export { CommonQuestions2 };
