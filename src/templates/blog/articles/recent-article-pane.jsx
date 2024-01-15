import React from "react";
import ctl from "@netlify/classnames-template-literals";

import { Ntext } from "components";

import DotSeparator from "svgs/dot-separator.svg";

const RecentArticlePane = ({ article }) => {
  const {
    title,
    author,
    content,
    minutes,
    category,
    thumbnail,
    datePublished
  } = article;

  return (
    <section className={wrapperStyle}>
      <article className="rounded-2xl overflow-clip max-w-full max-h-[320px]">
        <img
          src={thumbnail}
          className="object-cover w-full h-full"
          alt="Article Thumbnail"
        />
        <article className="flex -mt-14 h-14">
          <section
            style={{ backgroundColor: category.tint, opacity: 0.16 }}
            className="w-full h-14"
          />
          <p
            className="px-8 py-4"
            style={{ backgroundColor: category.tint }}>
            <Ntext
              color="n-smoky"
              value={category.name}
              className="!font-medium text-nowrap uppercase"
              variant="text3"
            />
          </p>
        </article>
      </article>
      <article className="flex flex-col lg:w-full">
        <p className="flex space-x-4 items-center">
          <Ntext
            color="n-charcoal"
            value={datePublished}
            className="!font-medium !leading-5"
            variant="text2"
          />
          <DotSeparator />
          <Ntext
            color="n-grey0"
            value={`${minutes} MINS READ`}
            className="!font-medium !leading-5"
            variant="text2"
          />
        </p>
        <Ntext
          value={title}
          color="n-grey8"
          className="!-tracking-[1px] mt-4"
          variant="text6"
        />
        <Ntext
          color="c-grey4"
          value={content}
          className="line-clamp-2 lg:w-full lg:h-[48px] mt-2"
          variant="text3"
        />
        <article className="flex space-x-4 items-center mt-8">
          <img
            src={author.avatar}
            alt="Author Avatar"
            className="rounded-full object-cover w-10 h-10"
          />
          <p className="flex flex-col">
            <Ntext
              color="n-grey8"
              value={author.name}
              className="!font-medium !leading-5"
              variant="text2"
            />
            <Ntext
              color="n-grey3"
              value={author.department}
              className="!font-bold !leading-5"
              variant="text2"
            />
          </p>
        </article>
      </article>
    </section>
  );
};

const wrapperStyle = ctl(`
  p-8
  flex
  flex-col
  space-y-10
  rounded-[32px]
  bg-[rgba(242,242,242,0.40)]
  border-n-platinum
  border-solid
  pb-[44px]
  border
`);

export { RecentArticlePane };
