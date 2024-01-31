import React, { useState, useContext, useEffect } from "react";
import "./css/index.scss";
import PropTypes from "prop-types";
import ctl from "@netlify/classnames-template-literals";
import { nigeriaStates } from "./states";
import Caret from "svgs/chevron-down.svg";
import { AppContext } from "states/context";

import { Ntext } from "components/ntext";

const CustomerInfo = ({ state, setState, deliveryRequired = true }) => {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [stateI, setStateI] = React.useState("");
  const [statel, setStatel] = React.useState("");

  const handleClick = () => {
    setOpen(prev => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const handleClick2 = () => {
    setOpen2(prev => !prev);
  };

  const handleClickAway2 = () => {
    setOpen2(false);
  };

  const styles = {
    position: "absolute",
    top: 28,
    right: 0,
    left: 0,
    zIndex: 1,
    border: "1px solid",
    p: 1,
    bgcolor: "background.paper",
  };

  const [lgasInState, setLgasInState] = useState([]);
  // const [hasemailError, setEmailError] = useState(false);

  const { hasError, hasEmailError, setHasEmailError, hasMobileError, setHasMobileError } = useContext(AppContext);
  const setStateValue = e => {
    setState({ ...state, state: e });
    setLgasInState(nigeriaStates.find(s => s.state === e).lga);
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
      mBox.classList.remove("input-box");
      mBox.classList.add("red-box");
    }

    if (hasMobileError) {
      const fBox = document.getElementById("phone-box");
      fBox.classList.remove("input-box");
      fBox.classList.add("red-box");
    }
  }, [hasEmailError, hasMobileError]);
  useEffect(() => {
    document.addEventListener(
      "click",
      e => {
        if (e.target.classList.contains("drop-down-items")) {
          console.log("yes");
        } else {
          console.log("no");
          setOpen(false);
          setOpen2(false);
        }
      },
      false
    );
  }, []);
  return (
    <div className="mt-5 flex-col flex gap-4 ">
      <Ntext variant="text3" color="n-light">
        <div style={{ color: "#FFFFFF" }}>Add your basic information</div>
      </Ntext>
      <div className="flex gap-4">
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
        <div className="w-full stack gap-1">
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
          {hasEmailError && (
            <div style={{ color: "#FF7A66" }} className=" text-red-300 text-left text-sm">
              Email is not valid
            </div>
          )}
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
          {hasMobileError && (
            <div style={{ color: "#FF7A66" }} className=" text-red-300 text-left text-sm">
              Phone is not valid
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-row gap-4">
        <div className="basis-1/2">
          <div className="relative elevate">
            <div className="select-box" onClick={handleClick}>
              <div className="stack input-box">
                <div className={labelClass}>
                  <label htmlFor="state">Select your state</label>
                </div>
                <div className="flex gap">
                  <div>
                    <input
                      name="state"
                      value={stateI}
                      className="pointer noselect disable-focus "
                      placeholder="none"
                      role="textbox"
                      required
                    />
                  </div>

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
            {open ? (
              <div onClick={() => setOpen(false)} className="drop-down-items-container">
                <div className="drop-down-items stack">
                  {nigeriaStates.map(state => (
                    <div
                      onClick={() =>
                        setStateI(state.state) & setOpen(false) & setStateValue(state.state) & setOpen2(true)
                      }
                      value={state.state}
                      className="drop-down-contents custom-scrollbar"
                    >
                      {state.state}
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <div className="basis-1/2">
          <div className="relative elevate">
            <div className="select-box" onClick={handleClick2}>
              <div className="stack input-box">
                <div className={labelClass}>
                  <label htmlFor="state">Select your LGA</label>
                </div>
                <div className="flex gap">
                  <div>
                    <input
                      name="state"
                      value={statel}
                      id="state"
                      className="pointer noselect"
                      placeholder="none"                
                      required
                    />
                  </div>

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
            {open2 ? (
              <div className="d">
                <div className="drop-down-items stack">
                  {lgasInState.map(lga => (
                    <div
                      onClick={() => setStatel(lga) & setOpen2(false) & setState({ ...state, lga: lga })}
                      value={lga}
                      className="drop-down-contents"
                    >
                      {lga}
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
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
