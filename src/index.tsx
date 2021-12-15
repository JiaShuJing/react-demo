import React from "react"
import ReactDOM from "react-dom"
//@ts-ignore
import MyLayout from "@/layout/MyLayout"
import "antd/dist/antd.css"
import { BrowserRouter as Router } from "react-router-dom"
import { store } from "./app/store"
import { Provider } from "react-redux"
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <MyLayout></MyLayout>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
