import React, { useEffect } from "react";

import { ApplyForRole, CareersTipsAndStories, RoleDetails } from "templates";
import { split } from "animations/text";

import { navigate } from "gatsby";

import Layout from "components/layout-max";
import SeoConf from "config/seo/meta";

const RolePage = ({ params }) => {
  let availableRoles = [];

  useEffect(() => {
    availableRoles = JSON.parse(localStorage.getItem('nomba-available-roles') || '[]');
    if (!availableRoles[0]) {
      navigate('/careers/roles');
    }
  });

  useEffect(() => {
    split();
  });

  const role = availableRoles.find(value => value.slug === params.slug);

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
