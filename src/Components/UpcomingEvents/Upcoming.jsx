import React from "react"
import { Row, Col, Card } from "antd"
import { useStyles } from "./style"
import { useNavigate } from "react-router-dom"
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
  return (
    <React.Fragment>
      <div className={classes.upcomings}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={6}>
            <Card
              hoverable
              className={classes.Card}
              onClick={handleDetails}
              cover={
                <img
                  alt="example"
                  src="https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662__340.jpg"
                />
              }
            >
              <div className="event__card__description">
                <div>
                  <strong>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </strong>
                  <div className={classes.eventTime}>
                    <span>Today: 8h:00-11h:00</span>
                  </div>
                </div>
                <div className="event__ticketbtn-container">
                  <button className="event__ticketbtn">Buy Ticket</button>
                </div>
              </div>
            </Card>
          </Col>
          <Col className="gutter-row" span={6}>
            <Card
              className={classes.Card}
              onClick={handleDetails}
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://cdn.pixabay.com/photo/2016/11/29/06/17/audience-1867754__340.jpg"
                />
              }
            >
              <div className="event__card__description">
                <div>
                  <strong>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </strong>
                  <div className={classes.eventTime}>
                    <span>Today: 8h:00-11h:00</span>
                  </div>
                </div>
                <div className="event__ticketbtn-container">
                  <button className="event__ticketbtn">Buy Ticket</button>
                </div>
              </div>
            </Card>
          </Col>
          <Col className="gutter-row" span={6}>
            <Card
              className={classes.Card}
              onClick={handleDetails}
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://cdn.pixabay.com/photo/2018/01/15/21/50/concert-3084876__340.jpg"
                />
              }
            >
              <div className="event__card__description">
                <div>
                  <strong>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </strong>
                  <div className={classes.eventTime}>
                    <span>Today: 8h:00-11h:00</span>
                  </div>
                </div>
                <div className="event__ticketbtn-container">
                  <button className="event__ticketbtn">Buy Ticket</button>
                </div>
              </div>
            </Card>
          </Col>
          <Col className="gutter-row" span={6}>
            <Card
              className={classes.Card}
              onClick={handleDetails}
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://cdn.pixabay.com/photo/2016/11/18/15/44/audience-1835431__340.jpg"
                />
              }
            >
              <div className="event__card__description">
                <div>
                  <strong>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </strong>
                  <div className={classes.eventTime}>
                    <span>Today: 8h:00-11h:00</span>
                  </div>
                </div>
                <div className="event__ticketbtn-container">
                  <button className="event__ticketbtn">Buy Ticket</button>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  )
}

export default Upcoming
