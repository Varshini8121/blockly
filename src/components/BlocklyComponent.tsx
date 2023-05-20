import React, { useState } from "react";
import { BlocklyWorkspace } from "react-blockly";
import Blockly from "blockly";
import { toolboxCategories } from "../data/toolBoxCategories";
import "blockly/blocks";
import { javascriptGenerator } from "blockly/javascript";

import { Input, Typography } from "antd";
const { TextArea } = Input;

const BlocklyComponent = () => {
  const [javascriptCode, setJavascriptCode] = useState("");

  const handleWorkspaceChange = (workspace: any) => {
    try {
      const code = javascriptGenerator.workspaceToCode(workspace);
      setJavascriptCode(code);
    } catch (error) {
      console.log(error);
    }
  };
  // Define custom block
  // Define custom block
  Blockly.Blocks["custom_email_description"] = {
    init: function () {
      this.jsonInit({
        type: "custom_email_description",
        message0: "Email: %1 Description: %2",
        args0: [
          {
            type: "field_input",
            name: "EMAIL",
            text: "",
          },
          {
            type: "field_input",
            name: "DESCRIPTION",
            text: "",
          },
        ],
        output: "Hiii",
        colour: 230,
        tooltip: "",
        helpUrl: "",
      });
    },
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
        onXmlChange={(xml) => console.log(xml)}
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
