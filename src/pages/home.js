import Layout from "components/layout-max";
import React from "react";
import SeoConf from "config/seo/meta";
import HeroSectionHomePage from "templates/homepageUpdate/herosection";
import HomePageSectionn2 from "templates/homepageUpdate/section2/HomePageSection2";
import HomePageSection3 from "templates/homepageUpdate/section3/HomePageSection3";

const Home = () => {
  return (
    <Layout title={SeoConf.menu.title} description={SeoConf.menu.description} useStickyNav={false} transparent={true}>
      <HeroSectionHomePage />
      <HomePageSectionn2 />
      <HomePageSection3 />
    </Layout>
  );
};

export default Home;
