import React, { useReducer } from "react";
import { Ntext, ReadMore } from "components";
import { StaticImage } from "gatsby-plugin-image";
import Minus from "jpegs/cart/minus.svg";
import Add from "jpegs/cart/add.svg";

const CartIem = ({ counter, dispatcher }) => {
  return (
    <div className="bg-n-grey6 rounded-lg px-5 py-6 mt-5">
      <div className="flex md:flex-row flex-col justify-between">
        <div className="md:max-w-[250px] flex flex-row gap-6">
          <div>
            <StaticImage height={120} width={63} src="../../assets/images/jpegs/cart/max.png" alt="Nomba Max" />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <Ntext variant="text5" color="n-light">
                Nomba Max
              </Ntext>
            </div>
            <div>
              <ReadMore
                color="primary-100"
                className=""
                weight={500}
                defaultStyle={false}
                variant="text3"
                href={{ url: "/max" }}
                text="Product info"
              />
            </div>
            <div>
              <Ntext variant="p24" color="n-light" className="!font-[700]">
                ₦ 25,000
              </Ntext>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between items-end">
          <div className="text-white font-[400] text-[16px] underline leading-8 cursor-pointer">Remove</div>
          <div className="text-white flex items-center gap-5">
            <Minus
              onClick={() => dispatcher({ type: "decrement" })}
              className={counter.count === 1 ? " opacity-[0.5]" : ""}
            />
            <div>
              <Ntext variant="p24" color="n-light" className="!font-[700]">
                {counter.count}
              </Ntext>
            </div>
            <Add onClick={() => dispatcher({ type: "increment" })} />
          </div>
        </div>
      </div>
    </div>
  );
};
export { CartIem };
