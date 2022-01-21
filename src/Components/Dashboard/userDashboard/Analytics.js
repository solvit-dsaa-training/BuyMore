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
    soldTickets: 4000,
  },
  {
    name: "February",
    soldTickets: 1000,
  },
  {
    name: "March",
    soldTickets: 8000,
  },
  {
    name: "April",
    soldTickets: 2000,
  },
  {
    name: "May",
    soldTickets: 10000,
  },
  {
    name: "June",
    soldTickets: 5000,
  },
  {
    name: "July",
    soldTickets: 3000,
  },
  {
    name: "August",
    soldTickets: 4000,
  },
  {
    name: "October",
    soldTickets: 2000,
  },
  {
    name: "December",
    soldTickets: 1000,
  },
  {
    name: "November",
    soldTickets: 6000,
  },
  {
    name: "December",
    soldTickets: 20000,
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
          dataKey="soldTickets"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
      </LineChart>
    </ResponsiveContainer>
  )
}

export default Analytics
