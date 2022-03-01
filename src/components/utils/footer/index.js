import ctl from "@netlify/classnames-template-literals"
import React from "react"

const MainFooter = () => {
  const footerStyle = ctl(`
  text-center 
  py-8`)
  return (
    <footer className={footerStyle}>
      <p>&copy; {new Date().getFullYear()} FourthCanvas</p>
    </footer>
  )
}

export default MainFooter
