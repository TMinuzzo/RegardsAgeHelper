const Glossary = require("./glossary.js");

function matchMeaning(args) {
  let arg = args[0].toLowerCase();
  switch (arg) {
    case "mana":
      return Glossary.Mana;
  }
}

module.exports = matchMeaning;
