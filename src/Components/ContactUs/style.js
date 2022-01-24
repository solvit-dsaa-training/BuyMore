import { makeStyles } from "@mui/styles"

export const useStyles = makeStyles({
  Container: {
    display: "flex",
    flexDirection: "column",
  },
  PartOne: {
    backgroundImage: `linear-gradient(to right bottom,rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url(${"https://cdn.pixabay.com/photo/2017/10/01/13/28/music-2805506_960_720.jpg"})`,
    backgroundPosition: "bottom",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "90vh",
    color: "#FFFFFF",
    backgroundAttachment: "fixed",
    marginBottom: "30px",
    position: "relative",
    width: "100%",
  },

  Inputs: {
    width: "100%",
    height: "40px",
    background: "#FFFFFF",
    border: "1px solid #02B468",
    boxSizing: "border-box",
    borderRadius: "5px",
    marginBottom: "10px",
    outline: "none",
    textIndent: "10px",
  },
  TextArea: {
    width: "100%",
    background: "#FFFFFF",
    border: "1px solid #02B468",
    boxSizing: "border-box",
    borderRadius: "5px",
    marginBottom: "10px",
    outline: "none",
    textIndent: "10px",
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
    padding: "10px 100px 0px 100px",
  },
  contactTitle: {
    display: "block",
    color: "#02B468",
    fontSize: "18px",
    textTransform: "uppercase",
    marginBottom: "10px",
  },
})
