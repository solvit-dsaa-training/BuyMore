import React from "react"
import "./event.css"
import AccessTimeIcon from "@mui/icons-material/AccessTime"

/**
 *
 *
 * @return {*}
 */
const EventSchedule = () => {
  return (
    <React.Fragment>
      <div className="event__schedule">
        <div className="event__schedule__heading">Event Schedule</div>
        <div className="event__schedule__time">
          <div className="event__time-one">
            <span>Day 1</span>
          </div>
          <div className="event__time-two">
            <span>Day 2</span>
          </div>
          <div className="event__time-three">
            <span>Day 3</span>
          </div>
          <div className="event__time-four">
            <span>Day 4</span>
          </div>
          <div className="event__time-five">
            <span>Day 5</span>
          </div>
        </div>
        <div>
          <div className="event__daily__action--container">
            <div className="event__daily__action--card-one event-card">
              <div className="speaker__picture">
                <img
                  src="https://cdn.pixabay.com/photo/2016/04/11/10/19/speaker-1321670_960_720.jpg"
                  alt="speaker"
                />
              </div>
              <div className="event__daily__topic">
                <span className="event__topic__name">Lorem Ipsum</span>
                <span className="event__topic__speaker">John Smith</span>
              </div>
              <div className="event_daily__time">
                <span className="event__time_figures">
                  <AccessTimeIcon className="timeIcon" />
                  80 AM -11 PM
                </span>
              </div>
            </div>
            <div className="event__daily__action--card-two event-card">
              <div className="speaker__picture">
                <img
                  src="https://cdn.pixabay.com/photo/2016/04/11/10/19/speaker-1321670_960_720.jpg"
                  alt="speaker"
                />
              </div>
              <div className="event__daily__topic">
                <span className="event__topic__name">Lorem Ipsum</span>
                <span className="event__topic__speaker">John Smith</span>
              </div>
              <div className="event_daily__time">
                <span className="event__time_figures">
                  <AccessTimeIcon className="timeIcon" />
                  8:00 AM -11:00 PM
                </span>
              </div>
            </div>
            <div className="event__daily__action--card-three event-card">
              <div className="speaker__picture">
                <img
                  src="https://cdn.pixabay.com/photo/2016/04/11/10/19/speaker-1321670_960_720.jpg"
                  alt="speaker"
                />
              </div>
              <div className="event__daily__topic">
                <span className="event__topic__name">Lorem Ipsum</span>
                <span className="event__topic__speaker">John Smith</span>
              </div>
              <div className="event_daily__time">
                <span className="event__time_figures">
                  <AccessTimeIcon className="timeIcon" />
                  80 AM -11 PM
                </span>
              </div>
            </div>
            <div className="event__daily__action--card-four event-card">
              <div className="speaker__picture">
                <img
                  src="https://cdn.pixabay.com/photo/2016/04/11/10/19/speaker-1321670_960_720.jpg"
                  alt="speaker"
                />
              </div>
              <div className="event__daily__topic">
                <span className="event__topic__name">Lorem Ipsum</span>
                <span className="event__topic__speaker">John Smith</span>
              </div>
              <div className="event_daily__time">
                <span className="event__time_figures">
                  <AccessTimeIcon className="timeIcon" />
                  80 AM -11 PM
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default EventSchedule
