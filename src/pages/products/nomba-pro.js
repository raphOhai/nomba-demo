import React from "react";
import { Br } from "components";
import Layout from "components/layout";
import "templates/products/nomba-pro/css/index.css";
import {
  NombaProHeroSection,
  ImageCarouselSection,
  ProCardList,
  HelpYouGrowYourBusiness,
  AllOnOnePayment,
  StartToday,
  StartSellingOnTheGo,
  DownloadApp,
  NeverLoseASale,
  BecomeAnAgentToday,
} from "templates/products/nomba-pro";
import { Accordion } from "templates";
import { Faq } from "config/faq/faq";

// import templates here
function NombaproPage() {
  return (
    <Layout title="Nombapro" defaultStyle={false}>
      <NombaProHeroSection
        proHeaderText={
          <>
            <div className="pl-0 inline-flex underline decoration-5 decoration-secondary">
              Never
            </div>{" "}
            lose a sale <Br on="desktop" />
            with Nomba Pro
          </>
        }
        proHeaderSubText={
          <>
            Receive payments at lightening speed, make transfers,{" "}
            <Br on="desktop" />
            use tools that will help you grow your business
          </>
        }
        proHeaderButtonText={"Order now"}
        linkText="Or contact sales"
      />
      <ImageCarouselSection />
      <ProCardList />
      <HelpYouGrowYourBusiness />
      <AllOnOnePayment />
      <StartToday />
      <StartSellingOnTheGo />
      <DownloadApp />
      <NeverLoseASale />
      <Accordion
        heading="Frequently Asked Questions"
        hasImages={false}
        accordionListArray={Faq}
      />
      <BecomeAnAgentToday />
      <div></div>
    </Layout>
  );
}

export default NombaproPage;
