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

import { Ntext } from "components/ntext";
import { CartIem, Checkout, CustomerInfo } from "./index";

import { AppContext } from "states/context";
import { CartTerminals } from "config/cart";
import { useMixpanel } from "gatsby-plugin-mixpanel";
import { Payment } from "./payment";
import { useEffect } from "react";
import { set } from "react-hook-form";
import SucessScrean from "./sucessScrean";

const Cart = ({ finalFocusRef }) => {
  const {
    isOpen,
    onClose,
    hasError,
    hasEmailError,
    hasMobileError,
    counter,
    info,
    setInfo,
    itemIndex,
    setHasEmailError,
    setHasMobileError,
    closeAndReset,
    tabIndex,
    setTabIndex,
  } = useContext(AppContext);

  const [showPayment, setShowPayment] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [btnState, setBtnState] = useState(true);

  const moveToPayment = () => {
    setShowSuccess(false);
    setShowPayment(true);
  };
  const moveToSuccess = () => {
    setShowSuccess(true);
  };
  const backToSlideHome = val => {
    setTabIndex(val);
    console.log(val);
  };

  const mixpanel = useMixpanel();

  const handleTabsChange = index => {
    setTabIndex(index);
  };

  useEffect(() => {}, []);

  useEffect(() => {
    if (hasEmailError || hasMobileError === true) {
      setBtnState(true);
    } else {
      setBtnState(false);
    }
  }, [hasEmailError, hasMobileError]);

  const onSubmit = () => {
    const infoWithoutPayment = { ...info, quantity: counter.count, type: "Nomba Mini" };
    setIsLoading(true);
    fetch(
      "https://script.google.com/macros/s/AKfycbyTGq_7hiZXf1M86ISh_JkOy4LUX4_DL8xLJE-7w5YzoApp2wI5sDgD5nf4d-3-_EYr0A/exec",
      {
        method: "POST",
        body: JSON.stringify(infoWithoutPayment),
      }
    )
      .then(res => {
        if (res.ok) {
          moveToPayment();
          mixpanel.track("Mini_checkout_Customer_submited_info_without_payment", {
            customerData: JSON.stringify(infoWithoutPayment),
          });
        } else {
        }
      })
      .catch(err => {
        mixpanel.track("Mini_checkout_Error_submiting_customer_info_without_payment", {
          customerData: JSON.stringify(infoWithoutPayment),
        });
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onSubmitWithPayment = info => {
    const customerInfoWithPayment = { ...info };
    setIsLoading(true);
    fetch(
      "https://script.google.com/macros/s/AKfycbwBeFjkXKW8Jd0vHFmivGkmshhhppzT-n0MB2GMKuzA_Tx7xakI8bzi7ko_qYtRTC_o/exec",
      {
        method: "POST",
        body: JSON.stringify(customerInfoWithPayment),
      }
    )
      .then(res => {
        if (res.ok) {
          moveToSuccess();
          mixpanel.track("Mini_checkout_Customer_submits_order_after_payment", {
            customerData: JSON.stringify(customerInfoWithPayment),
          });
        } else {
        }
      })
      .catch(err => {
        mixpanel.track("Mini_checkout_Error_submiting_customer_info_after_payment", {
          customerData: JSON.stringify(customerInfoWithPayment),
        });
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // set error states for user input

  return (
    <Drawer
      colorScheme="yellow"
      isOpen={isOpen}
      placement="right"
      onClose={closeAndReset}
      finalFocusRef={finalFocusRef}
      size="md"
      className="drawer-content"
    >
      <DrawerOverlay />
      <DrawerContent bg="#1A1A1A" color="white" px="0" data-lenis-prevent className="drawer-content">
        {tabIndex === 0 ? <DrawerCloseButton color="white" className="close-btn" /> : ""}

        <DrawerHeader>
          {tabIndex === 0 ? (
            <Ntext variant="text4" color="n-light">
              <div style={{ color: "#B3B3B3" }}>Get started with MENU</div>
            </Ntext>
          ) : (
            ""
          )}
        </DrawerHeader>

        {!showPayment ? (
          <>
            <DrawerBody px="0">
              <Tabs index={tabIndex} isFitted colorScheme="yellow" onChange={handleTabsChange}>
                {tabIndex === 0 ? (
                  <TabList borderBottom="1px" borderBottomColor="#FFCC00">
                    {/* <Tab isDisabled={hasError} _selected={tabStyle} color="#717171">
                    Summary
                  </Tab> */}
                  </TabList>
                ) : (
                  ""
                )}

                <TabPanels px={[2, 4, 4, 4]} className="elevate">
                  {/* <TabPanel>
                    Select the active terminal by index set
                    <CartIem counter={counter} dispatcher={dispatch} item={CartTerminals[itemIndex]} />
                  </TabPanel> */}
                  <TabPanel>
                    <CustomerInfo state={info} setState={setInfo} />
                  </TabPanel>

                  <TabPanel>
                    {/* <Checkout
                      itemCount={counter.count}
                      item={CartTerminals[itemIndex]}
                      userInfo={info}
                      setTabIndex={setTabIndex}
                      moveToPayment={onSubmit}
                      isLoading={isLoading}
                    /> */}
                    <SucessScrean />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </DrawerBody>

            {tabIndex < 1 && (
              <div style={{ borderTop: "1px solid #333333" }} className="flex  flex-row justify-between py-6 px-6 ">
                <div>
                  <button
                    className="py-4 text-white text-[16px] font-medium !outline-[3px] !outline-white btn-outline"
                    onClick={() => {
                      closeAndReset();
                      mixpanel.track("Mini_checkout_Customer_cancels_order_for_mini", {
                        customerData: JSON.stringify(info),
                        terminals: counter.count,
                      });
                    }}
                  >
                    Cancel
                  </button>
                </div>
                <Button
                  disabled={btnState}
                  fontWeight={500}
                  fontSize={16}
                  colorScheme="yellow"
                  size="medium"
                  className="btn-contained"
                  onClick={() => {
                    if (tabIndex === 0) {
                      mixpanel.track("Mini_checkout_Customer_place_their_info", {
                        customerData: JSON.stringify(info),
                        terminals: counter.count,
                      });
                    }
                    if (tabIndex === 1) {
                      mixpanel.track("Mini_checkout_Customer_input_their_info_goes_to_checkout", {
                        customerData: JSON.stringify(info),
                        terminals: counter.count,
                      });
                    }
                    if (!info.phone || !info.email) {
                      return;
                      // setBtnState(true);
                    } else {
                      setTabIndex(tabIndex + 1);
                    }
                  }}
                >
                  Request demo
                </Button>
              </div>
            )}
          </>
        ) : (
          <DrawerBody px="0">
            <Payment
              itemCount={counter.count}
              item={CartTerminals[itemIndex]}
              state={info}
              setState={setInfo}
              setShowPayment={setShowPayment}
              onSubmitWithPayment={onSubmitWithPayment}
              showSuccess={showSuccess}
              isLoading={isLoading}
              setTabIndex={setTabIndex}
            />
          </DrawerBody>
        )}
      </DrawerContent>
    </Drawer>
  );
};

const tabStyle = {
  color: "white",
  borderBottom: "2px",
  borderColor: "#FFDD55",
};
Cart.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  finalFocusRef: PropTypes.element,
};

export { Cart };
