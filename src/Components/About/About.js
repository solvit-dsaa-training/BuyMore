import React from "react"
import { useStyles } from "./style"
import Navigation from "../Navigation/Navigation"
import Footer from "../Footer/Footer"
import "./about.css"

/**
 *About us page component
 *
 * @return {*}
 */

const About = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Navigation />
      <div className="about">
        <div className="about__header">&nbsp;</div>
        <div className={classes.container}></div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default About
