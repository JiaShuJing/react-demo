import React from "react"
import { Tabs } from "antd"
import { CreateService } from "./createService"
import { CreateDiffStrategy } from "./createDiffStrategy"
import { Replay } from "./replay"
import { Env } from "./env"
import { ReplayTask } from "./replayTask"
const { TabPane } = Tabs
export const FlowReplay = () => {
  return (
    <>
      <Tabs defaultActiveKey="1" type="card" size={"small"}>
        <TabPane tab="创建服务" key="1">
          <CreateService />
        </TabPane>
        <TabPane tab="流量回放" key="3">
          <Replay />
        </TabPane>
        <TabPane tab="创建diff策略" key="2">
          <CreateDiffStrategy />
        </TabPane>
        <TabPane tab="回放任务" key="4">
          <ReplayTask />
        </TabPane>
        <TabPane tab="环境管理" key="5">
          <Env />
        </TabPane>
      </Tabs>
    </>
  )
}
