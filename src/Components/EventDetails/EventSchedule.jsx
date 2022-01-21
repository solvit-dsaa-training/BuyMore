import React from "react"
import "./event.css"
import { Row, Col, Divider } from "antd"
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
const EventSchedule = () => {
  return (
    <React.Fragment>
      <div className="event__schedule">
        <h4 className="event__description__sub-heading">
          <strong>Event Schedule</strong>
        </h4>
        <div>
          <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 10 }}
            style={{ marginBottom: "40px" }}
          >
            <Col className="gutter-row" span={6}>
              <div className="event__details_items">
                <div>
                  <DateRangeOutlinedIcon
                    className="Icon"
                    style={{ fontSize: "20px" }}
                  />
                  &nbsp;
                  <span className="detail__item__one">
                    <strong>Start Date</strong>
                  </span>
                  <span className="details__item__two">
                    Friday 31-01-2022,07:00
                  </span>
                </div>
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="event__details_items">
                <div>
                  <EventAvailableOutlinedIcon
                    className="Icon"
                    style={{ fontSize: "20px" }}
                  />
                  &nbsp;
                  <span className="detail__item__one">
                    <strong>End Date</strong>
                  </span>
                  <span className="details__item__two">
                    Friday 31-01-2022,05:00
                  </span>
                </div>
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="event__details_items">
                <div>
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
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="event__details_items">
                <div>
                  <MapIcon className="Icon" style={{ fontSize: "20px" }} />
                  &nbsp;
                  <span className="detail__item__one">
                    <strong>Venue</strong>
                  </span>
                  <span className="details__item__two">Kigali View Hotel</span>
                </div>
              </div>
            </Col>
          </Row>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 10 }}>
            <Col className="gutter-row" span={6}>
              <div className="event__details_items">
                <div>
                  <PersonIcon className="Icon" style={{ fontSize: "20px" }} />
                  &nbsp;
                  <span className="detail__item__one">
                    <strong>Organizer</strong>
                  </span>
                  <span className="details__item__two">Jean De Dieu</span>
                </div>
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="event__details_items">
                <div>
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
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="event__details_items">
                <div>
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
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="event__details_items">
                <div>
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
              </div>
            </Col>
          </Row>
          <div>
            <h4 className="event__description__sub-heading">
              <strong>Tickect Packages</strong>
            </h4>
            <Divider />
            <EventTickets />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default EventSchedule
