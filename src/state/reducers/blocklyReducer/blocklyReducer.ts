import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { message } from "antd";

type blocklyState = {
  xml: string;
  code: string;
};

const initialState: blocklyState = {
  xml: "",
  code: "",
};

const blocklySlice = createSlice({
  name: "blockly",
  initialState,
  reducers: {
    setBlockly: (state: blocklyState, action: PayloadAction<string>) => {
      state.xml = action.payload;
    },
    setCode: (state: blocklyState, action: PayloadAction<string>) => {
      state.code = action.payload;
    },
  },
});

export const { setBlockly, setCode } = blocklySlice.actions;
export default blocklySlice.reducer;
