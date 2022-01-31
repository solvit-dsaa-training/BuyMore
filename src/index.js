import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import "antd/dist/antd.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Style/mediaQuerry.css"
import App from "./App"
import Root from "./Root"

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.getElementById("root")
)
