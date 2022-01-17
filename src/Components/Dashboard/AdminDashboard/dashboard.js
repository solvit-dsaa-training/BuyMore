import * as React from "react"
import { styled, createTheme, ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import MuiDrawer from "@mui/material/Drawer"
import Box from "@mui/material/Box"
import MuiAppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import List from "@mui/material/List"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import IconButton from "@mui/material/IconButton"
import Badge from "@mui/material/Badge"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import MenuIcon from "@mui/icons-material/Menu"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import NotificationsIcon from "@mui/icons-material/Notifications"
import SettingsIcon from "@mui/icons-material/Settings"
import Avatar from "@mui/material/Avatar"
import SideBar from "./Sidebar"
import { useStyles } from "./style"
import Analytics from "./Analytics"
import Sales from "./Sales"
import PendingEvents from "./PendingEvents"
import ApprovedEvents from "./ApprovedEvents"
import CreateEvent from "./CreateEvent"
import HappenedEvents from "./Happened"
import Refunded from "./Refunded"
import Rejected from "./Rejected"
import SoldTicket from "./SOldTickets"
import Users from "./Users"

const drawerWidth = 240

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}))

const mdTheme = createTheme()

const DashboardContent = () => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(true)
  const [isAnalytics, setIsAnalytics] = React.useState(true)
  const [isSales, setIsSales] = React.useState(false)
  const [isPending, setIsPending] = React.useState(false)
  const [isApproved, setIsApproved] = React.useState(false)
  const [isRejected, setIsRejected] = React.useState(false)
  const [isHappened, setIsHappened] = React.useState(false)
  const [isSoldTicket, setIsSoldTicket] = React.useState(false)
  const [isRefunded, setIsRefunded] = React.useState(false)
  const [isCreateEvent, setIsCreateEvent] = React.useState(false)
  const [isUsers, setIsUsers] = React.useState(false)
  const [Content, setContent] = React.useState(<Analytics />)

  const toggleDrawer = () => {
    setOpen(!open)
  }
  const handleAnalytics = () => {
    setIsAnalytics(true)
    setIsSales(false)
    setIsPending(false)
    setIsApproved(false)
    setIsRejected(false)
    setIsHappened(false)
    setIsSoldTicket(false)
    setIsRefunded(false)
    setIsCreateEvent(false)
    setIsUsers(false)
    setOpen(true)
  }

  const handleSales = () => {
    setIsAnalytics(false)
    setIsSales(true)
    setIsPending(false)
    setIsApproved(false)
    setIsRejected(false)
    setIsHappened(false)
    setIsSoldTicket(false)
    setIsRefunded(false)
    setIsCreateEvent(false)
    setIsUsers(false)
    setOpen(true)
  }
  const handlePending = () => {
    setIsAnalytics(false)
    setIsSales(false)
    setIsPending(true)
    setIsApproved(false)
    setIsRejected(false)
    setIsHappened(false)
    setIsSoldTicket(false)
    setIsRefunded(false)
    setIsCreateEvent(false)
    setIsUsers(false)
    setOpen(true)
  }
  const handleApproved = () => {
    setIsAnalytics(false)
    setIsSales(false)
    setIsPending(false)
    setIsApproved(true)
    setIsRejected(false)
    setIsHappened(false)
    setIsSoldTicket(false)
    setIsRefunded(false)
    setIsCreateEvent(false)
    setIsUsers(false)
    setOpen(true)
  }
  const handleRejected = () => {
    setIsAnalytics(false)
    setIsSales(false)
    setIsPending(false)
    setIsApproved(false)
    setIsRejected(true)
    setIsHappened(false)
    setIsSoldTicket(false)
    setIsRefunded(false)
    setIsCreateEvent(false)
    setIsUsers(false)
    setOpen(true)
  }

  const handleHappened = () => {
    setIsAnalytics(false)
    setIsSales(false)
    setIsPending(false)
    setIsApproved(false)
    setIsRejected(false)
    setIsHappened(true)
    setIsSoldTicket(false)
    setIsRefunded(false)
    setIsCreateEvent(false)
    setIsUsers(false)
    setOpen(true)
  }
  const handleSoldTicket = () => {
    setIsAnalytics(false)
    setIsSales(false)
    setIsPending(false)
    setIsApproved(false)
    setIsRejected(false)
    setIsHappened(false)
    setIsSoldTicket(true)
    setIsRefunded(false)
    setIsCreateEvent(false)
    setIsUsers(false)
    setOpen(true)
  }
  const handleRefunds = () => {
    setIsAnalytics(false)
    setIsSales(false)
    setIsPending(false)
    setIsApproved(false)
    setIsRejected(false)
    setIsHappened(false)
    setIsSoldTicket(false)
    setIsCreateEvent(false)
    setIsUsers(false)
    setIsRefunded(true)
    setOpen(true)
  }
  const handleCreateEvent = () => {
    setIsAnalytics(false)
    setIsSales(false)
    setIsPending(false)
    setIsApproved(false)
    setIsRejected(false)
    setIsHappened(false)
    setIsSoldTicket(false)
    setIsRefunded(false)
    setIsUsers(false)
    setIsCreateEvent(true)
    setOpen(true)
  }
  const handleUsers = () => {
    setIsAnalytics(false)
    setIsSales(false)
    setIsPending(false)
    setIsApproved(false)
    setIsRejected(false)
    setIsHappened(false)
    setIsSoldTicket(false)
    setIsRefunded(false)
    setIsCreateEvent(false)
    setIsUsers(true)
    setOpen(true)
  }

  React.useEffect(() => {
    if (isAnalytics) {
      setContent(<Analytics />)
    }
    if (isSales) {
      setContent(<Sales />)
    }
    if (isPending) {
      setContent(<PendingEvents />)
    }
    if (isApproved) {
      setContent(<ApprovedEvents />)
    }
    if (isRejected) {
      setContent(<Rejected />)
    }
    if (isHappened) {
      setContent(<HappenedEvents />)
    }
    if (isSoldTicket) {
      setContent(<SoldTicket />)
    }
    if (isRefunded) {
      setContent(<Refunded />)
    }
    if (isCreateEvent) {
      setContent(<CreateEvent />)
    }
    if (isUsers) {
      setContent(<Users />)
    }
  }, [
    isAnalytics,
    isSales,
    isPending,
    isApproved,
    isRejected,
    isHappened,
    isSoldTicket,
    isRefunded,
    isCreateEvent,
    isUsers,
  ])

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
            className={classes.toolBar}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              DASHBOARD
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <SettingsIcon />
            </IconButton>
            <Avatar
              alt="user profile"
              src="https://avatars.githubusercontent.com/u/59208992?v=4"
            />
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon className={classes.Icons} />
            </IconButton>
          </Toolbar>
          <Divider />
          <List>
            <SideBar
              setOpen={setOpen}
              handleAnalytics={handleAnalytics}
              handleSales={handleSales}
              handlePending={handlePending}
              handleApproved={handleApproved}
              handleRejected={handleRejected}
              handleHappened={handleHappened}
              handleSoldTicket={handleSoldTicket}
              handleRefunds={handleRefunds}
              handleCreateEvent={handleCreateEvent}
              handleUsers={handleUsers}
            />
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
          // className={classes.background}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                {Content}
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default function Dashboard() {
  return <DashboardContent />
}
