import React, { useState, useContext } from "react";
import "./css/index.scss";
import PropTypes from "prop-types";
import ctl from "@netlify/classnames-template-literals";
import { nigeriaStates } from "./states";
import Caret from "svgs/caret-down.svg";
import { AppContext } from "states/context";

const CustomerInfo = ({ state, setState }) => {
  const [lgasInState, setLgasInState] = useState([]);
  // const [hasemailError, setEmailError] = useState(false);

  const { hasEmailError, setHasEmailError, hasMobileError, setHasMobileError } = useContext(AppContext);

  const setStateValue = e => {
    setState({ ...state, state: e.target.value });

    setLgasInState(nigeriaStates.find(s => s.state === e.target.value).lga);
  };

  const validateEmail = e => {
    setHasEmailError(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value));
  };

  const validateMobile = e => {
    setHasMobileError(!/^0[7-9][0-1]\d{8}$/.test(e.target.value));
  };

  const checkEmailValidations = e => {
    if (hasEmailError) {
      setHasEmailError(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value));
    }
    setState({ ...state, email: e.target.value });
  };

  const checkMobileValidations = e => {
    if (hasMobileError) {
      setHasMobileError(!/^0[7-9][0-1]\d{8}$/.test(e.target.value));
    }
    setState({ ...state, phone: e.target.value.slice(0, 11) });
  };

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
              onBlur={e => validateEmail(e)}
              placeholder=""
              onChange={e => checkEmailValidations(e)}
              role="textbox"
              required
            />
            {hasEmailError && <div className=" text-red-300 text-right text-sm">Email is not valid</div>}
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
              type="number"
              value={state.phone}
              id="phoneNumber"
              onBlur={e => validateMobile(e)}
              className={inputClass}
              placeholder=""
              onChange={e => checkMobileValidations(e)}
              role="textbox"
              required
            />
            {hasMobileError && <div className=" text-red-300 text-right text-sm">Phone is not valid</div>}
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
            <label htmlFor="state">State</label>
          </div>
          <div className={`${inputClass} flex items-center !py-0 !pl-0`}>
            <select
              name="state"
              className={selectClass}
              id="state"
              onChange={e => setStateValue(e)}
              role="textbox"
              required
            >
              <option value="" disabled selected>
                Select a state
              </option>
              {nigeriaStates.map(state => (
                <option value={state.state}>{state.state}</option>
              ))}
            </select>
            <Caret />
          </div>
        </div>
        <div className="basis-1/2">
          <div className={labelClass}>
            <label htmlFor="lga">Local government</label>
          </div>
          <div className={`${inputClass} flex items-center !py-0 !pl-0`}>
            <select
              name="state"
              className={selectClass}
              id="state"
              onChange={e => setState({ ...state, lga: e.target.value })}
              role="textbox"
              required
            >
              <option value="" disabled selected>
                Select LGA
              </option>
              {lgasInState.map(lga => (
                <option value={lga}>{lga}</option>
              ))}
            </select>
            <Caret />
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
