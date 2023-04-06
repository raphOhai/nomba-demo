import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import ctl from "@netlify/classnames-template-literals";
import { Ntext, Br, ReadMore, Container } from "components";
import { businessTypesData } from "config/home";
function BusinessTypes() {
  return (
    <Container className={wrapperFeature}>
      <Ntext variant="h3" color="c-dark" className="text-left">
        Built to simplify any business <Br on="all" />
        type and size
      </Ntext>
      <div className="flex flex-row justify-between mt-[50px] md:mt-[100px]">
        <div className="md:basis-1/2 flex flex-col gap-10 md:max-w-[514px]">
          {businessTypesData.map((b, i) => (
            <div className="">
              <ReadMore
                text={b.title}
                color="n-grey6"
                active={true}
                variant="text5"
                href={{ url: "tel:+23401888899" }}
              />
              <div className="md:hidden">{b.images}</div>
              {/* sub text */}
              <div className="mt-4">
                <Ntext variant="text3" className="c-0">
                  {b.description}
                </Ntext>
              </div>
            </div>
          ))}
        </div>

        {/** images */}
        <div className="hidden md:block md:basis-1/2 ">
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
          ​
        </div>
      </div>
    </Container>
  );
}

const gridWrapper = ctl(`
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
rounded-l-md 
w-full 
h-full
`);

const wrapperFeature = ctl(`
relative
mt-16
md:mb-[150px]
justify-start
text-left
`);
export { BusinessTypes };
