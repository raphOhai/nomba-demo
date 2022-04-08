import * as React from "react";

import Layout from "components/layout";
import {
  HomepageHero,
  HomepageGotOptions,
  HomepageTipsAndNewsletter,
  HomepageFeatures,
  HomepageBusiness,
  HomepagePosSection,
} from "templates/homepage";

const IndexPage = () => {
  return (
    <Layout title="Nomba" ignoreSiteName={true}>
      <HomepageHero />
      <HomepageBusiness />
      <HomepageGotOptions />
      <HomepagePosSection />
      <HomepageFeatures />
      <HomepageTipsAndNewsletter />
    </Layout>
  );
};

export default IndexPage;
