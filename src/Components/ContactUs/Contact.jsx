import React from "react"
import { useStyles } from "./style"
import "./contact.css"
import Navigation from "../Navigation/Navigation"
import ContactForm from "./ContactForm"
import Grid from "@mui/material/Grid"
import Footer from "../Footer/Footer"

/**
 *contact us component
 *
 * @return {*}
 */

const Contact = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Navigation />
      <div className={classes.Container}>
        <div className={classes.PartOne}>
          <h1 className="contact__heading-primary">
            <span className="contact__heading-main">Don't Hestate To </span>
            <span className="contact__heading-sub">Contact us</span>
          </h1>
        </div>
        <div className="contact__form-container">
          <h4 className={classes.getInTouch}> Get in Touch</h4>

          <Grid container rowSpacing={1}>
            <Grid item xs={6}>
              <ContactForm />
            </Grid>
            <Grid item xs={6}>
              <div className={classes.contactDetailsContainer}>
                <h4 className={classes.getInTouch}>Contact Details</h4>
                <div>
                  <div>
                    <span className={classes.contactTitle}>EMAIL</span>
                  </div>
                  <div>
                    <span>
                      <strong>example@gmail.com</strong>
                    </span>
                  </div>
                  <div>
                    <span className={classes.contactTitle}>PHONE</span>
                  </div>
                  <div>
                    <span>
                      <strong>+25078486836</strong>
                    </span>
                  </div>
                  <div>
                    <span className={classes.contactTitle}>ADDRESS</span>
                  </div>
                  <div>
                    <span>
                      <strong>Kigali,Rwanda </strong>
                    </span>
                  </div>
                  <div>
                    <span>
                      <strong>GASABO </strong>
                    </span>
                  </div>
                  <div>
                    <span>
                      <strong>KN 123</strong>
                    </span>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default Contact
