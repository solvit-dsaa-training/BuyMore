import React from "react"
import { Modal, Drawer } from "antd"
import "./Navigation.css"
import MenuIcon from "@material-ui/icons/Menu"
import IconButton from "@material-ui/core/IconButton"
import Auth from "../Auth/Auth"
import { useNavigate } from "react-router-dom"
/**
 *Naviagtion with Login And Signup modals
 *
 * @return {*}
 */
const Navigation = () => {
  const navigate = useNavigate()
  const [visible, setVisible] = React.useState(false)
  const [visible1, setVisible1] = React.useState(false)
  const [confirmLoading, setConfirmLoading] = React.useState(false)
  const [isSignUp, setIsSignup] = React.useState(false)
  const [isLogin, setIsLogin] = React.useState(false)

  const handleAuthLogin = () => {
    setVisible(true)
    setIsLogin(true)
    setIsSignup(false)
  }
  const handleAuthSignup = () => {
    setVisible(true)
    setIsSignup(true)
    setIsLogin(false)
  }

  const handleOk = () => {
    setConfirmLoading(true)
    setTimeout(() => {
      setVisible(false)
      setConfirmLoading(false)
    }, 2000)
  }

  const handleCancel = () => {
    setVisible(false)
  }

  const onClose = () => {
    setVisible1(false)
  }
  const showDrawer = () => {
    setVisible1(true)
  }
  return (
    <React.Fragment>
      <Modal
        className="Modal"
        title={isLogin ? "Login" : "Register"}
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={null}
      >
        <Auth isSignUp={isSignUp} isLogin={isLogin} />
      </Modal>
      <Drawer
        title=" "
        placement="left"
        onClose={onClose}
        visible={visible1}
        width={250}
        bodyStyle={{ backgroundColor: "#02b468" }}
      >
        <div className="moble__Navigations">
          <span onClick={() => navigate("/")}>Home</span>
        </div>
        <div className="moble__Navigations">
          <span onClick={() => navigate("/about")}>About</span>
        </div>
        <div className="moble__Navigations">
          <span onClick={() => navigate("/contact")}>Contact</span>
        </div>
        <div className="moble__Navigations">
          <span onClick={handleAuthSignup}>Create an Event</span>
        </div>
        <div className="moble__Navigations">
          <span onClick={handleAuthLogin}>Login</span>
        </div>
      </Drawer>
      <div className="Navigation__container">
        <div className="contact__container">
          <div className="contact__items">
            <div className="contact__location">Kigali,Rwanda</div>
            <div className="contact__telephone">+250784860836</div>
          </div>
        </div>
        <div className="Navigation">
          <nav className="Navigation__items">
            <div className="Navigation__logo" onClick={() => navigate("/")}>
              <span>BuyMore</span>
            </div>
            <ul>
              <li>
                <strong onClick={() => navigate("/about")}>About</strong>
              </li>
              <li onClick={() => navigate("/contact")}>Contact</li>
              <li onClick={handleAuthSignup}>Create an Event</li>
              <li>
                <button className="Navigation__btn" onClick={handleAuthLogin}>
                  Login
                </button>
              </li>
            </ul>
          </nav>
          <span className="Menu">
            <MenuIcon style={{ fontSize: "40px" }} onClick={showDrawer} />
          </span>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Navigation
