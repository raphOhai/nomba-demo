import React, { useEffect, useRef } from "react";
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
  Input,
} from "@chakra-ui/react";
import { Ntext } from "components/ntext";

const Checkout = ({ isOpen, onClose, finalFocusRef }) => {
  return (
    <Drawer
      colorScheme="yellow"
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={finalFocusRef}
      size="md"
    >
      <DrawerOverlay />
      <DrawerContent bg="black" color="white">
        <DrawerCloseButton color="white" colorScheme="yellow" />
        <DrawerHeader>
          <Ntext variant="text3" color="n-light">
            Terminal purchase
          </Ntext>
        </DrawerHeader>

        <DrawerBody>
          <Tabs isFitted colorScheme="yellow">
            <TabList borderBottom="1px" borderTop="1px">
              <Tab>One</Tab>
              <Tab py="6">Two</Tab>
              <Tab>Three</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="yellow">Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

Checkout.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  finalFocusRef: PropTypes.element,
};

export { Checkout };
