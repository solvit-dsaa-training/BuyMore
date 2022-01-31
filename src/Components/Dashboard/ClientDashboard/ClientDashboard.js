import React from "react"
import { useStyles } from "./style"
import Navigation from "../../Navigation/Navigation"
import SearchOptions from "../../Main/SearchOptions"
import Upcoming from "../../UpcomingEvents/Upcoming"
import Footer from "../../Footer/Footer"
import { Menu, Dropdown, Drawer, Space } from "antd"
import SettingsIcon from "@material-ui/icons/Settings"
import Grid from "@material-ui/core/Grid"
import Refunds from "./Refunds"
import Tickets from "./Tickets"

const ClientDashboard = () => {
  const classes = useStyles()
  const [visible, setVisible] = React.useState(false)
  const [isTickets, setIsTickets] = React.useState(false)
  const [isRefund, setIsRefunds] = React.useState(false)
  const [contents, setContents] = React.useState(null)

  const handleRefunds = () => {
    setVisible(true)
    setIsTickets(false)
    setIsRefunds(true)
  }
  const handleTickets = () => {
    setVisible(true)
    setIsTickets(true)
    setIsRefunds(false)
  }

  const onClose = () => {
    setVisible(false)
  }

  React.useEffect(() => {
    if (isTickets) {
      setContents(<Tickets />)
    }
    if (isRefund) {
      setContents(<Refunds />)
    }
  }, [isTickets, isRefund])

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <div onClick={handleTickets}>My Tickets</div>
      </Menu.Item>
      <Menu.Item key="0">
        <div onClick={handleRefunds}>Apply Refunds</div>
      </Menu.Item>
    </Menu>
  )

  return (
    <React.Fragment>
      <>
        <Drawer
          title={
            isTickets ? (
              <span className={classes.Refund}>My Tickets</span>
            ) : (
              <span className={classes.Refund}>Apply for Refund</span>
            )
          }
          placement="right"
          onClose={onClose}
          visible={visible}
          width="100%"
          extra={
            <Space>
              <button onClick={onClose} className={classes.cancelBtn}>
                Cancel
              </button>

              {isRefund && (
                <button onClick={onClose} className={classes.SendBtn}>
                  Submit
                </button>
              )}
            </Space>
          }
        >
          {contents}
        </Drawer>
      </>
      <Navigation />
      <div className={classes.MainContainer}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div>
              <Dropdown overlay={menu}>
                <div className={`${classes.setting} ant-dropdown-link`}>
                  <SettingsIcon />
                  &nbsp; settings
                </div>
              </Dropdown>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.SearchOptionContainer}>
              <SearchOptions />
            </div>
          </Grid>
          <Grid item xs={12}>
            <h4 className={classes.subHeaders}>Upcoming Events</h4>
          </Grid>
          <Grid item xs={12}>
            <Upcoming />
            <Upcoming />
            <Upcoming />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default ClientDashboard
