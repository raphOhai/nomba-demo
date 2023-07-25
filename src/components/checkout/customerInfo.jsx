import React, { useEffect, useRef } from "react";
import "./css/index.scss";
import PropTypes from "prop-types";
import ctl from "@netlify/classnames-template-literals";
import { nigeriaStates } from "./states";
import Caret from "svgs/caret-down.svg";

const CustomerInfo = ({ state, setState }) => {
  return (
    <div className="mt-5 flex-col flex gap-5">
      <div className="flex flex-row gap-6">
        <div className="basis-1/2">
          <div className={labelClass}>
            <label htmlFor="firstname">First name</label>
          </div>
          <div>
            <input
              name="firstname"
              type="text"
              id="firstname"
              className={inputClass}
              placeholder=""
              onChange={e => setState({ ...state, firstName: e.target.value })}
              role="textbox"
              required
            />
          </div>
        </div>
        <div className="basis-1/2">
          <div className={labelClass}>
            <label htmlFor="lastName">Last name</label>
          </div>
          <div>
            <input
              name="lastName"
              type="text"
              id="lastName"
              className={inputClass}
              placeholder=""
              onChange={e => setState({ ...state, lastName: e.target.value })}
              role="textbox"
              required
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-6">
        <div className="w-full">
          <div className={labelClass}>
            <label htmlFor="emailAddress">Email address</label>
          </div>
          <div>
            <input
              name="emailAddress"
              type="email"
              id="emailAddress"
              className={inputClass}
              placeholder=""
              onChange={e => setState({ ...state, email: e.target.value })}
              role="textbox"
              required
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-6">
        <div className="w-full">
          <div className={labelClass}>
            <label htmlFor="phoneNumber">Phone number</label>
          </div>
          <div>
            <input
              name="phoneNumber"
              type="tel"
              id="phoneNumber"
              className={inputClass}
              placeholder=""
              onChange={e => setState({ ...state, phone: e.target.value })}
              role="textbox"
              required
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-6">
        <div className="w-full">
          <div className={labelClass}>
            <label htmlFor="deliveryAddress">Delivery address</label>
          </div>
          <div>
            <input
              name="deliveryAddress"
              type="text"
              id="deliveryAddress"
              className={inputClass}
              placeholder=""
              onChange={e => setState({ ...state, deliveryAddress: e.target.value })}
              role="textbox"
              required
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-6">
        <div className="basis-1/2">
          <div className={labelClass}>
            <label htmlFor="lga">Local government</label>
          </div>
          <div>
            <input
              name="lga"
              type="text"
              id="lga"
              className={inputClass}
              placeholder=""
              onChange={e => setState({ ...state, lga: e.target.value })}
              role="textbox"
              required
            />
          </div>
        </div>
        <div className={`${inputClass} flex items-center !py-0 !pl-0`}>
          <select
            name="state"
            className={selectClass}
            id="state"
            onChange={e => setState({ ...state, state: e.target.value })}
            role="textbox"
            required
          >
            <option value="" disabled selected>
              Select a state
            </option>
            {nigeriaStates.map(state => (
              <option value={state}>{state}</option>
            ))}
          </select>
          <Caret />
        </div>
        <div className="basis-1/2">
          <div className={labelClass}>
            <label htmlFor="state">State</label>
          </div>
        </div>
      </div>
    </div>
  );
};

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

const selectClass = ctl(`
text-white 
bg-primary 
p-[15px] 
rounded-md 
outline-none 
h-full
transition-all 
w-full 
text-[16px] 
leading-6
custom-select
`);

const labelClass = ctl(`
text-[12px] pb-[5px]
`);

CustomerInfo.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  finalFocusRef: PropTypes.element,
};

export { CustomerInfo };
