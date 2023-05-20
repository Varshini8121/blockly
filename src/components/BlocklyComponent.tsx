import React, { useEffect, useState } from "react";
import { BlocklyWorkspace } from "react-blockly";
import Blockly from "blockly";

import { toolboxCategories } from "../data/toolBoxCategories";
// import { javascriptGenerator } from "blockly/javascript";
import { Input, Typography } from "antd";
import "../constants/customEmailBlock";
import { saveToFirebase } from "../db/dbFunc";
import { useAppDispatch } from "../state/hooks";
import { setBlockly } from "../state/reducers/blocklyReducer/blocklyReducer";
import { useParams } from "react-router-dom";
const { TextArea } = Input;

const BlocklyComponent = () => {
  const [javascriptCode, setJavascriptCode] = useState("");
  const [xml, setXml] = useState("");
  const dispatch = useAppDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(setBlockly(xml));
  }, [xml]);

  const handleWorkspaceChange = (workspace: any) => {
    try {
      const code = Blockly.JavaScript.workspaceToCode(workspace);
      setJavascriptCode(code);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="ml-5 my-5">
      {/* <BlocklyTest /> */}
      <BlocklyWorkspace
        toolboxConfiguration={toolboxCategories as any}
        //   initialXml={`
        //   <xml xmlns="http://www.w3.org/1999/xhtml">
        //     <block type="controls_if" x="50" y="50"></block>
        //   </xml>
        // `}
        onWorkspaceChange={handleWorkspaceChange}
        onXmlChange={(xml) => setXml(xml)}
        className="fill-height"
        workspaceConfiguration={{
          move: {
            scrollbars: {
              horizontal: true,
              vertical: true,
            },
            drag: true,
            wheel: true,
          },
          trashcan: false,
        }}
      />
      <div className="my-3">
        <div>
          <Typography.Title level={4}>Generated Code</Typography.Title>
        </div>
        <TextArea rows={6} value={javascriptCode}></TextArea>
      </div>
    </div>
  );
};

export default BlocklyComponent;
