import ctl from "@netlify/classnames-template-literals";
import React from "react";
import { Addresses } from "./addresses";
import { Copyright } from "./copyright";
import { FooterNavigation } from "./navigation";
import { Policies } from "./policies";
import { Container } from "components/container";
import { AppDownload } from "./app-download";
import SubFooterRight from "svgs/subfooter-right.svg";

const MainFooter = ({ defaultStyle }) => {
  return (
    <>
      {defaultStyle && <AppDownload />}
      <footer className={footerStyle}>
        <Container>
          <FooterNavigation />
          <Policies />
          <div className={addressAndCopyrightWrapperStyle}>
            <Addresses />
            <Copyright />
          </div>
        </Container>
        <SubFooterRight className={subFooterRightImage} />
      </footer>
    </>
  );
};

const footerStyle = ctl(`
pt-16
md:pb-16
pb-6
relative
bg-primary
overflow-hidden
`);

const addressAndCopyrightWrapperStyle = ctl(`
md:flex
justify-between
pt-6
mt-7
border-t-[0.3px]
border-n-grey3
mb-5
`);
const subFooterRightImage = ctl(`
  absolute 
  hidden
  md:block
  -right-5
  bottom-0
`);
export { MainFooter };
