import * as React from "react";

import Layout from "components/layout";
import {
  HomepageHero,
  HomepageGotOptions,
  HomepageFeatures,
  HomepageBusiness,
  HomepageTipsAndUpdate,
} from "templates/home";
import { Br, POSTerminals } from "components";

const IndexPage = () => {
  return (
    <Layout title="Nomba" ignoreSiteName={true}>
      <HomepageHero />
      <HomepageBusiness />
      <HomepageGotOptions />
      <POSTerminals
        title={
          <>
            {" "}
            Durable, easy-to-use payment machines <Br on="desktop" /> for
            businesses in Africa
          </>
        }
      />
      <HomepageFeatures />
      <HomepageTipsAndUpdate />
    </Layout>
  );
};

export default IndexPage;
