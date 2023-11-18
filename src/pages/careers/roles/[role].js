import React, { useEffect } from "react";
import Layout from "components/layout-max";
import { CareersTipsAndStories } from "templates";
import { availableRoles } from "config/careers/roles";
import { split } from "animations/text";
import SeoConf from "config/seo/meta";

const RolePage = ({ params: { role } }) => {
  useEffect(() => {
    split();
  });

  const data = availableRoles.find(value => value.slug === role);

  return (
    <Layout
      title={data.title}
      description={SeoConf.careers.roles.description}
      useStickyNav={false}
    >
      <CareersTipsAndStories />
    </Layout>
  );
};

export default RolePage;
