const Discord = require("discord.js");

require("dotenv").config();

//TODO: change the URL images to 	.attachFiles(['../assets/discordjs.png'])
//	.setImage('attachment://discordjs.png');

/* External files */
const matchMeaning = require("./commands/dictionary.js");
const list = require("./commands/list.js");

const client = new Discord.Client();
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on("message", (msg) => {
  if (msg.content.substring(0, 1) == "!") {
    let args = msg.content.substring(1).split(" ");
    let cmd = args[0];
    args = args.splice(1);
    let msgEmbed = new Discord.MessageEmbed();

    //console.log("msg", msg);
    if (cmd === "dict") {
      let response = matchMeaning(args);
      if (response.img) {
        // here we have a text with an image
        msgEmbed.setImage(response.img);
        msg.channel
          .send(response.text, msgEmbed)
          .then(() => console.log(`Sent a reply to ${msg.author.username}`))
          .catch(console.error);
      } else {
        // here we have just a text
        msg.channel
          .send(response)
          .then(() => console.log(`Sent a reply to ${msg.author.username}`))
          .catch(console.error);
      }
    }
    if (cmd === "list") {
      // list atributos
      // list raças
      // list civilizações
      // list feitiços/spells/magias
      //  - List all school spells: Geral, musical, druidico, conjuracao, runico, encantamento
      // list plantas
      // list pocoes/alquimia
      let response = list(args);
      msgEmbed.setTitle(response.title);
      msgEmbed.setColor("#0099ff");
      msgEmbed.addField(response.textInitial, response.content);
      msgEmbed.addField("Precisa de ajuda? ", response.textFinal);
      //msgEmbed.setDescription(response.content);

      msg.channel
        .send(msgEmbed)
        .then(() => console.log(`Sent a reply to ${msg.author.username}`))
        .catch(console.error);
    }
    if (cmd === "help") {
      let msgEmbed = new Discord.MessageEmbed();
      msgEmbed.setTitle("Bem vindo ao RegardsAgeHelper!");
      msgEmbed.setDescription("descreva o que quer fazer");
      msg.channel.send(msgEmbed);
    }

    if (msg.content === "!ping") {
      msg.channel.send("teste", msgEmbed);
      msg.reply("Pong!");
    }
  }
});
client.login(process.env.BOT_TOKEN);
