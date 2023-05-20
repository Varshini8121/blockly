import { combineReducers } from "@reduxjs/toolkit";
import apiReducer from "./apiReducer/apiReducer";
import blocklyReducer from "./blocklyReducer/blocklyReducer";

const reducers = combineReducers({
  blockly: blocklyReducer,
});

export default reducers;
