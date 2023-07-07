/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Seo from "./seo";
import { MainFooter } from "./footer";
import { NavBar } from "./navbar";
import { FixedBar } from "./max-navigation";
// import { Subfooter } from "./subfooter";
import ScrollTrigger from "gsap/ScrollTrigger";
import scroll from "animations/scroll";
import { gsap } from "gsap";

import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
const Layout = ({ children, title, ignoreSiteName = false, defaultStyle = true, useStickyNav = true }) => {
  const lenisRef = useRef();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  });
  return (
    <ReactLenis root ref={lenisRef} autoRaf={false}>
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
    </ReactLenis>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default Layout;
