import React, { createContext, useState, useReducer, useEffect } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { reducer } from "./reducer";
export const AppContext = createContext();

export const ContextWrapper = ({ children }) => {
  const initialItems = { count: 1 };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [hasError, setHasError] = useState(true);
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
    });
  };

  const addToCart = index => {
    setItemIndex(index);
    onOpen();
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

        info,
        setInfo,
        resetInfo,

        counter,
        dispatch,

        hasError,
        setHasError,

        itemIndex,
        addToCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
