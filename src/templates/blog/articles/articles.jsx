import React, { useState } from "react";
import ctl from "@netlify/classnames-template-literals";

import { Container, Ntext } from "components";

import { categories } from "config/blog";

const BlogArticles = () => {
  const [categoryIndex, setCategoryIndex] = useState(0);

  return (
    <section className={wrapperStyle}>
      <section className="bg-white sticky top-0">
        <Container>
          <div className={navbarStyle}>
            {
              categories.map((category, index) => (
                <article
                  key={category}
                  className={`cursor-pointer border-b-2 border-solid ${index === categoryIndex ? "border-b-secondary" : "border-b-transparent"} px-4 py-6`}
                  onClick={() => setCategoryIndex(index)}>
                  <Ntext
                    color={index === categoryIndex ? "n-grey8" : "n-grey0"}
                    className={index === categoryIndex ? "font-bold" : "font-normal"}
                    variant="text4lite"
                    value={category}
                  />
                </article>
              ))
            }
          </div>
        </Container>
      </section>
      <section className="mt-20">
        <Container>
          <Ntext
            color="n-grey8"
            value="Featured"
            className="!leading-[-2px] !font-medium w-screen"
            variant="h3"
          />
        </Container>
      </section>
      <section className="my-20">
        <Container>
          <Ntext
            color="n-grey8"
            value="Recent articles"
            className="!leading-[-2px] !font-medium w-screen"
            variant="h3"
          />
        </Container>
      </section>
      <section className="border-t border-solid border-t-n-platinum pt-24">
        <Container>
          <Ntext
            color="n-grey8"
            value="Top articles from last month"
            className="!leading-[-2px] !font-medium w-screen"
            variant="h3"
          />
        </Container>
      </section>
    </section>
  );
};

const wrapperStyle = ctl(`
  flex
  flex-col
  border-t-n-platinum
  border-solid
  border-t
`);

const navbarStyle = ctl(`
  flex
  space-x-8
  scrollbar-hide
  justify-center
  items-center
`);

export { BlogArticles };
