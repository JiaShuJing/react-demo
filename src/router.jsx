import React from "react"
import { Route, Switch } from "react-router-dom"
import { reportManage } from "./pages/reportManage"
import { AutoTest } from "./pages/autoTest"
import { onlineQuality } from "./pages/onlineQuality"
import { Interview } from "./pages/interview"

const routes = [
  {
    path: "/reportManage",
    component: reportManage,
  },
  {
    path: "/autoTest",
    component: AutoTest,
  },
  {
    path: "/onlineQuality",
    component: onlineQuality,
  },
  {
    path: "/interview",
    component: Interview,
  },
]

export const BasicRoute = () => {
  return (
    <Switch>
      {/* <Route path="/reportManage" component={reportManage} />
      <Route path="/autoTest" component={autoTest} />
      <Route path="/onlineQuality" component={onlineQuality} /> */}
      {routes.map((route, i) => (
        <Route key={i} {...route} render={() => {}} />
      ))}
    </Switch>
  )
}
