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

const Cart = ({ finalFocusRef }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const { isOpen, onClose, hasError, counter, dispatch, info, setInfo, itemIndex } = useContext(AppContext);
  const handleTabsChange = index => {
    setTabIndex(index);
  };

  // set error states for user input

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
      <DrawerContent bg="#121212" color="white" px="0" data-lenis-prevent>
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
                Summary
              </Tab>
            </TabList>

            <TabPanels px={[2, 4, 4, 4]}>
              <TabPanel>
                {/* Select the active terminal by index set */}
                <CartIem counter={counter} dispatcher={dispatch} item={CartTerminals[itemIndex]} />
              </TabPanel>
              <TabPanel>
                <CustomerInfo state={info} setState={setInfo} />
              </TabPanel>
              <TabPanel>
                <Checkout
                  itemCount={counter.count}
                  item={CartTerminals[itemIndex]}
                  userInfo={info}
                  setTabIndex={setTabIndex}
                />
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
              Continue
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
