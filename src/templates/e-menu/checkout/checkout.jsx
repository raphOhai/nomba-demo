import React from "react";
const Checkout = ({ userInfo, setTabIndex }) => {
  return (
    <div className="mt-5">
      <div className="flex justify-between mt-5 items-center">
        <div className="text-sm font-medium text-m-light">INFORMATION SUMMARY</div>
        <div
          className="text-white font-[400] text-[16px] underline leading-8 cursor-pointer"
          onClick={() => setTabIndex(0)}
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
            <div className="text-n-grey3 text-[12px]">Address</div>
            <div>
              {userInfo.deliveryAddress}, {userInfo.lga}, {userInfo.state}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Checkout };
