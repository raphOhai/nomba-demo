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
import { Header } from "./header";
import { ContextWrapper } from "states/context";
const Layout = ({
  children,
  description,
  title,
  keywords = "",
  ignoreSiteName = false,
  defaultStyle = true,
}) => {
  return (
    <ContextWrapper>
      <Seo title={title} description={description} ignoreSiteName={ignoreSiteName} keywords={keywords} />
      <Header />
      <main className="py-[136px] md:py-[106px]">{children}</main>
      <MainFooter defaultStyle={defaultStyle} />
    </ContextWrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default Layout;
