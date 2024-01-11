import React, { useEffect } from "react";
import Layout from "components/layout-blog";
import SeoConf from "config/seo/meta";

import {
  BlogPageHero,
  BlogArticles,
} from "templates";

import { split } from "animations/text";

const BlogPage = () => {
  useEffect(() => {
    split();
  });

  return (
    <Layout
      title={SeoConf.blog.title}
      description={SeoConf.blog.description}
      useStickyNav={false}>
      <BlogPageHero />
      <BlogArticles />
    </Layout>
  );
};

export default BlogPage;
