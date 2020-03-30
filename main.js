const Discord = require("discord.js");

require("dotenv").config();

/* External files */
const matchMeaning = require("./dictionary.js");

const client = new Discord.Client();
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on("message", msg => {
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
    if (msg.content === "!ping") {
      msg.channel.send("teste", msgEmbed);
      msg.reply("Pong!");
    }
  }
});
client.login(process.env.BOT_TOKEN);
