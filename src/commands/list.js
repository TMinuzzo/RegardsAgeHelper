const utils = require("../utils");
const dictObj = require("../dictObject.js");
const glossary = require("../glossary.js");

function list(args) {
  let normalizedArgs = args.map((arg) => utils.normalizeWord(arg));

  switch (args[0]) {
    case "atributo":
    case "atributos":
      let attributes = glossary.Attributes;
      console.log("attributes", attributes);
      break;
    case "feitico":
    case "feiticos":
    case "magias":
    case "magia":
      console.log("Testing feitiço/magia");
      break;
    default:
      return "not identified";
  }
}

module.exports = list;
