import * as React from "react";

import Layout from "components/layout";
import {
  HomepageHero,
  HomepageGotOptions,
  HomepageFeatures,
  HomepageBusiness,
} from "templates/home";
import { Br, POSTerminals, TipsAndUpdates, Ntext } from "components";
import { tipsAndUpdatesList } from "mocks/tips-and-updates.js";

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
            Durable, easy-to-use payment machines <Br variant="desktop" /> for
            businesses in Africa
          </>
        }
      />
      <HomepageFeatures />
      <TipsAndUpdates
        list={tipsAndUpdatesList}
        heading={
          <Ntext variant="h3">
            Tips, updates and stories from <Br />
            our community
          </Ntext>
        }
      />
    </Layout>
  );
};

export default IndexPage;
