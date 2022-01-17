import React from "react"

/**
 *
 *
 * @return {*}
 */
const EventTicket = () => {
  return (
    <React.Fragment>
      <div className="event__schedule__heading">Get Your Own Ticket</div>
      <div className="event__ticket">
        <div className="event__ticket__card">
          <div className="event__tick-header">
            <span>1DAY PASS</span>
          </div>
          <div className="event__ticket-price">
            <span>1000 RWF</span>
          </div>
          <div className="event__ticket-contents">
            <span>One Day Event Ticket</span>
            <span>Some contents herer</span>
            <span>Some contents herer</span>
            <span>Some contents herer</span>
            <div className="ticket-btn-container">
              <button className="buy__ticket--btn">Buy Ticket</button>
            </div>
          </div>
        </div>

        <div className="event__ticket__card">
          <div className="event__tick-header ">
            <div className="event__ticket__star"></div>
            <span>FULL PASS</span>
          </div>
          <div className="event__ticket-price fullpass">
            <span>2000 RWF</span>
          </div>
          <div className="event__ticket-contents">
            <span>One Day Event Ticket</span>
            <span>Some contents herer</span>
            <span>Some contents herer</span>
            <span>Some contents herer</span>
            <div className="ticket-btn-container">
              <button className=" buy__ticket--btn fullBtn">Buy Ticket</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default EventTicket
