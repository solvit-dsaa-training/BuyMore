import React from "react"
import Carousel from "react-bootstrap/Carousel"
import { useStyles } from "./style"
import "./header.css"

/**
 *
 *
 * @return {*}
 */

const Header = () => {
  const classes = useStyles()

  return (
    <header className={`${classes.header} `}>
      <Carousel fade>
        <Carousel.Item>
          <img
            className={`${classes.slideImgs} d-block w-100 `}
            src="https://images.unsplash.com/photo-1560523159-4a9692d222ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="welcome__mesage__container">
              <h3 className="event__welcome-message">
                <span>Your Business to next level.</span>
              </h3>
              <button className="welcome__ticket__btn">
                <strong>Buy Ticket</strong>
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={`${classes.slideImgs} d-block w-100`}
            src="https://cdn.pixabay.com/photo/2017/03/27/15/13/man-2179313_960_720.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <div className="welcome__mesage__container">
              <h3 className="event__welcome-message">
                <span>Legge Party to night 🎻!!!!</span>
              </h3>
              <button className="welcome__ticket__btn">
                <strong>Buy Ticket</strong>
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={`${classes.slideImgs} d-block w-100`}
            src="https://cdn.pixabay.com/photo/2014/05/21/15/18/musician-349790_960_720.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <div className="welcome__mesage__container">
              <h3 className="event__welcome-message">
                <span>Enjoy Accoustic By Cow Boys 🎸!!! </span>
              </h3>
              <button className="welcome__ticket__btn">
                <strong>Buy Ticket</strong>
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={`${classes.slideImgs} d-block w-100`}
            src="https://images.unsplash.com/photo-1561489396-888724a1543d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Third slide"
          />

          <Carousel.Caption>
            <div className="welcome__mesage__container">
              <h3 className="event__welcome-message">
                <span>World Economic Forum. </span>
              </h3>
              <button className="welcome__ticket__btn">
                <strong>Buy Ticket</strong>
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </header>
  )
}

export default Header
