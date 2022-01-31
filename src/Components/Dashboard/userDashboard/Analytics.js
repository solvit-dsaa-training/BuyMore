import React from "react"
import Refunded from "./RefundedAnalytics"
import { Divider } from "antd"
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
    soldTickets: 4000,
  },
  {
    name: "Feb",
    soldTickets: 1000,
  },
  {
    name: "Mar",
    soldTickets: 8000,
  },
  {
    name: "Apr",
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
    name: "Aug",
    soldTickets: 4000,
  },
  {
    name: "Sept",
    soldTickets: 2000,
  },
  {
    name: "Oct",
    soldTickets: 6000,
  },
  {
    name: "Nov",
    soldTickets: 4000,
  },
  {
    name: "Dec",
    soldTickets: 20000,
  },
]

const Analytics = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <div className={classes.Container}>
        <h1 className={classes.Title}>Monthly Sold Tickets</h1>
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
              dataKey="soldTickets"
              stroke="#02B468"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
        <Divider />
        <Refunded />
      </div>
    </React.Fragment>
  )
}

export default Analytics
