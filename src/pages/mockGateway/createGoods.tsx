import { Form, Input, Button, Select, Table, Row, Col } from "antd"
//@ts-ignore
import { getMerchantList, addMerchant, getDefaultGoodsProperty } from "@/utils/API2"
import { useState, useEffect } from "react"
//@ts-ignore
import { Hello } from "@/features/hello/Hello"
import "jsoneditor-react/es/editor.min.css"

const { Option } = Select
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
}
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
}

export const CreateGoods = () => {
  const [form] = Form.useForm()
  //@ts-ignore
  const onGenderChange = (value) => {
    switch (value) {
      case "male":
        form.setFieldsValue({
          note: "Hi, man!",
        })
        return

      case "female":
        form.setFieldsValue({
          note: "Hi, lady!",
        })
        return
      //@ts-ignore
      case "other":
        form.setFieldsValue({
          note: "Hi there!",
        })
      default:
        console.log("default")
        break
    }
  }
  //@ts-ignore
  const onFinish = (values) => {
    console.log(values)
  }

  const onReset = () => {
    form.resetFields()
  }

  const onFill = () => {
    form.setFieldsValue({
      name: "测试供应商",
      type: "团购",
    })
  }

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "供应商名称",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "类型",
      dataIndex: "type",
      key: "type",
    },
  ]

  const [merchantList, setMerchantList] = useState([])
  const [jsonData, setJsonData] = useState({})
  useEffect(() => {
    getDefaultGoodsProperty().then(
      //@ts-ignore
      (res) => {
        console.log("getDefaultGoodsProperty response:", res)
        form.setFieldsValue({
          otherProperty: res.data,
        })
        setJsonData(res.data)
      },
      //@ts-ignore
      (error) => {
        console.log("getDefaultGoodsProperty response failed!")
      }
    )
    getMerchantList().then(
      //@ts-ignore
      (res) => {
        console.log("getMerchantList response:", res)
        setMerchantList(res.data)
      },
      //@ts-ignore
      (error) => {
        console.log("getMerchantList response failed!")
      }
    )
  }, [])

  const submit = () => {
    console.log(form.getFieldsValue())
    addMerchant().then(
      //@ts-ignore
      (res) => {
        console.log("addMerchant response:", res)
      },
      //@ts-ignore
      (error) => {
        console.log("addMerchant response failed!")
      }
    )
  }
  const handleJsonChange = () => {
    console.log("handleJsonChange")
  }

  return (
    <>
      <Row>
        <Col span={6}></Col>
        <Col span={10}>
          <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
            <Form.Item
              name="goodsName"
              label="商品名称"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="goodsType"
              label="商品类型"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select placeholder="请选择" onChange={onGenderChange} allowClear>
                <Option value="male">团购</Option>
                <Option value="hotelCalender">酒店价格日历</Option>
                <Option value="ticketCalender">门票价格日历</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="price"
              label="价格"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="stock"
              label="库存"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="otherPropery"
              label="其他属性"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              {/* <Editor value={jsonData} onChange={handleJsonChange} /> */}
            </Form.Item>
            <Form.Item noStyle shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}>
              {({ getFieldValue }) =>
                getFieldValue("gender") === "other" ? (
                  <Form.Item
                    name="customizeGender"
                    label="Customize Gender"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                ) : null
              }
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit" onClick={submit}>
                确认添加
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={8}></Col>
      </Row>
      <Hello />
      <Table columns={columns} dataSource={merchantList} />
    </>
  )
}
