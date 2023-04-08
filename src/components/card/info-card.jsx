import React from "react";

import PropTypes from "prop-types";
import ctl from "@netlify/classnames-template-literals";
import { Ntext } from "components/ntext/ntext";
import { ReadMore } from "components/read-more";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import PlayButton from "svgs/play-button.svg";
const InfoCard = ({ title, date, link, image, picture, isVideo }) => {
  return (
    <div className={infoCardWrapperStyle}>
      {image ? (
        <GatsbyImage image={getImage(image)} />
      ) : picture ? (
        picture
      ) : (
        <StaticImage
          src="../../assets/images/jpegs/Edmund.jpg"
          alt="Edmund smiling"
          loading="eager"
          objectFit="cover"
          placeholder="blurred"
          objectPosition="50% 50%"
          className="w-full"
        />
      )}
      {isVideo && <PlayButton className="absolute left-0 right-0 top-0 bottom-0 m-auto z-50" />}
      <div className={infoCardInfoStyle}>
        <Ntext variant="h6" color="primary-100" value={title} className="mb-2" />
        {date && <Ntext variant="h7" color="primary-100" value={date} />}

        {link && (
          <div className={readMoreWrapperStyle}>
            <ReadMore {...link} />
          </div>
        )}
      </div>
    </div>
  );
};

const infoCardWrapperStyle = ctl(`
relative
md:h-[401px]
h-[334px]
cursor-default
overflow-hidden
place-items-stretch
`);

const infoCardInfoStyle = ctl(`
absolute
left-0
top-0
right-0
bottom-0
group
bg-gradient-to-t  from-primary
bg-blend-darken
flex
flex-col
justify-end
transition-all
pl-[18px]
pb-[27px]
md:pr-[29px]
pr-[40px]
overflow-hidden
`);

const readMoreWrapperStyle = ctl(`
md:opacity-0
md:group-hover:opacity-100
md:h-[0]
h-[40px]
transition-all
md:group-hover:h-[40px]
duration-300
flex
items-end
`);

InfoCard.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  link: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  isVideo: PropTypes.bool,
};

export { InfoCard };
