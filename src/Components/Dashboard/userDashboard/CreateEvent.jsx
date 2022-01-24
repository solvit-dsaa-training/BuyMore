import React from "react"
import { useStyles } from "./style"

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
        <div className={classes.InputContainer}>
          <span className={classes.labelSpan}>Event Schedule</span>
          <div>
            <input
              type="text"
              placeholder="Event Title"
              className={classes.InputPartOne}
            />
          </div>
          <div>
            <input
              type="file"
              placeholder="Your Thumbnail"
              className={classes.InputPartOne}
            />
          </div>
          <div>
            <textarea
              placeholder="description"
              rows={7}
              className={classes.InputPartArea}
            />
          </div>
        </div>
        <div className={classes.InputContainer}>
          <input
            className={classes.Inputs}
            style={{ marginBottom: "20px" }}
            type="number"
            min={0}
            placeholder="how many speakers"
            value={num}
            onChange={(event) => setNum(event.target.value)}
          />
          <br />
          {num && inputs.map((input) => input)}
        </div>
        <div className={classes.InputContainer}>
          <span className={classes.labelSpan}>Event Schedule</span>
          <input
            className={classes.Inputs}
            type="number"
            min={0}
            max={5}
            placeholder="How many Days"
            value={day}
            onChange={(event) => setDay(event.target.value)}
          />
        </div>
        <div className={classes.InputContainer}>
          {day && DailyPlan.map((plan) => plan)}
        </div>
      </div>
    </React.Fragment>
  )
}

export default CreateEvent
