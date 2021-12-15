import { REPORT_TEMPLATE_LIST_KEY } from "../consts/index"
//怎么设置项目的根路径??
const defaultTemplate = { list: [{ id: 1, title: "项目名称", type: "Input", isRequired: true }] }
export const request = (uri: string, data?: string) => {
  if (uri.includes("/saveReportTemplate")) {
    //存入localStorage中
    //先取出来 再push
    let list = window.localStorage.getItem(REPORT_TEMPLATE_LIST_KEY) || "[]"
    let list2 = JSON.parse(list)
    list2.push(data)
    window.localStorage.setItem(REPORT_TEMPLATE_LIST_KEY, JSON.stringify(list))
  } else if (uri.includes("/getReportTemplate")) {
    //获取报告模板
    //从localStorage获取数据
    let reportTemplateList = window.localStorage.getItem(REPORT_TEMPLATE_LIST_KEY)
    reportTemplateList = reportTemplateList || "[]"
    //遍历获取 先取第一个
    if (uri.includes("/getReportTemplateComplete")) {
      return JSON.parse(reportTemplateList) || [defaultTemplate]
    }
    let reportTemplateList2 = JSON.parse(reportTemplateList)
    return reportTemplateList2[0].list || defaultTemplate.list
  } else if (uri.includes("/getReportTemplateList")) {
    //获取报告模板列表
  } else if (uri.includes("/getReport")) {
    //获取报告详情
  } else if (uri.includes("/getReportList")) {
    //获取报告列表
  } else if (uri.includes("/saveReport")) {
    //https://zhuanlan.zhihu.com/p/382487951
  } else {
  }
}
