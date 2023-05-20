import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { message } from "antd";

type blocklyState = {
  xml: string;
};

const initialState: blocklyState = {
  xml: "",
};

const blocklySlice = createSlice({
  name: "blockly",
  initialState,
  reducers: {
    setBlockly: (state: blocklyState, action: PayloadAction<string>) => {
      state.xml = action.payload;
    },
  },
});

export const { setBlockly } = blocklySlice.actions;
export default blocklySlice.reducer;
