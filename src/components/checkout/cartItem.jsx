import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";

const CartIem = () => {
  return (
    <div className="bg-n-grey9 rounded-lg px-5 py-6">
      <div className="flex md:flex-row flex-col justify-between">
        <div className="md:max-w-[220px] flex flex-row gap-6">
          <div>
            <StaticImage src="../../assets/images/jpegs/cart/max.png" alt="Nomba Max" />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
export { CartIem };
