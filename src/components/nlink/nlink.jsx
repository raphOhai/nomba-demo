import React from "react";
import PropTypes from "prop-types";
import { useMixpanel } from "gatsby-plugin-mixpanel";

import { Link } from "gatsby";

const NLink = ({ href, to, className, trackingText, children }) => {
  const mixpanel = useMixpanel();

  let NLinkElement;
  let nlinkProps = {};

  if (to) {
    NLinkElement = Link;
    nlinkProps.to = to;
  }

  if (href) {
    NLinkElement = "a";
    if (typeof href === "string") {
      nlinkProps.href = href;
    }
    // to open the link on a new tab, make href an object with the property "url"
    if (typeof href === "object") {
      nlinkProps.href = href.url;
      nlinkProps.target = "_blank";
      nlinkProps.rel = "noreferrer";
    }
  }

  return (
    <NLinkElement
      className={className}
      {...nlinkProps}
      onClick={() => {
        if (trackingText) {
          mixpanel.track(trackingText.replaceAll(" ", "_").replaceAll("-", "_"));
        }
      }}
    >
      {children}
    </NLinkElement>
  );
};

NLink.propTypes = {
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  to: PropTypes.string,
  trackingText: PropTypes.string,
};

export { NLink };
