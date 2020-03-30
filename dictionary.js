const Glossary = require("./glossary.js");
const Images = require("./images");

//TODO: remover acentos das palavras
//TODO: estudar predição de erros
function matchMeaning(args) {
  let arg = args.join(" ").toUpperCase();
  switch (arg) {
    case "MANA":
      return Glossary.General.Mana;
    /* General */
    case "MAGO":
    case "MAGOS":
    case "FEITICEIRO":
    case "FEITICEIROS":
      return Glossary.General.MageSorcerer;

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
      const message = {
        text: Glossary.Races.Humano,
        img: Images.Races.HumanoSulista
      };
      return message;
    case "ORC":
      return Glossary.Races.Orc;
    case "LIZARDIO":
      return Glossary.Races.Lizardio;
    case "UNDERALL":
      return Glossary.Races.Underall;
    case "TELNO":
      return Glossary.Races.Telno;

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
