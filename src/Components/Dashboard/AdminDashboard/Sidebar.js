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
import PaidIcon from "@mui/icons-material/Paid"
import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn"
import Collapse from "@mui/material/Collapse"
import { useStyles } from "./style"

const MainListItems = ({
  handleAnalytics,
  handlePending,
  handleHappened,
  handleSoldTicket,
  handleRefunds,
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
          </ListItemButton>
          <ListItemButton onClick={handleHappened}>
            <ListItemIcon className={classes.InnerIcon}>
              <DoneAllIcon
                className={classes.Icons}
                style={{ fontSize: "18px", marginLeft: "10px" }}
              />
            </ListItemIcon>
            <ListItemText primary="Expired" className={classes.labels} />
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
          <ListItemButton onClick={handleSoldTicket}>
            <ListItemIcon className={classes.InnerIcon}>
              <PaidIcon
                className={classes.Icons}
                style={{ fontSize: "18px", marginLeft: "10px" }}
              />
            </ListItemIcon>
            <ListItemText primary="Sold" className={classes.labels} />
          </ListItemButton>
          <ListItemButton onClick={handleRefunds}>
            <ListItemIcon className={classes.InnerIcon}>
              <AssignmentReturnIcon
                className={classes.Icons}
                style={{ fontSize: "18px", marginLeft: "10px" }}
              />
            </ListItemIcon>
            <ListItemText primary="Refunded" className={classes.labels} />
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
