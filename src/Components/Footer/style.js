import { makeStyles } from "@mui/styles"

export const useStyles = makeStyles({
  footerContainer: {
    marginTop: "100px",
  },
  SocialMediaContainer: {
    display: "flex",
    paddingLeft: "500px",
    marginBottom: "20px",
    borderBottom: "1px solid #FFFFFF",
  },
  SocialMediaIcon: {
    color: "#02B468",
    width: "45px",
    height: "45px",
    fontSize: "16px",
    borderRadius: "100px",
    backgroundColor: "#FFFFFF",
    padding: "10px",
    marginRight: "40px",
    cursor: "pointer",
    marginBottom: "20px",
  },
  FooterTitles: {
    fontSize: "20px",
    color: "#FFFFFF",
    fontWeight: 700,
    display: "block",
    textAlign: "center",
    textDecoration: "underline",
    textTransform: "uppercase",
    cursor: "pointer",
  },
  followus: {
    display: "block",
    textTransform: "capitalize",
    color: "#FFFFFF",
    textAlign: "center",
    // marginTop: "50px",
    marginBottom: "20px",
  },
  footerSubTitles: {
    color: "#FFFFFF",
    fontSize: "17px",
    fontWeight: 600,
    display: "block",
    textAlign: "center",
    cursor: "pointer",
  },
})
