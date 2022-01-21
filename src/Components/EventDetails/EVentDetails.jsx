import React from "react"
import "./event.css"
import Navigation from "../Navigation/Navigation"
import Grid from "@mui/material/Grid"
import Shedule from "./EventSchedule"
import Footer from "../Footer/Footer"

/**
 *
 *
 * @return {*}
 */

const EVentDetails = () => {
  return (
    <React.Fragment>
      <Navigation />
      <div className="event__details">
        <div className="event__details__banner">
          <h1 className="heading__primary">
            <span>The 7 Habbits of Highly Effective People.</span>
          </h1>
          <button className="event__ticket--btn">Buy Ticket</button>
        </div>
        <div>
          <Grid container rowSpacing={1}>
            <Grid item xs={12}>
              <div className="event__description">
                <h4 className="event__description-heading">
                  <strong>All about this event</strong>
                </h4>
                <p className="event__description--paragraph">
                  What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived not only five centuries,
                  but also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </div>
            </Grid>
            <Grid item xs={12}>
              <Shedule />
            </Grid>
          </Grid>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default EVentDetails
