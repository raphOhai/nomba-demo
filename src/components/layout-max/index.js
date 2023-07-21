/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState, useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import Seo from "./seo";
import { MainFooter } from "./footer";
import { NavBar } from "./navbar";
import { FixedBar } from "./max-navigation";
import { useDisclosure } from "@chakra-ui/react";
import { reducer } from "states/reducer";
import { AppContext } from "states/context";
const Layout = ({ children, title, ignoreSiteName = false, defaultStyle = true, useStickyNav = true }) => {
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

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [hasError, setHasError] = useState(true);
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
      }}
    >
      <div className="main-container bg-black">
        <Seo title={title} ignoreSiteName={ignoreSiteName} />
        <NavBar />
        {/* All children except the last child */}
        <main>{children}</main>
        {useStickyNav && <FixedBar />}
        {/*Show the last item in the subfooter */}
        {/* <Subfooter>{children[noOfChildren - 1]}</Subfooter> */}
        <MainFooter defaultStyle={defaultStyle} />
      </div>
    </AppContext.Provider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default Layout;
