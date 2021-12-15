import { Button, Tabs } from "antd"
import { ReportTemplate } from "./reportTemplate/components/reportTemplate"
import { Report } from "./report"
import { ReportTemplateList } from "./reportTemplate/components/ReportTemplateList"

const { TabPane } = Tabs
export const reportManage = () => {
  return (
    <div>
      <Tabs defaultActiveKey="5" type="card" size={"small"}>
        <TabPane tab="提测报告" key="1">
          <Report reportType={"提测报告"} />
        </TabPane>
        <TabPane tab="项目日报" key="2">
          <Report reportType={"项目日报"} />
        </TabPane>
        <TabPane tab="项目完成报告" key="3">
          <Report reportType={"项目完成报告"} />
        </TabPane>
        <TabPane tab="上线checklist" key="4">
          <Report reportType={"上线checklist"} />
        </TabPane>
        <TabPane tab="报告模板" key="5">
          <ReportTemplate />
          <ReportTemplateList />
        </TabPane>
        <TabPane tab="线上质量度量" key="6">
          线上质量度量
        </TabPane>
      </Tabs>
    </div>
  )
}
