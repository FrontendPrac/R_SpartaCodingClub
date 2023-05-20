import { createSlice } from "@reduxjs/toolkit";

const tilSlice = createSlice({
  name: "til",
  initialState: {
    listTIL: [],
  },
  reducers: {
    add: (state, action) => {
      console.log("action: ", action);
      // toolkit은 immer라는 불변성 유지 패키지를 내장하고 있다.
      // 이 때문에 스프레드 문법을 통한 불변성 유지를 할 필요가 없다.
      state.listTIL.push(action.payload);
    },
  },
});

export const { add } = tilSlice.actions;
export default tilSlice.reducer;
