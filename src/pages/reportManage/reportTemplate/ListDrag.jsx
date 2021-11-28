import React, { useState } from "react"
import { Button, Modal, Form, Input, Checkbox } from "antd"
import { DndProvider } from "react-dnd"

import { HTML5Backend } from "react-dnd-html5-backend"
import List from "./components/DndComponents"
import "./css/index.css"
//https://blog.csdn.net/gaofeng6565/article/details/115697473

function ListDrag({ list, setList }) {
  const [form] = Form.useForm()
  const [activeItem, setActiveItem] = useState(0)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [formItemName, setFormItemName] = useState("")
  const [formItemIsRequired, setFormItemIsRequired] = useState(false)
  const [formItemType, setFormItemType] = useState("")

  const handleOk = () => {
    setIsModalVisible(false)
    let createList = {
      id: list.length + 1,
      title: `${formItemName}`,
      type: `${formItemType}`,
      isRequired: formItemIsRequired, //是否必填
    }
    let newlist = [...list].concat(createList)
    setList([...newlist])
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }
  const onDropEnd = (list, fromIndex, toIndex) => {
    setList([...list])
  }
  const onDelete = (list) => {
    setList([...list])
  }
  const onClick = (item) => {
    if (item.id !== activeItem.id) {
      setActiveItem(item)
    }
  }
  const onAdd = (type) => {
    setIsModalVisible(true)
    setFormItemType(type)
  }
  return (
    <div className="list-wrap">
      <Button className="button-style" type="primary" onClick={onAdd.bind(null, "Input")}>
        添加input
      </Button>
      <Button className="button-style" type="primary" onClick={onAdd.bind(null, "Textarea")}>
        添加textarea
      </Button>
      <Button className="button-style" type="primary" onClick={onAdd.bind(null, "Select")}>
        添加普通select
      </Button>
      <Button className="button-style" type="primary" onClick={onAdd.bind(null, "SelectPerson")}>
        添加人员select
      </Button>
      <Button className="button-style" type="primary" onClick={onAdd.bind(null, "DatePicker")}>
        添加datepicker
      </Button>
      <Button className="button-style" type="primary" onClick={onAdd.bind(null, "Upload")}>
        添加upload
      </Button>
      <Modal width="700px" title="添加表单项" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form form={form}>
          <Form.Item label="表单项名称" name="name" rules={[{ required: true, message: "请输入表单项名称!" }]}>
            <Input
              value={formItemName}
              placeholder="例如：提测时间"
              onChange={(e) => {
                setFormItemName(e.target.value)
              }}
            />
          </Form.Item>
          <Form.Item label="是否必填" name="isRequired">
            <Checkbox
              value={formItemIsRequired}
              onChange={(e) => {
                setFormItemIsRequired(e.target.checked)
              }}
            >
              是
            </Checkbox>
            <Checkbox
              checked={!formItemIsRequired}
              onChange={(e) => {
                setFormItemIsRequired(e.target.checked)
              }}
            >
              否
            </Checkbox>
          </Form.Item>
        </Form>
      </Modal>
      <DndProvider backend={HTML5Backend}>
        <List list={list} activeItem={activeItem} onDropEnd={onDropEnd} onDelete={onDelete} onClick={onClick} />
      </DndProvider>
    </div>
  )
}
export default ListDrag
