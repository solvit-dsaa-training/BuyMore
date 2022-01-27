import { makeStyles } from "@mui/styles"

export const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: "center",
  },
  upcomings: {
    marginTop: "50px",
  },
  subHeaders: {
    margin: "80px 0px 80px 0px",
    fontFamily: "Mulish",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "20px",
    lineHeight: "1.7px",
    alignItems: "center",
    color: " #000000",
    letterSpacing: "2px",
    textTransform: "uppercase",
  },
  Card: {
    position: "relative",
    width: "100%",
    alignContent: "space-between",
  },
  EventTitle: {
    textAlign: "center",
    fontSize: "20px",
    textTransform: "capitalize",
    marginBottom: "20px",
  },
  Icon: {
    color: "#02b468",
    marginBottom: "10px",
  },
  eventTime: {
    marginTop: "10px",
    display: "flex",
    flexDirection: "column",
  },
  eventCardDates: {
    textAlign: "center",
  },
})
