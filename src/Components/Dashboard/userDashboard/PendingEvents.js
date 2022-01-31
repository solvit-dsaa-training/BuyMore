import React from "react"
import { Row, Col } from "antd"
import { useStyles } from "./style"

const PendingEvents = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <div className={classes.Container}>
        <Row
          gutter={{ xs: 8, sm: 16, md: 24, lg: 5 }}
          style={{ marginBottom: "30px" }}
        >
          <Col className="gutter-row" span={16}>
            <div className={classes.EventContainer}>
              <h1 className={classes.EventTitle}>
                <strong>What is Lorem Ipsum?</strong>
              </h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>

              <div></div>
              <div style={{ marginTop: "40px" }}>
                <button className={classes.ApproveBtn}>Approved</button>
              </div>
            </div>
          </Col>
          <Col className="gutter-row" span={8}>
            <div>
              <img
                className={classes.EventImage}
                src="https://cdn.pixabay.com/photo/2014/05/21/15/18/musician-349790_960_720.jpg"
                alt="event_title"
              />
            </div>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  )
}

export default PendingEvents
