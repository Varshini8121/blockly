import Blockly from "blockly";

// Define custom block
Blockly.Blocks["custom_email_description"] = {
  init: function () {
    this.appendDummyInput().appendField("Get Email and Description");
    this.appendDummyInput()
      .appendField("Email")
      .appendField(new Blockly.FieldTextInput(""), "email");
    this.appendDummyInput()
      .appendField("Description")
      .appendField(new Blockly.FieldTextInput(""), "description");
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

// Define custom generator stub for the custom_email_description block
Blockly.JavaScript["custom_email_description"] = function (block: any) {
  const email = block.getFieldValue("email");
  const description = block.getFieldValue("description");

  const code = `const response = await fetch("http://node-application-url/sendmail", { method: "POST", body: { email:${email}, description:${description} }, \n headers: { "Content-Type": "application/json", }, });\n\n const json = await response.json();\n`;

  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
