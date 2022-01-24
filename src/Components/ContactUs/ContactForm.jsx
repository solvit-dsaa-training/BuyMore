import React from "react"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import { useStyles } from "./style"

/**
 *contact form fields
 *
 * @return {*}
 */

const ContactForm = () => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <form>
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <input
                type="text"
                placeholder="Full Name"
                className={classes.Inputs}
              />
            </Grid>
            <Grid item xs={6}>
              <input
                type="email"
                placeholder="Email"
                className={classes.Inputs}
              />
            </Grid>
            <Grid item xs={12}>
              <input
                type="text"
                placeholder="Subject"
                className={classes.Inputs}
              />
            </Grid>
            <Grid item xs={12}>
              <textarea
                placeholder="Your Message Please"
                className={classes.TextArea}
                rows={7}
              />
            </Grid>
            <button className="sendBtn">Send It</button>
          </Grid>
        </Box>
      </form>
    </React.Fragment>
  )
}

export default ContactForm
