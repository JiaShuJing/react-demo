import React, { useEffect, useState } from "react"
import { DragSource, DropTarget } from "react-dnd"
import { Form, Input, Select, DatePicker, Button, Space, Upload, message } from "antd"
import { UploadOutlined } from "@ant-design/icons"
// import classnames from "classnames";
import "./css/index.css"
import { PersonSelect } from "./PersonSelect"
function Item(props: any) {
  const {
    // 这些 props 由 React DnD注入，参考`collect`函数定义
    isDragging,
    connectDragSource,
    connectDragPreview,
    connectDropTarget,
    // 这些是组件收到的 props
    item,
    style = {},
    find,
    move,
    change,
    remove,
    ...restProps
  } = props
  const opacity = isDragging ? 0.5 : 1
  //@ts-ignore
  const onRemove = (event) => {
    event.stopPropagation()
    remove(item)
  }
  return connectDropTarget(
    // 列表项本身作为 Drop 对象
    connectDragPreview(
      // 整个列表项作为跟随拖动的影像
      <div {...restProps} style={Object.assign(style, { opacity })}>
        {/* <p className="title">{item.title || "任务标题"}</p> */}
        <ul className="oper-list" style={{ display: "flex" }}>
          {
            connectDragSource(<li className="oper-item icon-move">移动</li>) // 拖动图标作为 Drag 对象
          }
          <li className="oper-item" onClick={onRemove}>
            删除
          </li>
        </ul>
      </div>
    )
  )
}
const type = "item"
const dragSpec = {
  // 拖动开始时，返回描述 source 数据。后续通过 monitor.getItem() 获得
  beginDrag: (props: any) => ({
    id: props.id,
    originalIndex: props.find(props.id).index,
  }),
  // 拖动停止时，处理 source 数据
  endDrag(props: any, monitor: any) {
    const { id: droppedId, originalIndex } = monitor.getItem()
    const didDrop = monitor.didDrop()
    // source 是否已经放置在 target
    if (!didDrop) {
      return props.move(droppedId, originalIndex)
    }
    return props.change(droppedId, originalIndex)
  },
}
const dragCollect = (connect: any, monitor: any) => ({
  connectDragSource: connect.dragSource(), // 用于包装需要拖动的组件
  connectDragPreview: connect.dragPreview(), // 用于包装需要拖动跟随预览的组件
  isDragging: monitor.isDragging(), // 用于判断是否处于拖动状态
})
const dropSpec = {
  canDrop: () => false, // item 不处理 drop
  hover(props: any, monitor: any) {
    const { id: draggedId } = monitor.getItem()
    const { id: overId } = props
    // 如果 source item 与 target item 不同，则交换位置并重新排序
    if (draggedId !== overId) {
      const { index: overIndex } = props.find(overId)
      props.move(draggedId, overIndex)
    }
  },
}
const dropCollect = (connect: any, monitor: any) => ({
  connectDropTarget: connect.dropTarget(), // 用于包装需接收拖拽的组件
})
const DndItem = DropTarget(type, dropSpec, dropCollect)(DragSource(type, dragSpec, dragCollect)(Item))
function List(props: any) {
  let { list: propsList, activeItem, connectDropTarget } = props
  propsList =
    propsList.length > 0 &&
    propsList.map((item: any) => {
      const isActive = activeItem.id === item.id
      item = isActive ? activeItem : item
      item.active = isActive
      return item
    })
  const [list, setList] = useState(propsList)
  useEffect(() => {
    if (propsList.length !== list.length) {
      setList(propsList)
    }
  }, [propsList])
  const find = (id: any) => {
    //@ts-ignore
    const item = list.find((c) => `${c.id}` === id)
    return {
      item,
      index: list.indexOf(item),
    }
  }
  const move = (id: any, toIndex: any) => {
    const { item, index } = find(id)
    list.splice(index, 1)
    list.splice(toIndex, 0, item)
    setList([...list])
  }
  const change = (id: any, fromIndex: any) => {
    const { index: toIndex } = find(id)
    props.onDropEnd(list, fromIndex, toIndex)
  }
  const remove = (item: any) => {
    const newList = list.filter((it: any) => it.id !== item.id)
    setList(newList)
    props.onDelete(newList)
  }
  const onClick = (event: any) => {
    const { id } = event.currentTarget
    const { item } = find(id)
    props.onClick(item)
  }
  const onFinish = (values: any) => {
    console.log("Received values of form:", values)
  }

  const formItemType = (type: any) => {
    const { TextArea } = Input
    let el = <Input />
    switch (type) {
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
    return el
  }
  return connectDropTarget(
    <ul className="list">
      {/* 表单拖拽 */}
      <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
        {list &&
          list.map((item: any, index: any) => {
            return (
              <Space key={item.id} style={{ display: "flex", marginBottom: 0 }} align="baseline">
                <Form.Item label={item.title} name={item.title} style={{ width: "200px" }}>
                  {formItemType(item.type)}
                </Form.Item>
                <Form.Item>
                  <DndItem className="info" id={`${item.id}`} item={item} find={find} move={move} change={change} remove={remove} onClick={onClick} />
                </Form.Item>
              </Space>
            )
          })}
      </Form>
    </ul>
  )
}
const DndCompents = DropTarget(type, {}, (connect) => ({
  connectDropTarget: connect.dropTarget(),
}))(List)

export default DndCompents
