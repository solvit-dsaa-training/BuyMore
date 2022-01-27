import React from "react"
import Grid from "@material-ui/core/Grid"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { useStyles } from "./style"

const data = [
  {
    name: "Jan",
    Events: 4000,
  },
  {
    name: "Feb",
    Events: 1000,
  },
  {
    name: "Mar",
    Events: 8000,
  },
  {
    name: "Apr",
    Events: 2000,
  },
  {
    name: "May",
    Events: 10000,
  },
  {
    name: "June",
    Events: 5000,
  },
  {
    name: "July",
    Events: 3000,
  },
  {
    name: "Aug",
    Events: 4000,
  },
  {
    name: "Sept",
    Events: 2000,
  },
  {
    name: "Oct",
    Events: 6000,
  },
  {
    name: "Nov",
    Events: 4000,
  },
  {
    name: "Dec",
    Events: 20000,
  },
]
const Analytics = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <div className={classes.Container}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h1 className={classes.Title}> Registered Events</h1>
          </Grid>
          <Grid item xs={12}>
            <ResponsiveContainer width="100%" aspect={3}>
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  horizontal=""
                  vertical=""
                />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="Events"
                  stroke="#02B468"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  )
}

export default Analytics
