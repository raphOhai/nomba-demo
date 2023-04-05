import React from "react";
import PropTypes from "prop-types";
import ctl from "@netlify/classnames-template-literals";
import { StaticImage } from "gatsby-plugin-image";
import { Br, Ntext, SectionHeader, Container } from "components";
import { useState } from "react";
import { easySolutionsForSmallBusiness } from "config/slider";
const AnyTypeOfBusiness = () => {
  const [activeSolution, setActiveSolution] = useState(solutions[0]);
  return (
    <Container className="bg-white">
      <div className={businessWrapperStyle}>
        <SectionHeader className="!text-left">
          <Ntext variant="h3">
            Solution built for any type
            <Br on="desktop" />
            of business model
          </Ntext>
        </SectionHeader>
        <div className="w-full bg-white pb-12 ">
          <div className="mt-2">
            <div className="">
              <div className="-mb-px flex border-gray-5 flex-nowrap scrollbar-hide overflow-auto border-b  justify-start">
                {solutions.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveSolution(s)}
                    className={`${buttonTabStyle} ${isActive(
                      s.title,
                      activeSolution.title
                    )}`}
                  >
                    {s.title}
                  </button>
                ))}
              </div>
              <TabBody data={activeSolution} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

const TabBody = ({ data }) => {
  return (
    <div>
      <SectionHeader className="!text-left gap-4 md:gap-6 flex flex-col-reverse md:flex-row md:items-center">
        <div className="flex flex-col md:h-[345px] justify-between xl:gap-10 lg:gap-7 md:gap-5 gap-4 basis-1/2">
          <Ntext variant="h3" className="">
            {data.headline}
          </Ntext>
          <Ntext
            value={data.description}
            variant="p18"
            className="mt-4 max-w-[533px]"
            color="n-grey6"
          />
          <Ntext
            value={data.respondent}
            variant="text2"
            className="font-semibold"
          />
        </div>
        {data.images}
      </SectionHeader>
    </div>
  );
};

TabBody.propTypes = {
  body: PropTypes.object,
};

const isActive = (a, b) =>
  a === b ? ctl(`border-b-4 border-n-yellow`) : ctl(``);

const businessWrapperStyle = ctl(`
md:pb-20
pb-16
`);

const buttonTabStyle = ctl(`
text-gray-900
whitespace-nowrap
px-5 py-4 
text-base
font-medium
`);

const gridWrapper = ctl(`
basis-1/2
grid
grid-cols-6
m-0
gap-4
`);

const imgClassWrapper1 = ctl(`
col-start-1
col-end-7
`);

const imgClassWrapper2 = ctl(`
col-start-1 
col-end-3
`);

const imgClassWrapper3 = ctl(`
col-end-7 
col-span-4 
shadow-md 
rounded-md
`);

const imgClass = ctl(`
scroll-smooth
shadow-md 
rounded-md 
w-full 
h-full
`);

const solutions = [
  {
    title: "Pharmacies",
    headline:
      "Over 234 businesses in the Nigeria and Africa uses Nomba to simplify their payment. ",
    description:
      "Access all the offline and online tools you need to grow your business. Track payment on multiple channels for every item sold in your store",
    respondent: "Mark Jonathan, CMO",
    images: (
      <div className={gridWrapper}>
        <div className={imgClassWrapper1}>
          <StaticImage
            className={imgClass}
            src="../../../../assets/images/jpegs/homepage/max-features/lady-landscape.jpg"
            alt="Image 1"
          />
        </div>
        <div className={imgClassWrapper2}>
          <StaticImage
            height={299}
            className={imgClass}
            src="../../../../assets/images/jpegs/homepage/max-features/max-payment.jpg"
            alt="Image 2"
          />
        </div>
        <div className={imgClassWrapper3}>
          <StaticImage
            className={imgClass}
            height={299}
            src="../../../../assets/images/jpegs/homepage/max-features/salon-business.jpg"
            alt="Image 3"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Local shops",
    headline: "dffgdf dg dgn dgndg g ndomba to simplify their payment. ",
    description:
      "Access all the offline and online tools you need to grow your business. Track payment on multiple channels for every item sold in your store",
    respondent: "Mark Jonathan, CMO",
    images: (
      <div className={gridWrapper}>
        <div className={imgClassWrapper1}>
          <StaticImage
            className={imgClass}
            src="../../../../assets/images/jpegs/homepage/max-features/lady-landscape.jpg"
            alt="Image 1"
          />
        </div>
        <div className={imgClassWrapper2}>
          <StaticImage
            height={299}
            className={imgClass}
            src="../../../../assets/images/jpegs/homepage/max-features/max-payment.jpg"
            alt="Image 2"
          />
        </div>
        <div className={imgClassWrapper3}>
          <StaticImage
            className={imgClass}
            height={299}
            src="../../../../assets/images/jpegs/homepage/max-features/salon-business.jpg"
            alt="Image 3"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Supermarkets",
    headline: "Lorem o voo osiv uses Nomba to simplify their payment. ",
    description:
      "Access all the offline and online tools you need to grow your business. Track payment on multiple channels for every item sold in your store",
    respondent: "Mark Jonathan, CMO",
    images: (
      <div className={gridWrapper}>
        <div className={imgClassWrapper1}>
          <StaticImage
            className={imgClass}
            src="../../../../assets/images/jpegs/homepage/max-features/lady-landscape.jpg"
            alt="Image 1"
          />
        </div>
        <div className={imgClassWrapper2}>
          <StaticImage
            height={299}
            className={imgClass}
            src="../../../../assets/images/jpegs/homepage/max-features/max-payment.jpg"
            alt="Image 2"
          />
        </div>
        <div className={imgClassWrapper3}>
          <StaticImage
            className={imgClass}
            height={299}
            src="../../../../assets/images/jpegs/homepage/max-features/salon-business.jpg"
            alt="Image 3"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Restaurants",
    headline:
      "gsdf asbpopqrb qpieb pqehi Africa uses Nomba to simplify their payment. ",
    description:
      "Access all the offline and online tools you need to grow your business. Track payment on multiple channels for every item sold in your store",
    respondent: "Mark Jonathan, CMO",
    image: (
      <div className={gridWrapper}>
        <div className={imgClassWrapper1}>
          <StaticImage
            className={imgClass}
            src="../../../../assets/images/jpegs/homepage/max-features/lady-landscape.jpg"
            alt="Image 1"
          />
        </div>
        <div className={imgClassWrapper2}>
          <StaticImage
            height={299}
            className={imgClass}
            src="../../../../assets/images/jpegs/homepage/max-features/max-payment.jpg"
            alt="Image 2"
          />
        </div>
        <div className={imgClassWrapper3}>
          <StaticImage
            className={imgClass}
            height={299}
            src="../../../../assets/images/jpegs/homepage/max-features/salon-business.jpg"
            alt="Image 3"
          />
        </div>
      </div>
    ),
  },
];

export { AnyTypeOfBusiness };
