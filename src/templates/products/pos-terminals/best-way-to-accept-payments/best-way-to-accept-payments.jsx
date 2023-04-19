import React from "react";
import { Ntext, Container, Br, SectionBrandElement } from "components";
import { StaticImage } from "gatsby-plugin-image";
import ctl from "@netlify/classnames-template-literals";

const BestWayToAcceptPayments = () => {
  const NombaProFeatures = [
    "Connect your terminal to a Nomba business account",
    "Conveniently accept card payments, wherever you are",
    "Easily take payments with any type of bank card",
    "Print a receipt",
    "Manage daily business financial transactions",
    "Track payments across your business outlets",
    "View all payments received on the terminal",
    "Enjoy wireless connectivity(WiFi & Bluetooth)",
    "Confirm all funds settled to your Nomba account at the end of the day",
  ];
  return (
    <section
      className="relative bg-primary  px-8 
    md:px-16 
    py-20 
    lg:py-40
    mb-20
    lg:mb-36 
    overflow-hidden "
    >
      <SectionBrandElement />
      <Container>
        <div className={bestWayWrapperStles}>
          <div className="max-w-[670px]">
            <Ntext variant="h2" color="primary-100">
              The Best Way to Accept <Br on="desktop" /> Offline and Online Payments
            </Ntext>
            <Ntext variant="p18" color="primary-100" className="mt-4">
              Experience how you receive payments with the new <Br on="desktop" /> Nomba MAX POS terminal
            </Ntext>
            <Ntext variant="p18" color="secondary" className="mt-8">
              With the Nomba MAX Terminal, you can:
            </Ntext>

            <ul className={listWrapperStyles}>
              {NombaProFeatures.map((features, index) => (
                <li key={`NombaProFeatures_${index}`} className="py-1">
                  <Ntext variant="p16" color="primary-100">
                    <span className="mr-2">✔</span> {features}
                  </Ntext>{" "}
                </li>
              ))}
            </ul>
          </div>
          <div className={imageWrapperStyles}>
            <StaticImage
              width={421}
              height={875}
              src="../../../../assets/images/jpegs/Nomba-Max-Front.png"
              alt="Nomba Pro Front"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

const bestWayWrapperStles = ctl(`
flex 
flex-col
 md:flex-row
`);
const listWrapperStyles = ctl(`
py-5
text-primary-100 
mt-2 
leading-8
`);
const imageWrapperStyles = ctl(`
mt-10
md:mt-0
mx-auto 
text-center
`);
export { BestWayToAcceptPayments };
