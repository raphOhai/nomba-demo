import React, { useContext } from "react";
import { Ntext, ReadMore } from "components";
import Minus from "jpegs/cart/minus.svg";
import Add from "jpegs/cart/add.svg";
import { formatMoney, formatMoneyToInput } from "utils/helpers";
import { AppContext } from "states/context";

const CartIem = ({ counter, dispatcher, item }) => {
  const { onClose } = useContext(AppContext);

  return (
    <div className="bg-n-grey6 rounded-lg px-5 py-6 mt-5">
      <div className="flex md:flex-row flex-col justify-between gap-4 ">
        <div className=" flex flex-row gap-6">
          <div>{item.image}</div>
          <div className="flex flex-col justify-between">
            <div>
              <Ntext variant="text5" color="n-light">
                {item.name}
              </Ntext>
            </div>
            <div>
              <div className="text-[14px] font-normal">{item.info}</div>
            </div>
            <div>
              <Ntext variant="p24" color="n-light" className="!font-[700]">
                {formatMoney(formatMoneyToInput(item.price) * counter.count)}
              </Ntext>
            </div>
          </div>
        </div>
        <div className="flex flex-row md:flex-col justify-between md:items-end">
          <div onClick={onClose} className="text-white font-[400] text-[16px] underline leading-8 cursor-pointer">
            Remove
          </div>
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
