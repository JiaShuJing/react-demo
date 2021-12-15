/* eslint-disable react-hooks/rules-of-hooks */
import React from "react"
import { TreeDemo } from "./Tree"
import { SelectTest } from "./SelectTest"
import { Button } from "antd"
export const onlineQuality = () => {
  const onClick = ()=>{
    console.log();
  }
  return (
    <div>
      线上质量
      <TreeDemo />
      <SelectTest />
      <Button onClick={onClick}>获取选中的person</Button>
    </div>
  )
}
