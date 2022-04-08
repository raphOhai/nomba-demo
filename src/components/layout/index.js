/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import PropTypes from "prop-types";
import Seo from "./seo";
import { MainFooter } from "./footer";
import { NavBar } from "./navbar";
import { SubFooter } from "./subfooter";

const Layout = ({ children, title, ignoreSiteName = false }) => {
  return (
    <>
      <Seo title={title} ignoreSiteName={ignoreSiteName} />
      <NavBar />
      <main>{children}</main>
      <SubFooter />
      <MainFooter />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default Layout;
