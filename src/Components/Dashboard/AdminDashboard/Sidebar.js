import * as React from "react"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import ListItemButton from "@mui/material/ListItemButton"
import ExpandLess from "@mui/icons-material/ExpandLess"
import ExpandMore from "@mui/icons-material/ExpandMore"
import EventIcon from "@mui/icons-material/Event"
import PeopleIcon from "@mui/icons-material/People"
import AddBoxIcon from "@mui/icons-material/AddBox"
import PendingActionsIcon from "@mui/icons-material/PendingActions"
import DoneAllIcon from "@mui/icons-material/DoneAll"
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket"
import TimelineIcon from "@mui/icons-material/Timeline"
import Collapse from "@mui/material/Collapse"
import Badge from "@mui/material/Badge"
import IconButton from "@mui/material/IconButton"
import NotificationsIcon from "@mui/icons-material/Notifications"
import { useStyles } from "./style"

const MainListItems = ({
  handleAnalytics,
  handlePending,
  handleHappened,
  handleCreateEvent,
  handleUsers,
  handleCreateTickets,
  setOpen,
}) => {
  const classes = useStyles()
  const [event, setEvent] = React.useState(true)
  const [ticket, setTicket] = React.useState(true)

  const handleEvents = () => {
    setEvent(!event)
  }

  const handleTicket = () => {
    setTicket(!ticket)
  }
  const handleDrawer = () => {
    setOpen(true)
  }
  return (
    <React.Fragment>
      <div>
        <ListItemButton onClick={handleAnalytics}>
          <ListItemIcon>
            <TimelineIcon className={classes.Icons} />
          </ListItemIcon>
          <ListItemText primary="Analytics" className={classes.labels} />
        </ListItemButton>
        <ListItemButton onClick={handleEvents}>
          <ListItemIcon onClick={handleDrawer}>
            <EventIcon className={classes.Icons} />
          </ListItemIcon>
          <ListItemText primary="Events" className={classes.labels} />
          {event ? (
            <ExpandLess className={classes.Icons} />
          ) : (
            <ExpandMore className={classes.Icons} />
          )}
        </ListItemButton>
        <Collapse in={event} timeout="auto" unmountOnExit>
          <ListItemButton onClick={handleCreateEvent}>
            <ListItemIcon className={classes.InnerIcon}>
              <AddBoxIcon
                className={classes.Icons}
                style={{ fontSize: "18px", marginLeft: "10px" }}
              />
            </ListItemIcon>
            <ListItemText primary="Create" className={classes.labels} />
          </ListItemButton>
          <ListItemButton onClick={handlePending}>
            <ListItemIcon className={classes.InnerIcon}>
              <PendingActionsIcon
                className={classes.Icons}
                style={{ fontSize: "18px", marginLeft: "10px" }}
              />
            </ListItemIcon>
            <ListItemText primary="Pending" className={classes.labels} />
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon className={classes.Icons} />
              </Badge>
            </IconButton>
          </ListItemButton>
          <ListItemButton onClick={handleHappened}>
            <ListItemIcon className={classes.InnerIcon}>
              <DoneAllIcon
                className={classes.Icons}
                style={{ fontSize: "18px", marginLeft: "10px" }}
              />
            </ListItemIcon>
            <ListItemText primary="Expired" className={classes.labels} />
            <IconButton color="inherit">
              <Badge badgeContent={5} color="secondary">
                <NotificationsIcon className={classes.Icons} />
              </Badge>
            </IconButton>
          </ListItemButton>
        </Collapse>
        <ListItemButton onClick={handleTicket}>
          <ListItemIcon onClick={handleDrawer}>
            <AirplaneTicketIcon className={classes.Icons} />
          </ListItemIcon>
          <ListItemText primary="Ticket" className={classes.labels} />
          {ticket ? (
            <ExpandLess className={classes.Icons} />
          ) : (
            <ExpandMore className={classes.Icons} />
          )}
        </ListItemButton>
        <Collapse in={ticket} timeout="auto" unmountOnExit>
          <ListItemButton onClick={handleCreateTickets}>
            <ListItemIcon className={classes.InnerIcon}>
              <AddBoxIcon
                className={classes.Icons}
                style={{ fontSize: "18px", marginLeft: "10px" }}
              />
            </ListItemIcon>
            <ListItemText primary="Create" className={classes.labels} />
          </ListItemButton>
        </Collapse>
        <ListItemButton onClick={handleUsers}>
          <ListItemIcon>
            <PeopleIcon className={classes.Icons} />
          </ListItemIcon>
          <ListItemText primary="Users" className={classes.labels} />
        </ListItemButton>
      </div>
    </React.Fragment>
  )
}

export default MainListItems
