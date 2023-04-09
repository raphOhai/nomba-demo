import React from "react";

import Layout from "components/layout";
import {
  GrowingYourSales,
  Paralax,
  SmallPageHeader,
  PerfectSolutions,
} from "templates/business/small";
import { EasySolution } from "components/easy-solution";
import { AnyTypeOfBusiness } from "components/any-type-of-business";
import { HomepageTipsAndUpdate } from "templates";
import { Testimonial, Br } from "components";
import { SmallBusinessTestimonials } from "config/testimonials";
import { smallBusinesSolutions } from "config/small-business";
import { easySolutionsForSmallBusiness } from "config/slider";
const SmallBusiness = () => {
  return (
    <Layout title="Small Business">
      <SmallPageHeader />
      <GrowingYourSales />
      <EasySolution
        title={
          <>
            Easy solutions for your
            <Br on="desktop" />
            small businesses
          </>
        }
        description="Track payment on multiple channels for every item sold in your store. Track payment on multiple channels for every"
        data={easySolutionsForSmallBusiness}
      />
      <AnyTypeOfBusiness
        title={
          <>
            Nomba is built for all type
            <Br on="desktop" />
            and size of businesses
          </>
        }
        data={smallBusinesSolutions}
      />
      <PerfectSolutions />
      <Paralax />
      <div className="">
        <Testimonial
          testimonials={SmallBusinessTestimonials}
          headingText="Hear what business partners have to say"
        />
      </div>
      <HomepageTipsAndUpdate />
    </Layout>
  );
};

export default SmallBusiness;
