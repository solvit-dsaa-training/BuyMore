import React from "react"
import { Modal } from "antd"
import "./Navigation.css"
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
  const [confirmLoading, setConfirmLoading] = React.useState(false)
  const [modalText, setModalText] = React.useState("Content of the modal")
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
    setModalText("The modal will be closed after two seconds")
    setConfirmLoading(true)
    setTimeout(() => {
      setVisible(false)
      setConfirmLoading(false)
    }, 2000)
  }

  const handleCancel = () => {
    console.log("Clicked cancel button")
    setVisible(false)
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
              Eventi
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
        </div>
      </div>
    </React.Fragment>
  )
}

export default Navigation
