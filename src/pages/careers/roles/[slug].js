import React, { useEffect } from "react";

import { ApplyForRole, CareersTipsAndStories, RoleDetails } from "templates";
import { split } from "animations/text";

import { navigate } from "gatsby";

import Layout from "components/layout-max";
import SeoConf from "config/seo/meta";

const RolePage = ({ params }) => {
  const cachedAvailableRoles = localStorage.getItem('nomba-available-roles')

  useEffect(() => {
    if (!cachedAvailableRoles) {
      navigate('/careers/roles');
    }
  });

  useEffect(() => {
    split();
  });

  const role = JSON.parse(cachedAvailableRoles || '[]')
    .find(value => value.slug === params.slug);

  return (
    <Layout
      title={role?.title || SeoConf.careers.roles.title}
      description={role?.description || SeoConf.careers.roles.description}
      useStickyNav={false}>
      <RoleDetails role={role} />
      <ApplyForRole role={role} />
      <CareersTipsAndStories />
    </Layout>
  );
};

export default RolePage;
