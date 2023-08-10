import * as React from "react";
import SeoConf from "config/seo/meta";
import Layout from "components/layout";
import { HomepageHero, HomepageGotOptions, HomepageFeatures, HomepageTipsAndUpdate } from "templates/home";
import { Br, POSTerminals } from "components";
import NombaTerminalAdvert from "templates/home/nomba-terminal-advert/nomba-terminal-advert";
import { BusinessTypes } from "templates/home/business-types";
import { heroHomePage } from "config/home";

const IndexPage = () => {
  return (
    <Layout title={SeoConf.index.title} description={SeoConf.index.description} ignoreSiteName={true}>
      <HomepageHero {...heroHomePage} />
      <NombaTerminalAdvert>
        <HomepageFeatures
          title={
            <>
              Maximize business potentials <Br on="desktop" /> with the right tools
            </>
          }
        />
        <BusinessTypes />
      </NombaTerminalAdvert>

      <HomepageGotOptions />
      <POSTerminals
        title={
          <>
            {" "}
            Durable, easy-to-use payment machines <Br on="desktop" /> for businesses in Africa
          </>
        }
      />

      <HomepageTipsAndUpdate />
    </Layout>
  );
};

export default IndexPage;
