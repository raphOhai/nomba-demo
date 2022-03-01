import React from "react"
import PropTypes from "prop-types"
import Container from "../container"
import MainMenu from "../../layout/menu"
import ctl from "@netlify/classnames-template-literals"

const PageHeader = ({ title = "", subheading = "" }) => {
  // You can customize this further, add new props, set conditions and so on and so forth. The sky is truly your limit

  const headerStyle = ctl(`
  bg-black 
  pt-80 
  text-white 
  pb-10`)

  const h1Style = ctl(`
  font-serif 
  text-7xl`)

  const paragraphStyle = ctl(`text-xl 
  font-light`)
  return (
    <header className={headerStyle}>
      <Container>
        <>
          <MainMenu />
          <h1 className={h1Style}>{title}</h1>
          <p className={paragraphStyle}>{subheading}</p>
        </>
      </Container>
    </header>
  )
}

PageHeader.propTypes = {
  title: PropTypes.any.isRequired,
  subheading: PropTypes.any,
}

export default PageHeader
