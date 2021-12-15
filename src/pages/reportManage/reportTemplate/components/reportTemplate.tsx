import React, { useState } from "react"
import { Modal, Button, Select, Form } from "antd"
import ListDrag from "../ListDrag"
import { request } from "../../../../utils/api"
//@ts-ignore
import { groupIdList, groupNameList } from "@/consts/group"

export const ReportTemplate = () => {
  const defaultList: any[] = []
  const [list, setList] = useState(defaultList)

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [form] = Form.useForm()
  const showModal = () => {
    setIsModalVisible(true)
  }
  const handleOk = () => {
    //表单校验
    form
      .validateFields()
      .then((values) => {})
      .catch((errorInfo) => {})
    //调用接口保存模板
    const formData = {
      ...form.getFieldsValue(),
      list,
    }
    request("/saveReportTemplate", formData)
    handleCancel()
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const { Option } = Select
  return (
    <>
      <Button type="primary" onClick={showModal}>
        创建报告模板
      </Button>
      <Modal width="800px" title="创建报告模板" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form form={form} layout="horizontal">
          <Form.Item label="业务线1" name="group1" rules={[{ required: true, message: "请输入业务线1" }]}>
            <Select style={{ width: 180 }} allowClear mode="multiple">
              {groupIdList.map((group: any, index: any) => {
                const label = groupNameList.find((item: any) => item.id === group.topGroupId).name
                return (
                  <Option key={group.topGroupId} value={group.topGroupId}>
                    {label}
                  </Option>
                )
              })}
            </Select>
          </Form.Item>
          <Form.Item label="业务线2" name="group2" rules={[{ required: true, message: "请输入业务线2" }]}>
            <Select style={{ width: 120 }} allowClear mode="multiple">
              <Option value={"1"}>本地生活</Option>
              <Option value={"2"}>流量中台</Option>
              <Option value={"3"}>积木</Option>
            </Select>
          </Form.Item>
          <Form.Item label="报告类型" name="reportType" rules={[{ required: true, message: "请输入报告类型" }]}>
            <Select style={{ width: 120 }} allowClear mode="multiple">
              <Option value={"1"}>提测报告</Option>
              <Option value={"2"}>测试日报</Option>
              <Option value={"3"}>项目完成报告</Option>
              <Option value={"4"}>上线checklist</Option>
            </Select>
          </Form.Item>
        </Form>
        <ListDrag list={list} setList={setList} />
      </Modal>
    </>
  )
}
