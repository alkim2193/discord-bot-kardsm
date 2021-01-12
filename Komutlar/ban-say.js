const Discord = require('discord.js');

exports.run = (client, message, args) => {
 let guild = message.guild;
  
   if (!message.member.hasPermission('BAN_MEMBERS'))
        return message.channel.send("**Bu Komutu Kullanabilmek İçin Üyeleri Engelle Yetkisine Sahip Olmalısın**")
  

    guild.fetchBans()
        .then(bans => message.channel.send(` > 🔐 Sunucunuzda **${bans.size}** banlanmış üye bulunmaktadır!   `))
        .catch(console.error);

}

exports.conf = {
    enabled: true,
    runIn: ["bansay"],
    aliases: ['ban-say'],
    permLevel: 0
  };

  exports.help = {
    name: "bansay",
    description: "Sunucudan banlanan kişilerin sayısını gösterir",
    usage: "bansay"
  }