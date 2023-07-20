import React, { useState, useReducer, useEffect } from "react";
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
import { reducer } from "./reducer";
import { Ntext } from "components/ntext";
import { CartIem, Checkout, CustomerInfo } from "./index";

const Cart = ({ isOpen, onClose, finalFocusRef }) => {
  const initialItems = { count: 1 };

  const [counter, dispatch] = useReducer(reducer, initialItems);
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    deliveryAddress: "",
    lga: "",
    state: "",
  });
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabsChange = index => {
    setTabIndex(index);
  };

  // set error states for user input
  const [hasError, setHasError] = useState(true);
  useEffect(() => {
    setHasError(
      Object.keys(info)
        .map(r => !!info[r].length)
        .includes(false)
    );
  }, [info]);

  return (
    <Drawer
      colorScheme="yellow"
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={finalFocusRef}
      size="lg"
    >
      <DrawerOverlay />
      <DrawerContent bg="#121212" color="white" px="0">
        <DrawerCloseButton color="white" colorScheme="yellow" />
        <DrawerHeader>
          <Ntext variant="text3" color="n-light">
            Terminal purchase
          </Ntext>
        </DrawerHeader>

        <DrawerBody px="0">
          <Tabs index={tabIndex} isFitted colorScheme="yellow" onChange={handleTabsChange}>
            <TabList borderBottom="1px" borderBottomColor="#383838" borderTop="1px solid #383838">
              <Tab _selected={tabStyle} color="#717171">
                Product Details
              </Tab>
              <Tab py="6" _selected={tabStyle} color="#717171">
                Add Information
              </Tab>
              <Tab isDisabled={hasError} _selected={tabStyle} color="#717171">
                Payment
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <CartIem counter={counter} dispatcher={dispatch} />
              </TabPanel>
              <TabPanel>
                <CustomerInfo state={info} setState={setInfo} />
              </TabPanel>
              <TabPanel>
                <Checkout itemCount={counter.count} userInfo={info} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </DrawerBody>

        {tabIndex < 2 && (
          <div className="flex flex-row justify-between py-6 px-6 border-t border-t-n-grey6">
            <div>
              <button
                className="py-4 text-white text-[16px] font-medium !outline-[3px] !outline-white"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
            <Button
              isDisabled={tabIndex === 0 ? false : hasError}
              fontWeight={500}
              fontSize={16}
              colorScheme="yellow"
              onClick={() => setTabIndex(tabIndex + 1)}
            >
              Continue to payment
            </Button>
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
