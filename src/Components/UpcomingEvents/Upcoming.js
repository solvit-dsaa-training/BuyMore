import React from "react"
import { Card } from "antd"
import { useStyles } from "./style"
import { useNavigate } from "react-router-dom"
import DateRangeIcon from "@mui/icons-material/DateRange"
import MapIcon from "@mui/icons-material/Map"
import Grid from "@material-ui/core/Grid"
import "./animation.css"

/**
 *
 *
 * @return {*}
 */

const Upcoming = () => {
  const classes = useStyles()
  const naviagte = useNavigate()
  const handleDetails = () => {
    naviagte("/event/details")
  }
  const [loading, setLoading] = React.useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 5000)

  return (
    <React.Fragment>
      <div className={classes.upcomings}>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
              <Card
                loading={loading}
                hoverable
                className={`${classes.Card}`}
                onClick={handleDetails}
                cover={
                  <img
                    alt="example"
                    src="https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662__340.jpg"
                  />
                }
              >
                <div className="event__card__description">
                  <div className={classes.eventCardDates}>
                    <h2 className={classes.EventTitle}>Event Title Here</h2>
                    <div className={classes.eventTime}>
                      <div>
                        <DateRangeIcon className={classes.Icon} />
                        &nbsp; &nbsp;
                        <span>
                          <strong>Friday 31-01-22</strong>
                        </span>
                      </div>
                      <div>
                        <MapIcon className={classes.Icon} />
                        &nbsp; &nbsp;
                        <span>Kigali View Hotel</span>
                      </div>
                    </div>
                  </div>
                  <div className="event__ticketbtn-container">
                    <button className="event__ticketbtn">Buy Ticket</button>
                  </div>
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
              <Card
                className={classes.Card}
                onClick={handleDetails}
                hoverable
                loading={loading}
                cover={
                  <img
                    alt="example"
                    src="https://cdn.pixabay.com/photo/2016/11/29/06/17/audience-1867754__340.jpg"
                  />
                }
              >
                <div className="event__card__description">
                  <div className={classes.eventCardDates}>
                    <h2 className={classes.EventTitle}>Event Title Here</h2>
                    <div className={classes.eventTime}>
                      <div>
                        <DateRangeIcon className={classes.Icon} />
                        &nbsp; &nbsp;
                        <strong>Friday 31-01-22</strong>
                      </div>
                      <div>
                        <MapIcon className={classes.Icon} />
                        &nbsp; &nbsp;
                        <span>Kigali View Hotel</span>
                      </div>
                    </div>
                  </div>
                  <div className="event__ticketbtn-container">
                    <button className="event__ticketbtn">Buy Ticket</button>
                  </div>
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
              <Card
                className={classes.Card}
                onClick={handleDetails}
                hoverable
                loading={loading}
                cover={
                  <img
                    alt="example"
                    src="https://cdn.pixabay.com/photo/2018/01/15/21/50/concert-3084876__340.jpg"
                  />
                }
              >
                <div className="event__card__description">
                  <div className={classes.eventCardDates}>
                    <h2 className={classes.EventTitle}>Event Title Here</h2>
                    <div className={classes.eventTime}>
                      <div>
                        <DateRangeIcon className={classes.Icon} />
                        &nbsp; &nbsp;
                        <strong>Friday 31-01-22</strong>
                      </div>
                      <div>
                        <MapIcon className={classes.Icon} />
                        &nbsp; &nbsp;
                        <span>Kigali View Hotel</span>
                      </div>
                    </div>
                  </div>
                  <div className="event__ticketbtn-container">
                    <button className="event__ticketbtn">Buy Ticket</button>
                  </div>
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
              <Card
                loading={loading}
                hoverable
                className={`${classes.Card}`}
                onClick={handleDetails}
                cover={
                  <img
                    alt="example"
                    src="https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662__340.jpg"
                  />
                }
              >
                <div className="event__card__description">
                  <div className={classes.eventCardDates}>
                    <h2 className={classes.EventTitle}>Event Title Here</h2>
                    <div className={classes.eventTime}>
                      <div>
                        <DateRangeIcon className={classes.Icon} />
                        &nbsp; &nbsp;
                        <span>
                          <strong>Friday 31-01-22</strong>
                        </span>
                      </div>
                      <div>
                        <MapIcon className={classes.Icon} />
                        &nbsp; &nbsp;
                        <span>Kigali View Hotel</span>
                      </div>
                    </div>
                  </div>
                  <div className="event__ticketbtn-container">
                    <button className="event__ticketbtn">Buy Ticket</button>
                  </div>
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
              <Card
                className={classes.Card}
                onClick={handleDetails}
                hoverable
                loading={loading}
                cover={
                  <img
                    alt="example"
                    src="https://cdn.pixabay.com/photo/2016/11/29/06/17/audience-1867754__340.jpg"
                  />
                }
              >
                <div className="event__card__description">
                  <div className={classes.eventCardDates}>
                    <h2 className={classes.EventTitle}>Event Title Here</h2>
                    <div className={classes.eventTime}>
                      <div>
                        <DateRangeIcon className={classes.Icon} />
                        &nbsp; &nbsp;
                        <strong>Friday 31-01-22</strong>
                      </div>
                      <div>
                        <MapIcon className={classes.Icon} />
                        &nbsp; &nbsp;
                        <span>Kigali View Hotel</span>
                      </div>
                    </div>
                  </div>
                  <div className="event__ticketbtn-container">
                    <button className="event__ticketbtn">Buy Ticket</button>
                  </div>
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
              <Card
                className={classes.Card}
                onClick={handleDetails}
                hoverable
                loading={loading}
                cover={
                  <img
                    alt="example"
                    src="https://cdn.pixabay.com/photo/2018/01/15/21/50/concert-3084876__340.jpg"
                  />
                }
              >
                <div className="event__card__description">
                  <div className={classes.eventCardDates}>
                    <h2 className={classes.EventTitle}>Event Title Here</h2>
                    <div className={classes.eventTime}>
                      <div>
                        <DateRangeIcon className={classes.Icon} />
                        &nbsp; &nbsp;
                        <strong>Friday 31-01-22</strong>
                      </div>
                      <div>
                        <MapIcon className={classes.Icon} />
                        &nbsp; &nbsp;
                        <span>Kigali View Hotel</span>
                      </div>
                    </div>
                  </div>
                  <div className="event__ticketbtn-container">
                    <button className="event__ticketbtn">Buy Ticket</button>
                  </div>
                </div>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Upcoming
