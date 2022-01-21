import React from "react"
import { Row, Col } from "antd"
import { useStyles } from "./style"
import { Divider } from "antd"
import Payment from "./Payment"

const TicketShop = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={12}>
          <div>
            <select className={classes.Inputs}>
              <option>Which Type</option>
              <option>GENERAL</option>
              <option>VIP</option>
              <option>VVIP</option>
            </select>
            <input
              type="number"
              min={1}
              placeholder="Number of Tickets"
              className={classes.Inputs}
            />
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div>
            <span> Amount:1000</span>
          </div>
        </Col>
      </Row>
      <Divider />
      <Payment />
    </React.Fragment>
  )
}

export default TicketShop
