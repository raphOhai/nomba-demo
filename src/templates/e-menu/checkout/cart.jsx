import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
} from "@chakra-ui/react";

import { Checkout, CustomerInfo } from "./index";
import { NLink, Ntext } from "components";
import CheckboxTrue from "jpegs/cart/checkbox-true.svg";
import CheckboxFalse from "jpegs/cart/checkbox-false.svg";
import { Submit } from "./submit";
import { AppContext } from "states/context";

const Cart = ({ finalFocusRef }) => {
  const [isTermsAccepted, setTermsAccepted] = useState(false);
  const {
    isOpen,
    closeAndReset,
    hasError,
    hasEmailError,
    hasMobileError,

    info,
    setInfo,

    tabIndex,
    setTabIndex,
    handleTabsChange,
  } = useContext(AppContext);

  // set error states for user input

  return (
    <Drawer
      colorScheme="yellow"
      isOpen={isOpen}
      placement="right"
      onClose={closeAndReset}
      finalFocusRef={finalFocusRef}
      size="lg"
    >
      <DrawerOverlay />
      <DrawerContent bg="#121212" color="white" px="0" data-lenis-prevent>
        <DrawerCloseButton color="white" colorScheme="yellow" />
        <DrawerHeader>
          <Ntext variant="text3" color="n-light">
            Get Started With Menu
          </Ntext>
        </DrawerHeader>

        <DrawerBody px="0">
          <Tabs index={tabIndex} isFitted colorScheme="yellow" onChange={handleTabsChange}>
            <TabList borderBottom="1px" borderBottomColor="#383838" borderTop="1px solid #383838">
              <Tab py="6" _selected={tabStyle} color="#717171">
                Add Information
              </Tab>
              <Tab isDisabled={hasError} _selected={tabStyle} color="#717171">
                Summary
              </Tab>
            </TabList>

            <TabPanels px={[2, 4, 4, 4]}>
              <TabPanel>
                <CustomerInfo state={info} setState={setInfo} />
              </TabPanel>
              <TabPanel>
                <Checkout userInfo={info} setTabIndex={setTabIndex} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </DrawerBody>

        {tabIndex == 0 ? (
          <div className="flex flex-row justify-between py-6 px-6 border-t border-t-n-grey6">
            <div>
              <button
                className="py-4 text-white text-[16px] font-medium !outline-[3px] !outline-white"
                onClick={closeAndReset}
              >
                Cancel
              </button>
            </div>
            <Button
              isDisabled={hasError || hasEmailError || hasMobileError}
              fontWeight={500}
              fontSize={16}
              colorScheme="yellow"
              onClick={() => setTabIndex(tabIndex + 1)}
            >
              Continue
            </Button>
          </div>
        ) : (
          <div className="">
            <div className="px-[25px] flex gap-5 font-normal text-sm text-n-grey2 mt-20 ">
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
            <div className=" border-t border-t-n-grey6 mt-[20px]"></div>
            <div className="px-[25px]">
              <div className="mt-5 py-7 flex flex-col !text-[16px] gap-5">
                <div className="flex justify-between">
                  <span className="text-n-grey2">Services fee</span>
                  <span>₦ 0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-n-grey2">Total Price</span>
                  <Ntext variant="p24" color="n-light" className="!font-[700]">
                    ₦ 0.00
                  </Ntext>
                </div>
              </div>

              <Submit isTermsAccepted={isTermsAccepted} data={{ ...info }} />
            </div>
          </div>
        )}
      </DrawerContent>
    </Drawer>
  );
};

const tabStyle = { color: "white", borderBottom: "2px", borderColor: "#FFDD55" };
Cart.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  finalFocusRef: PropTypes.element,
};

export { Cart };
