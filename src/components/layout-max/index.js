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
import { ContextWrapper } from "states/context";
const Layout = ({
  children,
  description,
  title,
  keywords = "",
  ignoreSiteName = false,
  defaultStyle = true,
  useStickyNav = true,
  index = 0,
}) => {
  return (
    <ContextWrapper>
      <div className="main-container bg-black">
        <Seo title={title} description={description} ignoreSiteName={ignoreSiteName} keywords={keywords} />
        <NavBar />
        <main>{children}</main>
        {useStickyNav && <FixedBar terminalIndex={index} />}
        <MainFooter defaultStyle={defaultStyle} />
      </div>
    </ContextWrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default Layout;
