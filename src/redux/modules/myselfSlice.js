import { createSlice } from "@reduxjs/toolkit";

// slice
const myselfSlice = createSlice({
  name: "myself",
  initialState: {
    name: "kidongg",
    age: 28,
  },
  reducers: {
    changeName: (state, action) => {
      // toolkit은 immer라는 불변성 유지 패키지를 내장하고 있다.
      // 이 때문에 스프레드 문법을 통한 불변성 유지를 할 필요가 없다.
      state.name = action.payload;
    },
  },
});

// reducer, action creator를 export 한다.
export const { changeName } = myselfSlice.actions;
export default myselfSlice.reducer;
