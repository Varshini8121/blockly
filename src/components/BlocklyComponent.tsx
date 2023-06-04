import React, { useEffect, useRef, useState } from "react";
import { BlocklyWorkspace } from "react-blockly";
import Blockly from "blockly";

import { toolboxCategories } from "../data/toolBoxCategories";
// import { javascriptGenerator } from "blockly/javascript";
import { Button, Input, Typography, message } from "antd";
import "../constants/customEmailBlock";
import { DBCollectionName, saveToFirebase } from "../db/dbFunc";
import { useAppDispatch } from "../state/hooks";
import {
  setBlockly,
  setCode,
} from "../state/reducers/blocklyReducer/blocklyReducer";
import { useNavigate, useParams } from "react-router-dom";
import { collection, doc, getDoc, getDocs, where } from "firebase/firestore";
import { db } from "../db/firebaseConfig";

const { TextArea } = Input;

const BlocklyComponent = ({ getXML }: { getXML: () => string }) => {
  const [javascriptCode, setJavascriptCode] = useState("");
  const [output, setoutput] = useState("");

  const [xml, setXml] = useState("");
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const workspaceRef = useRef<any>(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (id !== "new" && !getXML()) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    dispatch(setBlockly(xml));
  }, [xml]);

  useEffect(() => {
    dispatch(setCode(javascriptCode));
  }, [javascriptCode]);

  useEffect(() => {
    try {
      if (id !== "new") setInitData();
    } catch (error) {
      message.error("Error setting data !!");
    }
  }, []);
  const setInitData = async () => {
    const docRef = doc(db, DBCollectionName, id as any);

    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      const data: any = { id: docSnapshot.id, ...docSnapshot.data() };
      setXml(data.data);
    } else {
      console.log("Document does not exist.");
    }
  };
  const handleWorkspaceChange = (workspace: any) => {
    try {
      const code = Blockly.JavaScript.workspaceToCode(workspace);
      setJavascriptCode(code);
    } catch (error) {
      console.log(error);
    }
  };

  const executeCode = (code: string): string => {
    try {
      const wrappedCode = `(function() { ${code} })()`;
      const evalFunc = new Function(wrappedCode);
      const result = evalFunc();
      return String(result);
    } catch (error) {
      console.error(error);
      return "";
    }
  };

  return (
    <div className="ml-5 my-5">
      {/* <BlocklyTest /> */}
      <BlocklyWorkspace
        toolboxConfiguration={toolboxCategories as any}
        initialXml={getXML()}
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

      <div className="flex justify-between mt-6">
        <div className="my-3 w-1/2">
          <div>
            <Typography.Title level={4}>Generated Code</Typography.Title>
          </div>
          <TextArea rows={10} value={javascriptCode}></TextArea>
        </div>

        <div className="w-1/3">
          <div className="flex justify-between">
            <Typography.Title level={4}>{/* Output Code */}</Typography.Title>
            <Button
              onClick={() => {
                const result = executeCode(javascriptCode);
                setoutput(result);
              }}
            >
              Run code
            </Button>
          </div>
          {/* <TextArea rows={10} value={output}></TextArea> */}
        </div>
      </div>
    </div>
  );
};

export default BlocklyComponent;
