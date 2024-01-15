import React from "react";
import ctl from "@netlify/classnames-template-literals";

import { Ntext } from "components";

import DotSeparator from "svgs/dot-separator.svg";

const TopArticlePane = ({ article }) => {
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
      <article className="rounded-2xl overflow-clip w-[328px] h-[240px]">
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
              className="!font-medium !leading-5 text-nowrap uppercase"
              variant="text2"
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
          className="!-tracking-[0.8px] mt-4"
          variant="text5"
        />
        <Ntext
          color="c-grey4"
          value={content}
          className="line-clamp-2 !leading-5 lg:w-full lg:h-[40px] w-[328px] mt-2"
          variant="text2"
        />
        <article className="flex space-x-4 items-center mt-6">
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
  flex
  flex-col
  space-y-8
  rounded-[32px]
  bg-[rgba(242,242,242,0.40)]
  border-n-platinum
  border-solid
  border
  p-6
`);

export { TopArticlePane };
