import { makeStyles } from "@mui/styles"

export const useStyles = makeStyles({
  HeadingPrimary: {
    width: "464px",
    height: "167px",
    fontFamily: "mulish",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "55px",
    lineHeight: "75px",
    alignItems: "center",
    color: " #02B468",
  },
  search: {
    margin: "40px 0px 0px 0px",
    width: "70%",
    height: "40px",
    background: "rgba(2, 180, 104, 0.1)",
    border: "2px solid #02B468",
    borderTopLeftRadius: "100px",
    borderBottomLeftRadius: "100px",
    boxSizing: "border-box",
    outline: "none",
    textIndent: "10px",
  },
  searchBtn: {
    width: "16%",
    height: "40px",
    background: "#02B468",
    color: "#FFFFFF",
    borderStyle: "none",
    borderTopRightRadius: "100px",
    borderBottomRightRadius: "100px",
    cursor: "pointer",
  },
  webiner: {
    width: "100%",
    // height: "528px",
  },
  slideImgs: {
    height: "100vh",
    objectFit: "cover",
  },
})
