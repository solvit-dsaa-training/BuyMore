import React from "react"
import { useStyles } from "./style"
import "./contact.css"
import Navigation from "../Navigation/Navigation"
import ContactForm from "./ContactForm"
import Grid from "@material-ui/core/Grid"
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
        <div className="PartOne">
          <h1 className="contact__heading-primary">
            <span className="contact__heading-main">Don't Hestate To </span>
            <span className="contact__heading-sub">Contact us</span>
          </h1>
        </div>
        <div className="contact__form-container">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <h4 className={classes.getInTouch}> Get in Touch</h4>
            </Grid>
            <Grid item xs={12} sm={12} md={6} xl={6}>
              <ContactForm />
            </Grid>
            <Grid item xs={12} sm={12} md={6} xl={6}>
              <div className={classes.contactDetailsContainer}>
                <h4 className="getInTouch">Contact Details</h4>
                <div>
                  <div>
                    <span className={classes.contactTitle}>EMAIL</span>
                  </div>
                  <div>
                    <span>example@gmail.com</span>
                  </div>
                  <div>
                    <span className={classes.contactTitle}>PHONE</span>
                  </div>
                  <div>
                    <span>+25078486836</span>
                  </div>
                  <div>
                    <span className={classes.contactTitle}>ADDRESS</span>
                  </div>
                  <div>
                    <span>Kigali,Rwanda</span>
                  </div>
                  <div>
                    <span>GASABO</span>
                  </div>
                  <div>
                    <span>KN 123</span>
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
