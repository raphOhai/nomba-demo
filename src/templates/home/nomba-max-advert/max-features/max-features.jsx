import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import ctl from "@netlify/classnames-template-literals";
import { Ntext, Br, ReadMore } from "components";
export default function MaxFeatures() {
  return (
    <div className={wrapperFeature}>
      <Ntext variant="text8" color="c-dark" className="text-left">
        Built to simplify any business <Br on="all" />
        type and size
      </Ntext>
      <div className="flex flex-row mt-10">
        <div className="basis-1/2 flex flex-col gap-10">
          <div className="">
            <ReadMore
              text="Enterprise business"
              color="n-grey6"
              variant="text5"
              href={{ url: "tel:+23401888899" }}
            />

            {/* sub text */}
            <div className="mt-4">
              <Ntext variant="text3" className="c-0">
                Track payment on multiple channels for every item sold in your
                store. <Br on="desktop" /> Track payment on multiple channels
                for every item sold in your store
              </Ntext>
            </div>
          </div>

          <div>
            <ReadMore
              text="Shopping"
              color="n-grey3"
              active={false}
              variant="text5"
              href={{ url: "tel:+23401888899" }}
            />

            {/* sub text */}
            <div className="mt-4">
              <Ntext variant="text3" className="c-0">
                Track payment on multiple channels for every item sold in your
                store. <Br on="desktop" /> Track payment on multiple channels
                for every item sold in your store
              </Ntext>
            </div>
          </div>

          <div>
            <ReadMore
              text="Online vendor"
              color="n-grey3"
              active={false}
              variant="text5"
              href={{ url: "tel:+23401888899" }}
            />

            {/* sub text */}
            <div className="mt-4">
              <Ntext variant="text3" className="c-0">
                Track payment on multiple channels for every item sold in your
                store. <Br on="desktop" /> Track payment on multiple channels
                for every item sold in your store
              </Ntext>
            </div>
          </div>

          <div>
            <ReadMore
              text="Restaurant"
              color="n-grey3"
              active={false}
              variant="text5"
              href={{ url: "tel:+23401888899" }}
            />

            {/* sub text */}
            <div className="mt-4">
              <Ntext variant="text3" className="c-0">
                Track payment on multiple channels for every item sold in your
                store. <Br on="desktop" /> Track payment on multiple channels
                for every item sold in your store
              </Ntext>
            </div>
          </div>
        </div>

        {/** images */}
        <div className=" basis-1/2 -mr-52">
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
    </div>
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
my-16
md:ml-40
justify-start
text-left
`);
