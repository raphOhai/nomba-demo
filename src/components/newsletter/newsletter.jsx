import ctl from "@netlify/classnames-template-literals";
import React from "react";
import { Container } from "../container";
import { Ntext } from "../ntext";
import { NewsletterForm } from "./form";
const Newsletter = () => {
  return (
    <Container>
      <div className={newsletterWrapperStyle}>
        <div className={textWrapperStyle}>
          <Ntext variant="h2">Join the Nomba Community</Ntext>
          <Ntext variant="p16">
            Join over 100,000 businesses in our community and receive updates on
            features, news, stories, and resources.
          </Ntext>
        </div>

        <NewsletterForm />
      </div>
    </Container>
  );
};

const newsletterWrapperStyle = ctl(`
bg-secondary-100
md:px-20
px-8
md:py-14
py-12
my-24
flex
lg:flex-row
flex-col
lg:items-center
lg:justify-between
`);

const textWrapperStyle = ctl(`
max-w-[458px]
h-auto
lg:mb-0
mb-8

`);

export { Newsletter };
