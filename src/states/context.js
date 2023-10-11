import React, { createContext, useState, useReducer, useEffect } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { reducer } from "./reducer";
export const AppContext = createContext();

export const ContextWrapper = ({ children }) => {
  const initialItems = { count: 1 };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [hasError, setHasError] = useState(true);
  const [hasEmailError, setHasEmailError] = useState(false);
  const [hasMobileError, setHasMobileError] = useState(false);

  const [tabIndex, setTabIndex] = useState(0);
  const [itemIndex, setItemIndex] = useState(0);
  const [counter, dispatch] = useReducer(reducer, initialItems);
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    deliveryAddress: "",
    lga: "",
    state: "",
    timestamp: new Date().toLocaleString(),
  });

  const resetInfo = () => {
    setInfo({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      deliveryAddress: "",
      lga: "",
      state: "",
      timestamp: new Date().toLocaleString(),
    });

    setHasEmailError(false);
    setHasMobileError(false);

    // reset tab
    setTabIndex(0);
    setHasError(true);
  };

  const closeAndReset = () => {
    onClose();
    resetInfo();
  };

  const addToCart = index => {
    setItemIndex(index);
    onOpen();
  };

  const handleTabsChange = index => {
    setTabIndex(index);
  };
  useEffect(() => {
    setHasError(
      Object.keys(info)
        .map(r => !!info[r].length)
        .includes(false)
    );
  }, [info]);

  return (
    <AppContext.Provider
      value={{
        onOpen,
        isOpen,
        onClose,
        closeAndReset,

        info,
        setInfo,
        resetInfo,

        counter,
        dispatch,

        hasError,
        setHasError,

        hasEmailError,
        setHasEmailError,

        hasMobileError,
        setHasMobileError,

        itemIndex,
        addToCart,

        tabIndex,
        setTabIndex,
        handleTabsChange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
