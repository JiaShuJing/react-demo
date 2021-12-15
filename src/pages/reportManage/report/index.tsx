import { useState } from "react"
import { Button, Modal, Input, Select, DatePicker, message, Upload, Form } from "antd"
import { request } from "../../../utils/api"
import { UploadOutlined } from "@ant-design/icons"
import { PersonSelect } from "../reportTemplate/components/PersonSelect"
//@ts-ignore
export const Report = ({ reportType }) => {
  const [form] = Form.useForm()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const handleOk = () => {
    //表单校验
    form
      .validateFields()
      .then((values) => {})
      .catch((errorInfo) => {})
    //保存报告内容
    const formData = {
      ...form.getFieldsValue(),
    }
    console.log(11111, formData)
    // request("/saveReport", formData)
    // 关闭弹窗
    // handleCancel()
  }
  const handleCancel = () => {
    setIsModalVisible(false)
  }
  const createReport = () => {
    setIsModalVisible(true)
  }
  const reportTemplate = request("/getReportTemplate")
  const displayFormItem = (item: any) => {
    const { TextArea } = Input
    let el = <Input />
    switch (item.type) {
      case "Select":
        el = <Select />
        break
      case "SelectPerson":
        el = <PersonSelect />
        break
      case "DatePicker":
        el = <DatePicker />
        break
      case "Textarea":
        el = <TextArea autoSize={{ minRows: 3 }} showCount maxLength={2000} />
        break
      case "Upload":
        const props = {
          name: "file",
          action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
          headers: {
            authorization: "authorization-text",
          },
          onChange(info: any) {
            if (info.file.status !== "uploading") {
              console.log(info.file, info.fileList)
            }
            if (info.file.status === "done") {
              message.success(`${info.file.name} file uploaded successfully`)
            } else if (info.file.status === "error") {
              message.error(`${info.file.name} file upload failed.`)
            }
          },
        }
        el = (
          <Upload {...props}>
            <Button icon={<UploadOutlined />}>点击上传</Button>
          </Upload>
        )
        break
      default:
        el = <Input />
    }
    let formItem = (
      <Form.Item label={item.title} name={item.title} rules={[{ required: item.isRequired, message: "必填项" }]}>
        {el}
      </Form.Item>
    )
    console.log(1, formItem)
    return formItem
  }
  return (
    <>
      <Button type={"primary"} onClick={createReport}>
        创建提测报告
      </Button>
      <Modal width="800px" title={`创建${reportType}`} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form style={{ width: "600px" }} form={form} labelCol={{ span: 4 }} wrapperCol={{ span: 16 }}>
          {reportTemplate.map((formItem: any) => {
            //执行函数
            return displayFormItem(formItem)
          })}
        </Form>
      </Modal>
    </>
  )
}
