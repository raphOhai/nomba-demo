import React, { useEffect } from "react";
import Layout from "components/layout-max";
import { CareersTipsAndStories } from "templates";
import { split } from "animations/text";
import SeoConf from "config/seo/meta";

const RolesPage = () => {
  useEffect(() => {
    split();
  });

  return (
    <Layout
      title={SeoConf.careers.roles.title}
      description={SeoConf.careers.roles.description}
      useStickyNav={false}
    >
      <CareersTipsAndStories />
    </Layout>
  );
};

export default RolesPage;
