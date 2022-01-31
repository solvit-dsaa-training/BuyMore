import React from "react"
import { useStyles } from "./style"
import { Row, Col } from "antd"
import SearchOptions from "./SearchOptions"
import Upcoming from "../UpcomingEvents/Upcoming"

/**
 *
 *
 * @return {*}
 */

const Main = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <main className={classes.MainContainer}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={24}>
            <div className={classes.SearchOptionContainer}>
              <SearchOptions />
            </div>
          </Col>
        </Row>
        <h4 className={classes.subHeaders}>Upcoming Events</h4>
        <Upcoming />
        <Upcoming />
        <Upcoming />
      </main>
    </React.Fragment>
  )
}

export default Main
