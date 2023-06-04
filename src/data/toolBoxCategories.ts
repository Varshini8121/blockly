export const toolboxCategories = {
  kind: "categoryToolbox",
  contents: [
    {
      kind: "category",
      name: "Logic",
      contents: [
        {
          kind: "block",
          type: "controls_if",
        },
        {
          kind: "block",
          type: "logic_compare",
        },
        {
          kind: "block",
          type: "logic_operation",
        },
        {
          kind: "block",
          type: "logic_negate",
        },
        {
          kind: "block",
          type: "logic_boolean",
        },
        {
          kind: "block",
          type: "logic_null",
        },
        {
          kind: "block",
          type: "logic_ternary",
        },
      ],
    },
    {
      kind: "category",
      name: "Loops",
      contents: [
        {
          kind: "block",
          type: "controls_repeat_ext",
        },
        {
          kind: "block",
          type: "controls_whileUntil",
        },
        {
          kind: "block",
          type: "controls_for",
        },
        {
          kind: "block",
          type: "controls_forEach",
        },
        {
          kind: "block",
          type: "controls_flow_statements",
        },
      ],
    },
    {
      kind: "category",
      name: "Math",
      contents: [
        {
          kind: "block",
          type: "math_number",
        },
        {
          kind: "block",
          type: "math_arithmetic",
        },
        {
          kind: "block",
          type: "math_single",
        },
        {
          kind: "block",
          type: "math_trig",
        },
        {
          kind: "block",
          type: "math_constant",
        },
        {
          kind: "block",
          type: "math_number_property",
        },
        {
          kind: "block",
          type: "math_round",
        },
        {
          kind: "block",
          type: "math_on_list",
        },
        {
          kind: "block",
          type: "math_modulo",
        },
        {
          kind: "block",
          type: "math_constrain",
        },
        {
          kind: "block",
          type: "math_random_int",
        },
        {
          kind: "block",
          type: "math_random_float",
        },
      ],
    },
    {
      kind: "category",
      name: "Text",
      contents: [
        {
          kind: "block",
          type: "text",
        },
        {
          kind: "block",
          type: "text_join",
        },
        {
          kind: "block",
          type: "text_append",
        },
        {
          kind: "block",
          type: "text_length",
        },
        {
          kind: "block",
          type: "text_isEmpty",
        },
        {
          kind: "block",
          type: "text_indexOf",
        },
        {
          kind: "block",
          type: "text_charAt",
        },
        {
          kind: "block",
          type: "text_getSubstring",
        },
        {
          kind: "block",
          type: "text_changeCase",
        },
        {
          kind: "block",
          type: "text_trim",
        },
        {
          kind: "block",
          type: "text_print",
        },
        {
          kind: "block",
          type: "text_prompt_ext",
        },
      ],
    },
    {
      kind: "category",
      name: "Lists",
      contents: [
        {
          kind: "block",
          type: "lists_create_empty",
        },
        {
          kind: "block",
          type: "lists_create_with",
        },
        {
          kind: "block",
          type: "lists_repeat",
        },
        {
          kind: "block",
          type: "lists_length",
        },
        {
          kind: "block",
          type: "lists_isEmpty",
        },
        {
          kind: "block",
          type: "lists_indexOf",
        },
        {
          kind: "block",
          type: "lists_getIndex",
        },
        {
          kind: "block",
          type: "lists_setIndex",
        },
        {
          kind: "block",
          type: "lists_getSublist",
        },
        {
          kind: "block",
          type: "lists_split",
        },
        {
          kind: "block",
          type: "lists_sort",
        },
      ],
    },
    {
      kind: "category",
      name: "Colour",
      contents: [
        {
          kind: "block",
          type: "colour_picker",
        },
        {
          kind: "block",
          type: "colour_random",
        },
        {
          kind: "block",
          type: "colour_rgb",
        },
        {
          kind: "block",
          type: "colour_blend",
        },
      ],
    },
    {
      kind: "category",
      name: "Variables",
      custom: "VARIABLE",
    },
    {
      kind: "category",
      name: "Functions",
      custom: "PROCEDURE",
    },
    {
      kind: "category",
      name: "Custom Email block",
      contents: [
        {
          kind: "block",
          type: "custom_email_description",
        },
      ],
    },
  ],
  customBlocks: [
    {
      kind: "block",
      type: "custom_email_description",
      message0: "Email: %1 Description: %2",
      args0: [
        {
          type: "input_value",
          name: "EMAIL",
          check: "String",
        },
        {
          type: "input_value",
          name: "DESCRIPTION",
          check: "String",
        },
      ],
      inputsInline: true,
      output: null,
      colour: 230,
      tooltip: "",
      helpUrl: "",
    },
  ],
};

