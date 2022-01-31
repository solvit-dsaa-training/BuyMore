import React from "react"
import Grid from "@material-ui/core/Grid"
import { useStyles } from "./style"

const Refunds = () => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6} xl={6}>
          <input
            type="text"
            placeholder="First name"
            className={classes.Inputs}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} xl={6}>
          <input
            type="text"
            placeholder="Last name"
            className={classes.Inputs}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} xl={6}>
          <input type="email" placeholder="Email" className={classes.Inputs} />
        </Grid>
        <Grid item xs={12} sm={6} md={6} xl={6}>
          <input type="number" placeholder="Phone" className={classes.Inputs} />
        </Grid>
        <Grid item xs={12} sm={6} md={6} xl={6}>
          <select className={classes.Inputs}>
            <option>Which Type</option>
            <option>GENERAL</option>
            <option>VIP</option>
            <option>VVIP</option>
          </select>
        </Grid>
        <Grid item xs={12} sm={6} md={6} xl={6}>
          <input
            type="number"
            placeholder="How match"
            className={classes.Inputs}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} xl={12}>
          <textarea
            rows={10}
            placeholder="Description"
            className={classes.textArea}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Refunds
