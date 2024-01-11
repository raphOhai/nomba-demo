import React, { useState, useContext, useEffect } from "react";
import "./css/index.scss";
import PropTypes from "prop-types";
import ctl from "@netlify/classnames-template-literals";
import { nigeriaStates } from "./states";
import Caret from "svgs/chevron-down.svg";
import { AppContext } from "states/context";

const CustomerInfo = ({ state, setState, deliveryRequired = true }) => {
  const [lgasInState, setLgasInState] = useState([]);
  // const [hasemailError, setEmailError] = useState(false);

  const { hasError, hasEmailError, setHasEmailError, hasMobileError, setHasMobileError } = useContext(AppContext);

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

  useEffect(() => {
    if (hasEmailError) {
      const mBox = document.getElementById("mail-box");
      console.log(mBox);
      mBox.classList.remove("input-box");
      mBox.classList.add("red-box");
    }

    if (hasMobileError) {
      const fBox = document.getElementById("phone-box");
      fBox.classList.remove("input-box");
      fBox.classList.add("red-box");
    }
  }, [hasEmailError, hasMobileError]);

  return (
    <div className="mt-5 flex-col flex gap-5 ">
      <div className="flex gap1">
        <div className="basis">
          <div className="stack input-box">
            <div className={labelClass}>
              <label htmlFor="firstname">First name</label>
            </div>
            <input
              name="firstname"
              type="text"
              id="firstname"
              className=""
              placeholder="Enter your first name"
              onChange={e => setState({ ...state, firstName: e.target.value })}
              role="textbox"
              required
            />
          </div>
        </div>
        <div className="basis">
          <div className="stack input-box">
            <div className={labelClass}>
              <label htmlFor="lastName">Last name</label>
            </div>
            <input
              name="lastName"
              type="text"
              id="lastName"
              className=""
              placeholder="Enter your last name"
              onChange={e => setState({ ...state, lastName: e.target.value })}
              role="textbox"
              required
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-6">
        <div className="w-full stack gap">
          <div id="mail-box" className="stack input-box">
            <div className={labelClass}>
              <label htmlFor="emailAddress">Email address</label>
            </div>
            <input
              name="emailAddress"
              type="email"
              id="emailAddress"
              className=""
              onBlur={e => validateEmail(e)}
              placeholder="Enter your email address"
              onChange={e => checkEmailValidations(e)}
              role="textbox"
              required
            />
          </div>
          {hasEmailError && <div className=" text-red-300 text-left text-sm">Email is not valid</div>}
        </div>
      </div>
      <div className="flex flex-row gap-6">
        <div className="w-full stack gap">
          <div id="phone-box" className="stack input-box">
            <div className={labelClass}>
              <label htmlFor="phoneNumber">Phone number</label>
            </div>
            <input
              name="phoneNumber"
              type="number"
              value={state.phone}
              id="phoneNumber"
              onBlur={e => validateMobile(e)}
              className=""
              placeholder="0803 000 0000"
              onChange={e => checkMobileValidations(e)}
              role="textbox"
              required
            />
          </div>
          {hasMobileError && <div className=" text-red-300 text-left text-sm">Phone is not valid</div>}
        </div>
      </div>

      <div className="flex flex-row gap-6">
        <div className="basis-1/2">
          <div className="stack input-box">
            <div className={labelClass}>
              <label htmlFor="state">State</label>
            </div>
            <div className="flex gap">
              <select
                name="state"
                className={`${selectClass} select-class`}
                id="state"
                onChange={e => setStateValue(e)}
                role="textbox"
                required
              >
                <option value="" disabled selected placeholder="">
                  Select a state
                </option>
                {nigeriaStates.map(state => (
                  <option value={state.state}>{state.state}</option>
                ))}
              </select>

              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="7" viewBox="0 0 14 7" fill="none">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.872039 0.205291C1.03476 0.0425723 1.29858 0.0425723 1.46129 0.205291L7 5.744L12.5387 0.205291C12.7014 0.0425723 12.9652 0.0425723 13.128 0.205291C13.2907 0.368009 13.2907 0.631828 13.128 0.794546L7.29463 6.62788C7.13191 6.7906 6.86809 6.7906 6.70537 6.62788L0.872039 0.794546C0.70932 0.631828 0.70932 0.368009 0.872039 0.205291Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/2">
          <div className={`stack input-box`}>
            <div className={labelClass}>
              <label htmlFor="lga">Local government</label>
            </div>
            <div className="flex gap">
              <select
                name="state"
                className={`${selectClass} select-class`}
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
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="7" viewBox="0 0 14 7" fill="none">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.872039 0.205291C1.03476 0.0425723 1.29858 0.0425723 1.46129 0.205291L7 5.744L12.5387 0.205291C12.7014 0.0425723 12.9652 0.0425723 13.128 0.205291C13.2907 0.368009 13.2907 0.631828 13.128 0.794546L7.29463 6.62788C7.13191 6.7906 6.86809 6.7906 6.70537 6.62788L0.872039 0.794546C0.70932 0.631828 0.70932 0.368009 0.872039 0.205291Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
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
