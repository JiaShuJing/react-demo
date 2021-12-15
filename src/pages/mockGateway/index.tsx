import { Tabs } from "antd"
import { CreateGoods } from "./createGoods"
import { CreateMerchant } from "./createMerchant"
import { Test } from "./Test"
const { TabPane } = Tabs
export const MockGateway = () => {
  return (
    <div>
      <Tabs defaultActiveKey="1" type="card" size={"small"}>
        <TabPane tab="创建供应商" key="1">
          <CreateMerchant />
        </TabPane>
        <TabPane tab="创建商品" key="2">
          <CreateGoods />
        </TabPane>
        <TabPane tab="接口mock" key="3"></TabPane>
        <TabPane tab="加解密工具" key="4"></TabPane>
        <TabPane tab="测试" key="5">
          <Test />
        </TabPane>
      </Tabs>
    </div>
  )
}
