import React, { useEffect } from "react";
import Layout from "components/layout-max";
import { split } from "animations/text";
import SeoConf from "config/seo/meta";

const RolesPage = () => {
  useEffect(() => {
    split();
  });

  return (
    <Layout index={0} title={SeoConf.careers.roles.title} description={SeoConf.careers.roles.description} useStickyNav={false}>
    </Layout>
  );
};

export default RolesPage;
