import React from "react"
import { useStyles } from "./style"
import Grid from "@mui/material/Grid"
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded"
import TwitterIcon from "@mui/icons-material/Twitter"
import InstagramIcon from "@mui/icons-material/Instagram"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import YouTubeIcon from "@mui/icons-material/YouTube"
import { useNavigate } from "react-router-dom"

import "./footer.css"

/**
 *
 *
 * @return {*}
 */

const Footer = () => {
  const classes = useStyles()
  const navigate = useNavigate()

  const handleLinks = () => {
    navigate("/")
  }

  return (
    <React.Fragment>
      <div className={`${classes.footerContainer} footer`}>
        <Grid container rowSpacing={1}>
          <Grid item xs={4}>
            <div>
              <span className={classes.FooterTitles}>User Manual</span>
              <div>
                <span className={classes.footerSubTitles}>Help</span>
              </div>
              <div>
                <span className={classes.footerSubTitles}>
                  How BuyMore Works
                </span>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div>
              <span className={classes.FooterTitles}>Quick Links</span>
              <div>
                <span
                  className={classes.footerSubTitles}
                  onClick={() => navigate("/about")}
                >
                  About
                </span>
              </div>
              <div>
                <span
                  className={classes.footerSubTitles}
                  onClick={() => navigate("/contact")}
                >
                  Contact
                </span>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div>
              <span className={classes.FooterTitles}>Find Event By</span>
              <div>
                <span className={classes.footerSubTitles} onClick={handleLinks}>
                  Paid
                </span>
              </div>
              <div>
                <span className={classes.footerSubTitles} onClick={handleLinks}>
                  Film
                </span>
              </div>
              <div>
                <span className={classes.footerSubTitles} onClick={handleLinks}>
                  Music
                </span>
              </div>
              <div>
                <span className={classes.footerSubTitles} onClick={handleLinks}>
                  Sports
                </span>
              </div>
              <div>
                <span className={classes.footerSubTitles} onClick={handleLinks}>
                  Location
                </span>
              </div>
              <div>
                <span className={classes.footerSubTitles} onClick={handleLinks}>
                  Performance
                </span>
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div>
              <span className={classes.followus}>Follow us</span>
            </div>
            <div className={classes.SocialMediaContainer}>
              <div className={classes.SocialMediaIcon}>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#02B468" }}
                >
                  <FacebookRoundedIcon />
                </a>
              </div>
              <div className={classes.SocialMediaIcon}>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#02B468" }}
                >
                  <TwitterIcon />
                </a>
              </div>
              <div className={classes.SocialMediaIcon}>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#02B468" }}
                >
                  <InstagramIcon />
                </a>
              </div>
              <div className={classes.SocialMediaIcon}>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#02B468" }}
                >
                  <LinkedInIcon />
                </a>
              </div>
              <div className={classes.SocialMediaIcon}>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#02B468" }}
                >
                  <YouTubeIcon />
                </a>
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <h4 className={classes.followus}>Powered By || Jean De Dieu</h4>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  )
}

export default Footer
