import React, { useEffect, useState } from "react";

import { GetMoreStoriesPane } from "templates";
import { split } from "animations/text";

import { navigate } from "gatsby";

import Layout from "components/layout-max";
import SeoConf from "config/seo/meta";

const ArticlePage = ({ params }) => {
  const [article, setArticle] = useState();

  useEffect(() => {
    const articleFromCache = JSON.parse(localStorage.getItem('nomba-blog-articles') || '[]')
      .find(value => value.slug === params.slug);

    setArticle(articleFromCache);

    if (!articleFromCache) {
      navigate('/blog');
    }
  });

  useEffect(() => {
    split();
  });

  return (
    <Layout
      title={article?.title || SeoConf.blog.title}
      description={SeoConf.blog.description}
      useStickyNav={false}>
      <GetMoreStoriesPane />
    </Layout>
  );
};

export default ArticlePage;
