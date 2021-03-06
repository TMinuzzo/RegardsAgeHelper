const Discord = require("discord.js");

require("dotenv").config();

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
        //msgEmbed.setImage(response.img);
        msgEmbed.attachFiles(response.img);
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
      let response = list(args);
      msgEmbed.setTitle(response.title);
      msgEmbed.setColor("#ff0000");
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
      msgEmbed.setDescription("O comando `list` pode ser usado para listar verbetes, como feitiços, raças, etc. \n O comando `dict` pode ser usado para verificar uma definição.");
      msgEmbed.addField("list", "Digite `!list <nome_do_conjunto>` para obter listas. Ou `!list -d <nome_do_conjunto>` para listas detalhadas.\n Exemplo: `!list POÇÕES`");
      msgEmbed.addField("dict", "Digite `!dict <nome_da_verbete>` para uma definição e/ou imagens. \n Exemplo: `!dict TRUTUM`");
      msgEmbed.setColor("#ff0000");
      msg.channel.send(msgEmbed);
    }

    if (msg.content === "!ping") {
      msg.channel.send("teste", msgEmbed);
      msg.reply("Pong!");
    }
  }
});
client.login(process.env.BOT_TOKEN);
