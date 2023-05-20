import Blockly from "blockly";

// Define custom block

Blockly.Blocks["custom_email_description"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Email:")
      .appendField(new Blockly.FieldLabel(""), "EMAIL");
    this.appendDummyInput()
      .appendField("Description:")
      .appendField(new Blockly.FieldLabel(""), "DESCRIPTION");
    this.setColour(230);
    this.setOutput(true, null);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

// Define custom generator stub for the custom_email_description block
Blockly.JavaScript["custom_email_description"] = function (block: any) {
  const email = block.getFieldValue("EMAIL");
  const description = block.getFieldValue("DESCRIPTION");

  const code = `sendEmail(${email}, ${description});\n`;

  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
