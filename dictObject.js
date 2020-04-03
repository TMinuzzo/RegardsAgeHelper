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
    img: Images.Races.HumanoSulista,
  },
  ORC: {
    text: Glossary.Races.Orc,
    img: Images.Races.Orc,
  },
  LIZARDIO: {
    text: Glossary.Races.Lizardio,
    img: Images.Races.Lizardio,
  },
  UNDERALL: Glossary.Races.Underall,
  TELNO: {
    text: Glossary.Races.Telno,
    img: Images.Races.Telno,
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

  /* Musical Spells - Starter Spells */
  DIRECIONAR_SONS: Glossary.MusicalSpells.Starter.DirecionarSons,
  MUSICA_PROFUNDA: Glossary.MusicalSpells.Starter.MusicaProfunda,
  CORDAS_HIPNOTICAS: Glossary.MusicalSpells.Starter.CordasHipnoticas,
  VIBRACAO_MUSICAL: Glossary.MusicalSpells.Starter.VibracaoMusical,
  CANCAO_INSPIRADORA: Glossary.MusicalSpells.StParter.CancaoInspiradora,
  RITMO_DESCONTROLADO: Glossary.MusicalSpells.Starter.RitmoDescontrolado,
  HARMONIA_TRANQUILIZADORA: Glossary.MusicalSpells.Starter.HarmoniaTranquilizadora,

  /* Musical Spells - Advanced Level */
  SINFONIA_DA_VERDADE: Glossary.MusicalSpells.Advanced.SinfoniaDaVerdade,
  MELODIA_SELVAGEM: Glossary.MusicalSpells.Advanced.MelodiaSelvagem,
  TOCAR_O_TERROR: Glossary.MusicalSpells.Advanced.TocarOTerror,
  MUSICA_DO_SOCORRO: Glossary.MusicalSpells.Advanced.MusicaDoSocorro,
  CORDAS_MAGICAS: Glossary.MusicalSpells.Advanced.CordasMagicas,

  /* Musical Spells - Archmage Level */
  ORQUESTRA_DO_VENTRILOCO: Glossary.MusicalSpells.Archmage.OrquestraDoVentriloco,
  BRACOS_OITAVOS: Glossary.MusicalSpells.Archmage.BracosOitavos,

  /* Druidic Spells - Starter Spells */
  CONEXAO_DRUIDICA: Glossary.DruidicSpells.Starter.DruidicSpells,
  FAMILIAR: Glossary.DruidicSpells.Starter.Familiar,
  FORTALECER_NATUREZA: Glossary.DruidicSpells.Starter.FortalecerNatureza,
  PACIFICAR: Glossary.DruidicSpells.Starter.Pacificar,
  EXPOR_FRAQUEZA: Glossary.DruidicSpells.Starter.ExporFraqueza,
  COMUNICACAO_SELVAGEM: Glossary.DruidicSpells.Starter.ComunicacaoSelvagem,

  /* Druidic Spells - Advances Spells */
  AGUCAR_VISAO: Glossary.DruidicSpells.Advanced.AgucarVisao,
  AGUCAR_AUDICAO: Glossary.DruidicSpells.Advanced.AgucarAudicao,
  AGUCAR_OLFATO: Glossary.DruidicSpells.Advanced.AgucarOlfato,
  POSTURA_ANIMAL: Glossary.DruidicSpells.Advanced.PosturaAnimal,
  ALMAS_GEMEAS: Glossary.DruidicSpells.Advanced.AlmasGemeas,
  METAMORFOSE_FAMILIAR: Glossary.DruidicSpells.Advanced.MetamorfoseFamiliar,

  /* Druidic Spells - Archmage Spells */
  METAMORFOSE_DRUIDICA: Glossary.DruidicSpells.Archmage.MetamorfoseDruidica,
  POSSESSAO: Glossary.DruidicSpells.Archmage.Possessao,

  /* Conjuration Spells - Starter Spells */
  CONJURACAO_BASICA: Glossary.ConjurationSpells.Starter.ConjuracaoBasica,
  BARREIRA_ARCANA: Glossary.ConjurationSpells.Starter.BarreiraArcana,
  LANCA_ARCANA: Glossary.ConjurationSpells.Starter.LancaArcana,
  PROJETIL_ARCANO: Glossary.ConjurationSpells.Starter.ProjetilArcano,
  REPULSAO_LOCALIZADA: Glossary.ConjurationSpells.Starter.RepulsaoLocalizada,
  ORBE_DE_MANA: Glossary.ConjurationSpells.Starter.OrbeDeMana,
  ALGEMAS_DE_CONTENCAO: Glossary.ConjurationSpells.Starter.AlgemasDeContencao,

  /* Conjuration Spells - Advanced Spells */
  CONJURACAO_AVANCADA: Glossary.ConjurationSpells.Advanced.ConjuracaoAvancada,
  DUPLICAR: Glossary.ConjurationSpells.Advanced.Duplicar,
  DUPLO_IMPACTO: Glossary.ConjurationSpells.Advanced.DuploImpacto,
  CLONAGEM_DE_PROJETEIS: Glossary.ConjurationSpells.Advanced.ClonagemDeProjeteis,
  ARMADURA_DE_ARCANO: Glossary.ConjurationSpells.Advanced.ArmaduraDeArcano,
  PORTAL_MAGICO: Glossary.ConjurationSpells.Advanced.PortalMagico,
  MANTO_ARCANO: Glossary.ConjurationSpells.Advanced.MantoArcano,

  /* Conjuration Spells - Archmage Spells */
  MANIPULACAO_MAXIMA_CONJURACAO: Glossary.ConjurationSpells.Archmage.ManipulacaoMaximaConjuracao,
  INVOCAR_GOLEM: Glossary.ConjurationSpells.Archmage.InvocarGolem,

  /* Runic Spells - Starter Spells */
  TINTA_ARCANA: Glossary.RunicSpells.Starter.TintaArcana,
  PAREDE_MAGICA: Glossary.RunicSpells.Starter.ParedeMagica,
  ARMADILHA_ATRACAO: Glossary.RunicSpells.Starter.ArmadilhaAtracao,
  CONEXAO_INVISIVEL: Glossary.RunicSpells.Starter.ConexaoInvisivel,
  RUNA_GPS: Glossary.RunicSpells.Starter.RunaGps,
  SENTINELA: Glossary.RunicSpells.Starter.Sentinela,
  AURA_DE_EXPURGACAO: Glossary.RunicSpells.Starter.AuraDeExpurgacao,
  SELO_DE_FECHADURAS: Glossary.RunicSpells.Starter.SeloDeFechaduras,

  /* Runic Spells - Advanced Spells */
  RUNA_DE_FORTALECIMENTO: Glossary.RunicSpells.Advanced.RunaDeFortalecimento,
  RUNA_DE_FRAGILIDADE: Glossary.RunicSpells.Advanced.RunaDeFragilidade,
  EXTRACAO_ARCANA: Glossary.RunicSpells.Advanced.ExtracaoArcana,
  RITUAL_DE_SELAMENTO: Glossary.RunicSpells.Advanced.RitualDeSelamento,
  ARMADILHA_LAMINA: Glossary.RunicSpells.Advanced.ArmadilhaLamina,
  ARMADILHA_EXPLOSAO: Glossary.RunicSpells.Advanced.ArmadilhaExplosao,
  PROJECAO_ASTRAL: Glossary.RunicSpells.Advanced.ProjecaoAstral,

  /* Runic Spells - Archmage Spells */
  RUNA_DE_PROTECAO: Glossary.RunicSpells.Archmage.RunaDeProtecao,
  PORTAL_DE_RUNAS: Glossary.RunicSpells.Archmage.PortalDeRunas,

  /* Enchantment Spells - Starter Spells */
  ENGRANDECER: Glossary.EnchantmentSpells.Starter.Engrandecer,
  SELAMENTO_DE_PORTAL: Glossary.EnchantmentSpells.Starter.SelamentoDePortal,
  MALDICAO_AZAR: Glossary.EnchantmentSpells.Starter.MaldicaoAzar,
  MALDICAO_ANTISSOCIAL: Glossary.EnchantmentSpells.Starter.MaldicaoAntissocial,
  MALDICAO_INSONIA: Glossary.EnchantmentSpells.Starter.Maldicaoinsonia,
  MALDICAO_MENTE_POBRE: Glossary.EnchantmentSpells.Starter.MaldicaoMentePobre,
  SEDUCAO: Glossary.EnchantmentSpells.Starter.Seducao,
  RAIO_DESGOURMETIZADOR: Glossary.EnchantmentSpells.Starter.RaioDesgourmetizador,
  ELASTICAR: Glossary.EnchantmentSpells.Starter.Elasticar,
  MALDICAO_PARANOIA: Glossary.EnchantmentSpells.Starter.MaldicaoParanoia,
  MALDICAO_ANALFABETISMO: Glossary.EnchantmentSpells.Starter.MaldicaoAnalfabetismo,

  /* Enchantment Spells - Advances Spells */
  ENFEITICAR: Glossary.EnchantmentSpells.Advanced.Enfeiticar,
  MALDICAO_EXAUSTAO: Glossary.EnchantmentSpells.Advanced.MaldicaoExaustao,
  MALDICAO_TROCA_DE_SEXO: Glossary.EnchantmentSpells.Advanced.MaldicaoTrocaDeSexo,
  PACTO_COMPARTILHAR_SENTIMENTOS: Glossary.EnchantmentSpells.Advanced.PactoCompartilharSentimentos,
  GRAVIDADE_DINAMICA: Glossary.EnchantmentSpells.Advanced.GravidadeDinamica,
  TORNAR_ETEREO: Glossary.EnchantmentSpells.Advanced.TornarEtereo,
  PACTO_TROCA_DE_CORPO: Glossary.EnchantmentSpells.Advanced.PactoTrocaDeCorpo,
  ULTIMO_SUSPIRO: Glossary.EnchantmentSpells.Advanced.UltimoSuspiro,

  /* Enchantment Spells - Archmage Spells */
  DESACELERACAO_TEMPORAL: Glossary.EnchantmentSpells.Archmage.DesaceleracaoTemporal,
  ATORMENTAR_PENSAMENTOS: Glossary.EnchantmentSpells.Archmage.AtormentarPensamentos,
  ACAO_INVOLUNTARIA: Glossary.EnchantmentSpells.Archmage.AcaoInvoluntaria,

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
  HUMANTRI: Glossary.Potions.Humantri,
};

module.exports = dictObj;
