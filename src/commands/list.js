const utils = require("../utils");
const dictObj = require("../dictObject.js");
const glossary = require("../glossary.js");

function list(args) {
  let normalizedArgs = args.map((arg) => utils.normalizeWord(arg));

  switch (args[0]) {
    case "atributo":
    case "atributos":
      let attributes = glossary.Attributes;
      attributes = Object.keys(attributes);
      let msgReturn = {
        title: "Atributos",
        content: attributes,
        textInitial: "Existem 11 atributos presentes no universo do Regards Age:",
        textFinal: "Para saber mais sobre algum deles, use o dicionário! 📖 \n !dict <nomeDaVerbete>",
      };
      return msgReturn;
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
