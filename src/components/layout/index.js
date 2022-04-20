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
import { Subfooter } from "./subfooter";

const Layout = ({ children, title, ignoreSiteName = false }) => {
  const noOfChildren = children.length;
  return (
    <>
      <Seo title={title} ignoreSiteName={ignoreSiteName} />
      <NavBar />
      {/* All children except the last child */}
      <main>{children.slice(0, noOfChildren - 1)}</main>

      {/*Show the last item in the subfooter */}
      <Subfooter>{children[noOfChildren - 1]}</Subfooter>
      <MainFooter />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default Layout;
