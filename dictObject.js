const Glossary = require("./glossary.js");
const Images = require("./images.js");

const dictObj = {
  /* General */
  MANA: Glossary.General.Mana,
  MAGO: Glossary.General.MageSorcerer,
  GEMAS: Glossary.General.Gemas,

  /* Attributes */
  CONSTITUICAO: Glossary.Attributes.Constituicao,
  FORCA: Glossary.Attributes.Forca,
  DESTREZA: Glossary.Attributes.Destreza,
  ESQUIVA: Glossary.Attributes.Esquiva,
  PODER_MAGICO: Glossary.Attributes.PoderMagico,
  MANIPULACAO_MAGICA: Glossary.Attributes.ManipulacaoMagica,
  CAUTELA: Glossary.Attributes.Cautela,
  PERSPICACIA: Glossary.Attributes.Perspicacia,
  DISCRICAO: Glossary.Attributes.Discricao,
  EXTRAVAGANCIA: Glossary.Attributes.Extravagancia,
  RESILIENCIA: Glossary.Attributes.Resiliencia,

  /* Races */
  HUMANO: {
    text: Glossary.Races.Humano,
    img: Images.Races.HumanoSulista
  },
  ORC: {
    text: Glossary.Races.Orc,
    img: Images.Races.Orc
  },
  LIZARDIO: {
    text: Glossary.Races.Lizardio,
    img: Images.Races.Lizardio
  },
  UNDERALL: Glossary.Races.Underall,
  TELNO: {
    text: Glossary.Races.Telno,
    img: Images.Races.Telno
  },

  /* Civilizations */
  NORDICO: Glossary.Civilizations.Nordico,
  SULISTA: Glossary.Civilizations.Sulista,
  ZARDIENENSE: Glossary.Civilizations.Zardienense,
  GARNAK: Glossary.Civilizations.Garnak,
  BOTHRA: Glossary.Civilizations.Bothra,
  VUL_NES_MAI: Glossary.Civilizations.VulNesMai,
  WORT_HEM: Glossary.Civilizations.WortHem,
  DRUKAM: Glossary.Civilizations.Drukan,

  /* General Spells - Starter Level*/
  TELECINESE: Glossary.GeneralSpells.Starter.Telecinese,
  REPULSAO: Glossary.GeneralSpells.Starter.Repulsao,
  CAMINHAR_NA_AGUA: Glossary.GeneralSpells.Starter.CaminharNaAgua,
  TELEPATIA: Glossary.GeneralSpells.Starter.Telepatia,
  CLARIVIDENCIA: Glossary.GeneralSpells.Starter.Clarividencia,
  CLEPTOMANCIA: Glossary.GeneralSpells.Starter.Cleptomania,
  EXPLORAR_PENSAMENTOS: Glossary.GeneralSpells.Starter.ExplorarPensamentos,

  /* General Spells - Advances Level */
  IMPLOSAO_ESPACIAL: Glossary.GeneralSpells.Advanced.ImplosaoEspacial,
  AURA_DE_ENERGIA: Glossary.GeneralSpells.Advanced.AuraDeEnergia,
  CHUVA_DE_DESTRUICAO: Glossary.GeneralSpells.Advanced.ChuvaDeDestruicao,
  FORCA_ATRATIVA: Glossary.GeneralSpells.Advanced.ForcaAtrativa,
  CONTRA_FEITICO: Glossary.GeneralSpells.Advanced.ContraFeitico,
  EMARANHADO_MAGICO: Glossary.GeneralSpells.Advanced.EmaranhadoMagico,
  DESPRENDER_ESPIRITO: Glossary.GeneralSpells.Advanced.DesprenderEspirito,
  FLUXO_DE_MANA: Glossary.GeneralSpells.Advanced.FluxoDeMana,

  /* General Spells - Archmage Level */
  ARENA_INTERDIMENSIONAL: Glossary.GeneralSpells.Archmage.ArenaInterdimensional,
  ELETROCUTAR: Glossary.GeneralSpells.Archmage.Eletrocutar,

  /* Plants */
  FLOUREN: Glossary.Plants.Flouren,
  PERILACEA: Glossary.Plants.Perilacea,
  HERIM: Glossary.Plants.Herim,
  CORUS: Glossary.Plants.Corus,
  SURINAN: Glossary.Plants.Surinan,
  TRIGALIA: Glossary.Plants.Trigalia,
  ORICUA: Glossary.Plants.Oriçua,
  XASCENNE: Glossary.Plants.Xascenne,
  FLAMINGA: Glossary.Plants.Flaminga,
  MANDES: Glossary.Plants.Mandes,
  ROBARA: Glossary.Plants.Robara,
  LAZIR: Glossary.Plants.Lazir,
  TALANUA: Glossary.Plants.Talanua,
  KARNES: Glossary.Plants.Karnes,
  EMILVAL: Glossary.Plants.Emilval,
  MALANGUA: Glossary.Plants.Malagua,
  ZORLAU: Glossary.Plants.Zorlau,
  OPHIOCARDO: Glossary.Plants.Ophiocardo,
  BABUIM: Glossary.Plants.Babuim,
  HERAQUITA: Glossary.Plants.Heraquita,
  CALICGO: Glossary.Plants.Calicgo,

  /* Alchemy Potions */
  TRUTUM: Glossary.Potions.Trutum,
  FALANTIS_BEINGS: Glossary.Potions.FalantisBeings,
  REVERTEK: Glossary.Potions.Revertek,
  RADARIS: Glossary.Potions.Radaris,
  GETRIQUIS: Glossary.Potions.Getriquis,
  LYTOGROW: Glossary.Potions.Lytogrow,
  TRANSMOG: Glossary.Potions.Transmog,
  BURBLAN: Glossary.Potions.Burblam,
  PYROTIC: Glossary.Potions.Pyrotic,
  SULFRIC: Glossary.Potions.Sulfric,
  UNMORTALIS: Glossary.Potions.Unmortalis,
  OILIS: Glossary.Potions.Oilis,
  HEALING_POTION: Glossary.Potions.HealingPotion,
  HUMANTRI: Glossary.Potions.Humantri
};

module.exports = dictObj;
