const Glossary = require("./glossary.js");
const Images = require("./images");

//TODO: remover acentos das palavras
//TODO: estudar predição de erros
//TODO: include civilizations
//TODO: fix messages bigger than 2000
function matchMeaning(args) {
  let arg = args.join(" ").toUpperCase();
  let message;

  switch (arg) {
    case "MANA":
      return Glossary.General.Mana;
    /* General */
    case "MAGO":
    case "MAGOS":
    case "FEITICEIRO":
    case "FEITICEIROS":
      return Glossary.General.MageSorcerer;
    case "GEMAS":
      return Glossary.General.Gemas;

    /* Attributes */
    case "CONSTITUICAO":
    case "CONSTITUIÇAO":
      return Glossary.Attributes.Constituicao;
    case "FORCA":
    case "FORÇA":
      return Glossary.Attributes.Forca;
    case "DESTREZA":
      return Glossary.Attributes.Destreza;
    case "ESQUIVA":
      return Glossary.Attributes.Esquiva;
    case "PODER MAGICO":
      return Glossary.Attributes.PoderMagico;
    case "MANIPULACAO MAGICA":
    case "MANIPULAÇAO MAGICA":
      return Glossary.Attributes.ManipulacaoMagica;
    case "CAUTELA":
      return Glossary.Attributes.Cautela;
    case "PERSPICACIA":
      return Glossary.Attributes.Perspicacia;
    case "DISCRICAO":
    case "DISCRIÇAO":
      return Glossary.Attributes.Discricao;
    case "EXTRAVAGANCIA":
      return Glossary.Attributes.Extravagancia;
    case "RESILIENCIA":
      return Glossary.Attributes.Resiliencia;

    /* Races */
    case "HUMANO":
      message = {
        text: Glossary.Races.Humano,
        img: Images.Races.HumanoSulista
      };
      return message;
    case "ORC":
      message = {
        text: Glossary.Races.Orc,
        img: Images.Races.Orc
      };
      return message;
    case "LIZARDIO":
      message = {
        text: Glossary.Races.Lizardio,
        img: Images.Races.Lizardio
      };
      return message;
    case "UNDERALL":
      return Glossary.Races.Underall;
    case "TELNO":
      message = {
        text: Glossary.Races.Telno,
        img: Images.Races.Telno
      };
      return message;

    /* Civilizations */
    case "NORDICO":
      return Glossary.Civilizations.Nordico;
    case "SULISTA":
      return Glossary.Civilizations.Sulista;
    case "ZARDIENENSE":
      return Glossary.Civilizations.Zardienense;
    case "GARNAK":
      return Glossary.Civilizations.Garnak;
    case "BOTHRA":
      return Glossary.Civilizations.Bothra;
    case "VUL NES MAI":
      return Glossary.Civilizations.VulNesMai;
    case "WORT HEM":
      return Glossary.Civilizations.WortHem;
    case "DRUKAM":
      return Glossary.Civilizations.Drukan;

    /* General Spells - Starter Level*/
    case "TELECINESE":
      return Glossary.GeneralSpells.Starter.Telecinese;
    case "REPULSAO":
      return Glossary.GeneralSpells.Starter.Repulsao;
    case "CAMINHAR NA AGUA":
      return Glossary.GeneralSpells.Starter.CaminharNaAgua;
    case "TELEPATIA":
      return Glossary.GeneralSpells.Starter.Telepatia;
    case "CLARIVIDENCIA":
      return Glossary.GeneralSpells.Starter.Clarividencia;
    case "CLEPTOMANCIA":
      return Glossary.GeneralSpells.Starter.Cleptomania;
    case "EXPLORAR PENSAMENTOS":
      return Glossary.GeneralSpells.Starter.ExplorarPensamentos;

    /* General Spells - Advances Level */

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
