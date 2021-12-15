import { useState } from "react"

export const TodoList = () => {
  const [inputValue, setInputValue] = useState("")
  const [list, setList] = useState([])
  //@ts-ignore
  const deleteItem = (index) => {
    // setList((list) => list.filter((item, i) => i !== index))
    setList((list) => list.filter((item, i) => i !== index))
  }
  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
      ></input>
      <button
        onClick={() => {
          //@ts-ignore
          setList([...list, inputValue])
          setInputValue("")
        }}
      >
        新增
      </button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={deleteItem.bind(this, index)}>删除</button>
          </li>
        ))}
      </ul>
    </>
  )
}
