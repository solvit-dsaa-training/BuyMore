import React from "react"
import Navigation from "../Navigation/Navigation"
import Header from "../Header/Header"
import Main from "../Main/Main"
import Footer from "../Footer/Footer"

/**
 *
 *
 * @return {*}
 */

const Home = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
  )
}

export default Home
