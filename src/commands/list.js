const utils = require("../utils");
const glossary = require("../glossary.js");

function list(args) {
  let normalizedArgs = args.map((arg) => utils.normalizeWord(arg));
  console.log("normalized", normalizedArgs)

  // TODO: Create a -d option that returns the attributes and description
  // list civilizações
  // list feitiços/spells/magias
  //  - List all school spells: Geral, musical, druidico, conjuracao, runico, encantamento
  let msgReturn = {
    title: null,
    content: null,
    textInitial: null,
    textFinal:
      "Para saber mais sobre algum deles, use o dicionário! 📖 \n `!dict <nome_da_verbete>` \n Você também pode usar a opção -d para obter mais detalhes: `!list -d <verbete>`",
  };
  switch (normalizedArgs[0]) {
    case "atributo":
    case "atributos":
      let attributes = glossary.Attributes;
      attributes = Object.keys(attributes);
      console.log(attributes)
      msgReturn = {
        title: "Atributos",
        content: attributes,
        textInitial: "Existem 11 atributos presentes no universo do Regards Age:",
        textFinal: msgReturn.textFinal,
      };
      return msgReturn;
    case "racas":
    case "raca":
      let racas = glossary.Races;
      racas = Object.keys(racas);
      msgReturn = {
        title: "Raças",
        content: racas,
        textInitial: "Existem 10 raças presentes no universo do Regards Age:",
        textFinal: msgReturn.textFinal,
      };
      return msgReturn;
    case "plantas":
    case "planta":
      let plantas = glossary.Plants;
      plantas = Object.keys(plantas);
      msgReturn = {
        title: "Plantas",
        content: plantas,
        textInitial: "Existem muitas plantas presentes no universo do Regards Age:",
        textFinal: msgReturn.textFinal,
      };
      return msgReturn;
    case "pocoes":
    case "pocoes":
      let pocoes = glossary.Potions;
      pocoes = Object.keys(pocoes);
      msgReturn = {
        title: "Poções",
        content: pocoes,
        textInitial: "Existem muitas poções presentes no universo do Regards Age:",
        textFinal: msgReturn.textFinal,
      };
      return msgReturn;
    case "feitico":
    case "feiticos":
    case "magias":
    case "magia":
      let spells = ['Feitiços Gerais', 'Escola Musical', 'Escola Druídica', 'Escola de Conjuração', 'Escola Rúnica', 'Escola de Encantamento' ]
      msgReturn = {
        title: "Feitiços - Magia Arcana",
        content: spells,
        textInitial: "No universo do Regards Age, existem  **6 escolas de magias arcanas** \nTodas elas possuem feitiços em 3 categorias: **Nível Iniciante, Avançado e Arquimago **",
        textFinal: msgReturn.textFinal,
      };
      return msgReturn;
    default:
      return "not identified";
  }
}

module.exports = list;
