import React from "react"
import { Row, Col, Modal } from "antd"
import TicketShop from "./TicketShop"
import Countdown from "react-countdown"
import Countup from "react-countup"
/**
 *
 *
 * @return {*}
 */
const EventTicket = () => {
  const [visible, setVisible] = React.useState(false)
  const [general, setGeneral] = React.useState(false)
  const [vip, setVip] = React.useState(false)
  const [vvip, setVvip] = React.useState(false)
  const [title, setTitle] = React.useState("")

  const handleGeneralTickets = () => {
    setVisible(true)
    setGeneral(true)
    setVip(false)
    setVvip(false)
  }
  const handleVipTickets = () => {
    setVisible(true)
    setGeneral(false)
    setVip(true)
    setVvip(false)
  }
  const handleVvipTickets = () => {
    setVisible(true)
    setGeneral(false)
    setVip(false)
    setVvip(true)
  }

  React.useEffect(() => {
    if (general) {
      setTitle("General Tickets")
    }
    if (vip) {
      setTitle("VIP Tickets")
    }
    if (vvip) {
      setTitle("VVIP Tickets")
    }
  }, [general, vip, vvip])

  return (
    <React.Fragment>
      <>
        <Modal
          title={title}
          centered
          visible={visible}
          onOk={() => setVisible(false)}
          onCancel={() => setVisible(false)}
          width={800}
          okText="BUY"
          footer={null}
        >
          <TicketShop />
        </Modal>
      </>
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        style={{ marginTop: "40px" }}
      >
        <Col span={8}>
          <div>
            <div className="event__ticket__card">
              <div className="event__tick-header">
                <span className="ticket__type">GENERAL</span>
              </div>
              <div className="event__ticket-price">
                <span>10000 RWF</span>
              </div>
              <div className="event__ticket-contents">
                <span>
                  <Countup end={1000} duration={5} />
                </span>
                <div className="ticket-btn-container">
                  <button
                    className="buy__ticket--btn"
                    onClick={handleGeneralTickets}
                  >
                    BUY TICKET
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col span={8}>
          <div>
            <div className="event__ticket__card">
              <div className="event__tick-header ">
                <div className="event__ticket__star"></div>
                <span className="ticket__type">VIP</span>
              </div>
              <div className="event__ticket-price fullpass">
                <span>100000 RWF</span>
              </div>
              <div className="event__ticket-contents">
                <span>
                  <Countup end={1000} duration={5} />
                </span>
                <div className="ticket-btn-container">
                  <button
                    className=" buy__ticket--btn fullBtn"
                    onClick={handleVipTickets}
                  >
                    BUY TICKET
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col span={8}>
          <div>
            <div className="event__ticket__card">
              <div className="event__tick-header ">
                <div className="event__ticket__star"></div>
                <span className="ticket__type">VVIP</span>
                <div className="event__ticket__star2"></div>
              </div>
              <div className="event__ticket-price fullpass">
                <span>100000 RWF</span>
              </div>
              <div className="event__ticket-contents">
                <span>
                  <Countup end={1000} duration={5} />
                </span>
                <div className="ticket-btn-container">
                  <button
                    className=" buy__ticket--btn fullBtn"
                    onClick={handleVvipTickets}
                  >
                    BUY TICKET
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default EventTicket
