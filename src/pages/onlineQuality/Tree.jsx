import React, { useState } from "react"
import { Tree } from "antd"

const jsonData = {
  code: 200,
  data: {
    ext: "",
    size: 4,
    items: {
      item: "第一个",
    },
  },
  message: "success",
}
const res = [
  { title: "code", key: "code", children: [] },
  {
    title: "data",
    key: "data",
    children: [{ title: "ext", key: "ext", children: [] }, { title: "items" }, { title: "message", key: "message", children: [] }],
  },
]
// function transform(data) {
//   const res = []
//   const keys = Object.keys(data)
//   keys.forEach((k) => {
//     if (Object.prototype.toString.call(data[k]) === "[object Object]") {
//       res.push({ key: k, title: k, children: transform(data[k]) })
//     } else {
//       res.push({ key: k, name: k })
//     }
//   })
//   return res
// }
const jsonToTreeData = (json) => {
  const res = []
  if (json instanceof Object) {
    for (let key in json) {
      let newObj = {
        title: key,
        key,
      }

      if (json[key] instanceof Object) {
        newObj["children"] = jsonToTreeData(json[key]) || []
        console.log(1111)
      }
      res.push(newObj)
    }
  }
  return res
}

let treeData = jsonToTreeData(jsonData)

export const TreeDemo = () => {
  const [expandedKeys, setExpandedKeys] = useState(["0-0-0", "0-0-1"])
  const [checkedKeys, setCheckedKeys] = useState(["0-0-0"])
  const [selectedKeys, setSelectedKeys] = useState([])
  const [autoExpandParent, setAutoExpandParent] = useState(true)

  const onExpand = (expandedKeysValue) => {
    console.log("onExpand", expandedKeysValue) // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.

    setExpandedKeys(expandedKeysValue)
    setAutoExpandParent(false)
  }

  const onCheck = (checkedKeysValue) => {
    console.log("onCheck", checkedKeysValue)
    setCheckedKeys(checkedKeysValue)
  }

  const onSelect = (selectedKeysValue, info) => {
    console.log("onSelect", info)
    setSelectedKeys(selectedKeysValue)
  }

  return (
    <Tree
      checkable
      onExpand={onExpand}
      expandedKeys={expandedKeys}
      autoExpandParent={autoExpandParent}
      onCheck={onCheck}
      checkedKeys={checkedKeys}
      onSelect={onSelect}
      selectedKeys={selectedKeys}
      treeData={treeData}
    />
  )
}
