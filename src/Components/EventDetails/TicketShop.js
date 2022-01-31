import React from "react"
import { useStyles } from "./style"
import { Divider } from "antd"
import Payment from "./Payment"
import Grid from "@material-ui/core/Grid"

const TicketShop = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={6} xl={6}>
          <input
            type="text"
            placeholder="FirstName"
            className={classes.Inputs}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} xl={6}>
          <input
            type="text"
            placeholder="LastName"
            className={classes.Inputs}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} xl={6}>
          <input
            type="email"
            placeholder="Email"
            className={classes.Inputs}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} xl={6}>
          <input
            type="number"
            placeholder="Phone"
            className={classes.Inputs}
            required
          />
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
            min={1}
            placeholder="Number of Tickets"
            className={classes.Inputs}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} xl={6}>
          <div>
            <span> Amount:1000</span>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Divider />
          <Payment />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default TicketShop
