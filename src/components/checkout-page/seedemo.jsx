import React, { useState, useContext, useEffect } from "react";
import "./css/index.scss";
import PropTypes from "prop-types";
import ctl from "@netlify/classnames-template-literals";
import { nigeriaStates } from "./states";
import Caret from "svgs/chevron-down.svg";
import { AppContext } from "states/context";

import { Ntext } from "components/ntext";

const Seedomo = ({ state, setState, deliveryRequired = true }) => {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

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
      <div className="flex flex-row gap-6">
        <div className="w-full stack gap-4">
          <div className="notice-box">
            <Ntext variant="p14" color="n-light">
              Use our pre-set amount to test the checkout. Please note that this is a real transaction and that your
              account will be debited.
            </Ntext>
          </div>
          <div id="mail-box" className="stack input-box">
            <div className={labelClass}>
              <label htmlFor="emailAddress">Enter email to get your receipt</label>
            </div>
            <input
              name="emailAddress"
              type="email"
              id="emailAddress"
              className=""
              onBlur={e => validateEmail(e)}
              placeholder="youremail@mail.com"
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

Seedomo.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  finalFocusRef: PropTypes.element,
};

export { Seedomo };
