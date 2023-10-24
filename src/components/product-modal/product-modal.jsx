import React, { useContext, useState } from "react";
import "./index.scss";
import { Ntext, Br, GetTerminal, Button } from "components";
import { AppContext } from "states/context";
import ctl from "@netlify/classnames-template-literals";

function ProductModal({ show = false, setShow, data, ...props }) {
  const { onOpen } = useContext(AppContext);
  const closeModal = e => {
    setShow(!show);
  };

  return (
    <div
      onClick={closeModal}
      onKeyDown={closeModal}
      className={`modal_container  animate__animated animate__bounceIn ${show && "shew"}`}
    >
      <div className="modal_body bg-n-grey6">
        <div className=" w-full flex flex-row !text-right !justify-end">
          <button onClick={closeModal} className="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path
                d="M24.002 8.00012L8.00195 24.0001M8.00195 8.00012L24.002 24.0001"
                stroke="#8C8C8C"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        {data.modalImage}
        <div className="mt-10">
          <Ntext variant="text7" color="primary-100">
            {data.title}
          </Ntext>
        </div>
        <div className="mt-5">
          <Ntext variant="text4lite" color="primary-100">
            {data.subText}
          </Ntext>
        </div>
        <div class="h-1 bg-n-grey5 w-full"></div>
        <div className={heroButtonsContainer}>
          <GetTerminal
            type="animate-button-reverse"
            className={"!font-medium !text-[16px]"}
            text={"Get Started"}
            onClick={onOpen}
          />
          <Button
            variant="blackCta"
            href={{ url: data.link }}
            className="!font-medium !text-[16px] !min-w-[250px] "
            text={data.cta}
            withArrow={false}
          />
        </div>
      </div>
    </div>
  );
}

const heroButtonsContainer = ctl(`
flex
flex-col
md:flex-row
md:items-center
gap-[30px]
mb-5
mt-10
w-full items-stretch 
`);

export { ProductModal };
