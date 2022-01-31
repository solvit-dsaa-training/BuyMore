import React from "react"
import { Row, Col, Card } from "antd"
import { useStyles } from "./style"
import { useNavigate } from "react-router-dom"
import FavoriteIcon from "@mui/icons-material/Favorite"

const { Meta } = Card

/**
 *
 *
 * @return {*}
 */

const MoreEvents = () => {
  const classes = useStyles()
  const navigate = useNavigate()

  const handleDetails = () => {
    navigate("/event/details")
  }
  return (
    <React.Fragment>
      <div className={classes.moreEvents}>
        <h4 className={classes.subHeaders}>More Events</h4>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={4}>
            <Card
              hoverable
              className={classes.Card}
              cover={
                <img
                  onClick={handleDetails}
                  alt="example"
                  src="https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662__340.jpg"
                />
              }
            >
              <span className={classes.HeartIcon}>
                <FavoriteIcon />
              </span>
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
          <Col className="gutter-row" span={4}>
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
              <span className={classes.HeartIcon}>
                <FavoriteIcon />
              </span>
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
          <Col className="gutter-row" span={4}>
            <Card
              onClick={handleDetails}
              className={classes.Card}
              hoverable
              style={{ width: 200 }}
              cover={
                <img
                  alt="example"
                  src="https://cdn.pixabay.com/photo/2018/01/15/21/50/concert-3084876__340.jpg"
                />
              }
            >
              <span className={classes.HeartIcon}>
                <FavoriteIcon />
              </span>
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
          <Col className="gutter-row" span={4}>
            <Card
              onClick={handleDetails}
              className={classes.Card}
              hoverable
              style={{ width: 200 }}
              cover={
                <img
                  alt="example"
                  src="https://cdn.pixabay.com/photo/2016/11/18/15/44/audience-1835431__340.jpg"
                />
              }
            >
              <span className={classes.HeartIcon}>
                <FavoriteIcon />
              </span>
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
          <Col className="gutter-row" span={4}>
            <Card
              onClick={handleDetails}
              className={classes.Card}
              hoverable
              style={{ width: 200 }}
              cover={
                <img
                  alt="example"
                  src="https://cdn.pixabay.com/photo/2015/05/07/11/02/guitar-756326__340.jpg"
                />
              }
            >
              <span className={classes.HeartIcon}>
                <FavoriteIcon />
              </span>
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
          <Col className="gutter-row" span={4}>
            <Card
              onClick={handleDetails}
              className={classes.Card}
              hoverable
              style={{ width: 200 }}
              cover={
                <img
                  alt="example"
                  src="https://cdn.pixabay.com/photo/2016/11/19/11/11/dua-lipa-1838653__340.jpg"
                />
              }
            >
              <span className={classes.HeartIcon}>
                <FavoriteIcon />
              </span>
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  )
}

export default MoreEvents
