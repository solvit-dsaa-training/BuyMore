import React from "react"
import "./event.css"
import { Row, Col, Card } from "antd"

const { Meta } = Card

/**
 *
 *
 * @return {*}
 */

const EvetentSpeakers = () => {
  return (
    <React.Fragment>
      <div>
        <h2 className="event__speakers"> Event Speakers</h2>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={6}>
            <div>
              <Card
                hoverable
                style={{ width: 300 }}
                cover={
                  <img
                    alt="example"
                    src="https://cdn.pixabay.com/photo/2016/04/11/10/19/speaker-1321670_960_720.jpg"
                  />
                }
              >
                <Meta
                  title="Dr. John Doe"
                  description="Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry"
                />
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div>
              <Card
                hoverable
                style={{ width: 300 }}
                cover={
                  <img
                    alt="example"
                    src="https://images.unsplash.com/flagged/photo-1568187113326-974ff6d0c6b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
                  />
                }
              >
                <Meta
                  title="Dr. John Doe"
                  description="Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry"
                />
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div>
              <Card
                hoverable
                style={{ width: 300 }}
                cover={
                  <img
                    alt="example"
                    src="https://images.unsplash.com/photo-1560439514-e960a3ef5019?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  />
                }
              >
                <Meta
                  title="Dr. John Doe"
                  description="Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry"
                />
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div>
              <Card
                hoverable
                style={{ width: 300 }}
                cover={
                  <img
                    alt="example"
                    src="https://images.unsplash.com/photo-1560439513-74b037a25d84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fGV2ZW50JTIwc3BlYWtlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  />
                }
              >
                <Meta
                  title="Dr. John Doe"
                  description="Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry"
                />
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  )
}

export default EvetentSpeakers
