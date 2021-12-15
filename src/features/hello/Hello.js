import { useSelector, useDispatch } from "react-redux"
import { appendLowerHello, appendCapitalHello, helloSelector } from "./helloSlice"
export const Hello = () => {
  const personName = useSelector(helloSelector)
  const dispatch = useDispatch()
  return (
    <div>
      <span>{personName}</span>
      <button onClick={() => dispatch(appendCapitalHello(personName))}>HELLO</button>
      <button onClick={() => dispatch(appendLowerHello(personName))}>hello</button>
    </div>
  )
}
