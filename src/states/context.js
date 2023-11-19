import React, { createContext, useReducer, useEffect, useState } from "react";

import { useDisclosure } from "@chakra-ui/react";
import { reducer } from "./reducer";
import { uniq, map } from "lodash";

import constants from "config/constants.json";

const { FETCH_ROLES_URL } = constants;

export const AppContext = createContext();

export const ContextWrapper = ({ children }) => {
  const initialItems = { count: 1 };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [hasError, setHasError] = useState(true);
  const [hasEmailError, setHasEmailError] = useState(false);
  const [hasMobileError, setHasMobileError] = useState(false);

  const [isFetchingRoles, setIsFetchingRoles] = useState(false);

  const [availableRoles, setAvailableRoles] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [locations, setLocations] = useState([]);

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
    setIsFetchingRoles(true);

    setAvailableRoles(JSON.parse(localStorage.getItem('nomba-available-roles') || '[]'));
    setDepartments(JSON.parse(localStorage.getItem('nomba-departments') || '[]'));
    setLocations(JSON.parse(localStorage.getItem('nomba-locations') || '[]'));

    fetch(FETCH_ROLES_URL).then(res => res.json()).then(({ Results: roles }) => {
      const newRoleLocations = uniq(map(roles, role => `${role.City}, ${role.Country}`));

      const newRoleDepartments = uniq(map(roles, 'Department'));

      const newAvailableRoles = map(roles, role => ({
        slug: role.Title.replace(/[^a-z0-9 ]/gi, '').split(/ +/g).join('-').toLowerCase(),
        location: `${role.City}, ${role.Country}`,
        description: role.MetatagDescription,
        metaTagTitle: role.MetatagTitle,
        department: role.Department,
        markup: role.Description,
        title: role.Title,
        id: role.Id,
      }));

      localStorage.setItem('nomba-available-roles', JSON.stringify(newAvailableRoles));
      localStorage.setItem('nomba-departments', JSON.stringify(newRoleDepartments));
      localStorage.setItem('nomba-locations', JSON.stringify(newRoleLocations));

      setAvailableRoles(newAvailableRoles);
      setDepartments(newRoleDepartments);
      setLocations(newRoleLocations);

      setIsFetchingRoles(false);
    });
  }, []);

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

        isFetchingRoles,
        availableRoles,
        departments,
        locations,
      }}>
      {children}
    </AppContext.Provider>
  );
};
