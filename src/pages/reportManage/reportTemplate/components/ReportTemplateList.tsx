import { Table, Badge, Menu, Dropdown, Space } from "antd"
import { DownOutlined } from "@ant-design/icons"
import { request } from "../../../../utils/api"

export const ReportTemplateList = () => {
  let reportTemplateList = request("/getReportTemplateComplete")
  const expandedRowRender = (record: any, index: any) => {
    const columns = [
      { title: "表单项类型", dataIndex: "itemType", key: "itemType" },
      { title: "表单项名称", dataIndex: "itemName", key: "itemName" },
      { title: "是否必填", dataIndex: "isRequired", key: "isRequired" },
      {
        title: "操作",
        dataIndex: "operation",
        key: "operation",
        render: () => (
          <Space size="middle">
            <a>编辑</a>
            <a>移动</a>
            <a>删除</a>
          </Space>
        ),
      },
    ]

    const data: any = []
    reportTemplateList[index].list.map((item: any, i: any) => {
      data.push({
        key: i,
        itemType: item.type,
        itemName: item.title,
        isRequired: item.isRequired ? "是" : "否",
      })
    })
    return <Table columns={columns} dataSource={data} pagination={false} />
  }

  const columns = [
    { title: "业务线", dataIndex: "group", key: "group" },
    { title: "报告类型", dataIndex: "type", key: "type" },
    { title: "版本", dataIndex: "version", key: "version" },
    { title: "创建人", dataIndex: "creator", key: "creator" },
    { title: "创建日期", dataIndex: "createDate", key: "createdDate" },
    { title: "更新日期", dataIndex: "updateDate", key: "updateDate" },
    { title: "操作", key: "operation", render: () => <a>编辑</a> },
  ]

  const data: any = []
  reportTemplateList.map((item: any, index: any) => {
    data.push({
      key: index,
      group: "综合业务质量组/本地生活",
      type: "提测报告",
      version: "1",
      creator: "hanhan",
      createDate: "2021-11-11",
      updateDate: "2021-11-29",
    })
  })

  return <Table className="components-table-demo-nested" columns={columns} expandable={{ expandedRowRender }} dataSource={data} pagination={false} />
}
