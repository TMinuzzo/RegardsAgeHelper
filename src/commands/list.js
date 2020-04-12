const utils = require("../utils");
const dictObj = require("../dictObject.js");
const glossary = require("../glossary.js");

function list(args) {
  let normalizedArgs = args.map((arg) => utils.normalizeWord(arg));

  // TODO: Create a -d option that returns the attributes and description
  // list atributos
  // list raças
  // list civilizações
  // list feitiços/spells/magias
  //  - List all school spells: Geral, musical, druidico, conjuracao, runico, encantamento
  // list plantas
  // list pocoes/alquimia
  let msgReturn = {
    title: null,
    content: null,
    textInitial: null,
    textFinal:
      "Para saber mais sobre algum deles, use o dicionário! 📖 \n !dict <nomeDaVerbete> \n Você também pode usar a opção -d para obter mais detalhes: !list -d <verbete>",
  };
  switch (normalizedArgs[0]) {
    case "atributo":
    case "atributos":
      let attributes = glossary.Attributes;
      attributes = Object.keys(attributes);
      msgReturn = {
        title: "Atributos",
        content: attributes,
        textInitial: "Existem 11 atributos presentes no universo do Regards Age:",
        textFinal: msgReturn.textFinal,
      };
      return msgReturn;
    case "racas":
      let racas = glossary.Races;
      races = Object.keys(racas);
      msgReturn = {
        title: "Raças",
        content: racas,
        textInitial: "Existem 10 raças presentes no universo do Regards Age:",
        textFinal: msgReturn.textFinal,
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
