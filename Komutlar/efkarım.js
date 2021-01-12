const Discord = require("discord.js");

exports.run = (client, message) => {

const EsatSan = Math.floor(Math.random() * 100) + 1;

return message.channel.send(`**EsatSan** \n**Efkarınız:** **%${EsatSan}** **Efkar** `);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "efkarım",
  description: "EsatSan | Efkarınızı ölçer",
  usage: "efkar Ölçer"
};
