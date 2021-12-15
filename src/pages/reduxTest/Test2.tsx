import React from "react"

export interface ListProps<T> {
  visible: boolean
  list: T[]
  renderItem: (item: T, index: number) => React.ReactNode
}

export function List<T>(props: ListProps<T>) {
  return <div></div>
}

// Test
function Test() {
  return (
    <List
      visible={true}
      list={[1, 2, 3]}
      renderItem={(i) => {
        /*自动推断i为number类型*/
        return <p>{i}</p>
      }}
    />
  )
}
