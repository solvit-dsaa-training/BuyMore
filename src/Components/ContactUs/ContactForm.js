import React from "react"
import Grid from "@material-ui/core/Grid"
import "./contact.css"
/**
 *contact form fields
 *
 * @return {*}
 */

const ContactForm = () => {
  return (
    <React.Fragment>
      <form>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={6} xl={6}>
            <input type="text" placeholder="Full Name" className="Inputs" />
          </Grid>
          <Grid item xs={12} sm={12} md={6} xl={6}>
            <input type="email" placeholder="Email" className="Inputs" />
          </Grid>
          <Grid item xs={12}>
            <input type="text" placeholder="Subject" className="Inputs" />
          </Grid>
          <Grid item xs={12}>
            <textarea
              placeholder="Your Message Please"
              className="TextArea"
              rows={7}
            />
          </Grid>
          <button className="sendBtn">Send It</button>
        </Grid>
      </form>
    </React.Fragment>
  )
}

export default ContactForm
