const Discord = require("discord.js");

require("dotenv").config();

/* External files */
const Glossary = require("./glossary.js");
const matchMeaning = require("./dictionary.js");

const client = new Discord.Client();
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on("message", msg => {
  if (msg.content.substring(0, 1) == "!") {
    let args = msg.content.substring(1).split(" ");
    let cmd = args[0]; // get the command (first word)
    args = args.splice(1); // get every args after the command into a list

    if (cmd === "dict") {
      let response = matchMeaning(args);
      msg
        .reply(response)
        .then(() => console.log(`Sent a reply to ${msg.author.username}`))
        .catch(console.error);
    }
    if (msg.content === "ping") {
      msg.reply("Pong!");
    }
  }
});
client.login(process.env.BOT_TOKEN);

//dict mana
