import { makeStyles } from "@mui/styles"

export const useStyles = makeStyles({
  Container: {
    display: "flex",
    flexDirection: "column",
  },

  SendBtn: {
    width: "20%",
    height: "40px",
    background: " #02B468",
    border: "1px solid #02B468",
    boxSizing: "border-box",
    borderRadius: "5px",
    cursor: "pointer",
    color: "#ffffff",
    marginLeft: "25px",
  },

  getInTouch: {
    fontSize: "30px",
    fontWeight: 800,
    lineHeight: 1.7,
    textTransform: "uppercase",
  },
  contactDetailsContainer: {
    textAlign: "center",
  },
  contactTitle: {
    display: "block",
    color: "#02B468",
    fontSize: "18px",
    textTransform: "uppercase",
    marginBottom: "10px",
  },
})
