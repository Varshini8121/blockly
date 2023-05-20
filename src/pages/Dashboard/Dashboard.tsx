import React from "react";
import BlocklyComponent from "../../components/BlocklyComponent";
import { useAppSelector } from "../../state/hooks";

export const Dashboard = () => {
  const xmldata = useAppSelector((state) => state.blockly.xml);
  const getXML = () => {
    return xmldata;
  };
  return (
    <div className="h-[90vh] w-[90vw]">
      <BlocklyComponent getXML={getXML} />
    </div>
  );
};
