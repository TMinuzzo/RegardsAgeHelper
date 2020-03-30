const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("Pong!");
  }
});
client.login("Njk0MTk4NjgzMjMwNTM1NzIx.XoIJNQ.uEZdG--o6Z3fqlhFee_JVU_s_ZQ");
