import React from "react"
import { useStyles } from "./style"
import Grid from "@mui/material/Grid"

const CreateEvent = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <div className={classes.createEvent}>
        <form>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <div>
                <textarea
                  placeholder="Event Title"
                  rows={3}
                  className={classes.InputPartArea}
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div>
                <textarea
                  placeholder="description"
                  rows={5}
                  className={classes.InputPartArea}
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div>
                <div>
                  <span> Thumbnail</span>
                </div>
                <input type="file" className={classes.Inputs} />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div>
                <span> Start Date</span>
              </div>
              <input type="date" className={classes.Inputs} />
            </Grid>
            <Grid item xs={12}>
              <div>
                <span> End Date</span>
              </div>
              <input type="date" className={classes.Inputs} />
            </Grid>
            <Grid item xs={12}>
              <input
                type="text"
                placeholder="Venue"
                className={classes.Inputs}
              />
            </Grid>
            <Grid item xs={12}>
              <input
                type="text"
                placeholder="Organizer"
                className={classes.Inputs}
              />
            </Grid>
            <Grid item xs={12}>
              <input
                type="nmber"
                id="address"
                placeholder="Address"
                className={classes.Inputs}
              />
            </Grid>
            <Grid item xs={12}>
              <input
                type="nmber"
                placeholder="Phone"
                className={classes.Inputs}
              />
            </Grid>
            <Grid item xs={12}>
              <input
                type="email"
                placeholder="Email"
                className={classes.Inputs}
              />
            </Grid>
            <Grid item xs={12}>
              <button type="submit" className={classes.SendBtn}>
                Create
              </button>
            </Grid>
          </Grid>
        </form>
      </div>
    </React.Fragment>
  )
}

export default CreateEvent
