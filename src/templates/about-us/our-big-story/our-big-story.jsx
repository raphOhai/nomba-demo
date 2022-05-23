import React from "react";
import { Container, Ntext, SectionBrandElement } from "components";
import ctl from "@netlify/classnames-template-literals";

const OurBigStory = () => {
  return (
    <section className={sectionWrapperStyle}>
      <SectionBrandElement />
      <Container>
        <div className={storyWrapperStyle}>
          <div className={storyTextWrapperStyle}>
            <Ntext variant="h7" className="font-bold" color="secondary">
              Our Big Story
            </Ntext>

            <Ntext variant="h2" className="mt-10 " color="primary-100">
              We set out to enable Africa&apos;s economy, we haven&apos;t
              stopped.
            </Ntext>

            <div className="max-w-[600px]">
              <Ntext variant="p18" className="mt-10 " color="primary-100">
                We are building an ecosystem that simplifies how businesses
                accept payments, make payments and manage operations. This
                journey started in 2016 with simplifying access to financial
                services using "Kudi.ai" a chatbot integration that responds to
                financial requests on social apps.{" "}
              </Ntext>
              <Ntext variant="p18" className="mt-10 " color="primary-100">
                It then morphed into powering a community of independent
                businesses we call Agents who act as neighborhood banks offering
                basic financial services such as cash withdrawal, transfer and
                bill payments to all Nigerians, especially those in underserved
                communities.
              </Ntext>
              <Ntext variant="p18" className="mt-10" color="primary-100">
                {" "}
                We believe this technology and innovative solution can power all
                kinds of businesses whether they are accepting payments for
                goods and services or helping others access cash or send money.
                So, we created easy-to-use tools with flexible options for all
                kinds of businesses to accept, process and manage payments
                online and offline.{" "}
              </Ntext>
              <Ntext variant="p18" className="mt-10 " color="primary-100">
                {" "}
                As we stay true to our mission to make financial services
                accessible and affordable, we are one step closer to bringing a
                lasting change to Africa and Africa&apos;s commerce.
              </Ntext>
            </div>

            <Ntext variant="p18" className="mt-10" color="secondary">
              At Nomba, we mean business.
            </Ntext>
          </div>
        </div>
      </Container>
    </section>
  );
};

const sectionWrapperStyle = ctl(`
bg-primary
 px-8 
 md:px-16 
 py-20 
 lg:py-40 
 overflow-hidden 
 relative
`);
const storyWrapperStyle = ctl(`
grid 
grid-cols-3

`);
const storyTextWrapperStyle = ctl(`
md:col-span-2
col-span-3
`);
export { OurBigStory };
