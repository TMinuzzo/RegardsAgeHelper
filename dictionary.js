const Glossary = require("./glossary.js");

function matchMeaning(args) {
  let arg = args[0].toUpperCase();
  switch (arg) {
    case "MANA":
      return Glossary.General.Mana;
    /* General */
    case "MAGO":
    case "MAGOS":
    case "FEITICEIRO":
    case "FEITICEIROS":
      return Glossary.General.MageSorcerer;

    /* Plants */
    case "FLOUREN":
      return Glossary.Plants.Flouren;
    case "PERILACEA":
      return Glossary.Plants.Perilacea;
    case "HERIM":
      return Glossary.Plants.Herim;
    case "CORUS":
      return Glossary.Plants.Corus;
    case "SURINAN":
      return Glossary.Plants.Surinan;
    case "TRIGALIA":
      return Glossary.Plants.Trigalia;
    case "ORIÇUA":
    case "ORICUA":
      return Glossary.Plants.Oriçua;
    case "XASCENNE":
      return Glossary.Plants.Xascenne;
    case "FLAMINGA":
      return Glossary.Plants.Flaminga;
    case "MANDES":
      return Glossary.Plants.Mandes;
    case "ROBARA":
      return Glossary.Plants.Robara;
    case "LAZIR":
      return Glossary.Plants.Lazir;
    case "TALANUA":
      return Glossary.Plants.Talanua;
    case "KARNES":
      return Glossary.Plants.Karnes;
    case "EMILVAL":
      return Glossary.Plants.Emilval;
    case "MALANGUA":
      return Glossary.Plants.Malagua;
    case "ZORLAU":
      return Glossary.Plants.Zorlau;
    case "OPHIOCARDO":
      return Glossary.Plants.Ophiocardo;
    case "BABUIM":
      return Glossary.Plants.Babuim;
    case "HERAQUITA":
      return Glossary.Plants.Heraquita;
    case "CALICGO":
      return Glossary.Plants.Calicgo;

    /* Alchemy Potions */
    case "TRUTUM":
      return Glossary.Potions.Trutum;
    case "FALANTIS BEINGS":
      return Glossary.Potions.FalantisBeings;
    case "REVERTEK":
      return Glossary.Potions.Revertek;
    case "RADARIS":
      return Glossary.Potions.Radaris;
    case "GETRIQUIS":
      return Glossary.Potions.Getriquis;
    case "LYTOGROW":
      return Glossary.Potions.Lytogrow;
    case "TRANSMOG":
      return Glossary.Potions.Transmog;
    case "BURBLAN":
      return Glossary.Potions.Burblam;
    case "PYROTIC":
      return Glossary.Potions.Pyrotic;
    case "SULFRIC":
      return Glossary.Potions.Sulfric;
    case "UNMORTALIS":
      return Glossary.Potions.Unmortalis;
    case "OILIS":
      return Glossary.Potions.Oilis;
    case "HEALING POTION":
      return Glossary.Potions.HealingPotion;
    case "HUMANTRI":
      return Glossary.Potions.Humantri;
    default:
      return "Nome não reconhecido.";
  }
}

module.exports = matchMeaning;
