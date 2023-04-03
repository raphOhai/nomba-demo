import * as React from "react";

import Layout from "components/layout";
import {
  HomepageHero,
  HomepageGotOptions,
  HomepageFeatures,
  HomepageTipsAndUpdate,
} from "templates/home";
import { Br, POSTerminals } from "components";
import NombaProAdvert from "templates/home/nomba-max-advert/nomba-max-advert";

const IndexPage = () => {
  return (
    <Layout title="Nomba" ignoreSiteName={true}>
      <HomepageHero />
      <NombaProAdvert />
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
      <HomepageFeatures
        title={
          <>
            {" "}
            Build your business with <Br on="desktop" /> our tools
          </>
        }
      />
      <HomepageTipsAndUpdate />
    </Layout>
  );
};

export default IndexPage;
