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
import MaxFeatures from "templates/home/nomba-max-advert/max-features/max-features";

const IndexPage = () => {
  return (
    <Layout title="Nomba" ignoreSiteName={true}>
      <HomepageHero />
      <NombaProAdvert>
        <HomepageFeatures
          title={
            <>
              {" "}
              Build your business with <Br on="desktop" /> our tools
            </>
          }
        />
        <MaxFeatures />
      </NombaProAdvert>

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

      <HomepageTipsAndUpdate />
    </Layout>
  );
};

export default IndexPage;
