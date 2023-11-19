import React, { useEffect } from "react";

import { CareersTipsAndStories, GetYourCareerStarted } from "templates";
import { split } from "animations/text";

import Layout from "components/layout-max";
import SeoConf from "config/seo/meta";

const CareersRolesPage = () => {
  useEffect(() => {
    split();
  });

  return (
    <Layout
      title={SeoConf.careers.roles.title}
      description={SeoConf.careers.roles.description}
      useStickyNav={false}>
      <GetYourCareerStarted />
      <CareersTipsAndStories />
    </Layout>
  );
};

export default CareersRolesPage;