// export const toolboxCategories = {
//   kind: "categoryToolbox",
//   contents: [
//     {
//       kind: "category",
//       name: "Form Variables",
//       colour: "200",
//       contents: [],
//     },
//     {
//       kind: "category",
//       name: "Number",
//       colour: "150",
//       contents: [
//         {
//           kind: "block",
//           type: "number",
//           enabled: true,
//         },
//         {
//           kind: "block",
//           type: "math",
//           enabled: true,
//         },
//         {
//           kind: "block",
//           type: "math_sqrt",
//           enabled: true,
//         },
//         {
//           kind: "block",
//           type: "math_log",
//           enabled: true,
//         },
//       ],
//     },
//     {
//       kind: "category",
//       name: "Boolean",
//       colour: "180",
//       contents: [
//         {
//           kind: "block",
//           type: "true_false",
//           enabled: true,
//         },
//         {
//           kind: "block",
//           type: "compare",
//           enabled: true,
//         },
//         {
//           kind: "block",
//           type: "boolean_log",
//           enabled: true,
//         },
//         {
//           kind: "block",
//           type: "not",
//           enabled: true,
//         },
//       ],
//     },
//     {
//       kind: "category",
//       name: "If-else",
//       colour: "300",
//       contents: [
//         {
//           kind: "block",
//           type: "if_alt",
//           enabled: true,
//         },
//       ],
//     },
//     {
//       kind: "category",
//       name: "String",
//       colour: "10",
//       contents: [
//         {
//           kind: "block",
//           type: "string",
//         },
//         {
//           kind: "block",
//           type: "catString",
//         },
//         {
//           kind: "block",
//           type: "to_string",
//         },
//         {
//           kind: "block",
//           type: "str_contains",
//         },
//         {
//           kind: "block",
//           type: "to_low_case",
//         },
//         {
//           kind: "block",
//           type: "to_up_case",
//         },
//         {
//           kind: "block",
//           type: "split",
//         },
//         {
//           kind: "block",
//           type: "str_len",
//         },
//       ],
//     },
//     {
//       kind: "category",
//       name: "Datetime",
//       colour: "50",
//       contents: [
//         {
//           kind: "block",
//           type: "datetime",
//         },
//         {
//           kind: "block",
//           type: "get_date",
//         },
//         {
//           kind: "block",
//           type: "get_time",
//         },
//         {
//           kind: "block",
//           type: "datetime_diff",
//         },
//         {
//           kind: "block",
//           type: "add_dtm_duration",
//         },
//         {
//           kind: "block",
//           type: "combine_date_time",
//         },
//         {
//           kind: "block",
//           type: "current_datetime",
//         },
//       ],
//     },
//     {
//       kind: "category",
//       name: "Array",
//       colour: "340",
//       contents: [
//         {
//           kind: "block",
//           type: "array",
//         },
//         {
//           kind: "block",
//           type: "containsStr",
//         },
//         {
//           kind: "block",
//           type: "containsFK",
//         },
//         {
//           kind: "block",
//           type: "length",
//         },
//       ],
//     },
//   ],
// };
