import React from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { useStyles } from "./style"

const data = [
  {
    name: "Jan",
    Refunds: 4000,
  },
  {
    name: "Feb",
    Refunds: 1000,
  },
  {
    name: "Mar",
    Refunds: 8000,
  },
  {
    name: "Apr",
    Refunds: 2000,
  },
  {
    name: "May",
    Refunds: 10000,
  },
  {
    name: "June",
    Refunds: 5000,
  },
  {
    name: "July",
    Refunds: 3000,
  },
  {
    name: "Aug",
    Refunds: 4000,
  },
  {
    name: "Sept",
    Refunds: 2000,
  },
  {
    name: "Oct",
    Refunds: 6000,
  },
  {
    name: "Nov",
    Refunds: 4000,
  },
  {
    name: "Dec",
    Refunds: 20000,
  },
]

const Analytics = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <div>
        <h1 className={classes.Title}>MONTHLY Refunded Tickets</h1>
      </div>
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
          <CartesianGrid strokeDasharray="3 3" horizontal="" vertical="" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="Refunds"
            stroke="#02B468"
            activeDot={{ r: 8 }}
          />
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  )
}

export default Analytics
