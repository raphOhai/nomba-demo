import Layout from "components/layout-max";
import React from "react";
import QRHeroSection from "templates/QR/QRHeroSection/QRHeroSection";
import SeoConf from "config/seo/meta";
import QrSection2 from "templates/QR/section2/QrSection2";

const QR = () => {
  return (
    <>
      <Layout title={SeoConf.menu.title} description={SeoConf.menu.description} useStickyNav={false}>
        <QRHeroSection />
        <QrSection2 />
      </Layout>
    </>
  );
};

export default QR;
