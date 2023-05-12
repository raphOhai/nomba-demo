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
import { FixedBar } from "./max-navigation";
// import { Subfooter } from "./subfooter";

const Layout = ({ children, title, ignoreSiteName = false, defaultStyle = true }) => {
  const noOfChildren = children.length;
  return (
    <div className="main-container bg-black">
      <Seo title={title} ignoreSiteName={ignoreSiteName} />
      <NavBar />
      {/* All children except the last child */}
      <main>{children}</main>
      <FixedBar />
      {/*Show the last item in the subfooter */}
      {/* <Subfooter>{children[noOfChildren - 1]}</Subfooter> */}
      <MainFooter defaultStyle={defaultStyle} />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default Layout;
