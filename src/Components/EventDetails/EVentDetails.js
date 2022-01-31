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
        <Grid container rowSpacing={1}>
          <Grid item xs={12}>
            <div className="event__details__banner">
              <figure>
                <img
                  src="https://images.unsplash.com/photo-1561489396-888724a1543d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Elephant at sunset"
                />
                {/* <figcaption>
                  <h1 className="heading__primary">
                    <span>The 7 Habbits of Highly Effective People.</span>
                  </h1>
                  <button className="event__ticket--btn">Buy Ticket</button>
                </figcaption> */}
              </figure>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="event__description">
              <h4 className="event__description-heading">
                <strong>All about this event</strong>
              </h4>
              <p className="event__description--paragraph">
                What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged.
              </p>
            </div>
          </Grid>
          <Grid item xs={12}>
            <Shedule />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default EVentDetails
