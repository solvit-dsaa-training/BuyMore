import React from "react"
import { useStyles } from "./style"
import Grid from "@mui/material/Grid"
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded"
import TwitterIcon from "@mui/icons-material/Twitter"
import InstagramIcon from "@mui/icons-material/Instagram"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import YouTubeIcon from "@mui/icons-material/YouTube"
import "./footer.css"

/**
 *
 *
 * @return {*}
 */

const Footer = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <div className={`${classes.footerContainer} footer`}>
        <Grid container rowSpacing={1}>
          <Grid item xs={4}>
            <div>
              <span className={classes.FooterTitles}>User Manual</span>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div>
              <span className={classes.FooterTitles}>Quick Links</span>
              <div>
                <span className={classes.footerSubTitles}>About</span>
              </div>
              <div>
                <span className={classes.footerSubTitles}>Contact</span>
                <div>
                  <span className={classes.footerSubTitles}>Create Event</span>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div>
              <span className={classes.FooterTitles}>Find Event By</span>
              <div>
                <span className={classes.footerSubTitles}>Paid</span>
              </div>
              <div>
                <span className={classes.footerSubTitles}>Film</span>
              </div>
              <div>
                <span className={classes.footerSubTitles}>Music</span>
              </div>
              <div>
                <span className={classes.footerSubTitles}>Sports</span>
              </div>
              <div>
                <span className={classes.footerSubTitles}>Location</span>
              </div>
              <div>
                <span className={classes.footerSubTitles}>Performance</span>
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div>
              <span className={classes.followus}>Follow us</span>
            </div>
            <div className={classes.SocialMediaContainer}>
              <div className={classes.SocialMediaIcon}>
                <FacebookRoundedIcon />
              </div>
              <div className={classes.SocialMediaIcon}>
                <TwitterIcon />
              </div>
              <div className={classes.SocialMediaIcon}>
                <InstagramIcon />
              </div>
              <div className={classes.SocialMediaIcon}>
                <LinkedInIcon />
              </div>
              <div className={classes.SocialMediaIcon}>
                <YouTubeIcon />
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <h4 className={classes.followus}>Powered By ||Solvit Africa</h4>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  )
}

export default Footer
