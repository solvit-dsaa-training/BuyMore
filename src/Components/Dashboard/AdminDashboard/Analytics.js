import React from "react"
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
    name: "January",
    RegisteredEvents: 4000,
  },
  {
    name: "February",
    RegisteredEvents: 1000,
  },
  {
    name: "March",
    RegisteredEvents: 8000,
  },
  {
    name: "April",
    RegisteredEvents: 2000,
  },
  {
    name: "May",
    RegisteredEvents: 10000,
  },
  {
    name: "June",
    RegisteredEvents: 5000,
  },
  {
    name: "July",
    RegisteredEvents: 3000,
  },
  {
    name: "August",
    RegisteredEvents: 4000,
  },
  {
    name: "October",
    RegisteredEvents: 2000,
  },
  {
    name: "December",
    RegisteredEvents: 1000,
  },
  {
    name: "November",
    RegisteredEvents: 6000,
  },
  {
    name: "December",
    RegisteredEvents: 20000,
  },
]

const Analytics = () => {
  const classes = useStyles()

  return (
    <ResponsiveContainer width="100%" aspect={3} className={classes.Container}>
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
        <Legend />
        <Line
          type="monotone"
          dataKey="RegisteredEvents"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
      </LineChart>
    </ResponsiveContainer>
  )
}

export default Analytics
