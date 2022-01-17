import * as React from "react"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import ListItemButton from "@mui/material/ListItemButton"
import DashboardIcon from "@mui/icons-material/Dashboard"
import ExpandLess from "@mui/icons-material/ExpandLess"
import ExpandMore from "@mui/icons-material/ExpandMore"
import EventIcon from "@mui/icons-material/Event"
import PeopleIcon from "@mui/icons-material/People"
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt"
import AddBoxIcon from "@mui/icons-material/AddBox"
import PendingActionsIcon from "@mui/icons-material/PendingActions"
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt"
import DoneAllIcon from "@mui/icons-material/DoneAll"
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket"
import PaidIcon from "@mui/icons-material/Paid"
import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn"
import Collapse from "@mui/material/Collapse"
import { useStyles } from "./style"

const MainListItems = ({ setOpen }) => {
  const classes = useStyles()
  const [event, setEvent] = React.useState(true)
  const [ticket, setTicket] = React.useState(true)
  const [focussed, setFocussed] = React.useState(true)

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
        <ListItemButton>
          <ListItemIcon onClick={handleDrawer}>
            <DashboardIcon className={classes.Icons} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" className={classes.labels} />
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
          <ListItemButton onClick={handleDrawer}>
            <ListItemIcon className={classes.InnerIcon}>
              <AddBoxIcon
                className={classes.Icons}
                style={{ fontSize: "18px", marginLeft: "10px" }}
              />
            </ListItemIcon>
            <ListItemText primary="Create" className={classes.labels} />
          </ListItemButton>
          <ListItemButton onClick={handleDrawer}>
            <ListItemIcon className={classes.InnerIcon}>
              <PendingActionsIcon
                className={classes.Icons}
                style={{ fontSize: "18px", marginLeft: "10px" }}
              />
            </ListItemIcon>
            <ListItemText primary="Pending" className={classes.labels} />
          </ListItemButton>
          <ListItemButton onClick={handleDrawer}>
            <ListItemIcon className={classes.InnerIcon}>
              <ThumbUpAltIcon
                className={classes.Icons}
                style={{ fontSize: "18px", marginLeft: "10px" }}
              />
            </ListItemIcon>
            <ListItemText primary="Approved " className={classes.labels} />
          </ListItemButton>
          <ListItemButton onClick={handleDrawer}>
            <ListItemIcon className={classes.InnerIcon}>
              <ThumbDownAltIcon
                className={classes.Icons}
                style={{ fontSize: "18px", marginLeft: "10px" }}
              />
            </ListItemIcon>
            <ListItemText primary="Rejected" className={classes.labels} />
          </ListItemButton>
          <ListItemButton onClick={handleDrawer}>
            <ListItemIcon className={classes.InnerIcon}>
              <DoneAllIcon
                className={classes.Icons}
                style={{ fontSize: "18px", marginLeft: "10px" }}
              />
            </ListItemIcon>
            <ListItemText primary="Happened" className={classes.labels} />
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
          <ListItemButton onClick={handleDrawer}>
            <ListItemIcon className={classes.InnerIcon}>
              <PaidIcon
                className={classes.Icons}
                style={{ fontSize: "18px", marginLeft: "10px" }}
              />
            </ListItemIcon>
            <ListItemText primary="Sold" className={classes.labels} />
          </ListItemButton>
          <ListItemButton onClick={handleDrawer}>
            <ListItemIcon className={classes.InnerIcon}>
              <AssignmentReturnIcon
                className={classes.Icons}
                style={{ fontSize: "18px", marginLeft: "10px" }}
              />
            </ListItemIcon>
            <ListItemText primary="Refunded" className={classes.labels} />
          </ListItemButton>
        </Collapse>
      </div>
    </React.Fragment>
  )
}

export default MainListItems
