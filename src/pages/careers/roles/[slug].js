import React, { useEffect, useState } from "react";

import { ApplyForJob, CareersTipsAndStories, RoleDetails } from "templates";
import { split } from "animations/text";

import { navigate } from "gatsby";

import Layout from "components/layout-max";
import SeoConf from "config/seo/meta";

const RolePage = ({ params }) => {
  const [role, setRole] = useState();

  useEffect(() => {
    const roleFromCache = JSON.parse(localStorage.getItem('nomba-available-roles') || '[]')
      .find(value => value.slug === params.slug);

    setRole(roleFromCache);

    if (!roleFromCache) {
      navigate('/careers/roles');
    }
  });

  useEffect(() => {
    split();
  });

  return (
    <Layout
      title={role?.title || SeoConf.careers.roles.title}
      description={role?.description || SeoConf.careers.roles.description}
      useStickyNav={false}>
      {role && <RoleDetails role={role} />}
      {role && <ApplyForJob role={role} />}
      <CareersTipsAndStories />
    </Layout>
  );
};

export default RolePage;
