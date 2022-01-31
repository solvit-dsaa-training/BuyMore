import React from "react"
import { useStyles } from "./style"
import Grid from "@mui/material/Grid"

const CreateEvent = () => {
  const classes = useStyles()
  const [num, setNum] = React.useState(null)
  const [day, setDay] = React.useState(null)

  let inputs = []
  let days = []
  let DailyPlan = []

  const handleSpeakers = () => {
    for (let i = 1; i <= parseInt(num); i++) {
      inputs.push(
        <input
          className={classes.Inputs}
          placeholder={`Speaker ${i}`}
          key={i}
        />
      )
    }
  }
  handleSpeakers()

  const handleDays = () => {
    for (let i = 1; i <= parseInt(day); i++) {
      days.push(
        <div className={classes.day} placeholder={`Speaker ${i}`} key={i}>
          Day{i}
        </div>
      )
    }
  }
  handleDays()

  const handleContents = () => {
    for (let i = 1; i <= parseInt(day); i++) {
      DailyPlan.push(
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            className={classes.Inputs}
            placeholder={`Presenter of day ${i}`}
          />
          <textarea
            rows={7}
            className={classes.InputPartArea}
            placeholder={`Topic of day ${i}`}
          />
          <input
            className={classes.Inputs}
            type="text"
            placeholder={`time for day ${i}:Ex:8h-11h`}
          />
        </div>
      )
    }
  }
  handleContents()
  return (
    <React.Fragment>
      <div className={classes.createEvent}>
        <form>
          <Grid container rowSpacing={1}>
            <Grid item xs={12}>
              <div>
                <Grid item xs={12}>
                  <div>
                    <textarea
                      placeholder="Event Title"
                      rows={5}
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
                    <input type="file" id="file" className={classes.Inputs} />
                    <label htmlFor="file">Add Thumbnail</label>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <input type="date" id="start" className={classes.Inputs} />
                  <label htmlFor="start">Start Date</label>
                </Grid>
                <Grid item xs={12}>
                  <input type="date" id="end" className={classes.Inputs} />
                  <label htmlFor="start">End Date</label>
                </Grid>
                <Grid item xs={12}>
                  <input
                    type="text"
                    placeholder="Venue"
                    id="venue"
                    className={classes.Inputs}
                  />
                  <label htmlFor="venue">Venue</label>
                </Grid>
                <Grid item xs={12}>
                  <input
                    type="text"
                    id="organizer"
                    placeholder="Organizer"
                    className={classes.Inputs}
                  />
                  <label htmlFor="organizer">Organizer</label>
                </Grid>
                <Grid item xs={12}>
                  <input
                    type="nmber"
                    id="address"
                    placeholder="Address"
                    className={classes.Inputs}
                  />
                  <label htmlFor="address">Address</label>
                </Grid>
                <Grid item xs={12}>
                  <input
                    type="nmber"
                    id="phone"
                    placeholder="Phone"
                    className={classes.Inputs}
                  />
                  <label htmlFor="phone">Phone</label>
                </Grid>
                <Grid item xs={12}>
                  <input
                    type="email"
                    id="eamil"
                    placeholder="Email"
                    className={classes.Inputs}
                  />
                  <label htmlFor="email">Email</label>
                </Grid>
                <Grid item xs={12}>
                  <button type="submit" className={classes.SendBtn}>
                    Create
                  </button>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </form>
      </div>
    </React.Fragment>
  )
}

export default CreateEvent
