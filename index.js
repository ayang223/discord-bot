const Discord = require("discord.js");
const client = new Discord.Client();
const CronJob = require("cron").CronJob;

const channelId = "";
const roleId = "";
const token = ''

const sendMsg =() => {
  client.channels.cache
    .get(channelId)
    .send(`<@&${roleId}>`);
}

// cron job for 9:15pm 
const scheduledMessage  = new CronJob("15 21 * * *", sendMsg);

client.on("ready", () => {
  console.log("ready");
  scheduledMessage .start();
});

client.login(token);
