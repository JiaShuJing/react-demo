import React, { useState } from "react"
import { Select } from "antd"

const { Option } = Select
export const PersonSelect = (props: any) => {
  const [value, setValue] = useState("")
  const persons = ["hanhan", "jiashujing", "shagua"] //从后端接口拿数据 模糊搜索 防抖
  const onChange = (value: any) => {
    setValue(value)
  }
  return (
    <Select {...props} style={{ width: "150px" }} onChange={onChange}>
      {persons.map((person) => {
        return (
          <Option key={person} value={person}>
            {person}
          </Option>
        )
      })}
    </Select>
  )
}
