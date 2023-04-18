import React from "react";

import Layout from "components/layout";
import {
  Convenience,
  HandlingBusinessPayments,
  LargePageHeader,
  LargeBusinessInfoGridSection,
  CodeBlock,
} from "templates/business/large";
import { EasySolution } from "components/easy-solution";
import { AnyTypeOfBusiness } from "components/any-type-of-business";
import { LargeBusinessTestimonials } from "config/testimonials";
import { Br, Testimonial } from "components";
import { HomepageTipsAndUpdate } from "templates";
import { largeBusinessTypes, codeblockSection } from "config/large-business";
import { easySolutionsForLargeBusiness } from "config/slider";

const LargeBusiness = () => {
  return (
    <Layout title="Large Business">
      <LargePageHeader />
      <HandlingBusinessPayments />
      <EasySolution
        title={
          <>
            Easy solutions for your&nbsp;
            <Br on="desktop" />
            Large businesses
          </>
        }
        data={easySolutionsForLargeBusiness}
        description="Track payment on multiple channels for every item sold in your store. "
      />
      <AnyTypeOfBusiness
        title={
          <>
            Solution built for any type
            <Br on="desktop" />
            of business model
          </>
        }
        data={largeBusinessTypes}
      />

      <div className="pt-2">
        <CodeBlock data={codeblockSection} />
        <Testimonial
          testimonials={LargeBusinessTestimonials}
          headingText={
            <>
              Hear what business <Br on="mobile" />
              owners have to say
            </>
          }
        />
      </div>
      <HomepageTipsAndUpdate />
    </Layout>
  );
};

export default LargeBusiness;
