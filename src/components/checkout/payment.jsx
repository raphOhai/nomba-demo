import React, { useContext, useState } from "react";
import { Button } from "components";
import CheckboxTrue from "jpegs/cart/checkbox-true.svg";
import CheckboxFalse from "jpegs/cart/checkbox-false.svg";
import Info from "svgs/info-c-1.svg";
import { formatMoney, formatMoneyToInput } from "utils/helpers";
import { useToast } from "@chakra-ui/react";
import ctl from "@netlify/classnames-template-literals";
import { AppContext } from "states/context";

const CopyButton = ({ copyText }) => {
  const toast = useToast();
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(copyText);
        toast({
          position: "top-right",
          title: "Copied!",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      }}
      className="text-n-dark bg-n-grey2 rounded-lg text-[10px] ml-2 px-2 py-1"
    >
      copy
    </button>
  );
};

const Payment = ({
  itemCount,
  item,
  state,
  setShowPayment,
  onSubmitWithPayment,
  showSuccess,
  isLoading,
  setTabIndex,
}) => {
  const [isTransferSuccessFul, setTransferSuccessful] = useState(false);
  const [accountName, setAccountName] = useState("");
  const { onClose, resetInfo } = useContext(AppContext);

  const bankInfo = {
    name: "NOMBA/NOMBA",
    account: "8290455332",
    bank: "STERLING BANK",
  };

  const closeModal = e => {
    if (!e.target.classList.contains("waitlist_success")) {
      resetInfo();
      setShowPayment(false);
      setTabIndex(0);
      onClose();
    }
  };

  return (
    <>
      {showSuccess ? (
        <>
          {" "}
          <div
            onClick={closeModal}
            onKeyDown={closeModal}
            className={`confirm_bd animate__animated animate__bounceIn ${showSuccess && "shew"}`}
          >
            <div className="waitlist_success">
              <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="70.5" cy="69.5" r="32.5" fill="white" />
                <path
                  d="M69.9998 36.6667C51.6332 36.6667 36.6665 51.6334 36.6665 70.0001C36.6665 88.3667 51.6332 103.333 69.9998 103.333C88.3665 103.333 103.333 88.3667 103.333 70.0001C103.333 51.6334 88.3665 36.6667 69.9998 36.6667ZM85.9332 62.3334L67.0332 81.2334C66.5665 81.7001 65.9332 81.9667 65.2665 81.9667C64.5998 81.9667 63.9665 81.7001 63.4998 81.2334L54.0665 71.8001C53.0998 70.8334 53.0998 69.2334 54.0665 68.2667C55.0332 67.3001 56.6332 67.3001 57.5998 68.2667L65.2665 75.9334L82.3998 58.8001C83.3665 57.8334 84.9665 57.8334 85.9332 58.8001C86.8998 59.7667 86.8998 61.3334 85.9332 62.3334Z"
                  fill="#11BB00"
                />
                <circle cx="70" cy="70" r="52.5" stroke="#053400" />
                <circle cx="70" cy="70" r="69.5" stroke="url(#paint0_linear_296_528)" />
                <defs>
                  <linearGradient
                    id="paint0_linear_296_528"
                    x1="70"
                    y1="0"
                    x2="70"
                    y2="140"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#074501" />
                    <stop offset="1" stopColor="#032200" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="waitlist_success_txt text-center">
                <h1 className="text-balance">
                  Thank you for your purchase! <br /> Your order was received, once payment is confirmed, expect
                  delivery in 2 - 5 business days.
                </h1>

                <p>Our sales team will contact you soon</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="mt-5 px-5 py-6">
          <div className="bg-n-yellow2 px-5 py-6 mt-4 rounded-lg">
            <div className="flex md:flex-row flex-col justify-between">
              <div className="flex flex-row gap-6">
                <div className="flex justify-center items-center">
                  <Info />
                </div>
                <p className="text-n-dark">
                  <span className="font-bold">IMPORTANT:</span> Make sure you use your{" "}
                  <span className="font-bold">“phone number”</span> as the transfer narrative when making this transfer.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-5 items-center">
            <div className="text-sm font-medium text-m-light">BANK TRANSFER</div>
          </div>
          <div className="bg-n-grey6 px-5 rounded-lg py-6 mt-4 ">
            <div className="flex justify-between flex-wrap">
              <div className="flex flex-col gap-2 basis-1/2 mb-5">
                <div className="text-n-grey3 text-[12px]">Account number</div>
                <div className="flex items-center">
                  <p className="text-n-light text-[20px] font-bold">{bankInfo.account}</p>
                  <CopyButton copyText={bankInfo.account} />
                </div>
              </div>
              <div className="flex flex-col gap-2 basis-1/2 mb-5">
                <div className="text-n-grey3 text-[12px] lg:text-right">Bank name</div>
                <p className="text-n-light text-[20px] lg:text-right font-bold">{bankInfo.bank}</p>
              </div>
            </div>
            <div className="flex justify-between flex-wrap">
              <div className="flex flex-col gap-2 basis-1/2 mb-5">
                <div className="text-n-grey3 text-[12px]">Account name</div>
                <p className="text-n-light text-[20px] font-bold">{bankInfo.name}</p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex flex-col gap-2">
              <div className="text-n-grey3 text-[16px]">You are to transfer</div>
              <div className="flex items-center">
                <p className="text-n-light text-[32px] font-bold">
                  {formatMoney(itemCount * Number(formatMoneyToInput(item.price)))}
                </p>
                <CopyButton copyText={itemCount * Number(formatMoneyToInput(item.price))} />
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-6 mt-5">
            <div className="w-full">
              <div className="text-[12px] pb-[5px]">
                <label htmlFor="senderAccountFullName">Sender account full name </label>
              </div>
              <div>
                <input
                  name="senderAccountFullName "
                  type="text"
                  id="deliveryAddress"
                  className={inputClass}
                  placeholder=""
                  onChange={e => setAccountName(e.target.value)}
                  role="textbox"
                  required
                />
              </div>
            </div>
          </div>

          <div className="flex gap-5 font-normal text-sm text-n-grey2 mb-10 mt-5">
            <div>
              {isTransferSuccessFul ? (
                <CheckboxTrue className="cursor-pointer" onClick={() => setTransferSuccessful(!isTransferSuccessFul)} />
              ) : (
                <CheckboxFalse
                  className="cursor-pointer"
                  onClick={() => setTransferSuccessful(!isTransferSuccessFul)}
                />
              )}
            </div>
            <span>I have made a successful transfer to the account provided.</span>
          </div>

          <div className="flex flex-row justify-between py-6 px-6 border-t border-t-n-grey6">
            <div>
              <button
                className="py-4 text-white text-[16px] font-medium !outline-[3px] !outline-white"
                onClick={() => {
                  setShowPayment(false);
                }}
              >
                Back
              </button>
            </div>
            <Button
              disabled={!isTransferSuccessFul || !accountName}
              fontWeight={500}
              fontSize={16}
              colorScheme="yellow"
              className="min-w-[50%]"
              isLoading={isLoading}
              onClick={() => {
                const info = {
                  ...state,
                  quantity: itemCount,
                  type: "Nomba Mini",
                  paymentStatus: "Paid",
                  senderFullName: accountName,
                  timeCreated: new Date(),
                };
                onSubmitWithPayment(info);
              }}
            >
              Submit
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export { Payment };

const inputClass = ctl(`
text-white 
bg-primary 
p-[15px] 
rounded-md 
!outline 
outline-n-grey6 

focus:outline-n-grey2 
transition-all 
w-full 
text-[16px] 
leading-6
`);
