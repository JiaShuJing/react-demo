import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { loadMoviesAPI } from "./helloAPI"
export const loadData = createAsyncThunk("hello/loadMoviesAPI", async () => {
  const res = await loadMoviesAPI()
  return res
})

export const helloSlice = createSlice({
  name: "hello",
  initialState: {
    personName: "hanhan",
  },
  reducers: {
    appendLowerHello: (state) => {
      state.personName = state.personName + " hello"
    },
    appendCapitalHello: (state) => {
      state.personName = state.personName + " HELLO"
    },
  },
})

export const { appendLowerHello, appendCapitalHello } = helloSlice.actions
export const helloSelector = (state) => state.hello.personName
export default helloSlice.reducer
