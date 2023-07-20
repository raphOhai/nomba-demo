import React, { useReducer } from "react";
import { Ntext, ReadMore } from "components";
import { StaticImage } from "gatsby-plugin-image";

const Checkout = ({ itemCount, userInfo }) => {
  return (
    <div className="mt-5">
      <div className="flex justify-between">
        <div>PRODUCT DETAILS</div>
        <div className="text-white font-[400] text-[16px] underline leading-8 cursor-pointer">Update</div>
      </div>
      <div className="bg-n-grey6 px-5 py-6 mt-4">
        <div className="flex md:flex-row flex-col justify-between">
          <div className="md:max-w-[250px] flex flex-row gap-6">
            <div>
              <StaticImage height={120} width={63} src="../../assets/images/jpegs/cart/max.png" alt="Nomba Max" />
            </div>
            <div className="flex flex-col justify-end gap-3">
              <div>
                <Ntext variant="text5" color="n-light">
                  Nomba Max
                </Ntext>
              </div>
              <div>
                <Ntext variant="p24" color="n-light" className="!font-[700]">
                  ₦ 25,000
                </Ntext>
              </div>
              <div className="text-[12px] font-medium leading-5">{itemCount} Item</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div>PRODUCT DETAILS</div>
        <div className="text-white font-[400] text-[16px] underline leading-8 cursor-pointer">Update</div>
      </div>
      <div className="bg-n-grey6 px-5 py-6 mt-4">
        <div className="flex md:flex-row flex-col justify-between">
          <div className="md:max-w-[250px] flex flex-row gap-6">
            <div>
              <StaticImage height={120} width={63} src="../../assets/images/jpegs/cart/max.png" alt="Nomba Max" />
            </div>
            <div className="flex flex-col justify-end gap-3">
              <div>
                <Ntext variant="text5" color="n-light">
                  Nomba Max
                </Ntext>
              </div>
              <div>
                <Ntext variant="p24" color="n-light" className="!font-[700]">
                  ₦ 25,000
                </Ntext>
              </div>
              <div className="text-[12px] font-medium leading-5">{itemCount} Item</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export { Checkout };
