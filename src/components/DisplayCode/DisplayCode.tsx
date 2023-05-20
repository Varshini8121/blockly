import React, { useState, useEffect } from "react";
import Blockly from "blockly";

const DisplayCode = ({ workspace }) => {
  const [code, setCode] = useState("");

  useEffect(() => {
    const workspaceChangeListener = () => {
      const generatedCode = Blockly.JavaScript.workspaceToCode(workspace);
      setCode(generatedCode);
    };

    Blockly.addChangeListener(workspaceChangeListener);

    return () => {
      Blockly.removeChangeListener(workspaceChangeListener);
    };
  }, [workspace]);

  return (
    <div>
      <h2>Generated Code:</h2>
      <pre>{code}</pre>
    </div>
  );
};

export default DisplayCode;
