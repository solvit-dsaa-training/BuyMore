// @ts-nocheck
import React from "react"
import GoogleLogin from "react-google-login"
import { useStyles } from "./style"
import "./Auth.css"

const responseGoogle = (response) => {
  console.log(response)
}

/**
 *User Login and Sign up component
 *This is all in one form
 *if isSignUp, display all fields
 *if isLogin , display email and password field
 * @param {*} { isSignUp, isLogin }
 * @return {*}
 */

const Auth = ({ isSignUp, isLogin }) => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <form className="root">
        <div>
          <input type="email" placeholder="Email" className={classes.Inputs} />
        </div>
        {isSignUp && (
          <div>
            <input
              type="text"
              placeholder="User name"
              className={classes.Inputs}
            />
          </div>
        )}
        <div>
          <input
            type="password"
            placeholder="password"
            className={classes.Inputs}
          />
        </div>
        {isSignUp && (
          <div>
            <input
              type="password"
              placeholder="Confirm password"
              className={classes.Inputs}
            />
          </div>
        )}
        <div>
          <button type="submit" className={classes.AuthBtn}>
            Register
          </button>
        </div>
        <div>
          <GoogleLogin
            className={classes.googleBtn}
            clientId="65688288942-pf0sgh5gcvnneskbgspl6mel27bbuf91.apps.googleusercontent.com"
            buttonText="Signup with Goolge"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </form>
    </React.Fragment>
  )
}

export default Auth
