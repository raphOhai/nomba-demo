import React, { useEffect } from "react";
import { Container, Ntext } from "components";

const CommonQuestions = ({ questions }) => {
  useEffect(() => {
    const accordionItems = document.querySelectorAll(".c_wrapItem");
    let activeAccordionItem = null;

    function toggleAccordionItem(item) {
      if (activeAccordionItem === item) {
        item.classList.remove("active");
        activeAccordionItem = null;
      } else {
        if (activeAccordionItem) {
          activeAccordionItem.classList.remove("active");
        }
        item.classList.add("active");
        activeAccordionItem = item;
      }
    }

    accordionItems.forEach(item => {
      const accordionHeader = item.querySelector(".header");
      accordionHeader.addEventListener("click", () => {
        toggleAccordionItem(item.querySelector(".c_wrapItem_acc"));
      });
    });
  });
  return (
    <section className="bg-black" id="faq">
      <Container>
        <div className="c_cmQuestions ">
          <div className="c_cmQuestions_txt">
            <Ntext variant="h2" color="primary-100" data-animation="h">
              FAQ
            </Ntext>
          </div>
          <div className="c_cmQuestions_acc">
            {questions.map(item => (
              <div key={item.id} className="c_wrapItem">
                <div className="c_wrapItem_head header">
                  <h3 data-animation="h">{item.header}</h3>
                  <div className="c_wrapItem_head_toggleView content_btn">
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className={`c_wrapItem_acc`}>
                  <p>{item.content}</p>
                </div>
                <div className="bottom_line"></div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export { CommonQuestions };