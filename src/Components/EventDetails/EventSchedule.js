import React from "react"
import "./event.css"
import { Divider } from "antd"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined"
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined"
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined"
import PersonIcon from "@mui/icons-material/Person"
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined"
import MapIcon from "@mui/icons-material/Map"
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined"
import EventTickets from "./EventTicket"

/**
 *
 *
 * @return {*}
 */

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}))

const EventSchedule = () => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <div className="event__schedule">
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <h4 className="event__description__sub-heading">
                <strong>Event Schedule</strong>
              </h4>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
              <div className="schedule__items">
                <DateRangeOutlinedIcon
                  className="Icon"
                  style={{ fontSize: "20px" }}
                />
                &nbsp;
                <span className="detail__item__one">
                  <strong>Start Date</strong>
                </span>
                <span className="details__item__two">Friday 31-01-2022</span>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
              <div className="schedule__items">
                <EventAvailableOutlinedIcon
                  className="Icon"
                  style={{ fontSize: "20px" }}
                />
                &nbsp;
                <span className="detail__item__one">
                  <strong>End Date</strong>
                </span>
                <span className="details__item__two">Friday 31-01-2022</span>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
              <div className="schedule__items">
                <PendingActionsOutlinedIcon
                  className="Icon"
                  style={{ fontSize: "20px" }}
                />
                &nbsp;
                <span className="detail__item__one">
                  <strong>Status</strong>
                </span>
                <span className="details__item__two"> Pendig</span>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
              <div className="schedule__items">
                <MapIcon className="Icon" style={{ fontSize: "20px" }} />
                &nbsp;
                <span className="detail__item__one">
                  <strong>Venue</strong>
                </span>
                <span className="details__item__two">Kigali View Hotel</span>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
              <div className="schedule__items">
                <PersonIcon className="Icon" style={{ fontSize: "20px" }} />
                &nbsp;
                <span className="detail__item__one">
                  <strong>Organizer</strong>
                </span>
                <span className="details__item__two">Jean De Dieu</span>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
              <div className="schedule__items">
                <LocationOnOutlinedIcon
                  className="Icon"
                  style={{ fontSize: "20px" }}
                />
                &nbsp;
                <span className="detail__item__one">
                  <strong>Address</strong>
                </span>
                <span className="details__item__two">KK 23 Ave,Kigali</span>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
              <div className="schedule__items">
                <PhoneAndroidOutlinedIcon
                  className="Icon"
                  style={{ fontSize: "20px" }}
                />
                &nbsp;
                <span className="detail__item__one">
                  <strong>Phone</strong>
                </span>
                <span className="details__item__two"> +250784860836</span>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
              <div className="schedule__items">
                <EmailOutlinedIcon
                  className="Icon"
                  style={{ fontSize: "20px" }}
                />
                &nbsp;
                <span className="detail__item__one">
                  <strong>Email</strong>
                </span>
                <span className="details__item__two">Kigali View Hotel</span>
              </div>
            </Grid>
            <Grid item xs={12}>
              <h4 className="event__description__sub-heading">
                <strong>Tickect Packages</strong>
              </h4>
            </Grid>
            <Grid item xs={12}>
              <div>
                <Divider />
                <EventTickets />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </React.Fragment>
  )
}

export default EventSchedule
