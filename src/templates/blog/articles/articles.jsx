import React, { useState } from "react";
import ctl from "@netlify/classnames-template-literals";

import { FeaturedArticlePane } from "./featured-article-pane";
import { GetMoreStoriesPane } from "./get-more-stories-pane";
import { RecentArticlePane } from "./recent-article-pane";
import { TopArticlePane } from "./top-article-pane";

import { Container, Ntext } from "components";

import {
  categories,
  recentArticles,
  featuredArticle,
  lastMonthTopArticles
} from "config/blog";

const BlogArticles = () => {
  const [categoryIndex, setCategoryIndex] = useState(0);

  const matchingArticles = categoryIndex === 0
    ? recentArticles : recentArticles.filter(({ category: { name } }) => {
      return name === categories[categoryIndex].name;
    });

  return (
    <section className={wrapperStyle}>
      <section className="bg-white lg:sticky top-0">
        <Container>
          <nav className={navbarStyle}>
            {
              categories.map(({ name: category }, index) => (
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
          </nav>
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
          <FeaturedArticlePane article={featuredArticle} />
        </Container>
      </section>
      <section className="my-20">
        <Container>
          <Ntext
            color="n-grey8"
            value="Recent articles"
            className="!leading-[-2px] !font-medium"
            variant="h3"
          />
          <section className={recentArticlesStyle}>
            {
              matchingArticles.map(article => (
                <RecentArticlePane article={article} />
              ))
            }
          </section>
        </Container>
      </section>
      <section className="border-t border-solid border-t-n-platinum pt-24">
        <Container>
          <Ntext
            color="n-grey8"
            value="Top articles from last month"
            className="!leading-[-2px] !font-medium"
            variant="h3"
          />
        </Container>
        <section className={topArticlesStyle}>
          {
            lastMonthTopArticles.map(article => (
              <TopArticlePane article={article} />
            ))
          }
        </section>
      </section>
      <section className="mt-[120px]">
        <Container>
          <GetMoreStoriesPane />
        </Container>
      </section>
    </section>
  );
};

const recentArticlesStyle = ctl(`
  grid
  grid-cols-1
  lg:grid-cols-2
  grid-flow-row
  gap-8
  mt-10
`);

const topArticlesStyle = ctl(`
  flex
  overflow-x-scroll
  scrollbar-hide
  space-x-8
  w-screen
  px-32
  mt-16
`);

const wrapperStyle = ctl(`
  flex
  flex-col
  border-t-n-platinum
  border-solid
  border-t
`);

const navbarStyle = ctl(`
  flex
  flex-col
  space-y-2
  lg:flex-row
  lg:space-x-8
  lg:space-y-0
  justify-center
  items-center
  w-full
  z-50
`);

export { BlogArticles };
