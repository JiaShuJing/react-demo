import { REPORT_KEY, REPORT_LIST_KEY, REPORT_TEMPLATE_KEY, REPORT_TEMPLATE_LIST_KEY } from "../consts/index"
//怎么设置项目的根路径??
export const request = (uri, data) => {
  if (uri.includes("/saveReportTemplate")) {
    //存入localStorage中
    window.localStorage.setItem(REPORT_TEMPLATE_KEY, JSON.stringify(data))
  } else if (uri.includes("/getReportTemplate")) {
    //获取报告模板
    //从localStorage获取数据
    let reportTemplate = window.localStorage.getItem(REPORT_TEMPLATE_KEY)
    reportTemplate = JSON.parse(reportTemplate)
    console.log("获取报告模板:", reportTemplate)
    return reportTemplate.list
  } else if (uri.includes("/getReportTemplateList")) {
    //获取报告模板列表
  } else if (uri.includes("/getReport")) {
    //获取报告详情
  } else if (uri.includes("/getReportList")) {
    //获取报告列表
  } else if (uri.includes("/saveReport")) {
    //
  } else {
  }
}
