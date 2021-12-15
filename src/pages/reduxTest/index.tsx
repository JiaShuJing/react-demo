import React, { useState, useEffect } from "react"
//@ts-ignore
import { Counter } from "@/features/counter/Counter"
//@ts-ignore
import { Hello } from "@/features/hello/Hello"
//@ts-ignore
import { TodoList } from "@/pages/reduxTest/Test1"
//@ts-ignore
import { List } from "@/pages/reduxTest/Test2"
export const ReduxTest = () => {
  return (
    <>
      <Counter />
      <Hello />
      {/* <SetStateTest /> */}
      <TodoList />
      <List />
    </>
  )
}

const SetStateTest = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  //@ts-ignore
  const tabChoiced = (id) => {
    setCurrentIndex((id) => id + 1)
    console.log(currentIndex)
    setCurrentIndex((i) => {
      console.log("other:", i)
      return i
    })
  }

  return (
    <div>
      {/* <p onClick={tabChoiced}>{currentIndex}</p> */}
      <TodoList />
      <List />
    </div>
  )
}
