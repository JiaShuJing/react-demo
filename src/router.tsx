import React from "react"
import { Route, Switch } from "react-router-dom"
import { reportManage } from "./pages/reportManage"
import { FlowReplay } from "./pages/flowReplay"
import { onlineQuality } from "./pages/onlineQuality"
import { ReduxTest } from "./pages/reduxTest"
import { MockGateway } from "./pages/mockGateway"

const routes = [
  {
    path: "/reportManage",
    component: reportManage,
  },
  {
    path: "/flowReplay",
    component: FlowReplay,
  },
  {
    path: "/onlineQuality",
    component: onlineQuality,
  },
  {
    path: "/reduxTest",
    component: ReduxTest,
  },
  {
    path: "/mockGateway",
    component: MockGateway,
  },
]

export const BasicRoute = () => {
  return (
    <Switch>
      {routes.map((route, i) => (
        //@ts-ignore
        <Route key={i} {...route} render={() => {}} />
      ))}
    </Switch>
  )
}
