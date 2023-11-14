import React, { useState } from "react";
import { NLink, Ntext, Button } from "components";
import { StaticImage } from "gatsby-plugin-image";
import CheckboxTrue from "jpegs/cart/checkbox-true.svg";
import CheckboxFalse from "jpegs/cart/checkbox-false.svg";
import { Submit } from "./submit";
import { formatMoney, formatMoneyToInput } from "utils/helpers";
const Checkout = ({ itemCount, userInfo, setTabIndex, item, moveToPayment, isLoading }) => {
  const [isTermsAccepted, setTermsAccepted] = useState(false);

  return (
    <div className="mt-5">
      {/* <div className="flex justify-between">
        <div className="text-sm font-medium text-m-light">PRODUCT DETAILS</div>
        <div
          className="text-white font-[400] text-[16px] underline leading-8 cursor-pointer"
          onClick={() => setTabIndex(0)}
        >
          Update
        </div>
      </div>
      <div className="bg-n-grey6 px-5 py-6 mt-4">
        <div className="flex md:flex-row flex-col justify-between">
          <div className="md:max-w-[250px] flex flex-row gap-6">
            <div>{item.image}</div>
            <div className="flex flex-col justify-end gap-1">
              <div>
                <Ntext variant="text5" color="n-light">
                  {item.name}
                </Ntext>
              </div>
              <div>
                <Ntext variant="p24" color="n-light" className="!font-[700]">
                  {formatMoney(formatMoneyToInput(item.price) * itemCount)}
                </Ntext>
              </div>
              <div className="text-[12px] font-medium leading-5">{itemCount} Item</div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="flex justify-between mt-5 items-center">
        {/* <div className="text-sm font-medium text-m-light">DELIVERY INFORMATION</div> */}
        <div className="text-sm font-medium text-m-light">INFORMATION SUMMARY</div>
        <div
          className="text-white font-[400] text-[16px] underline leading-8 cursor-pointer"
          onClick={() => setTabIndex(1)}
        >
          Update
        </div>
      </div>
      <div className="bg-n-grey6 px-5 rounded-lg py-6 mt-4 ">
        <div className="flex flex-col gap-5 justify-between">
          <div className="flex flex-col gap-2">
            <div className="text-n-grey3 text-[12px]">Contact</div>
            <div>
              {userInfo.firstName} {userInfo.lastName}, {userInfo.phone}, {userInfo.email}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-n-grey3 text-[12px]">Delivery address</div>
            <div>
              {userInfo.deliveryAddress}, {userInfo.lga}, {userInfo.state}
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-5 font-normal text-sm text-n-grey2 mt-20 ">
        <div>
          {isTermsAccepted ? (
            <CheckboxTrue className="cursor-pointer" onClick={() => setTermsAccepted(!isTermsAccepted)} />
          ) : (
            <CheckboxFalse className="cursor-pointer" onClick={() => setTermsAccepted(!isTermsAccepted)} />
          )}
        </div>
        <span>
          I have read and agreed to Nomba’s terminal{" "}
          <NLink to="/terms-of-service" className="underline text-n-light">
            Terms & Conditions
          </NLink>
        </span>
      </div>

      <div className="flex flex-col mt-5 py-7 !text-[16px] gap-5">
        {/* <div className="flex justify-between">
          <span>Price</span>
          <span>{item.price}</span>
        </div>
        <div className="flex justify-between">
          <sapn>Quantity</sapn>
          <sapn>{itemCount}</sapn>
        </div>
        <div className="flex justify-between">
          <span>Shipping fee</span>
          <span>₦ 0</span>
        </div>
        <div className="flex justify-between">
          <span>Total Price</span>
          <Ntext variant="p24" color="n-light" className="!font-[700]">
            {formatMoney(itemCount * Number(formatMoneyToInput(item.price)))}
          </Ntext>
        </div> */}
      </div>

      <Button
        className="!font-medium !text-[16px] !w-full"
        // text="Make payment"
        text="Buy Your POS"
        isLoading={isLoading}
        disabled={!isTermsAccepted}
        onClick={() => moveToPayment()}
      />
    </div>
  );
};

export { Checkout };
