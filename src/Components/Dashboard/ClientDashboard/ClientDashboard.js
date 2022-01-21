import React from "react"
import { useStyles } from "./style"
import Navigation from "../../Navigation/Navigation"
import SearchOptions from "../../Main/SearchOptions"
import Upcoming from "../../UpcomingEvents/Upcoming"
import { Row, Col } from "antd"
import Footer from "../../Footer/Footer"
import { Menu, Dropdown } from "antd"
import { DownOutlined } from "@ant-design/icons"

const ClientDashboard = () => {
  const classes = useStyles()

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <div>My Tickets</div>
      </Menu.Item>
    </Menu>
  )

  return (
    <React.Fragment>
      <Navigation />
      <div className={classes.MainContainer}>
        <div>
          <Dropdown overlay={menu}>
            <span className={`${classes.setting} ant-dropdown-link`}>
              settings &nbsp;
              <DownOutlined />
            </span>
          </Dropdown>
        </div>
        <Row
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          style={{ marginBottom: "200px" }}
        >
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
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default ClientDashboard
