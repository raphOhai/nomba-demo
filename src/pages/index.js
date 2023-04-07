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
import { BusinessTypes } from "templates/home/business-types";
import { heroHomePage } from "config/home";

const IndexPage = () => {
  return (
    <Layout title="Nomba" ignoreSiteName={true}>
      <HomepageHero {...heroHomePage} />
      <NombaProAdvert>
        <HomepageFeatures
          title={
            <>
              Build your business with <Br on="all" /> our tools
            </>
          }
        />
        <BusinessTypes />
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
